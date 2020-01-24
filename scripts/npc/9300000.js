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