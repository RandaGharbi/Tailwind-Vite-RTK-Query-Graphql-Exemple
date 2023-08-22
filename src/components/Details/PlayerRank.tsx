import { PlayerDetails } from "../../app/types/player";

function PlayerRank({
  firstName,
  lastName,
  picture,
  stats,
  country,
  shortName,
}: PlayerDetails) {
  return (
    <div className="flex">
      <div className="flex flex-1 justify-start flex-col">
        <div className="text-black">
          <h1 className="text-1xl sm:text-2xl tracking-normal capitalize">
            {firstName}
          </h1>
          <h2 className="uppercase text-2xl sm:text-5xl tracking-normal leading-15">
            {lastName}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex ">
            <p
              className="text-2xl text-center"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(-180deg)",
              }}
            >
              Rank
            </p>
            <p className="text-7xl">{stats.rank}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="h-14">
              <img className="object-fill h-14" src={country.picture} alt={country.code} />
            </div>
            <div className="leading-6 font-roboto_regular text-base sm:text-3xl">
              {country.code}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <img
          className="h-auto max-w-lg ml-auto"
          src={picture}
          alt={shortName}
        />
      </div>
    </div>
  );
}

export default PlayerRank;
