import React from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="region">Select a region:</label>
      <select id="region" value={selectedOption} onChange={handleSelect}>
        <option value="">Select Region</option>
        <option value="Central Region">Central Region</option>
        <option value="East Region">East Region</option>
        <option value="North Region">North Region</option>
        <option value="North-East Region">North-East Region</option>
        <option value="West Region">West Region</option>
      </select>
      <p>Selected Region: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
