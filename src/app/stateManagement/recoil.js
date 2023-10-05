import { atom, selector } from "recoil";

export const themeState = atom({
    key: 'themeColor',
    default: true
})

export const backgroundColor = selector({
    key: 'backgroundColor',
    get: ({ get }) => {
        return get(themeState) ? "#000" : "#fff";  //if the state is
    }
})

export const constellation = selector({
    key: 'constellation',
    get: ({ get }) => {
        return get(themeState) ? "#fff" : "#000";  //if the state is
    }
})
