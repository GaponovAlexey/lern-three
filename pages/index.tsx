import type { NextPage } from 'next'
import { Suspense, useRef, useState } from 'react'
// import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'

const MyModel = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('model/guard/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-7.34, 0.52, 5.11]}
          rotation={[0.72, -1.1, -1.93]}
          scale={0.1}
        >
          <mesh
            geometry={nodes.Plane_0.geometry}
            material={materials.Plane_0}
          />
        </group>
        <group position={[-1.56, -0.12, 3.06]}>
          <mesh
            geometry={nodes.Cylinder000_0.geometry}
            material={materials.wapen}
          />
        </group>
        <group position={[0.03, 0.74, 2.94]}>
          <mesh
            geometry={nodes.Avatar001_0.geometry}
            material={materials.personage}
          />
        </group>
      </group>
    </group>
  )
}

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <Suspense fallback={null}>
        <Canvas>
          <OrbitControls />
          <Physics>
            <ambientLight intensity={0.1} />
            <MyModel />
            <Floor />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
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
