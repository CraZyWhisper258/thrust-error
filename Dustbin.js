class Dustbin
{
	constructor(x,y)
	{
		
		this.dustbinImage = loadImage("sprites/dustbin.png")
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;

	}
	display()
	{
			image(this.dustbinImage,1100,400,200,260)
			this.dustbinImage.position = 1200
			

			
	}

}