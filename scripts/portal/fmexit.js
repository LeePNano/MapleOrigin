function enter(pi) {
    var returnMap = pi.getPlayer().getSavedLocation("FREE_MARKET");
    if (returnMap < 0) {
        returnMap = 100000000; // Just Incase there is no saved location.
    }
    var target = pi.getPlayer().getClient().getChannelServer().getMapFactory().getMap(returnMap);
    pi.getPlayer().changeMap(target);
    pi.playPortalSound();
    return true;
}