import React from 'react'

const Nav = () => {
  return (
    <div>
        <img src={require("../assets/Logo.jpg")} alt="Little Lemon Logo"></img>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Reservations</a>
            </li>
            <li>
                <a href="#">Order Online</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav