import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import LogoScene from '../../../../_three/LogoScene';
import MultiText from '../../../../_ui/MultiText';

import styles from './styles.module.scss';

const logoText = {
  textAr: 'المدينة الرياضية الإفتراضية',
  textEn: 'Virtual Sports City',
};

const descriptionText = {
  textAr:
    'مدينة رياضية افتراضية تمكن أفراد المجتمع من خوض تجربة تفاعلية في عالم الميتافيرس، حيث ستمكنهم من تجربة الألعاب الرياضية وممارسة الرياضة المجتمعية',
  textEn:
    'Virtual sports enabling community members to experience an interactive experience in the world of metaverses, which will enable them to experience sports and practice community sports.',
};

const buttonText = [
  { textAr: 'ساحة الألعاب الرياضية', textEn: 'Sports Games Arena' },
  { textAr: 'المتجر الرياضي', textEn: 'Sports Store' },
  { textAr: 'التشخيص الرياضي', textEn: 'Sports Diagnostics' },
  { textAr: 'المعرض الرياضي', textEn: 'Sports Exhibition Arena' },
  { textAr: 'مضمار الجري/الدراجات', textEn: 'Running / Cycling Arena' },
  { textAr: 'ساحة اللياقة البدنية', textEn: 'Fitness Zone' },
];

type Props = {
  setPage3Index: React.Dispatch<React.SetStateAction<number>>;
  mouseAction: boolean;
};

const Page3A: React.FC<Props> = ({ setPage3Index, mouseAction }) => {
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    setIndex((prev) => prev + 1);
  }, [mouseAction]);

  useEffect(() => {
    if (index === 3) {
      setPage3Index((prev) => prev + 1);
    }
  }, [index]);

  return (
    <>
      <div className={classNames(styles.canvasWrapper)}>
        <div className={styles.canvas}>
          <LogoScene drag={mouseAction} object='/models/model-3.glb' />
        </div>
        <MultiText
          textAr={logoText.textAr}
          textEn={logoText.textEn}
          className='animate__delay-1s'
          classNameText={classNames(styles.logoTextAr)}
          classNameTextEn={styles.logoTextEn}
        />
      </div>
      {index !== 0 && (
        <div className={styles.descriptionWrapper}>
          <MultiText
            textAr={descriptionText.textAr}
            textEn={descriptionText.textEn}
            className={styles.description}
            classNameText={styles.descriptionAr}
            classNameTextEn={styles.descriptionEn}
          />
          <div className={styles.buttonGroup}>
            {buttonText.map((item, index: number) => (
              <button
                key={index}
                className={classNames(
                  styles.button,
                  `animate__animated animate__bounceInUp`
                )}
                onClick={() => {
                  setPage3Index(index + 1);
                }}
              >
                <p className={styles.text}>{item.textAr}</p>
                <p className={styles.text}>{item.textEn}</p>
              </button>
            ))}
          </div>
        </div>
      )}
      {index === 2 && (
        <video
          className={styles.video}
          autoPlay
          muted
          onEnded={() => {
            setPage3Index((prev) => prev + 1);
          }}
        >
          <source src='videos/VSC Main Vol 04.mp4' type='video/mp4' />
        </video>
      )}
    </>
  );
};

export default Page3A;
