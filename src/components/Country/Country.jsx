import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);

    }

    const passWithParams = () => handleVisitedCountry(country);


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'black' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p> Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark as visit</button>
            <button onClick={handleVisited}>Visited</button>
            {visited && 'I have visited this country.'}
        </div>
    );
};

export default Country;