/*
 This file is part of the HeavenMS MapleStory Server
 Copyleft (L) 2016 - 2018 RonanLana
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation version 3 as published by
 the Free Software Foundation. You may not use, modify or distribute
 this program under any other version of the GNU Affero General Public
 License.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @Author Ronan
 * 3rd Job Event - Magician
 **/
importPackage(Packages.client);
importPackage(Packages.tools);
importPackage(Packages.server.life);

var monsters = new Array(8610005, 8610006, 8610007, 8610008, 8610009);
var elites = new Array(8610010, 8610011, 8610012, 8610013, 8610014);
var bosses = new Array(8850003, 8850001, 8850004, 8850002, 8850000);

var recruitMap = 81500;
var entryMap = 81500;
var exitMap = 81500;

var eventMapId = 81600;

var eventTime = 480; //60 minutes

var lobbyRange = [0, 8];

function setLobbyRange() {
    return lobbyRange;
}

function init() {
}

function setup(player, diff) {
    var eim = em.newInstance("Tower_Battle" + player.getName());
    eim.schedule("start", 0);
    return eim;
}

function getEligibleParty(party) {      //selects, from the given party, the team that is allowed to attempt this event

}

function playerEntry(eim, player) {
    player.changeMap(eim.getMapInstance(81600), 0);
}

function playerUnregistered(eim, player) {
}



function scheduledTimeout(eim) {
    eim.exitParty(exitMap);
}

function playerDisconnected(eim, player) {
    eim.exitPlayer(player, exitMap);
}

function clear(eim) {
    eim.exitParty(exitMap);
}

function changedMap(eim, player, mapid) {
    if (mapid != eventMapId) {
        eim.exitPlayer(player, exitMap);
		eim.stopEventTimer();
        eim.setEventCleared();
    }
}

function playerRevive(eim, player) { // player presses ok on the death pop up.
    eim.exitPlayer(player, exitMap);
}

function monsterKilled(mob, eim) {
    if (mob.getId() == 8850011) {
        eim.setIntProperty("finish", 0);
        map.killAllMonsters();
        eim.victory("finish");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}

function dispose() {
}

function start(eim) {
    eim.startEventTimer(eventTime * 60000);
    var random = eim.randomNextInt(4);

    //phase 1
    var map = eim.getMapInstance(81600);
    var monster = monsters[random];
    for (var i = 0; i < 20; i++) {
        map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(monster), 15, new java.awt.Point(Randomizer.rand(20, 1280), -25));
    }
    //phase 2
    var elite = elites[random];
    for (var i = 0; i < 10; i++) {
        map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(elite), 15, new java.awt.Point(Randomizer.rand(20, 1280), -25));
    }
    //phase 3
    //knights
    map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(8850000), 15, new java.awt.Point(Randomizer.rand(20, 1280), -25));
    map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(8850001), 15, new java.awt.Point(Randomizer.rand(20, 1280), -25));
    map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(8850002), 15, new java.awt.Point(Randomizer.rand(20, 1280), -25));
    map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(8850003), 15, new java.awt.Point(Randomizer.rand(20, 1280), -25));
    map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(8850004), 15, new java.awt.Point(Randomizer.rand(20, 1280), -25));
    //empress
    map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(8850011), 15, new java.awt.Point(440, -65));

}
function isEmpress(mob) {
    var mobid = mob.getId();
    return (mobid == 8850011);
}

function monsterKilled(mob, eim) {
    if(isEmpress(mob)) {
        eim.setIntProperty("defeatedBoss", 1);
        eim.showClearEffect(mob.getMap().getId());
        eim.clearPQ();
        
        mob.getMap().broadcastZakumVictory();
    }
}
function clearPQ(eim) {
    eim.stopEventTimer();
    eim.setEventCleared();
   // updateGateState(0);
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(exitMap, 0);
}
function end(eim) {
    eim.exitParty(exitMap);
}
// ---------- FILLER FUNCTIONS ----------

function disbandParty(eim, player) {
}

function afterSetup(eim) {
}

function changedLeader(eim, leader) {
}

function leftParty(eim, player) {
}


