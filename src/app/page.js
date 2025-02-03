import FrameComponent1 from "./components/home/frame-component1";
import FrameComponent3 from "./components/home/frame-component3";
import FrameComponent5 from "./components/home/frame-component5";
import FrameComponent6 from "./components/home/frame-component6";
import ContactInfo from "./components/home/contact-info";
import FrameComponent from "./components/home/frame-component";
import { mockTabsData } from './data';
import TabSection from './components/home/TabSection';
import Header from "./components/home/Header";


const Home = () => {
  return (
    <div>
        <FrameComponent />
      <Header/>
      <div>
        <FrameComponent1 />
        <TabSection tabsData={mockTabsData} />
        <FrameComponent3 />
        <FrameComponent5 />
        <FrameComponent6 />
      </div>
      <ContactInfo />
    
    </div>
  );
};

export default Home;
