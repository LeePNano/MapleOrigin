var status = 0;

function start() {
    cm.sendNext("Ahoy! I'm hoping I can complete a marble set for my kids one day! Did you know you can collect #v4001190# from all the bosses throughout the maple world? If you can find some I will gladly trade for my families #v5570000# services which can be used to enhance your equipment even further!");
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.sendOk("Fine, I'll give to other players if you don't want it..")
        cm.dispose();
    }else {
        if(mode > 0)
            status++;
        else if(mode < 0)
            cm.dispose();
        if (status == 1) {
            if (cm.getGiftLog('FreeGift') >= 1 && cm.haveItem(4001190)) {
                cm.sendOk("I'm sorry, You have already received your gift in this account today!! Please come back 24 hours later!! Either this or you are not level 150");
                cm.dispose();
            }else
                cm.sendYesNo("Wow really?! Thank you so much! If you're 100% sure lets trade!");
        }else if (status == 2) {
			cm.gainItem(4001190,-1);
            cm.gainItem(5072000, 1);
            cm.setBossLog('FreeGift');
            cm.sendOk("Congratulation!! Here is a #v5570000#!! You can use it to hammer your gear!");
            cm.dispose();
        } else
            cm.sendOk("Fine, I'll give to other players if you don't want it..")
    }
}