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
  
  const [dataReceived, setDataReceived] = React.useState([])
  React.useEffect(()=>{
    const getData = async () =>{
      try{
        const addr = `http://localhost:5001/api/data/?region=${selectedRegion}${selectedOptions.length > 0 ? selectedOptions.map(option => `&type=${option}`).join('') : ''}`
        const response = await fetch(addr)
        const data = await response.json()
        setDataReceived(data)
      }catch(error){
        console.log("Error encountered during GET request: ", error.message)
      }
    }
    getData()
  },[selectedRegion, selectedOptions]) 

  

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
          <option value="All">All</option>
          <option value="Central">Central</option>
          <option value="East">East</option>
          <option value="North">North</option>
          <option value="West">West</option>
          
          
        </select>
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
      </div>
      {selectedOptions.length > 0 && (
        <ListGroup>{listItems}</ListGroup>
      )}
      
    </div>
    )
  };
  
export default Map;