import React, { useState, useEffect } from "react";
import { FAVOURITES } from "../../utils/constants";
import { isFavourite, getFavourites } from "../../utils/helpers";

export function Favourite({adId}) {

  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    setFavourite(isFavourite(adId));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const favourites = getFavourites()
    if(favourite){
      const getIndex = favourites.indexOf(adId);
      favourites.splice(getIndex, 1);
      localStorage.setItem(FAVOURITES, JSON.stringify(favourites));
      setFavourite(false);
      return 
    }
    favourites.push(adId);
    localStorage.setItem(FAVOURITES, JSON.stringify(favourites));
    setFavourite(isFavourite(adId));
  }

  return (
    <div
    onClick={handleClick}
    className={`favourite-star ${favourite ? 'filled' : ''} `}>
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.20624 21.9396L5.20383 21.9378C5.13917 21.8893 5.10924 21.8429 5.09371 21.7536C5.07337 21.6366 5.07877 21.4197 5.1936 21.0745C5.19379 21.0739 5.19399 21.0733 5.19419 21.0727L7.3323 14.7427L7.56909 14.0416L6.9679 13.6102L1.51935 9.7003L1.51936 9.70028L1.51434 9.69673C1.21534 9.48493 1.08171 9.3123 1.03024 9.20756C0.993374 9.13253 0.992083 9.08839 1.01624 9.01923L1.01768 9.01506C1.04443 8.93736 1.07975 8.89484 1.15763 8.85349C1.26004 8.79911 1.46612 8.73688 1.83143 8.74099L1.83476 8.74102L8.50582 8.79371L9.24252 8.79953L9.46642 8.09766L11.4994 1.72473C11.6189 1.35881 11.7448 1.17367 11.8299 1.08999C11.8905 1.03042 11.9309 1.01611 12.0021 1.01611C12.0751 1.01611 12.1187 1.03184 12.1801 1.0919C12.2643 1.17424 12.3892 1.35697 12.5023 1.71731L12.5023 1.71731L12.5037 1.72169L14.5377 8.09766L14.7616 8.79953L15.4983 8.79371L22.1694 8.74103L22.1727 8.74099C22.5383 8.73688 22.7427 8.79922 22.8435 8.85318C22.9189 8.89358 22.9562 8.93633 22.9848 9.02089C23.0075 9.08772 23.0068 9.1336 22.9692 9.21047C22.9181 9.31478 22.7862 9.48678 22.4898 9.69673L22.4898 9.69672L22.4848 9.7003L17.0362 13.6102L16.435 14.0416L16.6718 14.7427L18.8099 21.0727C18.8101 21.0733 18.8103 21.0739 18.8105 21.0745C18.9254 21.4197 18.9308 21.6366 18.9104 21.7536C18.8949 21.8429 18.865 21.8893 18.8003 21.9378L18.7979 21.9396C18.7416 21.982 18.7073 21.9918 18.6299 21.9799C18.5136 21.962 18.303 21.8848 17.9873 21.6559C17.9867 21.6555 17.9861 21.655 17.9854 21.6545L12.594 17.6952L12.0021 17.2605L11.4102 17.6952L6.01869 21.6545C6.01803 21.655 6.01738 21.6555 6.01672 21.656C5.7011 21.8848 5.49055 21.962 5.37421 21.9799C5.29679 21.9918 5.26248 21.982 5.20624 21.9396Z"
          stroke="#B2B2B2"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
