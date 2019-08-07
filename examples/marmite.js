
const positions = [1, 3, 5, 7];
const max       = 128;
const minWhite  = max - Math.floor(max * 0.1);

function randInt(max)
{
    return Math.floor(Math.random() * max);
}

function setup()
{
    createAutomaton(80, 80, 6);
    framerate(Math.floor(max / 4));
}

function construct()
{
    return randInt(max / 2) + max / 2;
}

function loop()
{
    let nb = 1;
    let tmp = cell() + 1;
    for(let i = 0; i < positions.length; ++i)
    {
        let n = neighbor(positions[i]);
        if(n == null) continue;

        ++nb;
        tmp += n + 1;
    }

    tmp /= nb;
    tmp %= max;  
    
    let color = Math.floor(tmp * (256 / max));

    if(tmp < minWhite)
        background({ r: 0, g: 0, b: color});
    else 
        background({ r: color, g: color, b: color});
    
    return tmp;
}
