'use client'

import React, { useState } from 'react';
import BodyHeading from '../components/bodyHeading';
import LandingContent from '../components/landingContent';
import RoleFilter from '../components/RoleFilter';
import DurationFilter from '../components/DurationFilter';
import LocationFilter from '../components/LocationFilter';

export default function Jobs() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const handleRoleChange = (roles: string[]) => {
    setSelectedRoles(roles);
  };

  const handleDurationChange = (durations: string[]) => {
    setSelectedDurations(durations);
  };

  const handleLocationChange = (locations: string[]) => {
    setSelectedLocations(locations);
  };

  return (
    <main>
      <LandingContent
        heading="Discover your \nNext Job"
        subheading="Explore your passions"
      />

      <div className="container mx-auto">
        <BodyHeading marginTop="8vw" marginBottom="2vw">Jobs at Verdantia</BodyHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] ml-[8vw] mr-[8vw]">
          <div className="md:col-span-1"> {/* Apply styling specifically for RoleFilter */}
            <RoleFilter onChange={handleRoleChange} />
          </div>
          <div className="md:col-span-1"> {/* Apply styling specifically for DurationFilter */}
            <DurationFilter onChange={handleDurationChange} />
          </div>
          <div className="md:col-span-2"> {/* This div spans both columns, applying styling for LocationFilter */}
            <LocationFilter onChange={handleLocationChange} />
          </div>
        </div>
      </div>

      <div className='mb-[20vw]'></div>

    </main>
  );
}
