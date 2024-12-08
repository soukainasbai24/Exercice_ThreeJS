import { useRef } from "react";
//import Model from "./Model";


const Light = () => {
    const  light = useRef();

    return (
    <>
    <directionalLight
        ref={light}
        position={[0, 10, 0]}
        intensity={0.5}
        castShadow
    />

    


    </>
    
  );
};

export default Light;