import { createApi } from "@reduxjs/toolkit/query/react";

import { QueryTag } from "./types/queryTags";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export default createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev",
  }),
  endpoints: () => ({}),
  tagTypes: [QueryTag.PLAYER, QueryTag.MATCH],
});
