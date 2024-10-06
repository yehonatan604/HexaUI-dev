export const getRandomColor = () => {
    const colors = [
        "text-red-800",
        "text-red-300",
        "text-green-800",
        "text-green-300",
        "text-yellow-800",
        "text-yellow-300",
        "text-blue-800",
        "text-blue-300",
        "text-lime-800",
        "text-lime-300",
        "text-cyan-800",
        "text-cyan-300",
        "text-purple-800",
        "text-purple-300",
        "text-pink-800",
        "text-pink-300",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};