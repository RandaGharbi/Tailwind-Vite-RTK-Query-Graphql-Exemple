import { useSelector } from "react-redux";
import { playersSelector } from "../../app/slices";
import { PlayerCard } from "../../components/Card/PlayerCard";
import Loading from "../../components/Loading/Loading";

function Home() {
  const playersList = useSelector(playersSelector);
  if (!playersList) {
    return (
      <div className="grid place-items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="grid place-items-center">
        <h1 className="text-2xl font-semibold text-gray-800 ">
          🎾 Tennis League Of Legends
        </h1>
      </div>
      <div className="grid place-items-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {playersList.map((player) => (
            <PlayerCard key={player.id} {...player} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
