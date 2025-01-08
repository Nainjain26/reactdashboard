import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { Button } from "@mui/material";
import SearchBox from "./SearchBox";
import { FiSun } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

import { IoMdNotificationsOutline } from "react-icons/io";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from '@mui/material/Divider';
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpennotificationdrop, setisOpennotificationdrop] = React.useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationdrop);
  const handleOpenMyAccDr = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDr = () => {
    setAnchorEl(null);
  };
  const handleOpenNotificationDr = () => {
    setisOpennotificationdrop(true);
  };
  const handleCloseNotificationDr = () => {
    setisOpennotificationdrop(false);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-item-center w-100 ">
            {/* logo */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="" className="" />
                <span className="ml-2 ">TECHBRANZZO</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className=" col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle mr-3  ">
                <FiSun />
              </Button>

              <Button className="rounded-circle mr-3">
                <BsCart3 />
              </Button>
              <Button className="rounded-circle mr-3">
                <IoMailOutline />
              </Button>
              <div className="wrapperdr position-relative">
              <Button className="rounded-circle mr-3"onClick={handleOpenNotificationDr}>
                <IoMdNotificationsOutline />
              </Button>
              <Menu
                  anchorEl={anchorEl}
                  className="notifications dropdown-list"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleCloseNotificationDr}
                  onClick={handleCloseNotificationDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}

                >
                  <div className="head pl-3 pb-0">
                    <h4>order (12)</h4>
                  </div>
                  <Divider className="mb-1" />
                  <div className="scroll">
                  <MenuItem onClick={handleCloseNotificationDr}>
                   <div className="d-flex ">
                  <div > 
                    <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div></div>
                  <div className="dropdownnInfo">
                    <h4><span><b> Mahmudul</b> added to his favorite list <b> leather belt strvr madden</b></span></h4> 
                    <p className="text-sky mb-0"> few second ago</p>
                  </div>
                   </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDr}>
                   <div className="d-flex ">
                  <div > 
                    <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div></div>
                  <div className="dropdownnInfo">
                    <h4><span><b> Mahmudul</b> added to his favorite list <b> leather belt strvr madden</b></span></h4> 
                    <p className="text-sky mb-0"> few second ago</p>
                  </div>
                   </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDr}>
                   <div className="d-flex ">
                  <div > 
                    <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div></div>
                  <div className="dropdownnInfo">
                    <h4><span><b> Mahmudul</b> added to his favorite list <b> leather belt strvr madden</b></span></h4> 
                    <p className="text-sky mb-0"> few second ago</p>
                  </div>
                   </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDr}>
                   <div className="d-flex ">
                  <div > 
                    <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div></div>
                  <div className="dropdownnInfo">
                    <h4><span><b> Mahmudul</b> added to his favorite list <b> leather belt strvr madden</b></span></h4> 
                    <p className="text-sky mb-0"> few second ago</p>
                  </div>
                   </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDr}>
                   <div className="d-flex ">
                  <div > 
                    <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div></div>
                  <div className="dropdownnInfo">
                    <h4><span><b> Mahmudul</b> added to his favorite list <b> leather belt strvr madden</b></span></h4> 
                    <p className="text-sky mb-0"> few second ago</p>
                  </div>
                   </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDr}>
                   <div className="d-flex ">
                  <div > 
                    <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div></div>
                  <div className="dropdownnInfo">
                    <h4><span><b> Mahmudul</b> added to his favorite list <b> leather belt strvr madden</b></span></h4> 
                    <p className="text-sky mb-0"> few second ago</p>
                  </div>
                   </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDr}>
                   <div className="d-flex ">
                  <div > 
                    <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div></div>
                  <div className="dropdownnInfo">
                    <h4><span><b> Mahmudul</b> added to his favorite list <b> leather belt strvr madden</b></span></h4> 
                    <p className="text-sky mb-0"> few second ago</p>
                  </div>
                   </div>
                  </MenuItem>

                  </div>
                 <div className="pl-3 pr-3 pt-2 pb-1 w-100"> <Button className="btn-blue w-100">View all notification</Button></div>
                </Menu>

              </div>
              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDr}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div>

                  <div className="userInfo">
                    <h4>Rinku Verma</h4>
                    <p className="mb-0">@rinku26 </p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDr}
                  onClick={handleCloseMyAccDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
