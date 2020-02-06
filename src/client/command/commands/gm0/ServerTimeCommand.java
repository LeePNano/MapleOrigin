package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;

import java.util.Calendar;

public class ServerTimeCommand extends Command {

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        Calendar now = Calendar.getInstance();
        player.showHint(now.getTime().toString(), 300);
    }
}
