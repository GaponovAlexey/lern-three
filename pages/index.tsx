import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense, useRef, useState } from 'react'
// import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Physics, useBox, usePlane } from '@react-three/cannon'

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <Suspense fallback={null}>
        <Canvas>
          <Physics>
            {/* свет  */}
            <ambientLight intensity={0.1} />
            {/* направленый свет */}
            <pointLight position={[10, 10, 10]} />
            <Box position={[5, 0, 3]} />
            <Box position={[5, 1, 1]} />
            <Box position={[5, 2, 2]} />
            <Floor />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  )
}

function Box(props) {
  // const [create] = useLoader(TextureLoader, ["../public/img/1.jpg"])
  const [create, two, three] = useLoader(TextureLoader, [
    'img/1.jpg',
    'img/2.jpg',
    'img/5.jpg',
  ])

  const [ref] = useBox(() => ({
    position: [0, 2, 0],
    mass: 2,
  }))
  const [clicked, click] = useState(false)
  // useFrame(() => (ref.current.rotation.x += 0.01))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 5 : 1}
      onClick={(event) => click(!clicked)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={three} />
    </mesh>
  )
}

const Floor = (props) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -2, -1],
  }))
  const [create] = useLoader(TextureLoader, ['img/1.jpg'])
  return (
    <mesh ref={ref} {...props}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={create} />
    </mesh>
  )
}

export default Home
