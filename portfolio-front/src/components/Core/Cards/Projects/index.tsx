import React from 'react';
import Button from '../../../Base/Button';

function Projects() {
  const liStyle = 'flex flex-col my-2 mx-2';
  const pTitle = 'text-font_primary font-semibold text-base';
  const pRole = 'mx-2 text-font_secondary font-semibold text-base';
  const pDate = 'mx-2 text-font_secondary font-semibold text-xs';
  return (
    <div className="p-6 flex flex-col justify-between h-full w-full">
      <div>
        <h3 className="text-xl font-semibold text-font_primary">Work</h3>
        <ul>
          <li className={liStyle}>
            <p className={pTitle}>- 0+X</p>
            <p className={pRole}>Full-Stack Developer</p>
            <p className={pDate}>2021-Current</p>
          </li>
          <li className={liStyle}>
            <p className={pTitle}>- Adidas</p>
            <p className={pRole}>Senior Full-Stack Software Engineer</p>
            <p className={pDate}>2021-2021</p>
          </li>
          <li className={liStyle}>
            <p className={pTitle}>- Routte</p>
            <p className={pRole}>Cofounder</p>
            <p className={pDate}>2020-Current</p>
          </li>
          <li className={liStyle}>
            <p className={pTitle}>- Univision Communications</p>
            <p className={pRole}>Senior Software Engineer</p>
            <p className={pDate}>2019-2021</p>
          </li>
          <li className={liStyle}>
            <p className={pTitle}>- Softseguros</p>
            <p className={pRole}>Freelance Software Engineer</p>
            <p className={pDate}>2018-2020</p>
          </li>
          <li className={liStyle}>
            <p className={pTitle}>- Globant</p>
            <p className={pRole}>Web UI Developer</p>
            <p className={pDate}>2018-2019</p>
          </li>
          <li className={liStyle}>
            <p className={pTitle}>- Rapigo</p>
            <p className={pRole}>Software Engineer</p>
            <p className={pDate}>2017-2018</p>
          </li>
        </ul>
      </div>
      <Button>
        <a>Check my work →</a>
      </Button>
    </div>
  );
}

export default Projects;
