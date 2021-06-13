class Log
{
    constructor(x,y,width,height,angle)
    {
        var option={
            'restitution' : 0.8,
            'friction': 5,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,{isStatic :true});
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle)
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange")
        rect(0,0,this.width,this.height);
        pop();     
    }

}