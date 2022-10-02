import { Link } from 'react-router-dom';
import AppRoutes from '../../app-routes';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={AppRoutes.home}>
            home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={AppRoutes.groupedTeamMembers}>
            teams
          </Link>
        </li>
      </ul>
    </nav>
  );
}
