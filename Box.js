class BOX{
    constructor(x,y,w,h){
        var options={
            restitution:0.7,
            friction:0.3,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
    }
}