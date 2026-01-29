class Ball{
  constructor(pos, vel, radius, mass, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.mass = mass;
    this.color = color;
    this.force = [0, 0];
    instances.push(this);
  }
}