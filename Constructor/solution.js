import Point from "./Point.js";
import Segment from "./Segment.js";

const reverse = (segment) => {
    const beginPoint = segment.getBeginPoint();
    const endPoint = segment.getEndPoint();
    const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
    const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());

    return new Segment(newBeginPoint, newEndPoint);
};