import React from "react";
import reactLogo from "./images/logo.svg";
import reduxLogo from "./images/redux.svg";
import tailwindLogo from "./images/tailwind.svg";
import "./App.css";

import Editor from "./Components/editor.js";

const styles = {
  base: "",
  //Heading Section
  headingSection: "flex flex-col items-center bg-gray-300 w-screen",
  h1: "text-5xl sm:text-7xl text-center mt-5",
  //Subheading
  subHeading: "mt-8 font-medium",
  logos: "max-h-16 inline text-center",
  tailwind: "ml-2",
};

class App extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.headingSection}>
          <h1 className={styles.h1}>MarkDown Previewer</h1>
          <p className={styles.subHeading}>
            Utilizing:
            <img
              src={reactLogo}
              alt="React Logo"
              width="50px"
              className={styles.logos}
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              width="30px"
              className={styles.logos}
            />
            <img
              src={tailwindLogo}
              alt="Tailwind CSS Logo"
              width="30px"
              className={`${styles.logos} ${styles.tailwind}`}
            />
          </p>
        </div>
        <Editor />
      </div>
    );
  }
}

export default App;
