import BatterySection from "./sections/BatterySection";
import CameraSection from "./sections/CameraSection";
import ColorSection from "./sections/ColorSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import ProcessorSection from "./sections/ProcessorSection";
import Quote from "./sections/Quote";
import { GlobalStyles } from "./styles/GlobalStyles";


function App() {
  return (
    <>
      <GlobalStyles />
      <Quote />
      <PhoneModel/> 
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorSection />
      <CameraSection/>
    </>
  );
}

export default App;
