/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import Employee from './models/employee';
import { dummyData } from './components/Employees/dummy-data';
import Employees from './components/Employees';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './app-routes';
import Nav from './components/Nav';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
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
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMembersCount={getTeamMembersCount()}
      />
      <Routes>
        <Route
          path={AppRoutes.home}
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleCardClicked={handleCardClicked}
              handleTeamSelected={handleTeamSelected}
            />
          }
        />
        <Route
          path={AppRoutes.groupedTeamMembers}
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
