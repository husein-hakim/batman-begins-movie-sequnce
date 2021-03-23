class rainDrops{
constructor(x, y){
    var options={
        restitution:0.1,
        friction:0.001
    }
    this.body = Bodies.circle(x, y, 5, options)
    //this.x = x
    //this.y = y
    World.add(world, this.body)

}

updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)})
    }
}

display(){
    push();
    strokeWeight(3)
    stroke("black")
    fill("blue")
    ellipse(this.body.position.x, this.body.position.y, 7, 7)
    pop();
}
}