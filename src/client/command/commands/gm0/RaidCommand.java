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
package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import net.server.coordinator.MapleInviteCoordinator;
import net.server.coordinator.MapleInviteCoordinator.InviteResult;
import net.server.world.MapleRaid;
import tools.Pair;

public class RaidCommand extends Command {

    {
        setDescription("@raid help - for instructions");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length < 1 || params[0] == null) {
            if (player.getRaid() != null) {
                for (MapleCharacter chr : player.getRaid().getMembers()) {
                    if (chr.isRaidLeader()) {
                    player.dropMessage(5, "[Raid Leader] [" + chr.getName() + "]: Level: " + chr.getLevel());
                    } else {
                        player.dropMessage(5, "[Member] [" + chr.getName() + "]: Level: " + chr.getLevel());
                    }
                }
            } else {
                player.dropMessage(5, "@raid help - for instructions");
            }
        } else {
            if (params[0].equalsIgnoreCase("invite")) {
                if (params.length < 2 || params[1] == null) {
                    player.dropMessage(5, "@raid invite playername - invite targeted player to raid - usable by raid leader");
                } else {
                    if (player.getRaid() != null) {
                        MapleCharacter chr = c.getWorldServer().getPlayerStorage().getCharacterByName(params[1]);
                        if (chr != null) {
                            if (chr.isLoggedinWorld() && chr.getRaid() == null && player.isRaidLeader()) {
                                player.getRaid().invite(player, chr);
                                player.dropMessage(5, "You have invited " + chr.getName() + " to your raid");
                                chr.dropMessage(5, "You have been invited to join " + chr.getName() + "'s raid. Type @raid accept to join or @raid reject to deny the request.");
                            } else {
                                chr.dropMessage(5, "Player you requested to join is either offline, already in a raid, or you not the leader");
                            }
                        } else {
                            player.dropMessage(5, "Player does not exist.");
                        }
                    }
                }
            } else if (params[0].equalsIgnoreCase("accept")) {
                Pair<InviteResult, MapleCharacter> inviteResult = MapleInviteCoordinator.answerInvite(MapleInviteCoordinator.InviteType.RAID, player.getId(), player.getId(), true);
                if (inviteResult.getLeft() == InviteResult.ACCEPTED) {
                    MapleCharacter from = inviteResult.getRight();
                    if (from.getRaid() != null) {
                        from.getRaid().addMember(player);
                        from.dropMessage(5, player.getName() + " has Accepted your Invite");
                    }
                }
            } else if (params[0].equalsIgnoreCase("reject")) {
                Pair<InviteResult, MapleCharacter> inviteResult = MapleInviteCoordinator.answerInvite(MapleInviteCoordinator.InviteType.RAID, player.getId(), player.getId(), false);
                if (inviteResult.getLeft() == InviteResult.DENIED) {
                    MapleCharacter from = inviteResult.getRight();
                    if (from.getRaid() != null) {
                        from.getRaid().addMember(player);
                        from.dropMessage(5, player.getName() + " has Denied your Invite");
                    }
                }
            } else if (params[0].equalsIgnoreCase("create")) {
                if (player.getRaid() == null && player.getParty() == null) {
                    MapleRaid.createRaid(player);
                } else {
                    player.dropMessage(5, "You are already in a party or a raid.");
                }
            } else if (params[0].equalsIgnoreCase("disband")) {
                if (player.getRaid() != null) {
                    player.getRaid().disbandRaidByLeader(player);
                }
            } else if (params[0].equalsIgnoreCase("leader")) {
                if (params.length < 2 || params[1] == null) {
                    player.dropMessage(5, "@raid leader playername - sets targeted raid member as new raid leader - usable by raid leader");
                } else {
                    if (player.getRaid() != null) {
                        MapleCharacter chr = c.getWorldServer().getPlayerStorage().getCharacterByName(params[1]);
                        if (chr.isLoggedinWorld() && chr.getRaid() == player.getRaid() && player.isRaidLeader()) {
                            player.getRaid().setLeader(chr);
                            player.getRaid().raidMessage(chr.getName() + " is now leader of the raid.");
                        } else {
                            chr.dropMessage(5, "Player you requested is either offline, already in a raid, or you not the leader");
                        }
                    }
                }
            } else if (params[0].equalsIgnoreCase("leave")) {
                if (player.getRaid() != null) {
                    if (!player.isRaidLeader()) {
                        player.getRaid().leaveRaid(player);
                    } else {
                        player.dropMessage(5, "As the leader of the raid you must either change leader or use @raid disband.");
                    }
                }
            } else if (params[0].equalsIgnoreCase("kick")) {
                if (params.length < 2 || params[1] == null) {
                    player.dropMessage(5, "@raid kick playername - kicks player from raid - usable by raid leader");
                } else {
                    MapleCharacter chr = c.getWorldServer().getPlayerStorage().getCharacterByName(params[1]);
                    if (player.getRaid() != null && chr.getRaid() == player.getRaid() && player.isRaidLeader()) {
                        player.getRaid().removeMember(player, c.getWorldServer().getPlayerStorage().getCharacterByName(params[1]));
                    } else {
                        chr.dropMessage(5, "Player you requested is either offline, already in a raid, or you not the leader");
                    }
                }
            } else if (params[0].equalsIgnoreCase("help")) {
                player.dropMessage(5, "Usage for @raid");
                player.dropMessage(5, "@raid - Displays everyone in raid with their level - Usable only in raid party.");
                player.dropMessage(5, "@raid create - creates a new raid - Cannot be in a raid or party.");
                player.dropMessage(5, "@raid invite playername - invite targeted player to raid - usable by raid leader");
                player.dropMessage(5, "@raid accept/reject - accepts/rejects raid leader's invite");
                player.dropMessage(5, "@raid leave - leaves current raid");
                player.dropMessage(5, "@raid disband - disbands raid - usable by raid leader");
                player.dropMessage(5, "@raid kick playername - kicks player from raid - usable by raid leader");
                player.dropMessage(5, "@raid leader playername - changes leader of raid - usable by raid leader");
            }
        }
    }
}
