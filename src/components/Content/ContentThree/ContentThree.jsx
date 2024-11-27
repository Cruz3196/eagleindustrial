import React from 'react';
import safety2 from '../../../Assets/safety2.jpeg'
import './ContentThree.css';

const ContentThree = () => {
  return (
    <section className='Safety-Section'>
        <div className='Safety-Content'>
            <div className='Safety-Header'>
                <h1>Safety Process</h1>
            </div>
            <div className='Safety-text'>
                <h2>Onboarding & Initial Training</h2>
                    <ul>
                        <li>
                            <strong>New Hire Orientation:</strong> EIP, LOTO, hot work, H2S,
                            First aid, incident reporting, stop work authority.
                        </li>
                        <li>
                            <strong>Cross Reference Employee Information:</strong> with our
                            3rd party compliance companies (EWN, ISNetworld, Veriforce, PEC).
                        </li>
                    </ul>

                <h2>Existing Employee Training</h2>
                    <ul>
                        <li>Bi-annual Refreshers</li>
                        <li>Before Job Kicks Off</li>
                        <li>Daily Reminders</li>
                        <li>Employee Cross Training</li>
                        <li>Certification ID Badges</li>
                    </ul>

                <h2>Meetings</h2>
                    <ul>
                        <li>Daily tail-gate meetings</li>
                        <li>Weekly audits</li>
                    </ul>

                <h2>Observation Card Program</h2>
                    <ul>
                        <li>Weekly Job Safety Audits</li>
                        <li>JSA Quality Review</li>
                        <li>Trend Analysis</li>
                        <li>Root Cause Incident Analysis</li>
                        <li>Incentive, Not Punishment</li>
                    </ul>
            </div>
        </div>
        <div className='Safety-Img'>
            <img src={safety2} alt='safety-image'/>
        </div>
    </section>
  )
}

export default ContentThree