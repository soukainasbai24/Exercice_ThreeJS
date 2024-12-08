import Textures from "./Textures";

const Ground = () => {
    return (
        <>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <boxGeometry args={[10, 10,0.48]} />
          <meshStandardMaterial>
            <Textures /> 
          </meshStandardMaterial>
        </mesh>
  
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.75, 0]}>
          <Textures />
        </mesh>
      </>
    );
  };
  
  export default Ground;