function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
    return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
    return this.endPoint;
};

// BEGIN (write your solution here)
Segment.prototype.toString = function toString() {
    return `[(${this.beginPoint.getX()}, ${this.beginPoint.getY()}), (${this.endPoint.getX()}, ${this.endPoint.getY()})]`;
};
// END