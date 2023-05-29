import React from "react";
import Pin from "../Pin"
import Popup from "../Popup"
import MapComponent from "../MapComponent";

const Map = () => {

  const [currentId, setCurrentId] = React.useState(0)
 
  const pinId = [1,2,3,4]

  function handleClick(event) {
    console.log(event.target)
    setCurrentId(event.target.id)
  }
  
  const [selectedRegion, setSelectedRegion] = React.useState("All");

  const handleSelectRegion = (event) => {
    setSelectedRegion(event.target.value);
  };


  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const allPins = pinId.map(
    id => 
    <Pin 
        id={id} 
        key={id} 
        handleClick={handleClick}>
    </Pin>
    )

  return( 
    <div id="mapPage">
      <h1>Map</h1>
      {allPins}
      <p>{currentId}</p>
      <div>{currentId ? <Popup handleClick={handleClick}/> : null}</div>
      <div>
        <label htmlFor="region">Select a region:</label>
        <select id="region" value={selectedRegion} onChange={handleSelectRegion}>
          <option value="">Select Region</option>
          <option value="Central Region">Central Region</option>
          <option value="East Region">East Region</option>
          <option value="North Region">North Region</option>
          <option value="North-East Region">North-East Region</option>
          <option value="West Region">West Region</option>
        </select>
        <p>Selected Region: {selectedRegion}</p>
      </div>
      <div>
        <label>Activity Type:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="educational"
              checked={selectedOptions.includes('educational')}
              onChange={handleCheckboxChange}
            />
            Educational
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="f&b"
              checked={selectedOptions.includes('f&b')}
              onChange={handleCheckboxChange}
            />
            F&amp;B
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="recycling machines"
              checked={selectedOptions.includes('recycling machines')}
              onChange={handleCheckboxChange}
            />
            Recycling Machines
          </label>
        </div>
      <p>Selected Activity Types: {selectedOptions.join(', ')}</p>
      </div>
      <MapComponent></MapComponent>
    </div>
    )
  };
  
export default Map;