

let aliveColor = new ColorRGB(255, 0, 0);
let deadColor  = new ColorRGB(0, 255, 0);

function setup()
{
    createAutomaton(200, 200, 3);
    framerate(5);
}

function construct()
{
    return {
        alive: Math.random() < 0.5
    };
}

function loop()
{
    let c = cell();

    background(c.alive ? aliveColor : deadColor);    

    let nbAlive = 0;
    for(let i = 0; i < 8; ++i)
    {
        if(neighbor(i) != null && neighbor(i).alive) ++nbAlive;
    }

    return {alive: (c.alive && (nbAlive == 2 || nbAlive == 3)) || (!c.alive && nbAlive == 3) };
}
