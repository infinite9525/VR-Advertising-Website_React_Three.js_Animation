import classNames from 'classnames';
import React, { useEffect, useState, useRef } from 'react';

import 'animate.css';
import styles from './styles.module.scss';
import Circle from '../../_ui/Circle';
import useMousePosition from '../../../utils/useMousePosition';
import FollowingDot from '../../_ui/FollowingDot';

const description = {
  ar: 'اضغط في اي مكان لتبدأ',
  en: 'Press anywhere to start',
};

type Props = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Page1: React.FC<Props> = ({ setPageNumber }) => {
  const [isLoading, setIsLoading] = useState(true);
  const vid: any = useRef();
  const mousePosition = useMousePosition();

  const videoStop = () => {
    setIsLoading(false);
    vid.current.pause();
  };

  useEffect(() => {
    setTimeout(videoStop, 12000);
  }, []);

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        if (!isLoading) {
          setPageNumber(2);
        }
      }}
    >
      <video
        ref={vid}
        className={styles.video}
        autoPlay
        muted
        onEnded={() => {
          setIsLoading(false);
        }}
      >
        <source src='videos/Intro Animation.mp4' type='video/mp4' />
      </video>
      {!isLoading && (
        <div
          className={classNames(
            styles.textWrapper,
            'animate__animated animate__fadeIn animate__slower'
          )}
        >
          <p className={classNames(styles.textAr)}>{description.ar}</p>
          <p className={classNames(styles.textEn)}>{description.en}</p>
        </div>
      )}
      <Circle
        top={mousePosition.y === 0 ? -30 : mousePosition.y}
        left={mousePosition.x === 0 ? -30 : mousePosition.x}
      />
      <FollowingDot
        top={mousePosition.y === 0 ? -30 : mousePosition.y}
        left={mousePosition.x === 0 ? -30 : mousePosition.x}
      />
    </div>
  );
};

export default Page1;
