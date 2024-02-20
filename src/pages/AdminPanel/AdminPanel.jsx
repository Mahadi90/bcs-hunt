import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import ApplicantTable from './ApplicantTable';

const AdminPanel = () => {

const [totalApplication, setTotalApplication] = useState([])

useEffect(() => {
    fetch('http://localhost:5000/applicants')
    .then(res => res.json())
    .then(data => setTotalApplication(data))
},[])

    return (
        <div>
      
      <div className="flex justify-evenly my-6">
      <h2 className="text-center text-2xl font-bold">Admin DashBoard</h2>
       <button className="flex btn btn-primary"><FaDownload></FaDownload> Applicants Information</button>
      </div>
      
      <div className="mx-2 md:mx-20 text-center mt-6">
      <h3 className="text-center text-2xl mb-4">
        Total Applicants : {totalApplication.length}
      </h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-purple-500 text-white">
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Session</th>
            </tr>
          </thead>
          <tbody>
            {totalApplication.map((applicants, index) => (
              <ApplicantTable
              index={index}
                key={applicants._id}
                applicants={applicants}
              ></ApplicantTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AdminPanel;