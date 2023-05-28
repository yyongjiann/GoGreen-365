import { Outlet, Link } from "react-router-dom";
import '../style.css'

const Layout = () => {
  return (
    <>
      <nav className="navBar">
        <h1 className='navBarTitle'>Environmental <br /> Friends</h1>

        <ul className="horizontalNav">
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;