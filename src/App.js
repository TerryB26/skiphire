import './App.css';
import PageHeader from '@root/components/PageHeader';
import recycling from '@root/animations/recycling.json';
import recycling2 from '@root/animations/recycling2.json';
import Lottie from 'lottie-react';
import LocationForm from '@root/components/forms/LocationForm';

function App() {
  return (
    <div className="App">
      <PageHeader title="Skip Hire" />
      <div className="row-center">
        <div className="column">
          <LocationForm />
        </div>
        <div className="column">
          <Lottie animationData={recycling2} style={{ width: "100%", height: "500px" }} />
        </div>
      </div>
    </div>
  );
}

export default App;