importPackage(Packages.client);
importPackage(Packages.tools);
importPackage(Packages.server.life);


function enter(pi) {
    pi.playerMessage(5, "Resetting Von Leon Fight");
	//map.killAllMonsters();
	pi.stopEventTimer();
    pi.setEventCleared();
	var map = pi.getPlayer().getClient().getChannelServer().getMapFactory().getMap(82100);
    pi.getPlayer().changeMap(map, 0); 
} 