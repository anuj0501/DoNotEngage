import React from "react";

//css import
import classes from "./Newsletter.module.css";
import classesDark from "./NewsletterDark.module.css";

//Png import
import NewsletterPng from "../../../assets/images/newsletter.png";

const NewsletterForm = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <form className={styles.formArea}>
          <h2>Join Our NewsLetter</h2>
          <p>latest information at your fingertips!.</p>
          <div className={styles.mainSection}>
            <input type="email" placeholder="abc@example.com" />
            <button>Subscribe</button>
          </div>
        </form>
        <img src={NewsletterPng} alt="Newsletter" />
      </div>
    </div>
  );
};

export default NewsletterForm;
