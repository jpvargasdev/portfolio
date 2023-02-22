import React from 'react';
import Button from '../../../Base/Button';

import './twitter-card.css';

function TwitterCard({ link, label }: { link: string; label: string }) {
  return (
    <div className="p-6 twitter-container flex justify-between h-full w-full flex-col">
      <div className="flex justify-between items-start">
        <div className="flex justify-start items-center">
          <a href="https://twitter.com/jpvargasdev">
            <img
              src="twitter-profile.jpeg"
              alt="twitter profile image"
              className="twitter-header_profile"
            />
          </a>

          <a
            className="twitter-header_profile_text ml-2"
            href="https://twitter.com/jpvargasdev"
          >
            <p className="text-xl font-semibold text-font_primary leading-none">
              Juan ✦
            </p>
            <p className="text-sm font-medium text-font_secondary">
              @jpvargasdev
            </p>
          </a>
        </div>

        <div>
          <a href="https://twitter.com/jpvargasdev">
            <img
              src="svg/twitter-logo.svg"
              alt="twitter logo"
              className="flex twitter-header_logo"
            />
          </a>
          <div className="twitter-background" />
        </div>
      </div>

      <div className="twitter-description h-full mt-12">
        <p className="font-medium text-font_primary text-xl">
          i: create / design / develop and break things...
        </p>
      </div>

      <Button>
        <a href={link}>{label}</a>
      </Button>
    </div>
  );
}

export default TwitterCard;
