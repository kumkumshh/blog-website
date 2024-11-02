import React from 'react';
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu';

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
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi? Voluptatibus nobis magnam qui corrupti veritatis in cumque minus? Porro saepe vero, ducimus placeat deleniti ex nemo dignissimos dolore delectus eum maiores mollitia iste debitis beatae veniam similique vitae assumenda aspernatur obcaecati harum odio neque odit aut. Unde culpa assumenda voluptate cupiditate! Aliquam perspiciatis officiis eveniet esse deleniti eaque voluptas commodi ipsa aut, quos dolorum cupiditate animi necessitatibus! Quisquam officia est vitae obcaecati exercitationem qui explicabo labore saepe pariatur inventore autem error atque cupiditate voluptatum optio placeat ea eos dicta minima enim, praesentium libero earum architecto reiciendis. Quo, ipsum sequi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi? Voluptatibus nobis magnam qui corrupti veritatis in cumque minus? Porro saepe vero, ducimus placeat deleniti ex nemo dignissimos dolore delectus eum maiores mollitia iste debitis beatae veniam similique vitae assumenda aspernatur obcaecati harum odio neque odit aut. Unde culpa assumenda voluptate cupiditate! Aliquam perspiciatis officiis eveniet esse deleniti eaque voluptas commodi ipsa aut, quos dolorum cupiditate animi necessitatibus! Quisquam officia est vitae obcaecati exercitationem qui explicabo labore saepe pariatur inventore autem error atque cupiditate voluptatum optio placeat ea eos dicta minima enim, praesentium libero earum architecto reiciendis. Quo, ipsum sequi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi? Voluptatibus nobis magnam qui corrupti veritatis in cumque minus? Porro saepe vero, ducimus placeat deleniti ex nemo dignissimos dolore delectus eum maiores mollitia iste debitis beatae veniam similique vitae assumenda aspernatur obcaecati harum odio neque odit aut. Unde culpa assumenda voluptate cupiditate! Aliquam perspiciatis officiis eveniet esse deleniti eaque voluptas commodi ipsa aut, quos dolorum cupiditate animi necessitatibus! Quisquam officia est vitae obcaecati exercitationem qui explicabo labore saepe pariatur inventore autem error atque cupiditate voluptatum optio placeat ea eos dicta minima enim, praesentium libero earum architecto reiciendis. Quo, ipsum sequi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi? Voluptatibus nobis magnam qui corrupti veritatis in cumque minus? Porro saepe vero, ducimus placeat deleniti ex nemo dignissimos dolore delectus eum maiores mollitia iste debitis beatae veniam similique vitae assumenda aspernatur obcaecati harum odio neque odit aut. Unde culpa assumenda voluptate cupiditate! Aliquam perspiciatis officiis eveniet esse deleniti eaque voluptas commodi ipsa aut, quos dolorum cupiditate animi necessitatibus! Quisquam officia est vitae obcaecati exercitationem qui explicabo labore saepe pariatur inventore autem error atque cupiditate voluptatum optio placeat ea eos dicta minima enim, praesentium libero earum architecto reiciendis. Quo, ipsum sequi.</p>
      </div>
     <Menu />
    </div>
  )
}

export default Single