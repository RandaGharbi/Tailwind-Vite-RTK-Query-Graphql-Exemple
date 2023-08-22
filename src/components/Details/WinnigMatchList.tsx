import { useState } from "react";
import { PlayerStatistics } from "../../app/types/player";
import dayjs from "dayjs";

function WinningMatchList({
  winningMatches,
}: Pick<PlayerStatistics, "winningMatches">) {
  const [displayedMatches, setDisplayedMatches] = useState(10);

  const handleShowMore = () => {
    setDisplayedMatches(displayedMatches + 10);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mt-4">Winning Matches</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto mt-2">
          <thead>
            <tr>
              <th className="text-left py-2"></th>
              <th className="text-left py-2">Players</th>
              <th className="text-left py-2"></th>
              <th className="text-left py-2 hidden sm:block">Start Time</th>
            </tr>
          </thead>
          <tbody>
            {winningMatches.slice(0, displayedMatches).map((match) => (
              <tr data-test-id={`match_${match.matchId}`} key={match.matchId}>
                <td className="py-2">
                  <div className="flex items-center">
                    <img
                      src={match.players[0].picture}
                      alt={`${match.players[0].firstName} ${match.players[0].lastName}`}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span data-test-id={`player1_${match.matchId}`}>
                      {`${match.players[0].firstName} ${match.players[0].lastName}`}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-4">🆚</td>
                <td className="py-2 pl-3">
                  <div className="flex items-center">
                    <img
                      src={match.players[1].picture}
                      alt={`${match.players[1].firstName} ${match.players[1].lastName}`}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span data-test-id={`player2_${match.matchId}`}>
                    {`${match.players[1].firstName} ${match.players[1].lastName}`}
                    </span>
                  </div>
                </td>
                <td data-test-id={`date_${match.matchId}`} className="py-2 hidden sm:block">
                  {dayjs(new Date(match.startTime)).format("DD MMM YYYY")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {displayedMatches < winningMatches.length && (
        <div className="text-center mt-4">
          <button
            data-testid="show-more-button"
            onClick={handleShowMore}
            className="inline-block px-4 py-2 text-sm font-bold uppercase text-pink-500  focus:outline-none"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default WinningMatchList;
