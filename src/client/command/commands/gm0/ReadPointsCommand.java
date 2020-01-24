package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;

public class ReadPointsCommand extends Command {
    {
        setDescription("Displays current Boss and Vote Points");
    }

    @Override
    public void execute(MapleClient client, String[] params) {

        MapleCharacter player = client.getPlayer();
        if (params.length > 2) {
            player.yellowMessage("Syntax: @points (bp|vp|all)");
            return;
        } else if (params.length == 0) {
            player.yellowMessage("BossPoints: " + player.getRewardPoints() + " | "
                    + "VotePoints: " + player.getClient().getVotePoints());
            return;
        }

        switch (params[0]) {
            case "bp":
                player.yellowMessage("BossPoints: " + player.getRewardPoints());
                break;
            case "vp":
                player.yellowMessage("VotePoints: " + player.getClient().getVotePoints());
                break;
            default:
                player.yellowMessage("BossPoints: " + player.getRewardPoints() + " | "
                        + "VotePoints: " + player.getClient().getVotePoints());
                break;
        }
    }
}