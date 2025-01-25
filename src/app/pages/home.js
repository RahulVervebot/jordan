import FrameComponent1 from "../components/frame-component1";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import ContactInfo from "../components/contact-info";
import FrameComponent from "../components/frame-component";
import { mockTabsData } from '../data';
import TabSection from '../components/TabSection';
import Header from "../components/Header";


const Home = () => {
  return (
    <div>
        <FrameComponent />
      <Header/>
      <main>
        <FrameComponent1 />
        <TabSection tabsData={mockTabsData} />
        <FrameComponent3 />
        <FrameComponent5 />
        <FrameComponent6 />
      </main>
      <ContactInfo />
    
    </div>
  );
};

export default Home;
