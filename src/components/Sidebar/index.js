import React, { useState } from "react";
import { Button } from "@mui/material";
import { MdOutlineDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const[activeTab,setactiveTab]=useState(0);
  const[isToggleSubmenu,setIsToggleSubmenu]=useState(false);
  const isOpenSubmenu=(index)=>{
    setactiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu)
  }
  return (
    <div className="sidebar">
      <ul>0
        <li>
          <Link to='/'>
          <Button className={`w-100 ${activeTab===0?'active':''}`}>
            <span className="icon"><MdOutlineDashboard/></span>Dashboard{" "}
            <span className="arrow"><FaAngleRight/></span>
          </Button>
          </Link>
        </li>
        <li>
          <Button className={`w-100  ${activeTab===1 && isToggleSubmenu===true ?'active':''}`} onClick={()=>isOpenSubmenu(1)}>
            <span className="icon">< MdProductionQuantityLimits/></span>Products
            <span className="arrow"><FaAngleRight/></span>
          </Button>
          <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ?'colapse':'colapsed'}`}>
          <ul className="submenu">
            <li><Link to='#' >Products list</Link> </li>
           
            <li><Link to='#'>Products View</Link></li>
            <li><Link to='#'>Products upload</Link></li>
          </ul>
          </div>
        </li>
        <li>
        <Button className={`w-100 ${activeTab===2?'active':''}`}>
            <span className="icon">< FaCartArrowDown/></span>Orders
            <span className="arrow"><FaAngleRight/></span>
          </Button>
        </li>
        <li>
        <Button className={`w-100 ${activeTab===3?'active':''}`}>
            <span className="icon">< MdOutlineMessage/></span>Messages
            <span className="arrow"><FaAngleRight/></span>
          </Button>
        </li>
        <li>
        <Button className={`w-100 ${activeTab===4?'active':''}`}>
            <span className="icon">< IoMdNotifications/></span>Notifications
            <span className="arrow"><FaAngleRight/></span>
          </Button>
        </li>
        <li>
        <Button className={`w-100 ${activeTab===5?'active':''}`}>
            <span className="icon">< MdOutlineSettings/></span>Settings
            <span className="arrow"><FaAngleRight/></span>
          </Button>
        </li>

        </ul>
        <br />
        <div className="logoutwrapper">
          <div className="logoutBox">
          <Button variant="contained"><IoMdLogOut />Logout</Button>
           </div>
        </div>
    </div>
  );
};

export default Sidebar;
