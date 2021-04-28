import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <div>
    <NavLink className="NavLink" activeClassName="NavLinkActive" to="/" exact>
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        className="NavLink"
        activeClassName="NavLinkActive"
        exact
      >
        Contacts
      </NavLink>
    )}
  </div>
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthentificated(state),
});

export default connect(mapStateToProps)(Navigation);
