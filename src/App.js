//React app that takes an imperial height as input and outputs the metric height conversion
import './App.css';
import { useState } from 'react';

function App() {
    const [imperialValue, setImperialValue] = useState(0);
    const [metricValue, setMetricValue] = useState(0);

    const handleChange = (e) => {
        setImperialValue(e.target.value);
        setMetricValue(e.target.value*0.0254)
        };

    return (
      <>
           <label>
              Imperial height in inches:
              <input
                value={imperialValue}
                onChange={handleChange}
                type="number"
              />
           </label>
           <p>Metric height is {metricValue} metres.</p>
      </> 
    );
}

export default App;