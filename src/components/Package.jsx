import React from 'react';
import Packagejson from './Packagejson';
// import {packagediaspora} from './package-diaspora.jpg';
// import packageDiaspora from './package-diaspora.jpg';

const Package = () => {
  return (
    <div className="package-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
      {Packagejson.map((pkg, index) => (
        <>
        { pkg['package-availability'] === 'available' &&
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', margin: '10px', padding: '20px', width: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src={pkg['package-image']} alt={pkg['package-name']} style={{ width: '100%', borderRadius: '10px' }} />
          <h2>{pkg['package-name']}</h2>
          <p>{pkg['package-description']}</p>
          <p><strong>Price:</strong> ${pkg['package-price']}</p>
          <p><strong>Start Date:</strong> {pkg['package-startdate']}</p>
          <p><strong>End Date:</strong> {pkg['package-enddate']}</p>
          <p><strong>Availability:</strong> {pkg['package-availability']}</p>
        </div>
}
        </>
      ))}
    </div>
  );
}

export default Package;
