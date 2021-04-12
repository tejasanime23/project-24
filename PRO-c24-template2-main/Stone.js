class Stone{
	constructor(x,y) {
		var options=
		{
		  restitution:0.9,
		  friction:0.8,
		  density:12
		}
		this.body = Bodies.rectangle(x, y, 100, 50, options);
		this.width = 250;
        this.height = 50;
        World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;	
			rectMode(CENTER);
			fill("green");
			rect(pos.x, pos.y, this.width, this.height);
		  
	}
}