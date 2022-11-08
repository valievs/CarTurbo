import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-container">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/">
                        <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon"/>
                                Home
                        </li>
                    </Link>

                    <Link to="/cars" >
                    <li className="sidebarListItem">
                            <DirectionsCarIcon className="sidebarIcon"/>
                            Cars
                    </li>
                    </Link>

                    <Link to="/add">
                        <li className="sidebarListItem">
                        <AddCircleIcon className="sidebarIcon"/>
                            Add Car
                        </li>
                    </Link>

                   
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Sidebar