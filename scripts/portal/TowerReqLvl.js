//kaotic Tower level requirement
function enter(pi) {
    var level = (1000 * (pi.getPlayer().getMapId() - 90000)) + 20;
    if (pi.getPlayer().getLevel() >= level) {
        pi.warp(pi.getPlayer().getMapId() + 1);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "Must reach minium of level " + level + " to enter this portal.");
        return false;
    }
}