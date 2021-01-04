/**
Converts an angle from degrees to radians.

Use Math.PI and the degree to radian formula to convert the angle from degrees to radians.
*/

const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708