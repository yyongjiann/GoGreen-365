import React, {useState} from 'react';
import './ProfilePage.css'; // Import CSS file for styling
import Activity from './components/Activity';


const Profile = () => {

  const data = [
  {
    date: "2023-05-30 09:00 AM",
    activity: "Educational",
    remarks: "Visited NEWater Visitor Centre. GreenID: vvsfvvd",
    points: 50
  },
  {
    date: "2023-06-02 02:30 PM",
    activity: "Dining",
    remarks: "Dined at Open Farm Community. GreenID: cjsncjs",
    points: 100
  },
  {
    date: "2023-06-05 11:45 AM",
    activity: "Recycling",
    remarks: "Recycled e-waste at Bishan Sport Centre Drop Off Lobby. GreenID: sjcnsjn",
    points: 150
  },
  {
    date: "2023-06-08 08:15 AM",
    activity: "Donation",
    remarks: "Donated non-perishable food items to Food Bank. GreenID: csncjsn",
    points: 200
  },
 
]

const formDataTemplate = {
  date: "",
  activity: "Educational",
  remarks: "",
}

  const [activityLog, setActivityLog] = useState(data)
  const [formData, setFormData] = useState(formDataTemplate)


  const handlePageChange = (page) => {
   //Future implementation for page toggling
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (!formData.date || !formData.activity || !formData.remarks){
      /*Error pop-up message for empty submission*/
      alert("Fields cannot be empty!")
    }else{
      setActivityLog(prevState => 
        [...prevState, 
          {...formData,
          points: "Pending approval"}])
      }
    setFormData(formDataTemplate)


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
        <h2 className="form-title" style={{ fontFamily: "Magilio" }}>Your Activity Submission</h2>
        <div className="form-container">
          {/* Form */}
          <div className="form-inner-container">
            <form onSubmit={handleSubmit}>
              <div className="form-general">
                <div className="form-left-column">
                  <div className="form-row">

                    <label htmlFor="dropdown">Select an option:</label>
                    <select id="dropdown" name="activity" value= {formData.activity} onChange={handleChange} >
                      <option value="Educational">Educational</option>
                      <option value="Dining">Dining</option>
                      <option value="Recycling">Recycling</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="datetime">Select a date and time:</label>
                    <input type="datetime-local" id="datetime" name="date" value = {formData.date} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-right-column">
                  <div className="form-row">
                    <label htmlFor="remark">Remarks:</label>
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

export default Profile;
