import React, { useState } from 'react';

import Page1 from '../../components/_pages/Page1';
import Page2 from '../../components/_pages/Page2';
import Page3 from '../../components/_pages/Page3';

import styles from './styles.module.scss';
import Page4 from '../../components/_pages/Page4';
import Page5 from '../../components/_pages/Page5';
import Page6 from '../../components/_pages/Page6';

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContent}>
        {pageNumber === 1 && <Page1 setPageNumber={setPageNumber} />}
        {pageNumber === 2 && (
          <Page2
            setPageNumber={setPageNumber}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        )}
        {pageNumber === 3 && <Page3 setPageNumber={setPageNumber} />}
        {pageNumber === 4 && <Page6 setPageNumber={setPageNumber} />}
        {pageNumber === 5 && <Page4 setPageNumber={setPageNumber} />}
        {pageNumber === 6 && <Page5 setPageNumber={setPageNumber} />}
      </div>
    </div>
  );
};

export default Home;
