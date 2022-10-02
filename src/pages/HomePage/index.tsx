/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Employees from '../../components/Employees';
import { dummyData } from '../../components/Employees/dummy-data';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Employee from '../../models/employee';

export default function HomePage() {
  const [employees, setEmployees] = useState<Array<Employee>>(
    JSON.parse(localStorage.getItem('employees') ?? '') || dummyData
  );
  const [selectedTeam, setSelectedTeam] = useState<string>(
    JSON.parse(localStorage.getItem('selectedTeam') ?? '')
  );

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

  function handleTeamSelected(event: any) {
    setSelectedTeam(event.target.value);
  }

  function getTeamMembersCount(): number {
    return employees.filter((e) => e.teamName === selectedTeam).length;
  }

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <div>
      <Header
        selectedTeam={selectedTeam}
        teamMembersCount={getTeamMembersCount()}
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleCardClicked={handleCardClicked}
        handleTeamSelected={handleTeamSelected}
      />
      <Footer />
    </div>
  );
}

// Stopped the video at 1:11:44
