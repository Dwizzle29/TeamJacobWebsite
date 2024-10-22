import { NavLink } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container">
      <h1>Page Not Found</h1>
      <div className="information">
        <h2 className="construction-title">Site under construction</h2>
        <p>
          Hi thanks for visiting Team Jacob we are still in the process of
          completing this site.
        </p>
        <p>Click the links below to view pages which are designed: </p>
        <ul>
          <li>
            <NavLink to={"/"}>Home Page</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us Page</NavLink>
          </li>
          <li>
            <NavLink to={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink to={"/rosters"}>Rosters</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
