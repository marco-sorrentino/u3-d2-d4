import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const FavIndicator = () => {
  const favLength = useSelector((state) => state.favourite.content.length);
  return (
    <>
      <Link to={"/favourites"}>
        <p>Favourites: {favLength}</p>
      </Link>
    </>
  );
};
