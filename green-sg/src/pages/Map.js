import React from "react";
import Pin from "../Pin"
import Popup from "../Popup"
import MapComponent from "../MapComponent";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

  console.log(`http://localhost:5001/api/data/?region=${selectedRegion}${selectedOptions.length > 0 ? selectedOptions.map(option => `&type=${option}`).join('') : ''}`)

  const dataReceived =  [{
        name: "NEWater Visitor Centre",
        link: "https://www.pub.gov.sg/Pages/NEWaterVisitorCentre.aspx",
        description: "The NEWater Visitor Centre (NVC) is an education hub that promotes water sustainability in Singapore and shares how NEWater is produced. The Centre offers a fun-filled and enriching time for visitors of all ages, with interactive tours and educational workshops.",
        openingHours: "9am - 5:30pm (Tuesdays to Sundays, including public holidays), closed on Mondays",
        location: [1.3244821700004, 103.95868792465795],
        address: "20 Koh Sek Lim Rd, Singapore 486593",
        mapLink: "https://goo.gl/maps/4WDnrro6AJx4ZvqWA",
        region: "", 
        type: "educational"
    },
    {
        name: "Sustainable Singapore Gallery",
        link: "https://www.terra.sg/ssg",
        description: "Located on the second floor of the Marina Barrage, the Sustainable Singapore Gallery is a modern and interactive gallery that provides an overview of Singapore’s sustainable development. This 1,618 square-metre gallery is organised into six zones, labelled Zone A to Zone F, each providing information about a different aspect of sustainability in Singapore. ",
        openingHours: "9am - 6pm daily (except Tuesdays), including weekends & public holidays",
        location: [1.2804239649083744, 103.87111803815175],
        address: "8 Marina Gardens Dr, Singapore 018951", 
        mapLink: "https://goo.gl/maps/kuLPtuknEcMQEkDCA",
        region: "",
        type: "educational"
    }]

    const listItems = dataReceived.map((element, index) => (
      <ListGroup.Item key={index}>
        <h3><a href={element.link}>{element.name}</a></h3>
        <p>Opening Hours: {element.openingHours}</p>
        <p>{element.description}</p>
        <p>Address: <a href={element.mapLink}>{element.address}</a></p>
      </ListGroup.Item>
    ));

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
          <option value="Central">Central</option>
          <option value="East">East</option>
          <option value="North">North</option>
          <option value="North-East">North-East</option>
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
              checked={selectedOptions.includes('Educational')}
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
              checked={selectedOptions.includes('Dining')}
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
              checked={selectedOptions.includes('Recycling')}
              onChange={handleCheckboxChange}
            />
            Recycling Machines
          </label>
        </div>
      <p>Selected Activity Types: {selectedOptions.join(', ')}</p>
      </div>
      {selectedOptions.length > 0 && (
        <ListGroup>{listItems}</ListGroup>
      )}
      
    </div>
    )
  };
  
export default Map;