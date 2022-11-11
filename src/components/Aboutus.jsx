import React from 'react'
import image from '../assests/bannerpizza.webp'; // Tell webpack this JS file uses this image
import '../styles/about.css'

function AboutUs() {
  return (
    <div>
        <img src={image} alt="PizzaBanner"  className="pizzabanner"/>
        <h1  className="title"> ABOUT US</h1>
        <p  className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci mauris, hendrerit eget nulla eu, bibendum porta libero. Pellentesque mauris libero, varius id lectus vel, semper porta felis. Fusce a libero elementum nisi suscipit dignissim sollicitudin eleifend dolor. Duis cursus dapibus consequat. Nullam nec luctus ipsum, eget suscipit mauris. Quisque rhoncus erat felis, quis condimentum felis molestie non. Cras consectetur sapien dui, a tincidunt tellus tincidunt in. Fusce nisl nunc, rutrum ut dui nec, luctus molestie nisi. Ut tempor tempor ligula id condimentum. In a massa ex. Mauris interdum auctor felis, sit amet sollicitudin felis fringilla nec. Donec ultricies consectetur ligula eu lacinia.
        </p>

        </div>
  )
}

export default AboutUs