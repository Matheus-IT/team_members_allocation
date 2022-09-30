interface HeaderProps {
  selectedTeam: string;
  teamMembersCount: number;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="container mt-3 mb-4 text-center">
      <h1>Team members allocation</h1>
      <h3>
        {props.selectedTeam} has {props.teamMembersCount} members
      </h3>
    </header>
  );
}
