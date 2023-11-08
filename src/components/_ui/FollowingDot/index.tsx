import React from 'react';

import styles from './styles.module.scss';

type Props = {
  top: number;
  left: number;
};

const FollowingDot: React.FC<Props> = ({ top, left }) => {
  return (
    <div style={{ top: top, left: left }} className={styles.wrapper}></div>
  );
};

export default FollowingDot;
