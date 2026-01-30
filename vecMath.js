function dotProduct(vec1, vec2) {
  return vec1[0]*vec2[0] + vec1[1]*vec2[1];
}

function vecAdd(vec1, vec2, factor = 1) {
  return [vec1[0]+vec2[0]*factor, vec1[1]+vec2[1]*factor];
}

function vecSub(vec1, vec2) {
  return [vec1[0]-vec2[0], vec1[1]-vec2[1]]
}

function normalizeVec(vec) {
  len = Math.hypot(vec[0], vec[1]);
  vec[0] /= len;
  vec[1] /= len;
}

function getNormalVec(p1, p2) {
  const dx = p2[0]-p1[0]; // delta X
  const dy = p2[1]-p1[1]; // delta Y
  const normalVec = [dy, -dx];
  normalizeVec(normalVec);
  return normalVec;
}

function getTangentVec(p1, p2) {
  const dx = p2[0]-p1[0]; // delta X
  const dy = p2[1]-p1[1]; // delta Y
  const tangentVec = [dx, dy];
  normalizeVec(tangentVec);
  return tangentVec;
}
