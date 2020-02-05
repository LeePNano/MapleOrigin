/*
    This file is part of the HeavenMS MapleStory Server, commands OdinMS-based
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

/*
   @Author: Arthur L - Refactored command content into modules
*/
package client.command.commands.gm2;

import client.command.Command;
import client.MapleClient;
import client.MapleCharacter;
import config.YamlConfig;

public class LevelCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length != 2 && params.length != 3) {
            player.yellowMessage("Syntax: !level <username> <newlevel>");
            return;
        } else if (params.length == 2) {
            levelUpPlayer(player, Integer.parseInt(params[0]));
        } else if (params.length == 3) {
            // This should be the default if the other two conditions fail, but just in case.
            MapleCharacter victim = c.getWorldServer().getPlayerStorage().getCharacterByName(params[0]);
            levelUpPlayer(victim, Integer.parseInt(params[1]));
        }

    }

    private void levelUpPlayer(MapleCharacter player, int level) {
        player.loseExp(player.getExp(), false, false);
        player.setLevel(Math.min(level, player.getMaxClassLevel()) - 1);

        player.resetPlayerRates();
        if (YamlConfig.config.server.USE_ADD_RATES_BY_LEVEL) player.setPlayerRates();
        player.setWorldRates();

        player.levelUp(false);
    }
}
