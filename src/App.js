import React from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import BusStops from './components/BusStops';

function App() {
    return (
        <div className="App">
            <MapContainer />
            <BusStops />
        </div>
    );
}

export default App;