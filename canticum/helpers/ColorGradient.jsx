
const createGradientLinear = (colors) => {
const colorStops = colors.map((color, index) => {
    return `rgb(${color.join(',')}) ${(index / (colors.length - 1)) * 100}%`;
});
return `linear-gradient(135deg, ${colorStops.join(', ')})`;
};

const createGradientWavy = (colors) => {
const colorStops = colors.map(color => `rgba(${color.join(',')}, 0.5)`);
return `radial-gradient(circle at 20% 20%, ${colorStops[0]} 0%, transparent 30%),
        radial-gradient(circle at 80% 30%, ${colorStops[1]} 0%, transparent 30%),
        radial-gradient(circle at 50% 50%, ${colorStops[2]} 0%, transparent 30%),
        radial-gradient(circle at 30% 70%, ${colorStops[3]} 0%, transparent 30%),
        radial-gradient(circle at 70% 80%, ${colorStops[4]} 0%, transparent 30%)`;
};

export {
    createGradientLinear, createGradientWavy
}