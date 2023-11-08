import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import HomePageLayout from '../../../layouts/HomePageLayout';
import useMouseDrag from '../../../utils/use-mouse-drag';
import LogoScene from '../../_three/LogoScene';
import MultiText from '../../_ui/MultiText';

import backgroundImg from '../../../assets/images/background.png';
import page4BG from '../../../assets/images/background-page04.png';

import styles from './styles.module.scss';
import MultiListText from '../../_ui/MultiListText';

const logoText = {
  textAr: 'منصة الإمارات الرياضية',
  textEn: 'UAE SPORTS PORTAL',
};

const description = {
  textAr:
    'منصة رقمية شاملة لجميع الجهات الرياضية القائمة في دولة الإمارات، بما في ذلك خدماتها وبياناتها الرياضية مثل معلومات الأبطال الرياضيين ووسائل الإعلام والمعلومات العامة. وسوف تستخدم الجهات تقنيات واجهة برمجة التطبيقات (API) لإعادة استخدام البيانات من أجل حلول أخرى جديدة',
  textEn:
    'A comprehensive digital platform for all UAE sports entities, including sports services and data such as information about sports champions, media and public information. The platform will use Application Programming Interface (API) technologies to reuse data for other new solutions.',
};

const description1 = [
  {
    titleAr: ':الخصائص',
    titleEn: 'Features:',
    textAr: [
      'الفعاليات الرياضية الجديده',
      'مركز الإعلام الرياضي',
      'الجهات الرياضية',
      'الخدمات الرياضية',
      'البيانات الرياضية',
    ],
    textEn: [
      'New Sports Events',
      'Sports Media Center',
      'Sports Entities',
      'Sports Services',
      'Sports Data',
    ],
  },
  {
    titleAr: ':الفوائد',
    titleEn: 'Features:',
    textAr: [
      'مكان واحد يضم الخدمات والمعلومات',
      'إيجاد فرص جديدة لإنشاء حلول رياضية جديدة',
      'الجهات الرياضية',
      'من خلال إعادة استخدام البيانات تعزيز الكفاءة والفاعلية',
    ],
    textEn: [
      'One place for services and information.',
      'Finding new opportunities to create new sports solutions through data reuse.',
      'Sports Entities',
      'Enhance efficiency and effectiveness',
    ],
  },
];

type Props = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Page4: React.FC<Props> = ({ setPageNumber }) => {
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
          src={page4BG}
          className={classNames(
            styles.pageBackground,
            'animate__animated animate__fadeIn animate__delay-2s'
          )}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* <div></div> */}
          <div className={classNames(styles.canvasWrapper)}>
            <div className={styles.canvas}>
              <LogoScene drag={mouseAction} object='/models/model-1.glb' />
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
              <source src='videos/UAE Sports Portal.mp4' type='video/mp4' />
            </video>
          )}
        </div>
      </div>
      <div className={styles.dragField}></div>
    </HomePageLayout>
  );
};

export default Page4;
