import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import HomePageLayout from '../../../layouts/HomePageLayout';
import useMouseDrag from '../../../utils/use-mouse-drag';
import LogoScene from '../../_three/LogoScene';
import MultiText from '../../_ui/MultiText';

import backgroundImg from '../../../assets/images/background.png';
import page6BG from '../../../assets/images/background-page06.png';

import styles from './styles.module.scss';
import MultiListText from '../../_ui/MultiListText';

const logoText = {
  textAr: 'اتحاد الإمارات العربية المتحدة للواقع الافتراضي الرياضي',
  textEn: 'UAE Virtual Sports Federation',
};

const description = [
  {
    titleAr: ':مهام الاتحاد',
    titleEn: 'Federation Mandate:',
    textAr: [
      'صياغة الأنظمة واللوائح والقوانين ذات العلاقة بالرياضة الافتراضية',
      'تصميم السياسات والأنظمة الخاصة بالرياضات الافتراضية',
      'الاشراف على تنظيم البطولات واستضافة الاحداث الرياضية الدولية ذات العلاقة بالرياضات الافتراضية',
      'تشكيل المنتخبات والفرق التى تمثل الدولة فى مجال الرياضات الافتراضية',
      'السعى نحو ان تكون دولة الامارات العربية المتحده المؤسس والمستضيف للاتحاد الاسيوى والدولى للرياضات الافتراضية',
    ],
    textEn: [
      'Drafting the rules, regulations and laws related to virtual sports.',
      'Designing policies and regulations for virtual sports.',
      'Supervising the competitions and hosting international sports events related to virtual sports',
      'Forming the teams that represent UAE in virtual sports',
      'Aiming to make UAE the founder and hosting headquarter of International Virtual Sports Federation',
    ],
  },
  {
    titleAr: ':مراحل العمل',
    titleEn: 'Work Stages:',
    textAr: [
      'تأسيس إتحاد الإمارات العربية المتحدة للواقع الافتراضي الرياضي',
      'اعداد استراتيجية الاتحاد',
      'تصميم وتنفيذ مبادرات ريادية في مجال الواقع الافتراضي الرياضي',
    ],
    textEn: [
      'stablishment of the UAE Virtual Sports Federation',
      'Preparing the strategy of the federation`s',
      'Designing and implementing pioneer initiatives in the field of virtual sports',
    ],
  },
];

type Props = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Page6: React.FC<Props> = ({ setPageNumber }) => {
  const mouseAction = useMouseDrag();
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    setIndex((prev) => prev + 1);
  }, [mouseAction]);

  useEffect(() => {
    if (index === 3) {
      setPageNumber(2);
    }
  }, [index]);

  return (
    <HomePageLayout setPageNumber={setPageNumber}>
      <div className='animate__animated animate__fadeIn animate__slow'>
        <img src={backgroundImg} className={styles.pageBackground} />
        <img
          src={page6BG}
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
              <LogoScene
                drag={mouseAction}
                scale={true}
                object='/models/model-4.glb'
              />
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
            <MultiListText
              titleAr={description[0].titleAr}
              titleEn={description[0].titleEn}
              textAr={description[0].textAr}
              textEn={description[0].textEn}
              order={2}
              className={styles.descriptionWrapper}
              classNameText={styles.descriptionAr}
              classNameTextEn={styles.descriptionEn}
            />
          )}
          {index === 2 && (
            <MultiListText
              titleAr={description[1].titleAr}
              titleEn={description[1].titleEn}
              textAr={description[1].textAr}
              textEn={description[1].textEn}
              order={2}
              className={styles.descriptionWrapper}
              classNameText={styles.descriptionAr}
              classNameTextEn={styles.descriptionEn}
            />
          )}
        </div>
      </div>
      <div className={styles.dragField}></div>
    </HomePageLayout>
  );
};

export default Page6;
