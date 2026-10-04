import React from 'react'
import * as THREE from "three"
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'


const Dog = () => {

  const model = useGLTF("/models/dog.drc.glb")
  
  useThree( ({camera, scene, gl }) => {
    camera.position.z = 0.55
    gl.toneMapping = THREE.ReinhardToneMapping
    gl.outputColorSpace = THREE.SRGBColorSpace

  })

  const textures = useTexture({
      normalMap: "models/dog_normals.jpg",
      sampleMatCap: "/matcap/mat-2.png"
  })

 

  model.scene.traverse((child) => {
      if(child.name.includes("DOG")){
        child.material = new THREE.MeshMatcapMaterial({
            normalMap:textures.normalMap,
            matcap:textures.sampleMatCap
        })
      }
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