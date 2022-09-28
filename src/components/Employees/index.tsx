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
  const teams = ['TeamA', 'TeamB', 'TeamC', 'TeamD'];
  const [employees, setEmployees] = useState<Array<Employee>>(dummyData);
  const [selectedTeam, setSelectedTeam] = useState<string>('TeamA');

  function handleCardClicked(event: any) {
    const transformedEmployees = employees.map((e) =>
      e.id === parseInt(event.currentTarget.id)
        ? e.teamName === selectedTeam
          ? { ...e, teamName: '' }
          : { ...e, teamName: selectedTeam }
        : e
    );
    setEmployees(transformedEmployees);
  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            {teams.map((t, index) => (
              <option key={index} value={index}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((e, index) => (
              <div
                key={index}
                id={e.id.toString()}
                className={
                  e.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'
                }
                onClick={handleCardClicked}
              >
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
