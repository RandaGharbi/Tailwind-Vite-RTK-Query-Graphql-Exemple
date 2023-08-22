import { PlayerDetails } from "../../app/types/player";
import { Link } from "react-router-dom";

export const PlayerCard = ({
  id,
  firstName,
  lastName,
  picture,
  shortName,
  stats,
  country,
  totalMatchesPlayed,
  totalWins,
  totalLosses,
}: PlayerDetails) => {
  return (
    <div
      data-test-id={`card_${shortName}`}
      className="relative mt-16 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div className="relative mx-4 -mt-6 h-50 w-45 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          className="object-cover h-[22rem] w-[22rem]"
          src={picture}
          alt={`${shortName}'s image`}
        />
      </div>
      <div className="p-3 flex">
        <img
          src={country.picture}
          alt={country.code}
          className="object-fill h-7 w-7 "
        />
        <h5 className="mb-2 ml-6 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray- 900 antialiased">
          {`${firstName} ${lastName}`}
        </h5>
      </div>
      <div className="flex items-center justify-center">
        <h4 className="block font-sans text-3xl font-semibold leading-tight tracking-normal text-blue-gray-900 antialiased">
          {country.code}
        </h4>
      </div>
      <div className="border border-solid border-gray-200 p-4 m-6 h-[127px]">
        <p className="text-gray-500 mb-2">
          {`Height ${stats.height} / Weight ${stats.weight}`}
        </p>
        <p className="text-gray-500 mb-2">
          {`Total Matches Played: ${totalMatchesPlayed}`}
        </p>
        <p className="text-gray-500 mb-2">
          {`Total Wins: ${totalWins} / Total Losses: ${totalLosses}`}
        </p>
      </div>
      <Link
        data-test-id={`read-more-${shortName}`}
        to={{ pathname: `/player/${id}` }}
        className="text-right align-middle pb-4 pr-6 text-xs font-bold uppercase text-pink-500 "
        data-ripple-dark="true"
      >
        Read More
      </Link>
    </div>
  );
};
