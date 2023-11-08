import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import 'react-circular-progressbar/dist/styles.css';

import page2BG from '../../../assets/images/background-page02.png';
import background from '../../../assets/images/background.png';
import hexagon from '../../../assets/images/hexagon.png';

import HomePageLayout from '../../../layouts/HomePageLayout';
import useMouseDrag from '../../../utils/use-mouse-drag';
import Text from './components/Text';
import LogoScene from '../../_three/LogoScene';
import DoubleCircle from '../../_ui/DoubleCircle';

const title = ['VSC'];

const textArray = [
  { ar: 'المدينة الرياضية الإفتراضية', en: 'Virtual Sports City' },
  {
    ar: 'اتحاد الإمارات العربية المتحدة للواقع الافتراضي الرياضي',
    en: 'UAE Virtual Sports Federation',
  },
  { ar: 'منصة الإمارات الرياضية', en: 'UAE SPORTS PORTAL' },
  { ar: 'موسوعة الإمارات الرياضية', en: 'UAE WIKISPORTS' },
];

import styles from './styles.module.scss';
import HexagonProgressbar from './components/HexagonProgressbar';
const logos = [
  '/models/model-3.glb',
  '/models/model-4.glb',
  '/models/model-1.glb',
  '/models/model-2.glb',
];

type Props = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Page2: React.FC<Props> = ({ setPageNumber, pageIndex, setPageIndex }) => {
  const mouseAction = useMouseDrag();
  let distanceLeft = 300;
  let distanceRight = 300;
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const [position, setPosition] = useState(0);
  const [isCircle, setIsCircle] = useState(false);
  const [circleIndex, setCircleIndex] = useState(pageIndex);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const differenceM = position - startPosition;

    if (isCircle) {
      if (pageIndex === 0) {
        setDuration(
          differenceM < -300 ? -300 : differenceM < 300 ? differenceM : 300
        );
      }
      if (pageIndex === 1) {
        setDuration(
          differenceM < -300 ? -300 : differenceM < 150 ? differenceM : 150
        );
      }
      if (pageIndex === 2) {
        setDuration(
          differenceM < -150 ? -150 : differenceM < 150 ? differenceM : 150
        );
      }
      if (pageIndex === 3) {
        setDuration(
          differenceM < -150 ? -150 : differenceM < 300 ? differenceM : 300
        );
      }
    }
    if (differenceM > 0) {
      if (pageIndex === 0) {
        setCircleIndex(1);
      }
      if (pageIndex === 1) {
        setCircleIndex(2);
      }
      if (pageIndex === 2) {
        setCircleIndex(3);
      }
      if (pageIndex === 3) {
        setCircleIndex(0);
      }
    }
    if (differenceM < 0) {
      if (pageIndex === 0) {
        setCircleIndex(3);
      }
      if (pageIndex === 1) {
        setCircleIndex(0);
      }
      if (pageIndex === 2) {
        setCircleIndex(1);
      }
      if (pageIndex === 3) {
        setCircleIndex(2);
      }
    }
  }, [startPosition, endPosition, position]);

  useEffect(() => {
    const difference = endPosition - startPosition;
    if (pageIndex === 0) {
      distanceLeft = 300;
      distanceRight = 300;
    }
    if (pageIndex === 1) {
      distanceLeft = 150;
      distanceRight = 300;
    }
    if (pageIndex === 2) {
      distanceLeft = 150;
      distanceRight = 150;
    }
    if (pageIndex === 3) {
      distanceLeft = 300;
      distanceRight = 150;
    }
    if (difference > distanceLeft && !isCircle) {
      setPageIndex((prev) => (prev < 3 ? prev + 1 : 0));
      setCircleIndex(pageIndex);
    }
    if (difference < -distanceRight && !isCircle) {
      setPageIndex((prev) => (prev < 1 ? 3 : prev - 1));
      setCircleIndex(pageIndex);
    }
  }, [isCircle, endPosition, startPosition]);

  return (
    <HomePageLayout
      setPageNumber={setPageNumber}
      discover={() => setPageNumber(pageIndex + 3)}
      isClose={false}
    >
      <div
        key={pageIndex + 1}
        className='animate__animated animate__fadeIn animate__slow'
      >
        <img src={background} className={classNames(styles.pageBackground)} />
        <img
          src={page2BG}
          className={classNames(
            styles.pageBackground,
            'animate__animated animate__fadeIn animate__delay-2s'
          )}
        />
      </div>
      <img className={styles.hexagon} src={hexagon} />
      <div className={classNames(styles.logo)}>
        <div className={styles.circleWrapper}>
          <div
            className={classNames(styles.canvas, 'animate__slower', {
              [styles.model3]: pageIndex === 1,
            })}
          >
            <LogoScene
              key={pageIndex}
              object={logos[pageIndex]}
              drag={mouseAction}
              fov={pageIndex === 2 ? 40 : 35}
              isSecond={pageIndex === 2 ? true : false}
              scale={pageIndex === 1 ? true : false}
            />
          </div>
          <div
            className={classNames(styles.progressBar, {
              [styles.point1]: pageIndex === 1,
              [styles.point2]: pageIndex === 2,
              [styles.point3]: pageIndex === 3,
            })}
          >
            <HexagonProgressbar duration={duration} index={pageIndex} />
          </div>
          {isCircle && (
            <>
              {(pageIndex === 0 || circleIndex === 0) && (
                <DoubleCircle
                  className={classNames(
                    styles.circle1,
                    'animate__animated animate__fadeIn',
                    {
                      ['animate__slow']: circleIndex === 0,
                    }
                  )}
                />
              )}
              {(pageIndex === 1 || circleIndex === 1) && (
                <DoubleCircle
                  className={classNames(
                    styles.circle2,
                    'animate__animated animate__fadeIn',
                    {
                      ['animate__slow']: circleIndex === 1,
                    }
                  )}
                />
              )}
              {(pageIndex === 2 || circleIndex === 2) && (
                <DoubleCircle
                  className={classNames(
                    styles.circle3,
                    'animate__animated animate__fadeIn',
                    {
                      ['animate__slow']: circleIndex === 2,
                    }
                  )}
                />
              )}
              {(pageIndex === 3 || circleIndex === 3) && (
                <DoubleCircle
                  className={classNames(
                    styles.circle4,
                    'animate__animated animate__fadeIn',
                    {
                      ['animate__slow']: circleIndex === 3,
                    }
                  )}
                />
              )}
            </>
          )}
        </div>
      </div>
      <div key={pageIndex} className={classNames(styles.text)}>
        <p
          className={classNames(
            styles.title,
            'animate__animated animate__flipInY animate__delay-1s'
          )}
        >
          {title[pageIndex]}
        </p>
        <Text
          textAr={textArray[pageIndex].ar}
          textEn={textArray[pageIndex].en}
        />
      </div>
      <div
        className={styles.dragField}
        onMouseDown={(e) => {
          setStartPosition(e.pageX);
          setEndPosition(e.pageX);
          setDuration(0);
          setIsCircle(true);
        }}
        onTouchStart={(e) => {
          setStartPosition(e.touches[0].pageX);
          setEndPosition(e.touches[0].pageX);
          setDuration(0);
          console.log('duration: ', duration);

          setIsCircle(true);
        }}
        onMouseUp={(e) => {
          setEndPosition(e.pageX);
          setDuration(0);
          setIsCircle(false);
        }}
        onTouchEnd={(e) => {
          setEndPosition(e.changedTouches[0].pageX);
          setDuration(0);
          setIsCircle(false);
        }}
        onMouseMove={(e) => {
          setPosition(e.pageX);
        }}
        onTouchMove={(e) => {
          setPosition(e.touches[0].pageX);
        }}
      ></div>
    </HomePageLayout>
  );
};

export default Page2;
