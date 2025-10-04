import { useState } from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import HomePage from './components/sections/HomePage';
import DataUpload from './components/sections/DataUpload';
import ModelTraining from './components/sections/ModelTraining';
import ResultsDashboard from './components/sections/ResultsDashboard';
import VisualizationHub from './components/sections/VisualizationHub';
import ExportShare from './components/sections/ExportShare';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage setCurrentSection={setCurrentSection} />;
      case 'upload':
        return <DataUpload />;
      case 'training':
        return <ModelTraining />;
      case 'results':
        return <ResultsDashboard />;
      case 'visualization':
        return <VisualizationHub />;
      case 'export':
        return <ExportShare />;
      default:
        return <HomePage setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;