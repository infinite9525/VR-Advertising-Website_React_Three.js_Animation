import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type Props = {
  textAr: string;
  textEn: string;
  className?: string;
  classNameText?: string;
  classNameTextEn?: string;
};

const MultiText: React.FC<Props> = ({
  textAr,
  textEn,
  className,
  classNameText,
  classNameTextEn,
}) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        'animate__animated animate__flipInY',
        className
      )}
    >
      <p className={classNames(styles.textAr, classNameText)}>{textAr}</p>
      <p className={classNames(styles.textEn, classNameTextEn)}>{textEn}</p>
    </div>
  );
};

export default MultiText;
