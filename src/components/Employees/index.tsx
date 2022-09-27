import { useState } from 'react';
import { dummyData } from './dummy-data';
import femaleProfile from '../../assets/images/femaleProfile.jpg';
import maleProfile from '../../assets/images/maleProfile.jpg';
import './styles.css';

interface Employee {
  id: number;
  fullName: string;
  designation: string;
  gender: string;
  teamName: string;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Array<Employee>>(dummyData);
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((e) => (
              <div id={e.id.toString()} className="card m-2">
                {e.gender === 'male' ? (
                  <img src={maleProfile} className="card-img-top" />
                ) : (
                  <img src={femaleProfile} className="card-img-top" />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full name: {e.fullName}</h5>
                  <p className="card-text">{e.fullName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
