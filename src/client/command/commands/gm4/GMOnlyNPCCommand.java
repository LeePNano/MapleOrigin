package client.command.commands.gm4;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import scripting.npc.NPCScriptManager;

public class GMOnlyNPCCommand extends Command {
    {
        setDescription("Allow only GMs to interact with an npc (lost on server restart)");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length == 2) {
            try {
                int npcid = Integer.parseInt(params[0]);
                int index = NPCScriptManager.getInstance().gmOnlyNPCs.indexOf(npcid);
                if (params[1].toLowerCase().equals("true")) {
                    if (index != -1) {
                        player.yellowMessage("NPC " + npcid + " already GM only");
                        return;
                    }
                    NPCScriptManager.getInstance().gmOnlyNPCs.add(npcid);
                    player.yellowMessage("NPC " + npcid + " is GM only");
                    return;
                } else if (params[1].toLowerCase().equals("false")) {
                    if (index != -1) {
                        NPCScriptManager.getInstance().gmOnlyNPCs.remove(index);
                        player.yellowMessage("NPC " + npcid + " made public");
                        return;
                    }
                    player.yellowMessage("NPC " + npcid + " already public");
                    return;
                }
            } catch (Exception e) {
                player.yellowMessage("Syntax: !gmOnlyNpc <npc_id> <true/false>");
                return;
            }
        }

        player.yellowMessage("Syntax: !gmOnlyNpc <npc_id> <true/false>");
    }
}
