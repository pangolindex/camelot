import React, { useState } from 'react';
import Switch from 'react-switch';
import { PALLET } from 'styles/colors';
import PangolinIcon from 'images/icons/pangolin.svg';
import styles from './themeswitch.module.scss';

const ThemeSwitch = () => {
  const [mode, setMode] = useState<boolean>(true);

  const handleModeChange = (checked: boolean) => {
    setMode(checked);
  };

  return (
    <div className={styles.themeSwitch}>
      <Switch
        checked={mode}
        onChange={handleModeChange}
        height={41}
        width={110}
        className="theme-select"
        onColor={PALLET.dark2}
        onHandleColor={PALLET.orange}
        checkedIcon={<span className="dark">Dark</span>}
        checkedHandleIcon={<img src={PangolinIcon} alt="Pnagolin" />}
        offColor={PALLET.dark2}
        offHandleColor={PALLET.orange}
        uncheckedIcon={<span className="light">Light</span>}
        uncheckedHandleIcon={<img src={PangolinIcon} alt="Pnagolin" />}
      />
    </div>
  );
};

export default ThemeSwitch;
