import { gql } from "graphql-request";
import rootApi from "../../rootApi";
import { QueryTag } from "../../types/queryTags";

import { PlayersResponse, Player } from "../../types/player";
import { parsePlayers } from "./parser";

export const api = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query<Player[], {}>({
      query: () => ({
        document: gql`
          query getPlayers {
            players {
              id
              firstname
              lastname
              shortname
              sex
              picture {
                url
              }
              country {
                picture {
                  url
                }
                code
              }
              stats {
                rank
                points
                weight
                height
                age
              }
            }
          }
        `,
      }),
      providesTags: [QueryTag.PLAYER],
      transformResponse: (response: PlayersResponse) => {
        return parsePlayers(response);
      },
    }),
  }),
});

export const { useGetPlayersQuery } = api;
