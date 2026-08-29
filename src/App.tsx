import Header from './components/Header';
import Hero from './components/Hero';
import TrainSection from './components/TrainSection';
import BusSection from './components/BusSection';
import ScheduleSection from './components/ScheduleSection';
import MapSection from './components/MapSection';
import AIAssistant from './components/AIAssistant';
import UpdateFooter from './components/UpdateFooter';

function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Header />
      <Hero />
      <TrainSection />
      <BusSection />
      <ScheduleSection />
      <MapSection />
      <AIAssistant />
      <UpdateFooter />
    </div>
  );
}

export default App;
