import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import "./_favorites.scss";
import FavoriteProductDetails from "./FavoriteProductDetails";
import { ToastContainer } from "react-toastify";

const Favorites = () => {
  const { user } = useSelector((state) => state.userStore);
  const [hover, setHover] = useState(false);

  const showDetails = () => {
    return (
      <div
        className="details"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {user?.favorites?.map((favorite) => (
          <FavoriteProductDetails
            key={favorite}
            productId={favorite}
            user={user}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="favorites-wrapper">
      <div
        className="favorites"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MdFavoriteBorder className="icon" /> Favorites
        <span>({user?.favorites?.length})</span>
      </div>
      <ToastContainer />
      {hover && showDetails()}
    </div>
  );
};

export default Favorites;
