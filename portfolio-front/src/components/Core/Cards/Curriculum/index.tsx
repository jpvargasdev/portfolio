import React from 'react';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import Button from '../../../Base/Button';

function CurriculumCard() {
  return (
    <div className="flex flex-1 flex-col h-full justify-between p-6">
      <Lottie loop play path="lottie/cv.json" />
      <Button>
        <a href="https://drive.google.com/file/d/1gdPGUCfF5k_vEiy5hesaeY7hH0m-CAjo/view?usp=sharing">
          View my resume →
        </a>
      </Button>
    </div>
  );
}

export default CurriculumCard;
