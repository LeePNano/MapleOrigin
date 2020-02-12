package client.command.commands.gm2;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import client.inventory.MaplePet;
import client.inventory.manipulator.MapleInventoryManipulator;
import config.YamlConfig;
import constants.inventory.ItemConstants;
import server.MapleItemInformationProvider;

import java.util.List;

public class AwardToMapCommand extends Command {
    {
        setDescription("Give an item/currency to everyone currently on your map");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length != 2 && params.length != 3) {
            player.yellowMessage("Syntax: !awardToMap <item> <id> <quantity> or !awardToMap <ms/nx> <quantity>");
            return;
        }
        List<MapleCharacter> players = player.getMap().getAllPlayers();
        String type = params[0];
        for (MapleCharacter p : players) {
            switch (type) {
                case "item":
                    int itemId = Integer.parseInt(params[1]);
                    MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();

                    if(ii.getName(itemId) == null) {
                        player.yellowMessage("Item id '" + params[1] + "' does not exist.");
                        return;
                    }

                    short quantity = Short.parseShort(params[2]);

                    if (YamlConfig.config.server.BLOCK_GENERATE_CASH_ITEM && ii.isCash(itemId)) {
                        player.yellowMessage("You cannot create a cash item with this command.");
                        return;
                    }

                    if (ItemConstants.isPet(itemId)) {
                        quantity = 1;
                        long days = Math.max(1, Integer.parseInt(params[1]));
                        long expiration = System.currentTimeMillis() + (days * 24 * 60 * 60 * 1000);
                        int petid = MaplePet.createPet(itemId);
                      
                        MapleInventoryManipulator.addToTargetById(p, itemId, quantity, null, petid, (byte)0, expiration);
                        p.yellowMessage("Received " + quantity + " of " + ii.getName(itemId) + " from " + player.getName());
                        return;
                    }

                    short flag = 0;
                    if(player.gmLevel() < 3) {
                        flag |= ItemConstants.ACCOUNT_SHARING;
                        flag |= ItemConstants.UNTRADEABLE;
                    }

                    MapleInventoryManipulator.addToTargetById(p, itemId, quantity, player.getName(), -1, flag, -1);
                    p.yellowMessage("Received " + quantity + " of " + ii.getName(itemId) + " from " + player.getName());
                    break;
                case "ms":
                    long mesos = 0L;
                    try {
                        mesos = Long.parseLong(params[1]);
                        if (mesos > Integer.MAX_VALUE) {
                            mesos = Integer.MAX_VALUE;
                        } else if (mesos < Integer.MIN_VALUE) {
                            mesos = Integer.MIN_VALUE;
                        }
                    } catch (NumberFormatException nfe) {
                        if (params[1].contentEquals("max")) {  // "max" descriptor suggestion thanks to Vcoc
                            mesos = Integer.MAX_VALUE;
                        } else if (params[1].contentEquals("min")) {
                            mesos = Integer.MIN_VALUE;
                        }
                    }

                    if (p != null) {
                        p.gainMeso((int) mesos, true);
                        p.yellowMessage("Received " + mesos + " mesos from " + player.getName());
                    } else {
                        // this shouldnt happen
                        player.message("Player '" + p.getName() + "' could not be found.");
                    }
                    break;
                case "nx":
                    int nx = 0;
                    try {
                        nx = Integer.parseInt(params[1]);
                        if (nx > Integer.MAX_VALUE) {
                            nx = Integer.MAX_VALUE;
                        } else if (nx < Integer.MIN_VALUE) {
                            nx = Integer.MIN_VALUE;
                        }
                    } catch (NumberFormatException nfe) {
                        if (params[1].contentEquals("max")) {  // "max" descriptor suggestion thanks to Vcoc
                            nx = Integer.MAX_VALUE;
                        } else if (params[1].contentEquals("min")) {
                            nx = Integer.MIN_VALUE;
                        }
                    }
                    if (p != null) {
                        p.getCashShop().gainCash(1, nx);
                        p.yellowMessage("Received " + nx + " nx from " + player.getName());
                    } else {
                        // this shouldnt happen
                        player.message("Player '" + p.getName() + "' could not be found.");
                    }
                    break;
                default:
                    player.yellowMessage("Syntax: !awardToMap <item> <id> <quantity> or !awardToMap <ms/nx> <quantity>");
                    break;
            }

        }
    }
}
