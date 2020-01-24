function enter(pi) {
    if (pi.countMonster() > 0 ) {
		pi.playerMessage(5, "Von Leon's rage is too strong making the portal unstable!");}
	else {var map = pi.getPlayer().getClient().getChannelServer().getMapFactory().getMap(82100);
pi.getPlayer().changeMap(map, 0);
}
}