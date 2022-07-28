import { FAVOURITES } from "./constants";

export function formatPrice(number) {
    return number.toLocaleString('hu-HU');
}

export function getFavourites(){
  return JSON.parse(localStorage.getItem(FAVOURITES));
}

export function isFavourite(adId) {
  const items = getFavourites();
  return items.some(el => parseInt(el, 10) === adId);
}