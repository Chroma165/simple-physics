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
      const segmentLength = Math.hypot((environment[i][0]-environment[j][0]), (environment[i][1]-environment[j][1]));
      const normal = getNormalVec(environment[i], environment[j]);
      const tangent = getTangentVec(environment[i], environment[j]);
      const relPos = vecSub(this.pos, environment[i]);
      const distanceAlong = dotProduct(tangent, relPos);

      if(dotProduct(normal, relPos) <= this.radius){ // if ball is touching/behind wall
        if(distanceAlong > 0 && distanceAlong < segmentLength){ // if ball is next to wall
          let normalVel = dotProduct(normal, this.vel);
          let tangentVel = dotProduct(tangent, this.vel);
  
          if(normalVel <= 0) {
            this.vel[0] = -( normalVel  *  normal[0] ) * this.restitution
                         + (-tangentVel *  normal[1] );
            this.vel[1] = -( normalVel  *  normal[1] ) * this.restitution
                         + (-tangentVel * -normal[0] );
          }
        } else if((distanceAlong <= 0 && distanceAlong >= -this.radius) && getDistance(this.pos, environment[i]) <= this.radius){ // if ball is hitting corner
          const kindaNormal = getTangentVec(environment[i], this.pos);
          const kindaTangent = getNormalVec(environment[i], this.pos);

          let normalVel = dotProduct(kindaNormal, this.vel);
          let tangentVel = dotProduct(kindaTangent, this.vel);

          if(normalVel <= 0) {
            this.vel[0] = -( normalVel  *  kindaNormal[0] )
                         + (-tangentVel *  kindaNormal[1] );
            this.vel[1] = -( normalVel  *  kindaNormal[1] )
                         + (-tangentVel * -kindaNormal[0] );
          }
        } else if((distanceAlong >= segmentLength && distanceAlong <= segmentLength+this.radius) && getDistance(this.pos, environment[j]) <= this.radius){ // if ball is hitting other corner
          const kindaNormal = getTangentVec(environment[j], this.pos);
          const kindaTangent = getNormalVec(this.pos, environment[j]);

          let normalVel = dotProduct(kindaNormal, this.vel);
          let tangentVel = dotProduct(kindaTangent, this.vel);

          if(normalVel <= 0) {
            this.vel[0] = -( normalVel  *  kindaNormal[0] )
                         + (-tangentVel *  kindaNormal[1] );
            this.vel[1] = -( normalVel  *  kindaNormal[1] )
                         + (-tangentVel * -kindaNormal[0] );
          }
        }

      }
    }
  }


  move(deltaTime){
    this.vel = vecAdd(this.vel, this.force);
    this.vel[1] += 10;
    this.pos = vecAdd(this.pos, this.vel, deltaTime);
  }
  draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  };
}
