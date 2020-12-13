class box{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }
        this.Body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.Body);
    }


    display(){    
   push()     
    var pos = this.Body.postion;
    translate(pos.x , pos.y);
    rectMode(CENTER);
    fill("red"); 
    rect(0,0,this.width,this.height);
   pop()     
    }
    }

