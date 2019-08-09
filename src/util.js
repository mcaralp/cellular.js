
let hsvToRgb = (c) =>
{
    let r, g, b;

    let h = c.h / 360;
    let s = c.s / 255;
    let v = c.v / 255;

    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
    }

    return {r: Math.floor(r * 255), g: Math.floor(g * 255), b: Math.floor(b * 255)};
};

let squaredDistance = (x1, y1, x2, y2) =>
{
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
};

let distance = (x1, y1, x2, y2) =>
{
    return Math.sqrt(squaredDistance(x1, y1, x2, y2));
};

let shuffle = (array) =>
{
    for (let i = array.length - 1; i > 0; --i) 
    {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

module.exports = {
    hsvToRgb: hsvToRgb,
    squaredDistance: squaredDistance,
    distance: distance,
    shuffle: shuffle
};
