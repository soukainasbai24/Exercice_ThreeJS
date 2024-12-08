import { useTexture } from "@react-three/drei";


const Textures = () => {
    const map = useTexture("textures/floor.webp");
   
    return (
        <>
            <mesh>
                <planeGeometry args={[10, 10]} position={[0,2,0]} />
                <meshStandardMaterial map={map}
                displacementScale={1} />
            </mesh>
        
        </>
    );
};


export default Textures;