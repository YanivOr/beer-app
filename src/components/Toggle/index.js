import React from 'react';
import './Toggle.scss';

const Toggle = ({checked, toggleChecked}) => (
  <label className="Toggle">
    <input type="checkbox" checked={checked} onChange={toggleChecked} />
    <span className="slider round"></span>
  </label>
);

export default Toggle;
