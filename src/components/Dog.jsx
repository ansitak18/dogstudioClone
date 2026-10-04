import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { DirectionalLight } from 'three'
import { normalMap } from 'three/tsl'

const Dog = () => {

  const model = useGLTF("/models/dog.drc.glb")
  
  useThree( ({camera, scene, gl }) => {
    console.log(camera.position)
    camera.position.z = 0.55
  })
  const textures = useTexture({
    normalMap: "/dog_normals.jpg"
  })


  return (
      <>

          <primitive object={model.scene} position ={[ 0.25, -0.55, 0 ]} rotation = {[ 0, Math.PI / 3.9, 0 ]}/>
          <directionalLight position= {[ 0, 5, 5]} color={ 0xFFFFFF } intensity={10} />
          <OrbitControls />
      </>  

  )
}

export default Dog