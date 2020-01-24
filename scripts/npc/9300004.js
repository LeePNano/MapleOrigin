/*
 Credits go to Travis of DeanMS ( xKillsAlotx on RaGEZONE)
 Item Exchanger for scrolls
 
 Modified by SharpAceX (Alan) for MapleSolaxia
 */

importPackage(Packages.tools);

var status = 0;
var mapid = 90000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
			if (cm.getPlayer().isGM()) {
				cm.warp(79000, 0);
				cm.dispose();
			} else {
				//cm.sendYesNo("Dream World Coming soon.");
				cm.warp(79000, 0);
				cm.dispose();
			}

        }
    }
}