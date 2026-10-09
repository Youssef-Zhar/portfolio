import React, { useEffect, useState } from 'react';

const FaceHelmetOverlay = () => {
  const [helmetStyle, setHelmetStyle] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadFaceCoordinates = async () => {
      try {
        const response = await fetch('/face-coordinates.json');
        if (!response.ok) {
          throw new Error(`Could not load face coordinates (${response.status})`);
        }

        const { points, width, height } = await response.json();
        const getPoint = (index) => points?.find((point) => point.index === index);

        // MediaPipe Face Mesh: forehead, chin and both sides of the face.
        const forehead = getPoint(10);
        const chin = getPoint(152);
        const leftSide = getPoint(234);
        const rightSide = getPoint(454);

        if (!width || !height || !forehead || !chin || !leftSide || !rightSide) {
          throw new Error('Required face landmarks are missing from face-coordinates.json');
        }

        // The Hero portrait uses object-cover in a 4:5 container.
        // Its source is 3:4, so object-cover crops a small amount from top and bottom.
        const sourceRatio = width / height;
        const containerRatio = 4 / 5;
        const cropY = sourceRatio < containerRatio
          ? (1 - sourceRatio / containerRatio) / 2
          : 0;
        const mapY = (y) => (y - cropY) / (1 - 2 * cropY);

        const faceWidth = Math.abs(rightSide.x - leftSide.x);
        const faceHeight = Math.abs(mapY(chin.y) - mapY(forehead.y));
        const centerX = (leftSide.x + rightSide.x) / 2;
        const foreheadY = mapY(forehead.y);

        if (cancelled) return;

        setHelmetStyle({
          left: `${(centerX - faceWidth * 0.925) * 100}%`,
          top: `${(foreheadY - faceHeight * 0.16) * 100}%`,
          width: `${faceWidth * 1.85 * 100}%`,
          height: `${faceHeight * 1.8 * 100}%`,
        });
      } catch (error) {
        console.error('Iron Man helmet overlay:', error);
      }
    };

    loadFaceCoordinates();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!helmetStyle) return null;

  return (
    <img
      src="/images/ironman-helmet.jpg"
      alt=""
      aria-hidden="true"
      draggable={false}
      className="absolute pointer-events-none select-none"
      style={{
        ...helmetStyle,
        objectFit: 'fill',
        mixBlendMode: 'screen',
        filter: 'drop-shadow(0 0 12px rgba(255, 70, 40, 0.28))',
        opacity: 0.96,
        zIndex: 2,
      }}
    />
  );
};

export default FaceHelmetOverlay;
