import React from 'react';
import Button from '../../../Base/Button';

import './link.css';

function Link() {
  const [showThanks, setShowThanks] = React.useState<boolean>(false);
  const onShowThanks = React.useCallback(() => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col p-6 flex h-full justify-between items-center">
      <div className="text-xl font-semibold text-font_secondary text-xl">
        <span className="text-font_primary">Let's talk!</span> about your
        project
        <br />
        <br />
        <span className="font-semibold text-sm text-end block">
          & my future...
        </span>
      </div>
      {!showThanks && (
        <Button>
          <a onClick={onShowThanks} href="mailto:vargasm.jp@gmail.com">
            vargasm.jp@gmail.com
          </a>
        </Button>
      )}
      {showThanks && (
        <Button>
          <p className="text-sm font-semibold">Thank you!</p>
        </Button>
      )}
    </div>
  );
}

export default Link;
