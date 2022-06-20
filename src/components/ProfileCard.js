/* eslint-disable react/prop-types */
import React from 'react'

const ProfileCard = (props) => {
  return (
    <figure className="fig-container m-4" {...props}>
      <div className="profile-image">
        <img src={props.img} alt={props.name} />
      </div>
      <figcaption>
        <h3 style={{textAlign: "center"}}>{props.name}</h3>
        <h4>{props.designation}</h4>
        <p>{props.bio}</p>
      </figcaption>
    </figure>
  )
}

export default ProfileCard