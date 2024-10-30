import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Island from "../models/island";
import Loader from "../components/loader";
import Sky from "../models/sky";
import Bird from "../models/bird";
import Plane from "../models/plane";

export const Home = () => {
const [isRotating,setIsRotating] = useState(false)

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1,4.7,0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale,screenPosition,rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale,screenPosition 

    if (window.innerWidth < 768) {
      screenScale = [1.55, 1.55, 1.55];
      screenPosition=[0,-1.5,0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition=[0,-4,-4]
    }

    return [screenScale,screenPosition]
  }

  const [currentStage, setCurrentStage] = useState(1);
  const [islandScale, islandPosition,islandRotation] = adjustIslandForScreenSize()
  const [planeScale, planePosition]= adjustPlaneForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating?
            'cursor-grabbing': 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,10,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1}/>
          
          <Bird/>
          <Sky/>
          <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
          Scale={planeScale}
          position={planePosition}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
