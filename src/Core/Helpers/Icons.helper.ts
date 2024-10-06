const getRandomIcon = (icons: React.ReactElement[]) => {
    return icons[Math.floor(Math.random() * icons.length)];
};

export { getRandomIcon };