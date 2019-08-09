
const red     = new ColorRGB(255, 0, 0);
const green   = new ColorRGB(0, 255, 0);
const black   = new ColorRGB(0, 0, 0);
const pos     = [1, 3, 5, 7];
const drawPos = [[1, 0], [2, 1], [1, 2], [0, 1]];

function setup()
{
    createAutomaton(20, 20, 3);
    framerate(10);
    idMode(SHUFFLED);
}

function construct()
{
    return {
        id: id(),
        root: id(),
        father: -1,
        fatherId: id(),
        distance: 0
    }
}

function loop()
{
    let c = {
        id: id(),
        root: id(),
        father: -1,
        fatherId: id(),
        distance: 0
    };
    
    background(black);
    
    
    for(let i = 0; i < 4; ++i)
    {
        let n = neighbor(pos[i]);
        if(n == null) continue;
        
        if(n.root < c.root || 
           (n.root == c.root && n.distance + 1 < c.distance))
        {
            c.root = n.root;
            c.father = i;
            c.fatherId = n.id;
            c.distance = n.distance + 1;
        }
    }
    
    if(c.father != -1)
    {
        let color = {h: c.distance * 3 - 1, s: 200, v: 255};
        point(drawPos[c.father][0], drawPos[c.father][1], color);
    }
        
    for(let i = 0; i < 4; ++i)
    {
        let n = neighbor(pos[i]);
        if(n == null) continue;
        
        if(n.fatherId == id())
        {
            let color = {h: c.distance * 3 + 1, s: 200, v: 255};
            point(drawPos[i][0], drawPos[i][1], color);
        }
    }
    
    let color = {h: c.distance * 3, s: 200, v: 255};
    point(1, 1, color);
    
    return c;
}