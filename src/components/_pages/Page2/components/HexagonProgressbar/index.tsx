import React from 'react';
import classNames from 'classnames';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './styles.module.scss';
import { Center } from '@react-three/drei';

type Props = {
  duration: number;
  index: number;
};

const HexagonProgressbar: React.FC<Props> = ({ duration }) => {
  return (
    <div className={styles.wrapper}>
      {duration > 0 && duration <= 150 && (
        <Slider
          min={0}
          max={150}
          value={duration}
          handleStyle={{
            backgroundColor: 'white',
            width: '20px',
            height: '20px',
            marginTop: '-8px',
          }}
          trackStyle={{ backgroundColor: 'transparent' }}
          railStyle={{ backgroundColor: 'transparent' }}
          className={classNames(styles.slider, styles.slider1)}
        />
      )}
      {duration > 150 && duration <= 300 && (
        <Slider
          min={0}
          max={150}
          value={duration - 150}
          handleStyle={{
            backgroundColor: 'white',
            width: '20px',
            height: '20px',
            marginTop: '-8px',
          }}
          trackStyle={{ backgroundColor: 'transparent' }}
          railStyle={{ backgroundColor: 'transparent' }}
          className={classNames(styles.slider, styles.slider2)}
        />
      )}
      {duration < 0 && duration >= -150 && (
        <Slider
          min={0}
          max={150}
          value={-duration}
          handleStyle={{
            backgroundColor: 'white',
            width: '20px',
            height: '20px',
            marginTop: '-8px',
          }}
          trackStyle={{ backgroundColor: 'transparent' }}
          railStyle={{ backgroundColor: 'transparent' }}
          className={classNames(styles.slider, styles.slider3)}
        />
      )}
      {duration < -150 && duration >= -300 && (
        <Slider
          min={0}
          max={150}
          value={-(duration % 151)}
          handleStyle={{
            backgroundColor: 'white',
            width: '20px',
            height: '20px',
            marginTop: '-8px',
          }}
          trackStyle={{ backgroundColor: 'transparent' }}
          railStyle={{ backgroundColor: 'transparent' }}
          className={classNames(styles.slider, styles.slider4)}
        />
      )}
    </div>
  );
};

export default HexagonProgressbar;
