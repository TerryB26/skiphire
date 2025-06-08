import './App.css';
import PageHeader from '@root/components/PageHeader';
import recycling2 from '@root/animations/recycling2.json';
import Lottie from 'lottie-react';
import LocationForm from '@root/components/forms/LocationForm';
import HireDetails from '@root/components/HireDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader title="Skip Hire" />
        <Routes>
          <Route
            path="/"
            element={
              <div className="row-center">
                <div className="column">
                  <LocationForm />
                </div>
                {!isMobile && (
                  <div className="column hide-on-mobile">
                    <div className="lottie-container">
                      <Lottie animationData={recycling2} />
                    </div>
                  </div>
                )}
              </div>
            }
          />
          <Route path="/hire-details/:uuid" element={<HireDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;