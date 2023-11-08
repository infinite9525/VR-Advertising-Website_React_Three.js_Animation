import React, { useState } from 'react';

import HomePageLayout from '../../../layouts/HomePageLayout';
import useMouseDrag from '../../../utils/use-mouse-drag';
import background0301 from '../../../assets/images/VSV.png';
import background0302 from '../../../assets/images/background-page03-02.png';
import background0303 from '../../../assets/images/background-page03-03.png';
import background0304 from '../../../assets/images/background-page03-04.png';
import background0305 from '../../../assets/images/background-page03-05.png';
import background0306 from '../../../assets/images/background-page03-06.png';
import background0307 from '../../../assets/images/background-page03-07.png';
import backgroundImg from '../../../assets/images/background.png';

import styles from './styles.module.scss';
import Page3A from './components/Page3A';
import Page3B from './components/Page3B';
import classNames from 'classnames';

const background = [
  background0301,
  background0302,
  background0303,
  background0304,
  background0305,
  background0306,
  background0307,
];

type Props = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Page3: React.FC<Props> = ({ setPageNumber }) => {
  const mouseAction = useMouseDrag();
  const [page3index, setPage3Index] = useState(0);

  return (
    <HomePageLayout setPageNumber={setPageNumber}>
      <div
        key={page3index}
        className='animate__animated animate__fadeIn animate__slow'
      >
        <img src={backgroundImg} className={styles.pageBackground} />
        <img
          className={classNames(
            styles.pageBackground,
            'animate__animated animate__fadeIn animate__delay-2s'
          )}
          src={background[page3index]}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {page3index === 0 ? (
            <Page3A setPage3Index={setPage3Index} mouseAction={mouseAction} />
          ) : (
            <Page3B
              page3Index={page3index}
              setPage3Index={setPage3Index}
              setPageNumber={setPageNumber}
              mouseAction={mouseAction}
            />
          )}
        </div>
      </div>
      <div className={styles.dragField}></div>
    </HomePageLayout>
  );
};

export default Page3;
