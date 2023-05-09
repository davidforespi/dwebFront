import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar/navbar";
const AboutUs = () => {
  return (
    <div>
      <section className={styles.section}>
      <Navbar/>
      <div>
      <div className={styles.feature}>
            <h4>Best food in the west</h4>
            <p>
              We are the best restaurant option because we constantly strive
              to provide the best culinary and service experience to our
              customers. We have a highly trained team of chefs and customer
              service personnel who are committed to excellence in everything
              they do. In addition, we use fresh and high-quality ingredients
              in all of our preparations to ensure the best taste and
              nutritional value. Whether you are looking for a romantic dinner
              for two, a special celebration or simply a delicious meal, we
              are confident that you will enjoy your experience at our
              restaurant. Come visit us and discover why we are the best
              option in town.
            </p>
          </div>
        <div className={styles.features}>

          <div className={styles.feature}>
            <h4>Quality Ingredients</h4>
            <p>
              Our dishes are prepared with fresh and high-quality ingredients
              to ensure the best taste and nutritional value.
            </p>
          </div>
          <div className={styles.feature}>
            <h4>Exceptional Service</h4>
            <p>
              Our staff is committed to providing exceptional service to
              ensure that our customers have the best experience.
            </p>
          </div>
          <div className={styles.feature}>
            <h4>Cozy Atmosphere</h4>
            <p>
              Our restaurant provides a cozy and welcoming atmosphere that
              makes our customers feel right at home.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;