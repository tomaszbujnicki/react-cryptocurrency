import React, { useEffect } from 'react';
import settings from '../../data/settings';

const UserSettings = () => {
  useEffect(() => {
    if (navigator.language) {
      settings.language = navigator.language;
    }
  });

  console.log(settings);

  return (
    <div className="UserSettings">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default UserSettings;
