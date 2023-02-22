import React from 'react';

import './button.css';

function Button({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <div className="button-text hover:shadow text-base">{children}</div>;
}

export default Button;
