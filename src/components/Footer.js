import React from 'react'

const Footer = () => {
  return (
    <div>
        <img src={require("../assets/restaurant chef B.jpg")} alt="Little Lemon Logo"></img>
        <ul>
            <ul>
                <li>
                    Doormat Navigation
                </li>
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
            <ul>
                <li>
                    Contact
                </li>
                <li>
                <a href="#">Address</a>
                </li>
                <li>
                    <a href="#">Phone Number</a>
                </li>
                <li>
                    <a href="#">Email</a>
                </li>
            </ul>
            <ul>
                <li>
                    Social Media Links
                </li>
                <li>
                <a href="#">Facebook</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
            </ul>
        </ul>
    </div>
)
}

export default Footer