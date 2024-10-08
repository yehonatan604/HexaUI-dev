import defaultColorPalette from "../../Data/Constants/DefaultColorPalette";

export const getRandomColor = () => {
    const length = Object.keys(defaultColorPalette).length;
    return Object.values(defaultColorPalette)[Math.floor(Math.random() * length)];
};