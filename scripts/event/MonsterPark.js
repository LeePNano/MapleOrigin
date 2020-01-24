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
 * @author: Ronan
 * @event: Zakum Battle
 */

importPackage(Packages.client);
importPackage(Packages.tools);
importPackage(Packages.server.life);


var recruitMap = 970030000;
var entryMap = 970030000;
var exitMap = 970030000;

var eventMapId = 78001;

var eventTime = 480;     // 140 minutes

var lobbyRange = [0, 0];
var map = 0;
var stage = 1;

function init() {

}

function setLobbyRange() {
    return lobbyRange;
}

function getEligibleParty(party) {      //selects, from the given party, the team that is allowed to attempt this event
}

function setup(player, lobbyid) {
    var eim = em.newInstance("MonsterPark" + player.getName());
    map = eim.getMapInstance(eventMapId);
    eim.schedule("start", 10 * 1000);
    eim.createEventTimer(10 * 1000);
    eim.setIntProperty("stage", 9800000);
    return eim;
}

function start(eim) {
    stage = 1;
    eim.changeMusic("BgmCustom/TheStageIsSet");
    eim.dropMessage(5, "[Monster Park] Stage: " + stage + ". 20 " + MapleLifeFactory.getMonster(9800000).getName() + " has appeared.");
    for (var i = 1; i <= 20; i++) {
        map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(9800000), 15, new java.awt.Point(Randomizer.rand(-400, 1200), -20));
    }
    eim.startEventTimer(eventTime * 60000);
}

function allMonstersDead(eim) {
    var id = eim.getIntProperty("stage");
    if (id == 9800022 || id == 9800024 || id == 9800056 || id == 9800057 || id == 9800075 || id == 9800076 || id == 9800082 || id == 9800083) {
        eim.setIntProperty("stage", eim.getIntProperty("stage") + 1);
    } else {
        eim.gainPartyItem(4000313, stage);
        stage += 1;
        eim.showClearEffect();
        eim.setIntProperty("stage", eim.getIntProperty("stage") + 1);
        var mobid = eim.getIntProperty("stage");
        if (mobid == 9800120) {
            eim.gainPartyItem(4000313, stage * 25);
            //eim.upgradePartyMedal(stage * 25);
            eim.victory("finish");
        } else if (mobid == 9800119) {
            eim.dropMessage(5, "[Monster Park] Final Stage: " + stage + ". The Knights of the Stronghold have appeared.");
            map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(mobid), 15, new java.awt.Point(Randomizer.rand(-100, 900), -20));
            map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(mobid + 1), 15, new java.awt.Point(Randomizer.rand(-100, 900), -20));
            map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(mobid + 4), 15, new java.awt.Point(Randomizer.rand(-100, 900), -20));
            map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(mobid + 5), 15, new java.awt.Point(Randomizer.rand(-100, 900), -20));
            map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(mobid + 6), 15, new java.awt.Point(Randomizer.rand(-100, 900), -20));
        } else {
            if (eim.getMonsterRank(mobid) == 4) {
                eim.dropMessage(5, "[Monster Park] Stage: " + stage + ". " + MapleLifeFactory.getMonster(mobid).getName() + " has appeared.");
                map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(mobid), 15, new java.awt.Point(Randomizer.rand(-100, 900), -20));
            } else {
                eim.dropMessage(5, "[Monster Park] Stage: " + stage + ". 20 " + MapleLifeFactory.getMonster(mobid).getName() + " has appeared.");
                for (var i = 1; i <= 20; i++) {
                    map.spawnMonsterWithEffect(MapleLifeFactory.getMonster(mobid), 15, new java.awt.Point(Randomizer.rand(-400, 1200), -20));
                }
            }
        }
    }
}

function playerEntry(eim, player) {
    player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
    eim.exitParty(exitMap);
}

function playerUnregistered(eim, player) {
}

function playerExit(eim, player) {
    eim.exitPlayer(player, exitMap);
}

function playerLeft(eim, player) {
    eim.exitPlayer(player, exitMap);
}

function changedMap(eim, player, mapid) {
    if (mapid != eventMapId) {
        eim.exitPlayer(player, exitMap);
    }
}

function changedLeader(eim, leader) {
    eim.changeEventLeader(leader);
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) { // player presses ok on the death pop up.
    //eim.exitPlayer(player, clearMap);
}

function playerDisconnected(eim, player) {
    eim.exitPlayer(player, exitMap);
}

function leftParty(eim, player) {
    eim.exitPlayer(player, exitMap);
}

function disbandParty(eim) {
    eim.exitParty(exitMap);
}

function monsterValue(eim, mobId) {
    return 1;
}

function end(eim) {
    eim.exitParty(exitMap);
}

function monsterKilled(mob, eim) {
}

function finish(eim) {
    eim.exitParty(exitMap);
}

function cancelSchedule() {
}

function dispose(eim) {
}

function afterSetup(eim) {
}
