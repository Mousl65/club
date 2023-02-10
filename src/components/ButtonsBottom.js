import React from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
const ButtonsBottom = (props) => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
      };
    return (
        <div className='scroll-bottom'   onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className='sb-main'>
         {props.left && (
             <NavLink to={props.left} className='left hover'>
             <span><i class="fas fa-arrow-alt-circle-left"></i></span>
             </NavLink>
         )}
          <p className='center'>scroll</p>
          {props.right && (
            <NavLink to={props.right} className='right hover'>
            <span> <i class="fas fa-arrow-alt-circle-right"></i></span>
            </NavLink>
            )}
        </div>
            
        </div>
    );
};

export default ButtonsBottom;