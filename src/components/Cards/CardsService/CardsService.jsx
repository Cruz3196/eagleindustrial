import React from 'react';
import ServiceOne from '../../../Assets/Service1.jpg';
import ServiceTwo from '../../../Assets/Service2.jpg';
import ServiceThree from '../../../Assets/Service3.jpg';
import './CardsService.css';

const services = [
    {
        src: ServiceOne,
        alt: 'serviceOne',
        title: 'Facility Construction',
        info: ['Compressor stations', 
              'Gas lift installations', 
              'Tank battery/central tank battery', 
              'Pump Stations', 
              'Process facilities',
              'Cryogenic facilities',
              'Amine facilities',
              'Lpg storage/handling facilities',
              'Metering facilities',
              'Saltwater disposal facilities (swd)',
              'Tank terminals and storage facilities'
            ]
    },
    {
        src: ServiceTwo,
        alt: 'serviceTwo',
        title: 'Pipeline Maintenance & Integrity',
        info: ['Anomaly verifications and repairs', 
                'Full assistance with caliper pig runs',
                'Recoating',
                'Pipelines repair, modification, and replacement',
                'Weld Repairs',
                'Fabrication & installation of launchers, receivers, valve sets, & risers',
                'Hydrostatic testing',
                'Replacement of fittings, valves, and drips',
                'Row maintenance and restoration'
              ]
    },
    {
        src: ServiceThree,
        alt: 'serviceThree',
        title: 'Pipeline Construction',
        info: ['Steel', 
              'Poly', 
              'Flexsteel',
              'Fiberglass',
              'Fiber Spur',
              'Fabrication pipeline & structural',
              'Fabrication Valve & Valve Set',
              'Integrity Work & Anomaly Repair',
              'Sandblasting & Painting',
              'Zap-lock',
              'Bores'
            ]
    }
];

const CardsService = () => {
  return (
    <section className='CardsService-Section'>
        <h2 className='CardsService-Header'>Our Services.</h2>
        <div className='CardsService-Container'>
            {services.map((service, index) => (
              <div key={index} className='CardsService-Card'>
                <img className='CardsService-Image' src={service.src} alt={service.alt} />
                <h3 className='CardsService-SubTitle'>{service.title}</h3>
                <ul className='CardsService-InfoList'>
                  {service.info.map((item, idx) => (
                    <li key={idx} className='CardsService-InfoItem'>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
    </section>
  );
};

export default CardsService;
