export const calculateAngle = (
  x: number,
  y: number,
  magneticDeclination: number,
  latitude: number | null
): number => {
  let angle = Math.atan2(-x, y) * (180 / Math.PI);
  angle = angle < 0 ? angle + 360 : angle;

  let correctedAngle =
    latitude! > 0 ? angle + magneticDeclination : angle - magneticDeclination;

  if (correctedAngle < 0) {
    correctedAngle += 360;
  } else if (correctedAngle >= 360) {
    correctedAngle -= 360;
  }

  return correctedAngle;
};

export const getCompassPoints = () => [
  { angle: 0, label: "N" },
  { angle: 45, label: "NE" },
  { angle: 90, label: "E" },
  { angle: 135, label: "SE" },
  { angle: 180, label: "S" },
  { angle: 225, label: "SW" },
  { angle: 270, label: "W" },
  { angle: 315, label: "NW" },
];

export const isCardinalPointActive = (
  currentDegree: number,
  targetAngle: number,
  tolerance: number = 5
): boolean => {
  return (
    Math.abs(currentDegree - targetAngle) <= tolerance ||
    Math.abs(currentDegree - (targetAngle + 360)) <= tolerance
  );
};
