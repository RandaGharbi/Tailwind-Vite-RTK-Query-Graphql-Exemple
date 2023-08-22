import { gql } from "graphql-request";
import rootApi from "../../rootApi";
import { QueryTag } from "../../types/queryTags";

import { Match, MatchResponse } from "../../types/match";
import { parseMatches } from "./parser";

export const api = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getMatches: builder.query<Match[], {}>({
      query: () => ({
        document: gql`
          query getMatches {
            matches {
              id
              players {
                id
                firstname
                lastname
                shortname
                picture {
                  url
                }
              }
              winner {
                id
              }
              startTime
              endTime
            }
          }
        `,
      }),
      providesTags: [QueryTag.MATCH],
      transformResponse: (response: MatchResponse) => {
        return parseMatches(response);
      },
    }),
  }),
});

export const { useGetMatchesQuery } = api;
