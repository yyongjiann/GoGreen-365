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

  const [selectedTypes, setSelectedTypes] = React.useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedTypes.includes(value)) {
      setSelectedTypes(selectedTypes.filter((type) => type !== value));
    } else {
      setSelectedTypes([...selectedTypes, value]);
    }
  };

  const allTypes = (listOfTypes) => {
    if (listOfTypes.length === 0) {
      return ""
    }
    else if (listOfTypes.length === 1) {
      return `type=${listOfTypes[0]}&`
    }
    else {
      return `type=${listOfTypes[0]}&${allTypes(listOfTypes.slice(1))}`
    }
  }

  console.log(allTypes(selectedTypes))

  console.log(`http://localhost:5001/api/data/?${allTypes(selectedTypes)}region=${selectedRegion}`)

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
          <option value="All">All</option>
          <option value="Central">Central</option>
          <option value="East">East</option>
          <option value="North">North</option>
          <option value="West">West</option>
        </select>
        <p>Selected Region: {selectedRegion}</p>
      </div>
      <div>
        <label>Activity Type:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="Educational"
              checked={selectedTypes.includes('Educational')}
              onChange={handleCheckboxChange}
            />
            Educational
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Dining"
              checked={selectedTypes.includes('Dining')}
              onChange={handleCheckboxChange}
            />
            F&amp;B
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Recycling"
              checked={selectedTypes.includes('Recycling')}
              onChange={handleCheckboxChange}
            />
            Recycling Machines
          </label>
        </div>
      <p>Selected Activity Types: {selectedTypes.join(', ')}</p>
      </div>
    </div>
    )
  };
  
export default Map;