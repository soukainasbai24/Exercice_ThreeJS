import { Environment } from '@react-three/drei';
import Model from '../experience/Model';
import Ground from './Ground';
import PLanes from './Planes';
import Light from './Light';
import Particles from './Particles';

const Index = () => {
  return (
    <>
    <Environment preset='city' />
     <Model />
     <Ground />
     <PLanes />
     <Light />
     <Particles/>
    </>
  );
};

export default Index;
