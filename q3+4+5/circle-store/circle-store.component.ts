import {CircleComponent} from '../circle/circle.component'

export class CircleStoreComponent {
  circles : Array<CircleComponent>;

  constructor() {
    this.circles = [];
   }

  addCircle(circle: CircleComponent) {
    this.circles.push(circle);
  }

  getOverlapingCircles(circle: CircleComponent) {
    let answer = [];
    for (let i = 0; i<this.circles.length; i++) {
      if (circle.isOverlapping(this.circles[i])) {
        answer.push(this.circles[i]);
      }
    }
    return answer;
  }

}
