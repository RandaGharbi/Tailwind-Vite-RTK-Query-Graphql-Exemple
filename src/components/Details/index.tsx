import PlayerRank from "./PlayerRank";
import PlayerInfo from "./PlayerInfo";

import { PlayerDetails } from "../../app/types/player";

function PlayerDetail(player: PlayerDetails) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
      <PlayerRank {...player} />
      <PlayerInfo {...player} />
    </div>
  );
}

export default PlayerDetail;
