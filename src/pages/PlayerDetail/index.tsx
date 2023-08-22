import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { playerByIdSelector } from "../../app/slices";
import DetailsCard from "../../components/Details";
import WinningMatchList from "../../components/Details/WinnigMatchList";
import { NotFound } from "..";

function PlayerDetail() {
  const params = useParams();
  let navigate = useNavigate();
  const player = useSelector(playerByIdSelector(params.id as string));

  if (!player) {
    return <NotFound />
  }

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-screen-md flex-col">
        <div className="py-4">
          <button onClick={() => navigate(-1)}>⬅ back</button>
        </div>
        <DetailsCard {...player} />
        <WinningMatchList winningMatches={player.winningMatches} />
      </div>
    </div>
  );
}

export default PlayerDetail;
