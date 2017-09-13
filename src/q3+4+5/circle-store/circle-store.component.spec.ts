import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CircleComponent } from '../circle/circle.component'
import { CircleStoreComponent } from './circle-store.component';

describe('CircleStoreComponent', () => {
  let component: CircleStoreComponent;
  let fixture: ComponentFixture<CircleStoreComponent>;
  let MIN = -100;
  let MAX = 100;
  let Y = 1000000;
  let X = 100;

  let randomInsertToStore = () => {
    for (let i = 0; i<Y; i++) { 
      let x = Math.random() * (MAX - MIN) + MIN;
      let y = Math.random() * (MAX - MIN) + MIN;
      let r = Math.random() * (MAX - MIN) + MIN;
      cCircleStore.addCircle( new CircleComponent(x,y,r));
    }
  }

  let cCircleStore = null;
  beforeEach(() => {
    cCircleStore = new CircleStoreComponent();
  });

  it('should create', () => {
    expect(cCircleStore).toBeTruthy();
  });

  it('should add ' + Y + ' circles', () => {
    randomInsertToStore();
    expect(cCircleStore.circles.length).toEqual(Y);
  });

  it('should run less than ' + X + 'ms', () => {
    randomInsertToStore();
    let beginTime = performance.now();
    let ans = cCircleStore.getOverlapingCircles(new CircleComponent(0,0,1));
    let endTime = performance.now();
    expect((endTime-beginTime) < X).toBeTruthy();
  });
});
