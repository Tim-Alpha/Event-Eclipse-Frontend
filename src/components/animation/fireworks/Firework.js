// Firework.js
import { random } from './utils';
import launch from '../../sounds/launch.mp3'
import explode from '../../sounds/explode.mp3'

export class Firework {
  constructor(canvasWidth, canvasHeight, hasInteracted) {
    this.x = random(0, canvasWidth);
    this.y = canvasHeight;
    this.targetX = random(0, canvasWidth);
    this.targetY = random(0, canvasHeight / 2);
    this.trail = [];
    this.trailLength = 5;
    this.exploded = false;
    this.particles = [];
    this.hasInteracted = hasInteracted;

    if (this.hasInteracted) {
      this.launchSound = new Audio(launch); // Path to your launch sound
      this.explodeSound = new Audio(explode); // Path to your explode sound
      this.launchSound.play(); // Play launch sound when firework is created
    }
  }

  update() {
    if (!this.exploded) {
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > this.trailLength) {
        this.trail.shift();
      }

      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 10;

      if (distance < speed) {
        this.exploded = true;
        if (this.hasInteracted) {
          this.explodeSound.play(); // Play explode sound when firework explodes
        }
        const color = `hsl(${random(0, 360)}, 100%, 50%)`;
        for (let i = 0; i < 100; i++) {
          this.particles.push(new Particle(this.targetX, this.targetY, color));
        }
      } else {
        this.x += (dx / distance) * speed;
        this.y += (dy / distance) * speed;
      }
    } else {
      this.particles.forEach((particle) => particle.update());
    }
  }

  draw(ctx) {
    if (!this.exploded) {
      ctx.beginPath();
      ctx.moveTo(this.trail[0].x, this.trail[0].y);
      for (let i = 1; i < this.trail.length; i++) {
        ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
      ctx.strokeStyle = 'white';
      ctx.stroke();
    } else {
      this.particles.forEach((particle) => particle.draw(ctx));
    }
  }

  get done() {
    return this.exploded && this.particles.every((particle) => particle.done);
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = random(2, 5);
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
    this.gravity = 0.05;
    this.alpha = 1;
    this.color = color;
  }

  update() {
    this.speedY += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.02;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  get done() {
    return this.alpha <= 0;
  }
}
