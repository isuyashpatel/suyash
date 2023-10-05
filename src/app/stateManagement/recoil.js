import { atom, selector } from "recoil";
import { primaryColor, secondaryColor } from "../ThemeColor";

export const themeState = atom({
    key: 'themeColor',
    default: true
})

export const backgroundColor = selector({
    key: 'backgroundColor',
    get: ({ get }) => {
        return get(themeState) ? primaryColor : secondaryColor;  //if the state is
    }
})

export const constellation = selector({
    key: 'constellation',
    get: ({ get }) => {
        return get(themeState) ? secondaryColor : primaryColor;  //if the state is
    }
})
