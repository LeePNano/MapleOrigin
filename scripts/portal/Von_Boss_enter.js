/* @author RonanLana */
var level = 140;
var minparty = 1;
var maxparty = 6;
var minraid = 1;
var maxraid = 40;

function enter(pi) {
    var em = pi.getEventManager("Vonleon");
    if (em != null) {
        if (pi.getPlayer().isGroup()) {
            if (pi.getPlayer().isLeader()) {
                var eli;
                if (pi.getPlayer().getParty() != null) {
                    eli = em.getEligiblePartySrc(pi.getParty(), pi.getPlayer().getMapId(), level, 255, minparty, maxparty);
                } else if (pi.getPlayer().getRaid() != null) {
                    eli = em.getEligibleRaidSrc(pi.getPlayer().getRaid(), pi.getPlayer().getMapId(), level, 255, minraid, maxraid);
                } else {
                    pi.playerMessage(5, "Event has encountered an error");
                    return false;
                }
                if (eli.size() > 0) {
                    if (!em.startPlayerInstance(pi.getPlayer(), 0)) {
                        pi.playerMessage(5, "Someone is already attempting the PQ or your instance is currently being reseted. Try again in few seconds.");
                    } else {
                        pi.playPortalSound();
                        return true;
                    }
                } else {
                    pi.playerMessage(5, "You cannot start this party quest yet, because either your party is not in the range size, some of your party members are not eligible to attempt it or they are not in this map. Minimum requirements are: Level 160+, 1+ Raid members.");
                }
            } else {
                pi.playerMessage(5, "The leader of the party must be the to talk to me about joining the event.");
            }
        } else {
            pi.playerMessage(5, "Event is Party/Raid Mode. Requirements:");
            pi.playerMessage(5, "Party [minlvl=" + level + ", minplayers=" + minparty + ", maxplayers=" + maxparty + "]");
            pi.playerMessage(5, "Raid [minlvl=" + level + ", minplayers=" + minraid + ", maxplayers=" + maxraid + "]");
        }
    } else {
        pi.playerMessage(5, "Event has already started, Please wait.");
    }
    return false;
}
