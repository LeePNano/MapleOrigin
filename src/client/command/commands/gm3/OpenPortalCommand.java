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
package client.command.commands.gm3;

import client.command.Command;
import client.MapleClient;
import client.MapleCharacter;
import net.server.channel.Channel;
import server.maps.MaplePortal;

public class OpenPortalCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length < 1) {
            player.yellowMessage("Syntax: !openportal <portalname>");
            return;
        }
        int mapid = player.getMapId();
        for (Channel channel : player.getWorldServer().getChannels()) {
            MaplePortal portal = channel.getMapFactory().getMap(mapid).getPortal(params[0]);
            if (portal != null) {
                portal.setPortalState(true);
                player.dropMessage(6, "Channel " + channel.getId() + " Portal: " + portal.getId() + " '" + portal.getName() + "' Type: " + portal.getType() +
                        " --> toMap: " + portal.getTargetMapId() + " scriptname: '" + portal.getScriptName() + "' state: " + (portal.getPortalState() ? "true" : "false") + ".");
            } else {
                player.dropMessage(6, "Portal not found in channel " + channel.getId());
            }
        }
    }
}
