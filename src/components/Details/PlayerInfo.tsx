import { PlayerDetails } from "../../app/types/player";


function PlayerInfo({
  stats,
  totalLosses,
  totalWins,
  totalMatchesPlayed,
}: PlayerDetails) {
  return (
    <div className="bg-[rgba(44,48,49,.11)] h-24 my-4">
      <table>
        <tbody>
          <tr className="flex">
            <td className="flex justify-center sm:justify-between">
              <p className="text-xs opacity-50 py-1 px-2 relative ">Age</p>
              <p className="text-1xl sm:text-4xl leading-none py-1 px-2 ">
                {stats.age}
              </p>
            </td>

            <td className="flex justify-center sm:justify-between border-l border-white ">
              <p className="text-xs opacity-50 py-1 px-2 relative ">Weight</p>
              <p className="text-1xl sm:text-4xl leading-none py-1 px-2 ">
                {stats.weight}
              </p>
            </td>
            <td className="flex justify-center sm:justify-between border-l border-white ">
              <p className="text-xs opacity-50 py-1 px-2 relative ">Height</p>
              <p className="text-1xl sm:text-4xl leading-none py-1 px-2 ">
                {stats.height}
              </p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex justify-center sm:justify-between">
              <p className="text-xs opacity-50 py-1 px-2 relative ">
                Total Wins
              </p>
              <p data-test-id={"total_wins"} className="text-1xl sm:text-4xl leading-none py-1 px-2 ">
                {totalWins}
              </p>
            </td>

            <td className="flex justify-center sm:justify-between border-l border-white ">
              <p className="text-xs opacity-50 py-1 px-2 relative ">
                Total Losses
              </p>
              <p data-test-id={"total_losses"} className="text-1xl sm:text-4xl leading-none py-1 px-2 ">
                {totalLosses}
              </p>
            </td>

            <td className="flex justify-center sm:justify-between border-l border-white ">
              <p className="text-xs opacity-50 py-1 px-2 relative ">
                Total Matches Played
              </p>
              <p data-test-id={"total_matches_played"} className="text-1xl sm:text-4xl leading-none py-1 px-2 ">
                {totalMatchesPlayed}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlayerInfo;
