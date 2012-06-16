function Segment(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
}

function cross(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y;
}

function intersect(seg1, seg2) {
  p = seg1.p1;
  r = seg1.p2.subtract(seg1.p1);
  q = seg2.p1;
  s = seg2.p2.subtract(seg2.p1);
  rCrossS = cross(r, s);
  if(rCrossS <= 10e-6 && rCrossS >= -1 * 10e-6){
    return false;
  }
  t = cross(q.subtract(p), s)/rCrossS;
  u = cross(q.subtract(p), r)/rCrossS;
  if(0 <= u && u <= 1 && 0 <= t && t <= 1){
    intPoint = p.add(r.scalarMult(t));
    return true;
  }else{
    return false;
  }
}
