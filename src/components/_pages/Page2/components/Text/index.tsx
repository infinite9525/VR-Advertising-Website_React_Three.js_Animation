import classNames from 'classnames';
import React from 'react';

import 'animate.css';
import styles from './styles.module.scss';

type Props = {
  textAr: string;
  textEn: string;
};

const Text: React.FC<Props> = ({ textAr, textEn }) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        'animate__animated animate__flipInY animate__delay-1s'
      )}
    >
      <p className={classNames(styles.text, styles.first)}>{textAr}</p>
      <p className={styles.text}>{textEn}</p>
    </div>
  );
};

export default Text;
