import { atom } from "recoil";

export const textState = atom({
    key: 'favourites',
    default: [],
});

export const tabBarVisible = atom({
    key: 'tabBarVisible',
    default: false,
});