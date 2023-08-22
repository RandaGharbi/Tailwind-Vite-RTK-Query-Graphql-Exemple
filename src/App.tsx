import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import { useGetPlayersQuery } from "./app/api/player/palyerApi";
import { useGetMatchesQuery } from "./app/api/match/matchApi";

import Loading from "./components/Loading/Loading";
import { Home, PlayerDetails, NotFound } from "./pages";

function AppRoutes() {
  const { isLoading: isPlayersLoading } = useGetPlayersQuery({});
  const { isLoading: isMatchesLoading } = useGetMatchesQuery({});

  if (isMatchesLoading || isPlayersLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="player/:id" element={<PlayerDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
