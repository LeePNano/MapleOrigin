/*var status = 0;
var maps = [82101, 81600, 98007];
var cost = [100000, 100000, 100000];
var selectedMap = -1;
var mesos;

function start() {
    cm.sendNext("Hello, I am in charge of returning players who have disconnected or left their raids back to their current in progress Raid. ");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 1 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 2 && mode == 0) {
            cm.sendNext("There's a lot to see here too I suppose.. Talk to me again if you need to Enter a raid thats in progress.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            var selStr = "";
            if (cm.getJobId() == 0)
                selStr += "We have a special 90% discount for beginners.";
            selStr += "Choose from the following Raid Bosses below.#b";
            for (var i = 0; i < maps.length; i++)
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cm.getJobId() == 0 ? cost[i] / 10 : cost[i]) + " mesos)#l";
            cm.sendSimple(selStr);
        } else if (status == 2) {
            cm.sendYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + maps[selection] + "##k? It'll cost you #b"+ (cm.getJobId() == 0 ? cost[selection] / 10 : cost[selection]) + " mesos#k.");
            selectedMap = selection;
        } else if (status == 3) {
            if (cm.getJobId() == 0) {
            	mesos = cost[selectedMap] / 10;
            } else {
            	mesos = cost[selectedMap];
            }
            
            if (cm.getMeso() < mesos) {
                cm.sendNext("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride the cab.");
                cm.dispose();
                return;
            }
            
            cm.gainMeso(-mesos);
            cm.warp(maps[selectedMap], 0);
            cm.dispose();
        }
    }
}*/
function start() {
    cm.sendYesNo("Hey are you an aran? Want me to teach you your hidden skills so you don't have to do quests? If so click yes and I will add them for you. WARNING DO NOT USE ME IF YOU HAVE ALREADY ADDED 2ND JOB SKILLS ");
}

function action(mode, type, selection) {
		//cm.resetStats();
 // Double Swing
		//cm.teachSkill(21000000,0, 10, -1); // Combat Ability
 // Combat Step
		//cm.teachSkill(21001003,0, 20, -1); // Pole Arm Booster
		// Aran Second job

		cm.teachSkill(21100000,0, 20, -1); // Pole Arm Mastery
		cm.teachSkill(21100002,0, 30, -1); // Final Charge
		cm.teachSkill(21100004,0, 20, -1); // Combo Smash
		cm.teachSkill(21100005,0, 20, -1); // Combo Drain
		cm.teachSkill(21110000,0, 20, -1); // Critical Combo
		cm.teachSkill(21110002,0, 20, -1); // Full Swing
		cm.teachSkill(21121000, 0, 10, -1); //MW 10
		
		//cm.teachSkill(21110003,0, 10, -10); // Final Toss
		//cm.teachSkill(21110004,0); // Fenir Phantom
		//cm.teachSkill(21111005,0); // Snow Charge
	//	cm.teachSkill(21110006,0); // WhirlWind
		//cm.teachSkill(21111001,0); // Smart Knockback
cm.dispose();
	    }