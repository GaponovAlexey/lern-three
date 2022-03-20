import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[18.66, 112.12, -37.24]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      >
        <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} />
        <group rotation={[1.16, 0.1, -0.21]}>
          <mesh
            // geometry={nodes.robot.geometry}
            // material={materials.metal}
            material-color='green'
            geometry={nodes.Rz_123_Afrodyta_z_Melos_119K_0.geometry}
            material={nodes.Rz_123_Afrodyta_z_Melos_119K_0.material}
          />
          <mesh
            geometry={nodes.Rz_123_Afrodyta_z_Melos_119K_0_1.geometry}
            material={nodes.Rz_123_Afrodyta_z_Melos_119K_0_1.material}
          />
          <mesh
            geometry={nodes.Rz_123_Afrodyta_z_Melos_119K_0_2.geometry}
            material={nodes.Rz_123_Afrodyta_z_Melos_119K_0_2.material}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
