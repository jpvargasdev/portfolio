import type { ImageInfo } from 'google-photos-album-image-url-fetch';
import React from 'react';

const DEFAULT_PHOTO =
  'https://lh3.googleusercontent.com/DvPF9jF_pTLfx1fgJIipkbr4ns7V0G5wIankvxnH3sRlkpKj3HjBbRg20YCnPoaOywBLMeLk9X5SJ-SCZxpEiJJh6YwAE87uJB-w6hTaGGmiv3mBA6-wJMu9rBYGOomog6COt-p5uE0';

function setInitialPhotos(photos: ImageInfo[] | null): ImageInfo[][] {
  if (!photos) return [];
  const mPhotos: ImageInfo[][] = [];
  photos &&
    photos.map((photo: ImageInfo, index: number) => {
      //[[travel], [food], [rock]]
      mPhotos.push([photo]);
    });
  return mPhotos;
}

function Photos({ images }: { images: ImageInfo[] | null }) {
  const mPhotos = setInitialPhotos(images);
  const [photos, setPhotos] = React.useState<ImageInfo[]>(mPhotos[0]);

  const onSetSelected = React.useCallback((index: number) => {
    setPhotos(mPhotos[index]);
  }, []);

  const url = photos && photos.length ? photos[0].url : DEFAULT_PHOTO;

  return (
    <div className="h-full w-full rounded-3xl">
      <img
        src={url}
        alt="img"
        className="object-cover h-full w-full rounded-3xl"
      />

      <a
        href="https://photos.app.goo.gl/Mhvixre67TWXifBi9"
        className="absolute right-8 top-8 h-12 w-12 cursor-pointer hover:scale-110"
      >
        <img
          src="img/google.png"
          alt="icon google"
          className="object-contain h-full w-full"
        />
      </a>
      <div>
        <ul className="absolute bottom-2 right-8 left-8 flex flex-1 justify-around bg-background_light bg-opacity-75 rounded-full border">
          <li
            className="h-full bg-background_light rounded-full p-2 border my-2 cursor-pointer hover:scale-110"
            onClick={() => onSetSelected(0)}
          >
            <img
              src="/svg/travel.svg"
              alt="icon travel"
              className="h-6 w-6"
            ></img>
          </li>

          <li
            className="h-full bg-background_light rounded-full p-2 border my-2 cursor-pointer hover:scale-110"
            onClick={() => onSetSelected(1)}
          >
            <img src="/svg/food.svg" alt="icon travel" className="h-6 w-6"></img>
          </li>

          <li
            className="h-full bg-background_light rounded-full p-2 border my-2 cursor-pointer hover:scale-110"
            onClick={() => onSetSelected(2)}
          >
            <img src="/svg/rock.svg" alt="icon travel" className="h-6 w-6"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Photos;
