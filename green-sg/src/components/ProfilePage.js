import React from 'react';
import './ProfilePage.css'; // Import CSS file for styling

const ProfilePage = () => {

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
            <p className="points-value">500</p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h2 className="form-title">Your Activity Submission</h2>
        <div className="form-container">
          {/* Form */}
          <div className="form-inner-container">
            <form>
              <div className="form-general">
                <div className="form-left-column">
                  <div className="form-row">

                    <label htmlFor="dropdown">Select an option:</label>
                    <select id="dropdown">
                      <option value="a">A</option>
                      <option value="b">B</option>
                      <option value="c">C</option>
                      <option value="d">D</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="datetime">Select a date and time:</label>
                    <input type="datetime-local" id="datetime" />
                  </div>
                </div>
                <div className="form-right-column">
                  <div className="form-row">
                    <label htmlFor="remark">Remark:</label>
                    <textarea id="remark" rows="4" cols="50"></textarea>
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
              <tr>
                <td>2023-05-30 09:00 AM</td>
                <td>Type 1</td>
                <td>Remark 1</td>
                <td className="points-cell">100</td>
              </tr>
              <tr>
                <td>2023-06-02 02:30 PM</td>
                <td>Type 2</td>
                <td>Remark 2</td>
                <td className="points-cell">150</td>
              </tr>
              <tr>
                <td>2023-06-05 11:45 AM</td>
                <td>Type 3</td>
                <td>Remark 3</td>
                <td className="points-cell">80</td>
              </tr>
              <tr>
                <td>2023-06-08 08:15 AM</td>
                <td>Type 4</td>
                <td>Remark 4</td>
                <td className="points-cell">120</td>
              </tr>
              <tr>
                <td>2023-06-12 04:20 PM</td>
                <td>Type 5</td>
                <td>Remark 5</td>
                <td className="points-cell">200</td>
              </tr>
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
