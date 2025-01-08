import React from 'react'
import DashboardBox from './components/dashboardBox'
import { FaCircleUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
const Dashboard = () => {
  return (
    <>
      <div className='right-content w-100'>
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
          <DashboardBox color={["#1CA155","#4BD685"]} icon={<FaCircleUser/>} grow={true} />
          <DashboardBox color={["#C012E2","#EA62FD"]} icon={< FaCartArrowDown/>}/>
          <DashboardBox color={["#2D79E6","#63B2F6"]} icon={<FaShoppingBag/>}/>
          <DashboardBox color={["#E1960F","#F3CE2A"]} icon={<IoStarSharp/>}/>
        </div>
          </div>
          <div className="col-md-4 pl-0">
              <div className="box graphBox"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard 
