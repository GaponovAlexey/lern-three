import { Canvas, useFrame } from '@react-three/fiber'
import type { NextPage } from 'next'
import { useRef, useState } from 'react'

const Home: NextPage = () => {
  console.log('render')

  return (
    <div className='h-screen'>
      <Canvas>
        {/* свет */}
        <ambientLight /> 
        <pointLight position={[10, 1, 10]} />
        <Box position={[-5, 0, -20]} />
        <Box position={[0, 0, -20]} />
        <Box position={[5, 0, -20]} />
      </Canvas>
    </div>
  )
}

function Box({...props}) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame(()  => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={hovered ? 'red' : 'coral'} />
    </mesh>
  )
}

export default Home
