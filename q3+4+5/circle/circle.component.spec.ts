import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CircleComponent } from './circle.component';

describe('CircleComponent', () => {
  let cCircle = null;
  beforeEach(() => {
    cCircle = new CircleComponent(1,1,2);
  });

  it('should create', () => {
    expect(cCircle).toBeTruthy();
  });

  it('should be [1,1,2]', () => {
    expect([cCircle.x,cCircle.y,cCircle.r]).toEqual([1,1,2]);
  });

  it('should overlap', () => {
    let circle2 = new CircleComponent(1,1,3);
    expect(cCircle.isOverlapping(circle2)).toBe(true);
  });

  it('should not overlap', () => {
    let circle2 = new CircleComponent(4,4,1);
    expect(cCircle.isOverlapping(circle2)).toBe(false);
  });

  it('should overlap itself', () => {
    expect(cCircle.isOverlapping(cCircle)).toBe(true);
  });

});
