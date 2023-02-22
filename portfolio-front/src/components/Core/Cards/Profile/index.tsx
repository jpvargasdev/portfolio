import React from 'react';

import './profile.css';

function Profile() {
  return (
    <div className="card profile rounded-2xl">
      <div className="border rounded-2xl">
        <div className="content flex flex-1 flex-col p-4">
          <h2 className="text-white font-black text-2xl">Juan Vargas</h2>

          <div className="btn-more">
            <a href="/about" className="text-white font-semibold text-base">
              About me
              <img
                src="svg/right-arrow_white.svg"
                alt="right arrow"
                className="w-20 h-20"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
