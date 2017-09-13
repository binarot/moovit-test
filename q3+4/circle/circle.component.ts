
export class CircleComponent {
  x : any;
  y: any;
  r: any;

  constructor(x: any,y: any,r:any) { 
    this.x = x;
    this.y = y;
    this.r = r;
  }

  isOverlapping(circle : CircleComponent) {
    // (x-x')^2+(y-y')^2 <= (r+r')^2
    let distance =  Math.pow(this.x-circle.x,2) + Math.pow(this.y-circle.y,2);
    let radii = Math.pow(this.r+circle.r,2);
    if (distance <= radii) {
      return true;
    } else {
      return false;
    }
  }
}
