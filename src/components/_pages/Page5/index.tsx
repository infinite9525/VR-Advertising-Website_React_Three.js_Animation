import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import HomePageLayout from '../../../layouts/HomePageLayout';
import useMouseDrag from '../../../utils/use-mouse-drag';
import LogoScene from '../../_three/LogoScene';
import MultiText from '../../_ui/MultiText';

import backgroundImg from '../../../assets/images/background.png';
import page5BG from '../../../assets/images/background-page05.png';

import styles from './styles.module.scss';
import MultiListText from '../../_ui/MultiListText';

const logoText = {
  textAr: 'موسوعة الإمارات الرياضية',
  textEn: 'UAE WIKISPORTS',
};

const description = {
  textAr:
    'موسوعة رقمية لتوثيق المعرفة والمعلومات الرياضية التي تأتي من المجتمع مثل الأحداث الرياضية والأخبار الرياضية والسير الذاتية والمعلومات التاريخية. وسوف تستخدم المنصة تقنيات الذكاء الاصطناعي لتعزيز دقة الموسوعة وإنشاء وربط المعلومات الرياضية ببعضها تلقائيًا',
  textEn:
    'A digital encyclopedia documenting sports knowledge and information that comes from the community such as sports events, sports news, biographies and historical information. The platform will use artificial intelligence techniques to enhance the accuracy of the encyclopedia and automatically create and link sports information together.',
};

const description1 = [
  {
    titleAr: ':الخصائص',
    titleEn: 'Features:',
    textAr: [
      'المقالات الرياضية',
      'الجهات الرياضية',
      'المعلومات الرياضية',
      'التعاون المشترك',
    ],
    textEn: [
      'Sports Articles',
      'Sports Entities',
      'Sports Information',
      'Enhance Collaboration',
    ],
  },
  {
    titleAr: ':الفوائد',
    titleEn: 'Benefits:',
    textAr: [
      'موسوعة رياضية رقمية',
      'تقنيات الذكاء الاصطناعي لتعزيز الدقة',
      'استقصاء المعلومات الرياضية من خلال المجتمع',
    ],
    textEn: [
      'Digital sports encyclopedia',
      'Artificial intelligence techniques to enhance accuracy',
      'Sports intelligence through the community',
    ],
  },
];

type Props = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Page5: React.FC<Props> = ({ setPageNumber }) => {
  const mouseAction = useMouseDrag();
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    setIndex((prev) => prev + 1);
  }, [mouseAction]);

  useEffect(() => {
    if (index === 5) {
      setPageNumber(2);
    }
  }, [index]);

  return (
    <HomePageLayout setPageNumber={setPageNumber}>
      <div className='animate__animated animate__fadeIn animate__slow'>
        <img src={backgroundImg} className={styles.pageBackground} />
        <img
          src={page5BG}
          className={classNames(
            styles.pageBackground,
            'animate__animated animate__fadeIn animate__delay-2s'
          )}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={classNames(styles.canvasWrapper)}>
            <div className={styles.canvas}>
              <LogoScene drag={mouseAction} object='/models/model-2.glb' />
            </div>
            <MultiText
              textAr={logoText.textAr}
              textEn={logoText.textEn}
              className='animate__delay-1s'
              classNameText={classNames(styles.logoTextAr)}
              classNameTextEn={styles.logoTextEn}
            />
          </div>
          {index === 1 && (
            <MultiText
              textAr={description.textAr}
              textEn={description.textEn}
              className={styles.descriptionWrapper}
              classNameText={styles.descriptionAr}
              classNameTextEn={styles.descriptionEn}
            />
          )}
          {index === 2 && (
            <MultiListText
              titleAr={description1[0].titleAr}
              titleEn={description1[0].titleEn}
              textAr={description1[0].textAr}
              textEn={description1[0].textEn}
              className={styles.descriptionWrapper1}
              classNameText={styles.descriptionAr}
              classNameTextEn={styles.descriptionEn}
            />
          )}
          {index === 3 && (
            <MultiListText
              titleAr={description1[1].titleAr}
              titleEn={description1[1].titleEn}
              textAr={description1[1].textAr}
              textEn={description1[1].textEn}
              order={2}
              className={styles.descriptionWrapper2}
              classNameText={styles.descriptionAr}
              classNameTextEn={styles.descriptionEn}
            />
          )}
          {index === 4 && (
            <video
              className={styles.video}
              autoPlay
              muted
              onEnded={() => {
                setPageNumber(2);
              }}
            >
              <source src='videos/UAE WikiSports.mp4' type='video/mp4' />
            </video>
          )}
        </div>
      </div>
      <div className={styles.dragField}></div>
    </HomePageLayout>
  );
};

export default Page5;
