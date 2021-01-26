class stone
{
	constructor(x,y,width,height, angle)
	{
		var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2		
			}
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
        this.image=loadImage("images/stone.png")
		this.body=Bodies.rectangle(x, y, width, height, options);
 		World.add(world, this.body);

	}
	display()
	{
		    var stonepos = this.body.position;
			push()
			// translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			fill(200,8,8)
			rect(this.x,this.y,this.width, this.height);
		    pop()
			
	}

}