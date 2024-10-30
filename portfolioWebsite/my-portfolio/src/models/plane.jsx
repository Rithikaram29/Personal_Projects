import { useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '../assets/assets/3d/plane.glb'
import { useEffect, useRef } from 'react'


const Plane = ({isRotating,...props})=>{
  const ref = useRef()

const {scene,animations} = useGLTF(planeScene)
const {actions} = useAnimations(animations,ref)

useEffect(()=>{
  console.log(actions)
  if(isRotating){
    actions['Take 001'].play();
   

  }else{
    actions['Take 001'].stop();
  }
},[actions,isRotating])
    return(
      <mesh{ ...props} >
        <primitive object={scene}/>
      </mesh>
    )
}

export default Plane