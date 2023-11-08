import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselItem } from 'react-round-carousel';
import 'react-round-carousel/src/index.css';

import LogoScene from '../../../../_three/LogoScene';
import MultiText from '../../../../_ui/MultiText';

import { ReactComponent as HapticIcon } from '../../../../../assets/icons/Haptic.svg';
import { ReactComponent as ARIcon } from '../../../../../assets/icons/AR.svg';
import { ReactComponent as VRIcon } from '../../../../../assets/icons/VR.svg';
import { ReactComponent as NFTsIcon } from '../../../../../assets/icons/NFTs.svg';
import { ReactComponent as BlockchainIcon } from '../../../../../assets/icons/Blockchain.svg';
import AthleticsIcon from '../../../../../assets/icons/Sports Icons-01.png';
import DefenseIcon from '../../../../../assets/icons/Sports Icons-02.png';
import FencingIcon from '../../../../../assets/icons/Sports Icons-03.png';
import WeightliftingIcon from '../../../../../assets/icons/Sports Icons-04.png';
import BoxingIcon from '../../../../../assets/icons/Sports Icons-05.png';
import CarIcon from '../../../../../assets/icons/Sports Icons-06.png';

import styles from './styles.module.scss';

const logoText = {
  textAr: 'المدينة الرياضية الإفتراضية',
  textEn: 'Virtual Sports City',
};

const descriptionText = [
  {
    textAr:
      'ساحة افتراضية مخصصة لتجربة الألعاب الرياضية، حيث يستطيع المستخدمين اكتساب معلومات عن الألعاب وتجربتها من خلال العالم الافتراضي',
    textEn:
      'A virtual arena dedicated to the sports experience, where users can gain information and experience about games through the virtual world.',
  },
  {
    textAr:
      'متجر افتراضي مخصص لعرض المنتجات المعنية بالمجال الرياضي، حيث يتم عرض المنتجات وامكانية تجربتها افتراضيا والقيام بعمليات الشراء',
    textEn:
      'A virtual store dedicated to displaying products related to the sports field, where products are displayed with the possibility to try them virtually and make purchases.',
  },
  {
    textAr:
      'مركز افتراضي مختص بالتشخيص البدني للمستخدمين، حيث يستطيع المستخدم اتمام عملية تشخيص بدني والحصول على الاستشارات',
    textEn:
      'A virtual center specialized in physical diagnosis for users, where the user can complete a physical diagnosis and obtain consultations.',
  },
  {
    textAr:
      'ساحة افتراضية يتم من خلالها تنظيم المعارض الرياضية، واستقبال الزوار وعرض الخدمات والمنتجات',
    textEn:
      'A virtual sports arena in which exhibitions are organized, welcoming visitors, displaying services and products.',
  },
  {
    textAr: 'مضمار افتراضي لممارسة رياضة الدراجات والجري',
    textEn: 'A virtual track to exercise cycling and running sports',
  },
  {
    textAr:
      'ساحة افتراضية تحتوي على أدوات لممارسة رياضات اللياقة البدنية، يتم تفعيلها وفقا للتقنيات المتوائمة في العالم الافتراضي',
    textEn:
      'A virtual arena that contains tools for practicing fitness sports, activated according to the technologies adapted in the virtual world.',
  },
];

const buttons = [
  [{ name: HapticIcon }, { name: ARIcon }, { name: VRIcon }],
  [
    { name: NFTsIcon },
    { name: BlockchainIcon },
    { name: ARIcon },
    { name: VRIcon },
  ],
  [{ name: HapticIcon }, { name: ARIcon }, { name: VRIcon }],
  [
    { name: NFTsIcon },
    { name: BlockchainIcon },
    { name: ARIcon },
    { name: VRIcon },
  ],
  [{ name: ARIcon }, { name: VRIcon }],
  [{ name: HapticIcon }, { name: ARIcon }, { name: VRIcon }],
];

const videoButtons = [
  {
    image: AthleticsIcon,
    textAr: 'رياضة ألعاب القوى',
    textEn: 'Athletics Sport',
  },
  {
    image: DefenseIcon,
    textAr: 'رياضة الكاراتيه',
    textEn: 'Karate Sport',
  },
  {
    image: FencingIcon,
    textAr: 'رياضة المبارزة',
    textEn: 'Fencing Sport',
  },
  {
    image: WeightliftingIcon,
    textAr: 'رياضة رفع الأثقال',
    textEn: 'Weightlifting Sport',
  },
  {
    image: BoxingIcon,
    textAr: 'رياضة الملاكمة',
    textEn: 'Boxing Sport',
  },
  {
    image: CarIcon,
    textAr: 'رياضة سباق السيارات',
    textEn: 'Car Racing Sport',
  },
];

const titles = [
  { textAr: 'ساحة الألعاب الرياضية', textEn: 'Sports Games Arena' },
  { textAr: 'المتجر الرياضي', textEn: 'Sports Store' },
  { textAr: 'التشخيص الرياضي', textEn: 'Sports Diagnostics' },
  { textAr: 'المعرض الرياضي', textEn: 'Sports Exhibitions Arena' },
  { textAr: 'مضمار الجري/الدراجات', textEn: 'Running/Cycling Track' },
  { textAr: 'ساحة اللياقة البدنية', textEn: 'Fitness Arena' },
];

const videos = [
  'videos/Group 01 - Sports Arena.mp4',
  'videos/Group 02 - Virtual Sports Store.mp4',
  'videos/Group 03 - Virtual Diagnostic.mp4',
  'videos/Group 04 - Virtual Exhibition.mp4',
  'videos/Group 05 - Virtual Runnig & Cycling.mp4',
  'videos/Group 06 - Virtual GYM.mp4',
];

const divisionVideos = [
  'videos/Under Group 01/01 - Athelics Sports.mp4',
  'videos/Under Group 01/02 - Defense Sports.mp4',
  'videos/Under Group 01/03 - Fencing  Sport.mp4',
  'videos/Under Group 01/04 - Weightlifting.mp4',
  'videos/Under Group 01/05 - Boxing.mp4',
  'videos/Under Group 01/06 - Car Sport.mp4',
];

type Props = {
  page3Index: number;
  setPage3Index: React.Dispatch<React.SetStateAction<number>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  mouseAction: boolean;
};

const Page3B: React.FC<Props> = ({
  page3Index,
  setPage3Index,
  setPageNumber,
  mouseAction,
}) => {
  const [index, setIndex] = useState(-1);
  const [divisionIndex, setdivisionIndex] = useState(-1);

  const items: CarouselItem[] = Array(18)
    .fill('')
    .map((_: string, index: number) => ({
      alt: 'sports icon',
      image: videoButtons[index % 6].image,
      content: (
        <div onClick={() => setdivisionIndex(index % 6)}>
          <p className={styles.labelAr}>{videoButtons[index % 6].textAr}</p>
          <p className={styles.labelEn}>{videoButtons[index % 6].textEn}</p>
        </div>
      ),
    }));

  useEffect(() => {
    if (divisionIndex === -1) {
      setIndex((prev) => prev + 1);
    }
  }, [mouseAction]);

  useEffect(() => {
    if (page3Index === 1) {
      if (index === 4) {
        if (divisionIndex === -1) {
          setPage3Index((prev) => prev + 1);
        }
        setdivisionIndex(-1);
        setIndex(0);
      }
    }
    if (page3Index === 6) {
      if (index === 3) {
        setPageNumber(2);
        setIndex(0);
      }
    }
    if (page3Index !== 6 && page3Index !== 1) {
      if (index === 3) {
        setPage3Index((prev) => prev + 1);
        setIndex(0);
      }
    }
  }, [index]);

  return (
    <>
      <div className={classNames(styles.canvasWrapper)}>
        {index !== 3 && (
          <div className={styles.canvas}>
            <LogoScene drag={mouseAction} object='/models/model-3.glb' />
            <div className={styles.text}>
              <MultiText
                key={page3Index}
                textAr={logoText.textAr}
                textEn={logoText.textEn}
                className='animate__delay-1s'
                classNameText={classNames(styles.logoTextAr)}
                classNameTextEn={classNames(styles.logoTextEn)}
              />
            </div>
          </div>
        )}
        {!(page3Index === 1 && index === 3) && (
          <div className={styles.titleWrapper}>
            <MultiText
              key={page3Index}
              textAr={titles[page3Index - 1].textAr}
              textEn={titles[page3Index - 1].textEn}
              className='animate__delay-1s'
              classNameText={classNames(styles.titleAr)}
              classNameTextEn={classNames(styles.titleEn)}
            />
          </div>
        )}
        <div
          className={classNames(
            styles.pageSlide,
            'animate__animated animate__flipInY'
          )}
        >
          <div key={page3Index}>
            {[6, 5, 4, 3, 2, 1].map(
              (item) =>
                page3Index !== item && (
                  <button
                    key={item}
                    className={styles.number}
                    onClick={() => {
                      setPage3Index(item);
                      setIndex(0);
                    }}
                  >
                    {item}
                  </button>
                )
            )}
          </div>
        </div>
      </div>
      {index === 1 && (
        <div className={styles.descriptionWrapper}>
          <MultiText
            key={page3Index}
            textAr={descriptionText[page3Index - 1].textAr}
            textEn={descriptionText[page3Index - 1].textEn}
            className={styles.description}
            classNameText={styles.descriptionAr}
            classNameTextEn={styles.descriptionEn}
          />
          <div className={styles.buttonGroup}>
            <div className={styles.buttons}>
              {buttons[page3Index - 1].map((item, num: number) => (
                <item.name
                  key={num}
                  className={classNames(
                    styles.button,
                    `animate__animated animate__bounceInRight`
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {index === 2 && (
        <video
          key={page3Index}
          className={styles.video}
          autoPlay
          muted
          onEnded={() => {
            if (page3Index === 1) {
              setIndex(3);
            } else {
              setPage3Index((prev) => prev + 1);
              setIndex(0);
              if (page3Index === 6) {
                setPageNumber(2);
              }
            }
          }}
        >
          <source src={videos[page3Index - 1]} type='video/mp4' />
        </video>
      )}
      {page3Index === 1 && index === 3 && (
        <div
          className={classNames(
            styles.division,
            'animate__animated animate__bounceInRight'
          )}
        >
          <MultiText
            textAr='ساحة الألعاب الرياضية'
            textEn='Sports Games Arena'
            classNameText={styles.titleAr}
            classNameTextEn={styles.titleEn}
          />
          <div className={styles.content}>
            <Carousel items={items} />
          </div>
        </div>
      )}
      {divisionIndex !== -1 && (
        <video
          key={divisionIndex}
          className={classNames(styles.video)}
          autoPlay
          muted
          onEnded={() => {
            setdivisionIndex(-1);
          }}
        >
          <source src={divisionVideos[divisionIndex]} type='video/mp4' />
        </video>
      )}
    </>
  );
};

export default Page3B;
