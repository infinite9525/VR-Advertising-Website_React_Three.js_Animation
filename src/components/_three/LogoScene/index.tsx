/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from 'react';
import { OrbitControls, SpotLight, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  drag?: boolean;
  object: string;
  fov?: number;
  isSecond?: boolean;
  scale?: boolean;
};

const LogoScene: React.FC<Props> = ({
  drag,
  object,
  fov = 25,
  isSecond = false,
  scale = false,
}) => {
  const { scene } = useGLTF(object);
  const [speed, setSpeed] = useState(5.0);

  const changeSpeed = () => {
    setSpeed(5.0);
  };

  useEffect(() => {
    setSpeed(30);
    setTimeout(changeSpeed, 1000);
  }, [drag]);

  return (
    <div
      className={classNames(
        styles.wrapper,
        'animate__animated animate__fadeIn',
        {
          [styles.model3]: isSecond,
        }
      )}
    >
      <Suspense fallback={<p>loading</p>}>
        <Canvas
          camera={{ fov: fov, far: 20000, position: [0, 0, 200] }}
          className={styles.canvas}
        >
          <SpotLight position={[0, 0, 0]} />
          <ambientLight />
          <pointLight position={[-1000, 0, 0]} />
          <pointLight position={[1000, 0, 0]} />
          <pointLight position={[0, 1000, 0]} />
          <pointLight position={[0, -1000, 0]} />
          <pointLight position={[0, 0, -1000]} />
          <pointLight position={[0, 0, 1000]} />
          <OrbitControls
            autoRotate
            autoRotateSpeed={speed}
            minDistance={2}
            target={[0, 0, 0]}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enableDamping={false}
          />
          <Suspense fallback={null}>
            <primitive
              object={scene}
              position={[0, 0, 0]}
              scale={scale ? [0.07, 0.07, 0.07] : [1, 1, 1]}
            />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default LogoScene;

useGLTF.preload('/models/model-3.glb');
