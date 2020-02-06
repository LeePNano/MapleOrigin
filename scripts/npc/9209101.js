/*vote point exchange npc
Exchanges votepoints for white scrolls dragon weapons and reverse weapons.
@@author shadowzzz*/

var status = 0;
var points = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var items = [1022082, 
/*Starts at 1, all the ITCG Equips */          1082223, 1082230, 1032048, 1002675, 1002676, 1072344, 1402045, 1472064, 1422028, 2070016, 1102206, 1092052, 1102145, 1442057, 2070018, 1102206,
/*Starts at 16, all the dragon weapons */      1302086, 1312038, 1322061, 1332075, 1332076, 1372045, 1382059, 1402047, 1412034, 1422038, 1432049, 1442067, 1452059, 1462051, 1472071, 1482024, 1492025, 
/*Starts at 34, all the scrolls */             2049100, 2340000, 2049003,
/*Starts at 37, Warrior Empress Weapon*/       2290084, 2290085, 2290010, 2290011, 2290022, 2290023,2290060, 2290061, 2290032, 2290033,
/*Starts at 45, Bowman Empress Weapon*/        2290030, 2290031,
/*Starts at 47, Theif Empress Weapon*/         2290050, 2290051,
/*Starts at 49, Mage Empress Weapon */         2290090, 2290091,
/*Starts at 51, Pirate Empress Weaoon */       2290074, 2290075,
/*Starts at 53, Warrior Empress Gear */        2290136, 2290137, 2290012, 2290013, 2290096,
/*Starts at 58, Bowman Empress Gear*/          2290125, 1102277, 1052316, 1072487, 1082297,
/*Starts at 63, Thief Empress Gear */          1003175, 1102278, 1052317, 1072488, 1082298,
/*Starts at 68, Pirate Empress Gear*/          1003176, 1102279, 1052318, 1072489, 1082299,
/*Starts at 73, Mage Empress Gear*/            1003173, 1102276, 1052315,
/*Starts at 78, VIP Weapoons */                1302147, 1312062, 1322090, 1332120, 1332125, 1372078, 1382099, 1402090, 1412062, 1422063, 1432081, 1442111, 1452106, 1462091, 1472117, 1482079, 1492079,
/*Starts at 95, 60% Scrolls */                 2040914, 2040919, 2044301, 2044401, 2044501, 2044601, 2044701, 2044801, 2044901, 2044201, 2044101, 2044001, 2043001, 2043101, 2043201, 2043801, 2043701, 2043301];
var leaf = [4000313];

function start() {
    cm.sendSimple("Hi! I can exchange #v4000313# for various items to help you in your adventures in Maple Origin! You may obtain these items as rewards for clearing Zakum, Horntail, and Pink Bean! What would u like to buy? #b\r\n#L0# Buy some scrolls for 1 Golden Maple Leaf #b\r\n#L1# Buy ITCG Equips for 3 Golden Maple Leaf #b\r\n#L2# Buy VIP Weapons for 10 Golden Maple Leaf#b\r\n#L5# Buy Skill Books for 15 Golden Maple Leaf ");
}

function action (m,t,s) {
    if (m < 1) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 1) {
    sel = s;
        if (s == 0) {
            cm.sendSimple("Fun Fact: Mitochondria is not actually the powerhouse of the cell #b\r\n\#L34# #v2049100# Chaos Scroll #b\r\n\#L36# #v2049003#Clean Slate 20% #b\r\n\#L95# #v2040914#Shield for W.Att #b\r\n\#L96# #v2040919#Shield for M.Att #b\r\n\#L97# #v2044301#Spear Att x3 #b\r\n\#L98# #v2044401#Polearm Att x3#b\r\n\#L99# #v2044501#Bow Att x3 #b\r\n\#L100# #v2044701#Xbow Att x3 #b\r\n\#L101# #v2044701#Claw Att x3 #b\r\n\#L102# #v2044801#Knuckle Att x3 #b\r\n\#L103# #v2044901#Gun Att x3 #b\r\n\#L104# #v2044201#2H BW Att x3 #b\r\n\#L105# #v2044101#2H Axe Att x3 #b\r\n\#L106# #v2044001#2H Sword Att x3 #b\r\n\#L107# #v2043001#1H Sword Att x3 #b\r\n\#L108# #v2043101#1H Axe Att x3 #b\r\n\#L109# #v2043201# 1H BW Att x3 #b\r\n\#L110# #v2043801#Staff M.Att x3 #b\r\n\#L111# #v2043701#Wand M.Att x3 #b\r\n\#L112# #v2043301#Dagger Att x3  ");
        } else if (s == 1){
                        cm.sendSimple("Fun Fact: Munz Likes Bunz #b\r\n\#L1# #v1082223#Stormcaster Gloves#b\r\n\#L2# #v1082230#Glitter Gloves#b\r\n\#L3# #v1032048#Crystal Leaf Earrings#b\r\n\#L4# #v1002675#Antellion Mitter#b\r\n\#L5# #v1002676#Infinity Circlet #b\r\n\#L6# #v1072344#Facestompers#b\r\n\#L7# #v1402045#Tigers Fang #b\r\n\#L8# #v1472064#Neva #b\r\n\#L9# #v1422028#Dragon Flame #b\r\n\#L10# #v2070016#Crystal Ilbis #b\r\n\#L11# #v1102206#Blackfist Cloak #b\r\n\#L12# #v1092052#Black Phoenix Shield #b\r\n\#L13# #v1102145#Sirius Cloak #b\r\n\#L14# #v1442057#Purple Surfboard #b\r\n\#L15# #v2330005#Eternal Bullet");
        } else if (s == 2){
            cm.sendSimple("Fun Fact: For 1m free nx #bCLICK HERE #b\r\n\#L78# #v1302147# VIP Sword 1H Sword #b\r\n\#L79# #v1312062# VIP 1H Axe #b\r\n\#L80# #v1322090# VIP 1H Blunt Weapon #b\r\n\#L81# #v1332120# VIP Dagger (LUK) #b\r\n\#L82# #v1332125# VIP Dagger (STR) #b\r\n\#L83# #v1372078# VIP Wand #b\r\n\#L84# #v1382099# VIP Staff #b\r\n\#L85# #v1402090# VIP 2H Sword #b\r\n\#L86# #v1412062# VIP Axe #b\r\n\#L87# #v1422063# VIP 2H Blunt Weapon #b\r\n\#L88# #v1432081# VIP Spear #b\r\n\#L89# #v1442111# VIP Polearm #b\r\n\#L90# #v1452106# VIP Bow #b\r\n\#L91# #v1462091# VIP Crossbow #b\r\n\#L92# #v1472117# VIP Claw #b\r\n\#L93# #v1482079# VIP Knuckle #b\r\n\#L94# #v1492079# VIP Gun");
        }
          else if (s == 3){
                        cm.sendSimple("Fun Fact: The original MapleOrigin used to be called ProjectNanp because Jay has fat fingers #b\r\n#L53##v1003172# Lionheart Battle Helm #b\r\n\#L54##v1102275# Lionheart Battle Cape #b\r\n#L55##v1052314# Lionheart Battle Mail #b\r\n#L56# #v1072485#Lionheart Battle Boots #b\r\n#L57# #v1082295#Lionheart Battle Bracers #b\r\n#L58##v1003174# Falcon Wing Sentinel Cap #b\r\n#L59##v1102277# Falcon Wing Sentinel Cape #b\r\n#L60# #v1052316#Falcon Wing Sentinel Suit #b\r\n#L61# #v1072487#Falcon Wing Sentinel Boots #b\r\n#L62##v1082297# Falcon Wing Sentinel Gloves #b\r\n#L63##v1003175# Raven Horn Chaser Hat #b\r\n#L64# #v1102278#Raven Horn Chaser Cape #b\r\n#L65# #v1052317#Raven Horn Chaser Armor #b\r\n#L66# #v1072488#Raven Horn Chaser Boots #b\r\n#L67# #v1082298#Raven Horn Chaser Gloves #b\r\n#L68##v1003176# Shark Tooth Skipper Hat #b\r\n#L69##v1102279# Shark tooth Skipper Cape #b\r\n#L70##v1052318# Shark Tooth Skipper Coat #b\r\n#L71##v1072489# Shark Tooth Skipper Boots #b\r\n#L72##v1082299# Shark Tooth Skipper Gloves #b\r\n#L73# #v1003173#Dragon Tail Mage Sallet #b\r\n#L74# #v1102276#Dragon Tail Mage Cape #b\r\n#L75# #v1052315#Dragon Tail Mage Robe #b\r\n#L76# #v1072486#Dragon Tail Mage Shoes #b\r\n\#L77##v1082296# Dragon Tail Mage Gloves");
        } else if (s == 4){
            cm.sendSimple("Fun Fact: For 1m free nx #bCLICK HERE  #b\r\n\#L37# #v1302152#Lionheart Cuttlas #b\r\n\#L38# #v1312065#LionHeart Champion Axe #b\r\n\#L39# #v1322096#Lionheart Battle Hammer #b\r\n\#L40# #v1402095#Lionheart Battle Scimitar #b\r\n\#L41# #v1412065#Lionheart Battle Axe #b\r\n\#L42# #v1422066#Lionheart Blast Maul #b\r\n\#L43# #v1432086#Lionheart Fuscina #b\r\n\#L44##v1442116# Lionheart Partisan #b\r\n\#L45# #v1452111#Falcon Wing Composite Bow #b\r\n\#L46# #v1462099#Falcon Wing Heavy Cross Bow #b\r\n\#L47##v1332130# Raven Horn Baselard #b\r\n\#L48# #v1472122#Raven Horn Metal Fist #b\r\n\#L49# #v1372084#Dragon Tail Arc Wand #b\r\n\#L50# #v1382104#Dragon Tail War Staff #b\r\n\#L51# #v1482084#Shark Tooth Wild Talon #b\r\n\#L52# #v1492085#Shark Tooth Sharpshooter #b\r\n");
        }
		else if (s == 5){
            cm.sendSimple("Fun Fact: For 1m free nx #bCLICK HERE  #b\r\n\#L37# #v2290084#Triple Throw 20 #b\r\n\#L38# #v2290085#Triple Throw 30 #b\r\n\#L39# #v2290010#Brandish 20 #b\r\n\#L40# #v2290011#Brandish 30 #b\r\n\#L41# #v2290022#Berserk 20 #b\r\n\#L42# #v2290023#Berserk 30 #b\r\n\#L43# #v2290060#Hurricane 20 #b\r\n\#L44##v2290061#Hurricane 30 #b\r\n\#L45# #v2290032#Chain Lightning 20 #b\r\n\#L46# #v2290033#Chain Lightning 30 #b\r\n\#L47##v2290030#Paralyze 20 #b\r\n\#L48# #v2290031#Paralyze 30 #b\r\n\#L49# #v2290050#Angel Ray 20 #b\r\n\#L50# #v2290051#Angel Ray 30 #b\r\n\#L51# #v2290090#Boomerang Step 20 #b\r\n\#L52# #v2290091#Boomerang Step 30 #b\r\n#L53# #v2290074#Snipe 20 #b\r\n#L54# #v2290074# Snipe 30 #b\r\n#L55# #v2290136#Combo Tempest 20 #b\r\n#L56# #v2290137#Combo Tempest 30 #b\r\n#L57# #v2290012#Blast 20 #b\r\n#L58# #v2290013#Blast 30 #b\r\n#L59# #v2290096#Maple Warrior 20 #b\r\n#L60# #v2290125#Maple Warrior 30 #b\r\n");
        }
    } else if (status == 2) {
        if (sel == 100) {
            if (cm.haveItem(leaf) >= 6) {
                if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)){
                   // var currentRewardPoints = cm.getPlayer().getRewardPoints();
                    //cm.getPlayer().setRewardPoints(currentRewardPoints - 6);
					cm.gainItem(4000313, -6)
                cm.gainItem(2340000, 5);
                }
                else{
                    cm.sendOk("Please make sure you have enough space to hold these items!");
                }
            } else {
                cm.sendOk(" You don't have 6 vote points. ");
            }
        } else {
            if (cm.haveItem(4000313) >= 1) {
               if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(2)) {
                   // var currentRewardPoints = cm.getPlayer().getRewardPoints();
                   // cm.getPlayer().setRewardPoints(currentRewardPoints - points[s]);
				   //cm.gainItem(leaf, - points[s]);
                    if (items[s] == 2049100 || items[s] == 2340000 || items[s] == 2049003) {
                        if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull(2)) {
                            if(cm.haveItem(leaf, 1)) {
                                cm.gainItem(leaf, -1);
                                cm.gainItem(items[s], 1);
                            } else {
                                cm.sendOk("Sorry, you don't have enough leafs!");
                            }
                        } else {
                            cm.sendOk("Please make sure you have at least 3 slots empty in your inventory");
                        }
                    }
                    else if(items[s] == 2044301 || items[s] == 2044401 || items[s] == 2044501 || items[s] == 2044601 || items[s] == 2044701 || items[s] == 2044801 || items[s] == 2044901 || items[s] == 2044201 || items[s] == 2044101 || items[s] == 2044001 || items[s] == 2043001 || items[s] == 2043101 || items[s] == 2043201 || items[s] == 2043801 || items[s] == 2043701 || items[s] == 2043301 || items[s] == 2040914 || items[s] == 2040919){
                        if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull(2)) {
                            if(cm.haveItem(leaf, 1)) {
                                cm.gainItem(leaf, -1);
                                cm.gainItem(items[s], 3);
                            } else {
                                cm.sendOk("Sorry, you don't have enough leafs!");
                            }
                        } else {
                            cm.sendOk("Please make sure you have at least 3 slots empty in your inventory");
                        }
                    }
					else if(items[s] == 2290084 || items[s] == 2290085 || items[s] == 2290010 || items[s] == 2290011 || items[s] == 2290022 || items[s] == 2290023 || items[s] == 2290032 || items[s] == 2290033 || items[s] == 2290030 || items[s] == 2290031 || items[s] == 2290050 || items[s] == 2290051 || items[s] == 2290090 || items[s] == 2290091 || items[s] == 2290074 || items[s] == 2290075 || items[s] == 2290136 || items[s] == 2290137 || items[s] == 2290012 || items[s] == 2290013 || items[s] == 2290096 || items[s] == 2290125){
                        if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull(2)) {
                            if(cm.haveItem(leaf, 15)) {
                                cm.gainItem(leaf, -15);
                                cm.gainItem(items[s], 1);
                            } else {
                                cm.sendOk("Sorry, you don't have enough leafs!");
                            }
                        } else {
                            cm.sendOk("Please make sure you have at least 3 slots empty in your inventory");
                        }
                    }
                    else if(items[s] == 1302147 || items[s] == 1312062 || items[s] == 1322090 || items[s] == 1332120 || items[s] == 1332125 || items[s] == 1372078 || items[s] == 1382099 || items[s] == 1402090 || items[s] == 1412062 || items[s] == 1422063 || items[s] == 1432081 || items[s] == 1442111 || items[s] == 1452106 || items[s] == 1462091 || items[s] == 1472117 || items[s] == 1482079 || items[s] == 1492079){
                        if(cm.haveItem(leaf, 10)) {
                            cm.gainItem(leaf, -10);
                            cm.gainItem(items[s], 1);
                       } else {
                            cm.sendOk("Sorry, you don't have enough leafs!");
                        }
                    }
					else if(items[s] == 1082223 || items[s] == 1082230 || items[s] == 1032048 || items[s] == 1002675 || items[s] == 1002676 || items[s] == 1072344 || items[s] == 1402045 || items[s] == 1472064 || items[s] == 1422028 || items[s] == 2070016 || items[s] == 1102206 || items[s] == 1092052 || items[s] == 1102145 || items[s] == 1442057 || items[s] == 2070018 || items[s] == 1002553){
                        if(cm.haveItem(leaf, 3)) {
                            cm.gainItem(leaf, -3);
                            cm.gainItem(items[s], 1);
                        } else{
                            cm.sendOk("Sorry, you don't have enough leafs!");
                        }
                    }
					/*else if(items[s] == 2290084 || items[s] == 2290085 || items[s] == 2290010 || items[s] == 2290011 || items[s] == 2290022 || items[s] == 2290023 || items[s] == 2290032 || items[s] == 2290033 || items[s] == 2290030 || items[s] == 2290031 || items[s] == 2290050 || items[s] == 2290051 || items[s] == 2290090 || items[s] == 2290091 || items[s] == 2290074 || items[s] == 2290075 || items[s] == 2290136 || items[s] == 2290137 || items[s] == 2290012 || items[s] == 2290013 || items[s] == 2290096 || items[s] == 2290125){
                        cm.gainItem(leaf, -15);
						cm.gainItem(items[s], 1);
                    }*/
					
                }
                else{
                    cm.sendOk("Please make sure you have atleast 2 empty slots in both equip and etc.");
                }


                    
                
            
            } else {
                cm.sendOk(" You don't have " + points[s] + " Golden Maple Leafs. ");
            }
        }
        cm.dispose();
    }
}