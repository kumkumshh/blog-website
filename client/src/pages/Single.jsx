import React from 'react';
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/28763352/pexels-photo-28763352/free-photo-of-child-engaged-with-tablet-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

        <div className="user">
          <img src="https://images.pexels.com/photos/28763352/pexels-photo-28763352/free-photo-of-child-engaged-with-tablet-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 months ago</p>
          </div>

          <div className="edit">
            
            <img src={Edit} alt="" />
            <img src={Delete} alt="" />
          </div>
        </div>
      </div>
      <div className="menu">
        m
      </div>
    </div>
  )
}

export default Single