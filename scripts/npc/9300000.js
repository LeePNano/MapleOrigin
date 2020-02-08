var status = 0;

function start() {
    if (cm.getPlayer().getRaid() != null) {
        cm.sendYesNo("Do you have what it takes to take on Empress Cygnus?");
    } else {
        cm.sendOk("Please create a Raid using @Raid along with a total of 6 members.");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 1) {
        var em = cm.getEventManager("Tower_Battle");
        if (em != null) {
            if (cm.getPlayer().getRaid() != null) {
                if (!cm.getPlayer().isRaidLeader()) {
                    cm.sendOk("The leader of the Raid must be the to talk to me about joining the event.");
                    cm.dispose();
                } else {
                    var eli = em.getEligibleRaidSrc(cm.getPlayer().getRaid(), cm.getPlayer().getMapId(), 200, 255, 1, 40);
                    if (eli.size() > 0) {
                        if (!em.startPlayerInstance(cm.getPlayer(), 1)) {
                            cm.sendOk("Someone is already attempting the PQ or your instance is currently being reset. Try again in few seconds.");
                        }
                    } 
					else {
                        cm.sendOk("You cannot start this Raid quest yet, because either your Raid is not in the range size, some of your Raid members are not eligible to attempt it or they are not in this map. Minimum requirements are: Level 200+, 6+ Raid members.");
                    }
                }
            } else {
                cm.sendOk("Raid Boss Only: Create a Raid with 6+ members at lvl 200+ to join this battle.");
            }
        } else {
            cm.sendOk("Event has already started, Please wait.");
            cm.dispose();
        }
        cm.dispose();
    }
}

/*

//needs cm.playerHasEntriesLeftForEmpress()
//needs MapleExpeditionType.EMPRESS

importPackage(Packages.server.expeditions);
importPackage(Packages.tools);
importPackage(Packages.scripting.event);

var status = 0;
var expedition;
var player;
var em;
var exped = MapleExpeditionType.EMPRESS;
var expedName = "Empress";
var expedBoss = "Cygnus";
var expedMap = "Empress Battle";
var expedItem = 4000313;



var list = "What would you like to do?#b\r\n\r\n#L1#View current Expedition members#l\r\n#L2#Start the fight!#l\r\n#L3#Stop the expedition.#l";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {

    player = cm.getPlayer();
    expedition = cm.getExpedition(exped);
    em = cm.getEventManager("EmpressBattle");

    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }

        if (status == 0) {
            if (player.getLevel() < exped.getMinLevel() && player.getLevel() > exped.getMaxLevel()) { //Don't fit requirement
                cm.sendOk("You do not meet the criteria to battle " + expedBoss + "!");
                cm.dispose();
            } else if (expedition == null) { //Start an expedition
                var entryCheck = cm.playerHasEntriesLeftForEmpress(player);
                if (entryCheck === 1) {
                    cm.sendOk("Sorry, I can't let you in. You have run out of entries for today.");
                    cm.dispose();
                    return;
                } else if (entryCheck > 1) {
                    cm.sendOk("That's strange... I can't access your boss entries. If the problem persists, contact my bosses, the GMs.");
                    cm.dispose();
                    return;
                }
                cm.sendSimple("#e#b<Expedition: " + expedName + ">\r\n#k#n" + em.getProperty("party") + "\r\n\r\nWould you like to assemble a team to take on #r" + expedBoss + "#k?\r\n#b#L1#Lets get this going!#l\r\n\#L2#No, I think I'll wait a bit...#l");
                status = 1;
            } else if (expedition.isLeader(player)) { //If you're the leader, manage the exped
                cm.sendSimple(list);
                status = 2;
            } else if (expedition.isRegistering()) { //If the expedition is registering
                if (expedition.contains(player)) { //If you're in it but it hasn't started, be patient
                    cm.sendOk("You have already registered for the expedition. Please wait for #r" + expedition.getLeader().getName() + "#k to begin the expedition.");
                    cm.dispose();
                } else { //If you aren't in it, you're going to get added
                    var entryCheck = cm.playerHasEntriesLeftForEmpress(player);
                    if (entryCheck === 1) {
                        cm.sendOk("Sorry, I can't let you in. You have run out of entries for today.");
                        cm.dispose();
                        return;
                    } else if (entryCheck > 1) {
                        cm.sendOk("That's strange... I can't access your boss entries. If the problem persists, contact my bosses, the GMs.");
                        cm.dispose();
                        return;
                    }
                    cm.sendOk(expedition.addMember(cm.getPlayer()));
                    cm.dispose();
                }
            } else if (expedition.isInProgress()) { //Only if the expedition is in progress
                if (expedition.contains(player)) { //If you're registered, warp you in
                    var eim = em.getInstance(expedName + player.getClient().getChannel());
                    if(eim.getIntProperty("canJoin") == 1) {
                        eim.registerPlayer(player);
                    } else {
                        cm.sendOk("Your expedition already started the battle against " + expedBoss + ". Lets pray for those brave souls.");
                    }
                    
                    cm.dispose();
                } else { //If you're not in by now, tough luck
                    cm.sendOk("Another expedition has taken the initiative to challenge " + expedBoss + ", lets pray for those brave souls.");
                    cm.dispose();
                }
            }
        } else if (status == 1) {
            if (selection == 1) {
                if (!cm.haveItem(expedItem)) {
                    cm.sendOk("As the expedition leader, you must have on your inventory a #b#t" + expedItem + "##k to battle " + expedBoss + "!");
                    cm.dispose();
                    return;
                }
                
                expedition = cm.getExpedition(exped);
                if(expedition != null) {
                    cm.sendOk("Someone already taken the initiative to be the leader of the expedition. Try joining them!");
                    cm.dispose();
                    return;
                }
                
                cm.createExpedition(exped);
                cm.sendOk("The #r" + expedBoss + " Expedition#k has been created.\r\n\r\nTalk to me again to view the current team, or start the fight!");
                cm.dispose();
                return;
            } else if (selection == 2) {
                cm.sendOk("Sure, not everyone's up to challenging " + expedBoss + ".");
                cm.dispose();
                return;
            }
        } else if (status == 2) {
            if (selection == 1) {
                if (expedition == null) {
                    cm.sendOk("The expedition could not be loaded.");
                    cm.dispose();
                    return;
                }
                var size = expedition.getMembers().size();
                if (size == 1) {
                    cm.sendOk("You are the only member of the expedition.");
                    cm.dispose();
                    return;
                }
                var text = "The following members make up your expedition (Click on them to expel them):\r\n";
                text += "\r\n\t\t1." + expedition.getLeader().getName();
                for (var i = 1; i < size; i++) {
                    text += "\r\n#b#L" + (i + 1) + "#" + (i + 1) + ". " + expedition.getMembers().get(i).getName() + "#l\n";
                }
                cm.sendSimple(text);
                status = 6;
            } else if (selection == 2) {
                var min = exped.getMinSize();
                var size = expedition.getMembers().size();
                if (size < min) {
                    cm.sendOk("You need at least " + min + " players registered in your expedition.");
                    cm.dispose();
                    return;
                }

                var decrementCheck = cm.decrementScarlionEntriesForParty(expedition.getMembers());
                if (decrementCheck > 0) {
                    cm.sendOk("An error occurred. Please contact a GM.");
                    cm.dispose();
                    return;
                }
                
                cm.sendOk("The expedition will begin and you will now be escorted to the #b" + expedMap + "#k.");
                status = 4;
            } else if (selection == 3) {
                player.getMap().broadcastMessage(MaplePacketCreator.serverNotice(6, expedition.getLeader().getName() + " has ended the expedition."));
                cm.endExpedition(expedition);
                cm.sendOk("The expedition has now ended. Sometimes the best strategy is to run away.");
                cm.dispose();
                return;
            }
        } else if (status == 4) {
            if (em == null) {
                cm.sendOk("The event could not be initialized, please report this on the forum.");
                cm.dispose();
                return;
            }

            em.setProperty("leader", player.getName());
            em.setProperty("channel", player.getClient().getChannel());
            if(!em.startInstance(expedition)) {
                cm.sendOk("Another expedition has taken the initiative to challenge " + expedBoss + ", lets pray for those brave souls.");
                cm.dispose();
                return;
            }
            
            cm.dispose();
            return;
        } else if (status == 6) {
            if (selection > 0) {
                var banned = expedition.getMembers().get(selection - 1);
                expedition.ban(banned);
                cm.sendOk("You have banned " + banned.getName() + " from the expedition.");
                cm.dispose();
            } else {
                cm.sendSimple(list);
                status = 2;
            }
        }
    }
}
*/
