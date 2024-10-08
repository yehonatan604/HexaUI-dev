import defaultColorPalette from "../../UI/Themes/DefaultColorPalettes";

export const getRandomColor = () => {
    const length = Object.keys(defaultColorPalette).length;
    return Object.values(defaultColorPalette)[Math.floor(Math.random() * length)];
};