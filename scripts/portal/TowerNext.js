/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 LudiPQ - 1 - 2 Portal
 @author Jvlaple
 */

function enter(pi) {
    if (pi.getMap().getMonsters().isEmpty()) {
        var eim = pi.getPlayer().getEventInstance();
        if (eim != null) {
            pi.playPortalSound();
            eim.warpEventTeam(pi.getPlayer().getMapId() + 1);
            return true;
        } else {
            pi.getPlayer().dropMessage(5, "Event encountered an error. Please report this to discord-bug section.");
            return false;
        }
    } else {
        pi.getPlayer().dropMessage(5, "All monsters must be destroyed before moving to next battle.");
        return false;
    }
}