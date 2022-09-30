/* eslint-disable @typescript-eslint/no-explicit-any */
import femaleProfile from '../../assets/images/femaleProfile.jpg';
import maleProfile from '../../assets/images/maleProfile.jpg';
import Employee from '../../models/employee';
import './styles.css';

interface EmployeesProps {
  employees: Array<Employee>;
  selectedTeam: string;
  handleCardClicked: (event: any) => void;
  handleTeamSelected: (event: any) => void;
}

export default function Employees(props: EmployeesProps) {
  const teams = ['TeamA', 'TeamB', 'TeamC', 'TeamD'];

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={props.selectedTeam}
            onChange={(e) => props.handleTeamSelected(e)}
          >
            {teams.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {props.employees.map((e, index) => (
              <div
                key={index}
                id={e.id.toString()}
                className={
                  e.teamName === props.selectedTeam
                    ? 'card m-2 standout'
                    : 'card m-2'
                }
                onClick={props.handleCardClicked}
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
