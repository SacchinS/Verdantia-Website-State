import React, { useState } from 'react';

interface DurationFilterProps {
  onChange: (durations: string[]) => void;
}

const DurationFilter: React.FC<DurationFilterProps> = ({ onChange }) => {
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  const handleDurationClick = (duration: string) => {
    const updatedDurations = [...selectedDurations];
    const index = updatedDurations.indexOf(duration);
    if (index === -1) {
      updatedDurations.push(duration);
    } else {
      updatedDurations.splice(index, 1);
    }
    setSelectedDurations(updatedDurations);
    onChange(updatedDurations);
  };

  const durations = ['Full Time', 'Part Time', 'Internship'];

  return (
    <div className="absolute">
      <h3>Duration</h3>
      <div className="flex md:flex-col md:space-y-4">
        {durations.map(duration => (
          <button
            key={duration}
            className={`w-32 py-2 border rounded hover:bg-blue-500 hover:text-white self-start ${
              selectedDurations.includes(duration) ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleDurationClick(duration)}
          >
            {duration}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DurationFilter;