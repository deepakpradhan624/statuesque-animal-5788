import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="details">
          <h1>A Legacy of Derm-Designed Innovation</h1>
          <h4>
            Rodan + Fields was founded by world-renowned Dermatologists with a
            proven record of building successful skincare businesses. As a
            company, we’re committed to industry-leading innovation,
            transformative results + empowering a global community of
            entrepreneurs. Now, we enter a new era with the launch of R+F
            Haircare, rooted in skincare science.
          </h4>
        </div>
        <div className="image_section">
          <img
            src="https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FHero_Module_Desktop_2880x1200_885150b7ea.png&w=2048&q=75"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />

      <div className="about_container">

      <div className="image_section2">
          <img
            src="https://www.rodanandfields.com/en-us/nx/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fk8s-next-strapi-bucket%2Fuploads%2Ftst4%2FModule_Promo_Banner_1168x704_862adb4c18.jpg&w=2048&q=75"
            alt=""
          />
        </div>
        <div className="details">
          <h1>A Curated Personalized Service</h1>
          <h4>
            We believe that personalized service is the best way to find the
            right products for you. That’s why our Independent Consultants are
            available to discuss your skin + hair concerns, make thoughtful
            product suggestions and guide you through our innovative Solution
            Tool technology so you can receive customized recommendations + find
            the perfect Regimens. We know you’ll love your real results, that’s
            why all of our products are backed by a 60-Day Money Back Guarantee.
          </h4>
        </div>
       
      </div>
      <br />
      <br />
    </>
  );
};

export default About;
