//kaotic Tower level requirement
function enter(pi) {
    //var level = (1000 * (pi.getPlayer().getMapId() - 90000)) + 20;
    if (pi.getPlayer().getLevel() > 250) {
        pi.warp(pi.getPlayer().getMapId() + 1);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "This portal is off limits");
        return false;
    }
}