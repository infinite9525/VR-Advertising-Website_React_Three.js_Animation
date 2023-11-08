import classNames from 'classnames';
import React from 'react';

import { ReactComponent as DotIcon } from '../../../assets/icons/circle.svg';

import styles from './styles.module.scss';

type Props = {
  titleAr: string;
  titleEn: string;
  textAr: string[];
  textEn: string[];
  className?: string;
  order?: number;
  classNameText?: string;
  classNameTextEn?: string;
};

const MultiListText: React.FC<Props> = ({
  titleAr,
  titleEn,
  textAr,
  textEn,
  className,
  order,
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
      <div
        className={classNames(styles.textWrapper, {
          [styles.order]: order === 2,
        })}
      >
        <p className={classNames(styles.titleEn, classNameTextEn)}>{titleEn}</p>
        {textEn.map((item, index: number) => (
          <div key={index} className={classNames(styles.item, styles.en)}>
            <DotIcon className={styles.icon} />
            <p className={classNames(styles.textEn, classNameTextEn)}>{item}</p>
          </div>
        ))}
      </div>
      <div className={styles.textWrapper}>
        <p className={classNames(styles.titleAr, classNameText)}>{titleAr}</p>
        {textAr.map((item, index: number) => (
          <div key={index} className={styles.item}>
            <p className={classNames(styles.textAr, classNameText)}>{item}</p>
            <DotIcon className={styles.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiListText;
