import React from 'react';

import styles from './styles.module.scss';

type Props = {
  top: number;
  left: number;
};

const Circle: React.FC<Props> = ({ top, left }) => {
  return (
    <div style={{ top: top, left: left }} className={styles.wrapper}></div>
  );
};

export default Circle;
