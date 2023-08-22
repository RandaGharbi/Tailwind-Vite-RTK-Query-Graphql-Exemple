import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { renderHook, act } from "../../../utils/test-utils";
import { useGetMatchesQuery, api } from "../../api/match/matchApi";

describe.skip("useGetMatchesQuery", () => {
  it("fetches and returns the list of matches", async () => {
    const { result } = renderHook(() => useGetMatchesQuery({}), {
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
