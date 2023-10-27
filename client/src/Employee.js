import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Employee() {
  const navigate = useNavigate()
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then((res) =>{
        console.log(res.data);
        setEmployee(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      let resp=await axios.delete(`http://localhost:4000/delete/${id}`);
      console.log(resp);
      if(resp.status=='200'){
        window.location.reload(); 
      }else{
        console.log(resp);
      }
      // After successful deletion, you may want to update the state or refresh the data.
      // You can setEmployee([...employee]) if needed.
    } catch (err) {
      console.log(err);
    }
  };

const sendEmail = async () => {
  try {
    const response = await axios.post('http://localhost:4000/send-email', {
      to: 'recipient@example.com',
      subject: 'Test Email',
      text: 'This is a test email from Nodemailer.',
    });

    console.log(response.data); // Email sent successfully
  } catch (error) {
    console.error(error);
  }
};

sendEmail();

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-80 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Position</th>
              <th>Profile Picture</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((data, i) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.surname}</td>
                <td>{data.position}</td>
                <td>
                  <img src={data.profilePicture} alt="Profile" />
                </td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <Link to='/update/:id' className="btn btn-primary" >Edit</Link>
                  <button className="btn btn-danger ms-2" onClick={ () => handleDelete(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;


