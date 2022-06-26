/* eslint-disable react/prop-types */
import React from 'react'

const ProfileCard = (props) => {
  return (
    <figure className="fig-container m-4" {...props}>
      <div className="profile-image">
        <img style={{height: "200px"}} src={props.img} alt={props.name} />
      </div>
      <figcaption>
        <h3 style={{textAlign: "center"}}>
            <a style={{color:props.link &&  "#5e7ae2"}} href={props.link} target="__blank">
                {props.name}
            </a>
        </h3>
        <h4>{props.designation}</h4>
        <h3 style={{textAlign: "center"}}>{props.aff}</h3>
      </figcaption>
    </figure>
  )
}

export default ProfileCard