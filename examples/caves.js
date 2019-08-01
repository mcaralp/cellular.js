


function setup()
{
    createAutomata(100, 100, 5);
}

function construct()
{
    return {
        cave: Math.random() < 0.5
    }
}

function loop()
{
    let c = cell();
    if(c.cave)
        background({r: 255, g: 255, b: 255});
    else 
        background({r: 255, g: 0, b: 0});

    let caves = 0;
    for(let i = 0; i < 8; ++i)
    {
        let n = neighbor(i);
        if(n == null) continue;

        if(n.cave) caves++;
    }
    return {cave: (c.cave && caves >= 4) || caves >= 5};
}
