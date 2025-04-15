import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BusStops = () => {
    const [busStops, setBusStops] = useState([]);

    useEffect(() => {
        const fetchBusStops = async () => {
            try {
                const response = await axios.get('https://api.511.org/transit/stops', {
                    params: {
                        api_key: process.env.REACT_APP_511_API_KEY
                    }
                });
                setBusStops(response.data);
            } catch (error) {
                console.error('Error fetching bus stops:', error);
            }
        };

        fetchBusStops();
    }, []);

    return (
        <div id="bus-stops">
            <h2>Select Bus Stops</h2>
            <ul>
                {busStops.map(stop => (
                    <li key={stop.id}>
                        <input type="checkbox" id={stop.id} name={stop.id} />
                        <label htmlFor={stop.id}>{stop.name}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusStops;