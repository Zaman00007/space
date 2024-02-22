import React from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar";
import CosmoCast from "./components/CosmoCast";


const App = () => {
const API_URL = 'https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=EMTkcLCSO1ZdgNMp6U1JGICVh1iqgg2yonmguwcc';


fetch(`${API_URL}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="fixed right-0 top-0 h-[700[px]] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* <CosmoCast /> */}
        <Navbar />
      </div>
    </div>
  );
};

export default App;
