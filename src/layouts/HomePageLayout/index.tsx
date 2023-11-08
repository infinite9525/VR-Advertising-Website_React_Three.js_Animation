import React from 'react';
import classNames from 'classnames';

import { ReactComponent as MainLogo2 } from '../../assets/images/main-logo2.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/arrow-left.svg';
import FSFLIcon from '../../assets/icons/FSFL-01.svg';

import 'animate.css';
import styles from './styles.module.scss';

const buttonText = {
  textAr: 'استكشف',
  textEn: 'Discover',
};

type Props = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  discover?: any;
  children?: any;
  isClose?: boolean;
};

const HomePageLayout: React.FC<Props> = ({
  setPageNumber,
  discover,
  children,
  isClose = true,
}) => {
  return (
    <div className={classNames(styles.wrapper)}>
      <a href='/'>
        <MainLogo2
          className={classNames(
            styles.logo,
            'animate__animated animate__flipInX'
          )}
        />
      </a>
      <img
        src={FSFLIcon}
        className={classNames(
          styles.rightLogo,
          'animate__animated animate__flipInX'
        )}
      />
      {isClose && (
        <CloseIcon
          className={classNames(
            styles.close,
            'animate__animated animate__flipInX'
          )}
          onClick={() => {
            setPageNumber(2);
          }}
        />
      )}
      <button
        className={classNames(
          styles.next,
          'animate__animated animate__flipInX'
        )}
        onClick={discover}
      >
        <RightIcon className={styles.icon} />
        <div className={styles.textWrapper}>
          <p className={styles.text}>{buttonText.textAr}</p>
          <p className={styles.text}>{buttonText.textEn}</p>
        </div>
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default HomePageLayout;
