import Point from "./Point.js";
import Segment from "./Segment.js";

const reverse = (segment) => {
    const newBeginPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const newEndPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());

    const reverseSegment = new Segment(newBeginPoint, newEndPoint);

    return reverseSegment;
};

export default reverse;