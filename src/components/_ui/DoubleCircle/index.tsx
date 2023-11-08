import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
};

const DoubleCircle: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.inside}></div>
    </div>
  );
};

export default DoubleCircle;
