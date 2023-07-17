import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            // NavLink has a built-in prop (isActive) that knows whether or not the link is active. This is useful for toggling css classes on links that are active (ex:hover or currently navigated to).
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            key={link.id}
            onClick={toggleSidebar}
          >
            <span className="icon">{link.icon}</span>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
