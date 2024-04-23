// LocationFilter.tsx
import React, { useState } from 'react';

interface LocationFilterProps {
  onChange: (locations: string[], blocks: string[]) => void;
}

const LocationFilter: React.FC<LocationFilterProps> = ({ onChange }) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>('');
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    onChange([location], selectedBlocks);
  };

  const handleBlockClick = (block: string) => {
    const updatedBlocks = [...selectedBlocks];
    const index = updatedBlocks.indexOf(block);
    if (index === -1) {
      updatedBlocks.push(block);
    } else {
      updatedBlocks.splice(index, 1);
    }
    setSelectedBlocks(updatedBlocks);
    onChange([selectedLocation || ''], updatedBlocks);
  };

  return (
    <div className="w-full mr-8">
      <h3>Location</h3>
      <div>
        <select
          className="w-full border border-gray-300 rounded p-2"
          value={selectedLocation || ''}
          onChange={(e) => handleLocationChange(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="Seattle, WA">Seattle, WA</option>
          <option value="London, UK">London, UK</option>
          <option value="New York City, NY">New York City, NY</option>
        </select>
      </div>
      <div className="flex justify-center mt-4 gap-10"> 
        <button
          className={`px-4 py-2 border rounded ${
            selectedBlocks.includes('In Person') ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleBlockClick('In Person')}
        >
          In Person
        </button>
        <button
          className={`px-4 py-2 border rounded ${
            selectedBlocks.includes('Hybrid') ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleBlockClick('Hybrid')}
        >
          Hybrid
        </button>
        <button
          className={`px-4 py-2 border rounded ${
            selectedBlocks.includes('Remote') ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleBlockClick('Remote')}
        >
          Remote
        </button>
      </div>
    </div>
  );
};

export default LocationFilter;
