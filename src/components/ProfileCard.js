/* eslint-disable react/prop-types */
import React from 'react'

const ProfileCard = (props) => {
  return (
    <figure className="fig-container">
      <div className="profile-image">
        <img src={props.img} alt={props.name} />
      </div>
      <figcaption>
        <h3>{props.name}</h3>
        <h4>{props.designation}</h4>
        <p>{props.bio}</p>
      </figcaption>
    </figure>
  )
}

export default ProfileCard