import { PlayersResponse, Player } from "../../types/player";

export function parsePlayers({ players }: PlayersResponse): Player[] {
  return players.map(
    ({
      firstname,
      lastname,
      shortname,
      sex,
      picture,
      country,
      stats,
      ...rest
    }) => ({
      ...rest,
      stats: {
        ...stats,
        weight: `${stats.weight / 1000} Kg`,
        height: `${stats.height / 100} m`,
      },
      firstName: firstname,
      lastName: lastname,
      shortName: shortname,
      gender: sex,
      picture: picture.url,
      country: {
        picture: country.picture.url,
        code: country.code,
      },
    })
  );
}
