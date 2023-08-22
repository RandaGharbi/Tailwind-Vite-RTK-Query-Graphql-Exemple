import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { renderHook, act } from "../../../utils/test-utils";
import { useGetPlayersQuery, api } from "../../api/player/palyerApi";

describe.skip("useGetPlayersQuery", () => {
  it("fetches and returns the list of matches", async () => {
    const { result } = renderHook(() => useGetPlayersQuery({}), {
      wrapper: ({ children }) => (
        <ApiProvider api={api}>{children}</ApiProvider>
      ),
    });
    await act(async () => {
      await result.current.refetch();
    });
    expect(result.current.data).toEqual([]);
  });
});
