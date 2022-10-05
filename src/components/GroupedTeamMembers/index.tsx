/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Employee from '../../models/employee';
import './styles.css';

interface NamedParametersTeamGroup {
  team: string;
  members: Array<Employee>;
  isCollapsed: boolean;
}

class TeamGroup {
  team: string;
  members: Array<Employee>;
  isCollapsed: boolean;

  constructor({ team, members, isCollapsed }: NamedParametersTeamGroup) {
    this.team = team;
    this.members = members;
    this.isCollapsed = isCollapsed;
  }
}

interface GroupedTeamMembersProps {
  employees: Array<Employee>;
  selectedTeam: string;
}

export default function GroupedTeamMembers(props: GroupedTeamMembersProps) {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  function groupTeamMembers() {
    const teams = ['TeamA', 'TeamB', 'TeamC', 'TeamD'];
    const teamGroups: Array<TeamGroup> = [];

    for (const team of teams) {
      const teamMembers = props.employees.filter((e) => e.teamName === team);

      teamGroups.push(
        new TeamGroup({
          team: team,
          members: teamMembers,
          isCollapsed: props.selectedTeam === team ? false : true
        })
      );
    }
    return teamGroups;
  }

  function handleTeamClick(event: any) {
    const transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.target.id
        ? new TeamGroup({
            members: groupedData.members,
            isCollapsed: !groupedData.isCollapsed,
            team: groupedData.team
          })
        : groupedData
    );

    setGroupedEmployees(transformedGroupData);
  }

  return (
    <main className="container">
      {groupedEmployees.map((group) => {
        return (
          <div key={group.team} className="card mt-2 team-group-card">
            <h4
              id={group.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {group.team}
            </h4>

            <div
              id={'collapse_' + group.team}
              className={group.isCollapsed === true ? 'collapse' : ''}
            >
              <hr />

              {group.members.map((member) => {
                return (
                  <div className="mt2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}
