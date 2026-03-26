import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RotatingSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]}>
      <meshStandardMaterial
        color="#000000"
        wireframe
        transparent
        opacity={0.05}
      />
    </Sphere>
  )
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{
          clearColor: '#ffffff',
          antialias: true
        }}
      >
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

export default Background3D
