import React from "react";

// css import
import classes from "./ShowcaseHome.module.css";
import classesDark from "./ShowcaseHomeDark.module.css";

// image import
import showcaseImage from "../../../assets/images/showcaseImage.svg";

//componentImport
import Button from "../../UI/Button/Button";

const ShowcaseHome = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.container}>
      <div className={styles.ShowcaseHome}>
        <div className={styles.ShowcaseBody}>
          <h1>
            Developer Student Clubs <span>AKGEC</span>
          </h1>
          <p>
            Developer Student Clubs are university based community groups for
            students interested in Google developer technologies. Students from
            all undergraduate or graduate programs with an interest in growing
            as a developer are welcome. By joining a DSC, students grow their
            knowledge in a peer-to-peer learning environment and build solutions
            for local businesses and their community.
          </p>
          <Button
            href="https://developers.google.com/community/dsc"
            icon="info"
            theme={props.theme}
          >
            &nbsp;LEARN MORE
          </Button>
        </div>
        <img src={showcaseImage} alt="DSC" />
      </div>
    </div>
  );
};

export default ShowcaseHome;

// import { CSSTransition } from "react-transition-group";
// <CSSTransition
//   in={true}
//   timeout={{
//     appear: 400,
//   }}
//   appear={true}
//   classNames={{ ...classes }}
// >
// </CSSTransition>
