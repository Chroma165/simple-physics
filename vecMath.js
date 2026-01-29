function dotProduct(vec1, vec2) {
  return vec1[0]*vec2[0] + vec1[1]*vec2[1];
}

function normalizeVec(vec) {
  len = Math.hypot(vec[0], vec[1]);
  vec[0] /= len;
  vec[1] /= len;
}

function getNormalVec(p1, p2) {
  const dx = p1[0]-p2[0]; // delta X
  const dy = p1[1]-p2[1]; // delta Y
  const m = dy/dx;        // Slope
  const normalVec = [m, 1];
  normalizeVec(normalVec);
  return normalVec;
}

function getTangentVec(p1, p2) {
  const dx = p1[0]-p2[0]; // delta X
  const dy = p1[1]-p2[1]; // delta Y
  const m = dy/dx;        // Slope
  const tangentVec = [m, 1];
  normalizeVec(tangentVec);
  return tangentVec;
}
