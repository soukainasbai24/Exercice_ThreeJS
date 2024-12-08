import { useTexture } from "@react-three/drei";
const Planes = () => {

    const map1 = useTexture("textures/gangStarr.webp");
    const map2 = useTexture("textures/nujabes.webp");
    const map3 = useTexture("textures/vinland.webp");
  return (
    
    <>
     
     <mesh position={[2, 3.8, -3]} scale={[0.48, 0.48, 0.48]}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial map={map1}  />
    </mesh>

    <mesh position={[0, 4, -3]} scale={[0.5, 0.5, 0.5]}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial map={map2} />
    </mesh>


    <mesh position={[-2, 3.8, -3]} scale={[0.5, 0.5, 0.5]}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial map={map3} />
    </mesh>

    </>
  );
};

export default Planes;
