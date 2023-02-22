import React from 'react';

import './map.css';

const lon = 18.02781;
const lat = 59.27555;
const token =
  'pk.eyJ1IjoiaWNsb3duIiwiYSI6ImNsZDliZWt5NjA3ZXAzcnBrMGMxZzkyNTIifQ.0ScYfuIbv6PLjb398nhHdA';

function Map() {
  const [zoom, setZoom] = React.useState<number>(10);
  const [image, setImage] = React.useState<string>('');

  React.useEffect(() => {
    const newImage = `https://api.mapbox.com/styles/v1/iclown/cldn9hmcd002401p4y9n6532f/static/${lon},${lat},${zoom}/500x500?access_token=${token}`;

    setImage(newImage);
  }, [zoom]);

  const increaseMapSize = () => {
    const newZoom = zoom + 1;
    setZoom(newZoom);
  };

  const decreaseMapSize = () => {
    const newZoom = zoom - 1;
    setZoom(newZoom);
  };

  return (
    <div className="w-full h-full">
      <img
        src={image}
        alt="image with map and location"
        className="map rounded-3xl h-full w-full"
      />
      <button
        className="plus text-2xl hover:shadow-2xl"
        onClick={increaseMapSize}
      >
        <p className="text-3xl">+</p>
      </button>
      <button
        className="minus text-2xl hover:shadow-2xl"
        onClick={decreaseMapSize}
      >
        <p className="text-4xl">-</p>
      </button>

      <div className="pin-container">
        <p className="text-5xl mb-4 mr-4 animate-bounce">👇</p>

        <div className="pulse-container shadow-2xl">
          <div className="pulse" />
        </div>

        <div className="pin shadow-2xl"></div>
      </div>
    </div>
  );
}

export default Map;
