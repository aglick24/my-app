import {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';
import { SidebarData } from '../data/SidebarData';
import { IconContext } from 'react-icons';

/* reconstructed from Brian Design React Sidebar Navigation Menu Tutorial using class instead of function */

function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
      <IconContext.Provider value={{color: '#103F6E'}}>
        <div className="Navbar">
          <Link to="#" className="Menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className= {sidebar ? 'Nav-menu-active' : 'Nav-menu'}>
          <ul className='Nav-menu-items'>
            <li className="Navbar-toggle">
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    );
  }
  
  export default Navbar;