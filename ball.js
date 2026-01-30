class Ball{
  constructor(pos, vel, radius, mass, restitution, color, ctx) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.mass = mass;
    this.restitution = restitution;
    this.color = color;
    this.force = [0, 0];
    this.ctx = ctx;
    physObjects.push(this);
  }
  update(physObjects, environment){
    for(let i=0; i<environment.length; i++){
      let j = i >= environment.length-1 ? 0 : i+1;
      const normal = getNormalVec(environment[i], environment[j]);
      const tangent = getTangentVec(environment[i], environment[j]);

      if(dotProduct(normal, vecSub(this.pos, environment[i])) <= this.radius){ // if ball is touching wall
        let normalVel = dotProduct(normal, this.vel);
        let tangentVel = dotProduct(tangent, this.vel);

        if(normalVel <= 0) {
          console.log(this.vel);
          this.vel[0] = -( normalVel  *  normal[0] )
                       + (-tangentVel *  normal[1] );
          this.vel[1] = -( normalVel  *  normal[1] )
                       + (-tangentVel * -normal[0] );
          console.log(this.vel);
        }

      }
    }
  }
  move(deltaTime){
    this.vel = vecAdd(this.vel, this.force);
    this.pos = vecAdd(this.pos, this.vel, deltaTime);
  }
  draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  };
}