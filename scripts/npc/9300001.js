var status = 0;
var leaf = 4006000;
var stage = 0;
var amount = 0;
var jobs = new Array(0, 112,122,132,212,222,232,312,322,412,422,512,522);

function start() {
    if (cm.getPlayer().getLevel() >= 250) {
        cm.sendSimple("I see you've reached 250 ! What a remarkable milestone, now that you're level 250 you have the ability to trade jobs within your job tree!\r\n\#L1# Switch Job #l\r\n\#L2# Buy Skill Points #l\r\n");
    } else {
        cm.sendOk("Job change is available for those who have achieved level 250!");
        cm.dispose();
    }
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
        if (status == 1) {
            if (selection == 1) {
                stage = 1;
                if (cm.haveItem(leaf, 1)) {
                    if (cm.getPlayer().getLevel() >= 251) {
                        cm.sendSimple("Which Job would you like to switch to?\r\n\#L1# Hero #l\r\n\#L2# Paladin #l\r\n\#L3# Dark Knight #l\r\n#L4# Fire Mage #l\r\n\#L5# Ice Mage #l\r\n\#L6# Bishop #l\r\n#L7# Bow Master #l\r\n\#L8# Crossbow Master #l\r\n#L9# Nightlord #l\r\n\#L10# Shadower #l\r\n#L11# Buccaneer #l\r\n\#L12# Corsair #l\r\n");
                    } else {
                        if (cm.getPlayer().getJobId() == 112 || cm.getPlayer().getJobId() == 122 || cm.getPlayer().getJobId() == 132) {
                            cm.sendSimple("Which Sub-Job would you like to switch to?\r\n\#L1# Hero #l\r\n\#L2# Paladin #l\r\n\#L3# Dark Knight #l\r\n");
                        } else if (cm.getPlayer().getJobId() == 212 || cm.getPlayer().getJobId() == 222 || cm.getPlayer().getJobId() == 232) {
                            cm.sendSimple("Which Sub-Job would you like to switch to?\r\n\#L4# Fire Mage #l\r\n\#L5# Ice Mage #l\r\n\#L6# Bishop #l\r\n");
                        } else if (cm.getPlayer().getJobId() == 312 || cm.getPlayer().getJobId() == 322) {
                            cm.sendSimple("Which Sub-Job would you like to switch to?\r\n\#L7# Bow Master #l\r\n\#L8# Crossbow Master #l\r\n");
                        } else if (cm.getPlayer().getJobId() == 412 || cm.getPlayer().getJobId() == 422) {
                            cm.sendSimple("Which Sub-Job would you like to switch to?\r\n\#L9# Nightlord #l\r\n\#L10# Shadower #l\r\n");
                        } else if (cm.getPlayer().getJobId() == 512 || cm.getPlayer().getJobId() == 522) {
                            cm.sendSimple("Which Sub-Job would you like to switch to?\r\n\#L11# Buccaneer #l\r\n\#L12# Corsair #l\r\n");
                        } else {
                            cm.dispose();
                        }
                    }
                } else {
                    cm.sendOk("Sorry, you currently don't have enough Magic Rocks. You need 2500 or more magic rocks to change jobs.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                stage = 2;
                if (cm.haveItem(leaf, 100)) {
                    cm.sendGetText("Hello#b #h ##k, How many Skill Points would you like to buy?\r\n#kYou currently have " + cm.getPlayer().getItemQuantity(leaf, false) + " Magic Rocks.\r\n#kMaximum amount of Skill Points per transaction is 250 (25,000 Magic Rocks).\r\n\r\n");
                } else {
                    cm.sendOk("Sorry, you currently don't have enough Magic Rocks. You need 100 or more magic rocks to make a deal.");
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
        } else if (status == 2) {
            if (stage == 1) {
                cm.gainItem(leaf, -1);
                cm.changeJobById(jobs[selection]);
                cm.dispose();
            }
            if (stage == 2) {
                amount = cm.getText();
                if (amount > 0 && amount <= 250) {
                    cm.sendYesNo("We would like to confirm you want to buy " + amount + " Skill Points with " + amount * 100 + " Magic Rocks.");
                } else {
                    cm.sendOk("Sorry, \r\n#kMaximum amount of Skill Points per transaction is 250 (25,000 Magic Rocks).");
                    cm.dispose();
                }
            }
        } else if (status == 3) {
            if (stage == 2) {
                if (cm.haveItem(leaf, amount * 100)) {
                    cm.gainItem(leaf, -(amount * 100));
                    cm.getPlayer().updateRemainingSp(amount);
                    cm.sendOk("Transaction Complete.\r\n#kYou have spent " + amount * 100 + " Magic Rocks for " + amount + " Skill Points. Thank You.");
                    cm.dispose();
                } else {
                    cm.sendOk("Sorry, you currently don't have enough Magic Rocks.");
                    cm.dispose();
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    }
}



    