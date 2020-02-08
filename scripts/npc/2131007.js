var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("Hello there #b#h #!\r\n#kI am your one stop shop for all your mount needs.\r\nBefore purchasing please make sure you have the skill\r\n\r\n#s10001004# #q10001004#\r\n\r\n#eTier 1 Mounts - #r10,000,000 Mesos\r\n#L0##k#v1902000# - Hog #b\r\n#L1##k#v1902005# - Mimiana #b\r\n#L2##k#v1902015# - Werewolf\r\n\r\n#eTier 2 Mounts - #r25,000,000 Mesos\r\n\r\n#L3##k#v1902001# - Silver Mane\r\n#L4##k#v1902006# - Mimio\r\n#L5##k#v1902016# - Werewolf\r\n\r\n#eTier 3 Mounts - #r50,000,000 Mesos\r\n\r\n#L6##k#v1902002# - Red Draco #b\r\n#L7##k#v1902007# - Shinjo #b\r\n#L8##k#v1902017# - Werewolf #b\r\n#L9##k#v1902018# - Ryko #b\r\n");
    } else if (status == 1) {
		if (selection == 0) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902000, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 10000000) {
						cm.gainMeso([-10000000]);
						cm.gainItem(1902000,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 10,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}
		} else if (selection == 1) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902005, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 10000000) {
						cm.gainMeso([-10000000]);
						cm.gainItem(1902005,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 10,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}
		} else if (selection == 2) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902015, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 10000000) {
						cm.gainMeso([-10000000]);
						cm.gainItem(1902015,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 10,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}
		} else if (selection == 3) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902001, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 25000000) {
						cm.gainMeso([-25000000]);
						cm.gainItem(1902001,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 25,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}	
		} else if (selection == 4) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902006, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 25000000) {
						cm.gainMeso([-25000000]);
						cm.gainItem(1902006,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 25,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}	
		} else if (selection == 5) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902016, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 25000000) {
						cm.gainMeso([-25000000]);
						cm.gainItem(1902016,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 25,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}	
		} else if (selection == 6) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902002, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 50000000) {
						cm.gainMeso([-50000000]);
						cm.gainItem(1902002,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 50,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}	
		} else if (selection == 7) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902007, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 50000000) {
						cm.gainMeso([-50000000]);
						cm.gainItem(1902007,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 50,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}	
		} else if (selection == 8) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902017, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 50000000) {
						cm.gainMeso([-50000000]);
						cm.gainItem(1902017,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 50,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}	
		} else if (selection == 9) {
			if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
				if(cm.haveItem(1902018, 1)) {
					cm.sendOk("You already have this mount");
				} else {
					if (cm.getMeso() >= 50000000) {
						cm.gainMeso([-50000000]);
						cm.gainItem(1902018,1);
						cm.dispose();
					} else {
						cm.sendOk("Sorry you dont have 50,000,000 mesos");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("Please have atleast 3 spaces in your EQUIP tab")
			}	
		}
    } else {
        cm.dispose();
    }
}