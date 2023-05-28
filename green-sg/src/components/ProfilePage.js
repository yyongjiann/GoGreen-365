import React, {useState, useEffect} from 'react';
import './ProfilePage.css'; // Import CSS file for styling
import Activity from './Activity';


const ProfilePage = () => {

  const data = [
  {
    date: "2023-05-30 09:00 AM",
    activity: "A",
    remarks: "Remark 1",
    points: 100
  },
  {
    date: "2023-06-02 02:30 PM",
    activity: "B",
    remarks: "Remark 2",
    points: 150
  },
  {
    date: "2023-06-05 11:45 AM",
    activity: "C",
    remarks: "Remark 3",
    points: 50
  },
  {
    date: "2023-06-08 08:15 AM",
    activity: "D",
    remarks: "Remark 4",
    points: 20
  },
  {
    date: "2023-06-12 04:20 PM",
    activity: "A",
    remarks: "Remark 1",
    points: 100
  },
  {
    date: "2023-06-15 04:20 PM",
    activity: "A",
    remarks: "Remark 1",
    points: 100
  },
]

const formDataTemplate = {
  date: "",
  activity: "",
  remarks: "",
}

  const [activityLog, setActivityLog] = useState(data)
  const [formData, setFormData] = useState(formDataTemplate)

  useEffect(()=>{
    console.log(activityLog)
  },[activityLog])

  const handlePageChange = (page) => {
    // Calculate the starting and ending indices based on the page number
    // const itemsPerPage = 5;
    // const startIdx = (page - 1) * itemsPerPage;
    // const endIdx = startIdx + itemsPerPage;
    
    // Update the state or data to display the desired entries in the table
    // For example, you can slice your data array to get the subset of entries to display
    //const displayedEntries = entries.slice(startIdx, endIdx);
    //setDisplayedEntries(displayedEntries);
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (!formData.date || !formData.activity || !formData.remarks){
      /*Error pop-up message for empty submission*/
      console.log("error")
    }else{
      setActivityLog(prevState => 
        [...prevState, 
          {...formData,
          points: formData.activity === "A" ? 100
            : formData.activity === "B" ? 150
            : formData.activity === "C" ? 50
            : formData.activity === "D" ? 20
            : ""}])
      }
    /*setFormData(formDataTemplate)*/


  }

  const handleChange = (event) =>{
    event.preventDefault()
    const {value, name} = event.target
    console.log(name, value)
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })

  }
  return (
    <div className="profile-container">
      <div className="left-container">
        <div className="picture-container">
          {/* Profile picture */}
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
            className="profile-picture"
          />
        </div>
        <div className="details-container">
          {/* User details */}
          <h1 className="detail-item">Name: John</h1>
          <p className="detail-item">Email: john@example.com</p>
          <p className="detail-item">Contact Number: 123-456-7890</p>
          <div className="points-card">
            <p className="points">Points Achieved:</p>
            <p className="points-value">
              {activityLog.reduce((prev, curr) =>{
                return prev + curr.points
              }, 0)}
              </p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h2 className="form-title">Your Activity Submission</h2>
        <div className="form-container">
          {/* Form */}
          <div className="form-inner-container">
            <form onSubmit={handleSubmit}>
              <div className="form-general">
                <div className="form-left-column">
                  <div className="form-row">

                    <label htmlFor="dropdown">Select an option:</label>
                    <select id="dropdown" name="activity" onChange={handleChange} >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="datetime">Select a date and time:</label>
                    <input type="datetime-local" id="datetime" name="date" onChange={handleChange} />
                  </div>
                </div>
                <div className="form-right-column">
                  <div className="form-row">
                    <label htmlFor="remark">Remark:</label>
                    <textarea 
                    id="remark" 
                    rows="4" 
                    cols="50" 
                    name="remarks" 
                    value = {formData.remarks} 
                    onChange={handleChange}>
                    </textarea>
                  </div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        {/* Lorem Ipsum code */}

        <div className="records-table">
          <table>
            <thead>
              <tr>
                <th>Date/Time</th>
                <th>Type</th>
                <th>Remarks</th>
                <th>Points Accumulated</th>
              </tr>
            </thead>
            <tbody>
              {activityLog.map((item,index)  => 
              <Activity
              key = {index}
              date = {item.date}
              activity = {item.activity}
              remarks = {item.remarks}
              points = {item.points}

              />)}
            </tbody>
          </table>




        </div>
        <div className="pagination">
  <button onClick={() => handlePageChange(1)}>1</button>
  <button onClick={() => handlePageChange(2)}>2</button>
  <button onClick={() => handlePageChange(3)}>3</button>
  {/* Add more buttons for additional pages */}
</div>
      </div>
    </div>
  );
}

export default ProfilePage;
