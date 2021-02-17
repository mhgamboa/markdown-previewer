import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, bindActionCreators } from "redux";
import { Provider, connect } from "react-redux";

import reactLogo from "./images/logo.svg";
import reduxLogo from "./images/redux.svg";
import tailwindLogo from "./images/tailwind.svg";
import "./index.css";

import ReactMarkDown from "react-markdown";

/* Start Redux */
const USERINPUT = "USERINPUT";
const initialState = `# Welcome to my React Markdown Previewer!

## TailwindCSS Messes up a lot of the default styling, and I'm too lazy to fix it
### Now I know not to use tailwind for these sort of things.
#### Anyways, try to enjoy the code even though it doesn't work:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

**Bold text**
_Italic text_
**_both Bold and Italic!_**
~~Crossing out~~.

[links](https://www.freecodecamp.com), and
> Block Quotes

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;

const userInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINPUT:
      return action.userText;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ userInputReducer });

const store = createStore(rootReducer);
/* End Redux */

/* Start editor Component */
const editorStyles = {
  editorContainer:
    "darK:bg-black flex flex-col items-center my-1 w-full p-4 md:mb-5 md:w-5/12 md:mr-2 lg:p-3 md:rounded md:border-4 md:border-solid",
  heading: "text-2xl font-medium mb-3",
  userInputArea: "border-2 rounded border-gray-700 w-full h-full m-2",
};

class Editor extends React.Component {
  render() {
    return (
      <div className={editorStyles.editorContainer}>
        <h3 className={editorStyles.heading}>Text Editor</h3>
        <textarea
          value={this.props.userText}
          className={editorStyles.userInputArea}
          id="editor"
          cols="30"
          rows="10"
          id="editor"
          style={{ resize: "none" }}
          onChange={() =>
            this.props.userInputAction(document.querySelector("#editor").value)
          }
        />
      </div>
    );
  }
}

const userInputAction = (userText) => ({
  type: "USERINPUT",
  userText,
});

const pMapDispatchToProps = (dispatch) =>
  bindActionCreators({ userInputAction }, dispatch);

const pMapStateToProps = (state) => ({ userText: state.userInputReducer });

const CEditor = connect(pMapStateToProps, pMapDispatchToProps)(Editor);
/* End editor Component */

/* Start previewer Component */
const previewerStyles = {
  previewerContainer:
    "flex flex-col items-center my-1 w-full p-4 md:mb-5 md:w-6/12 md:ml-2 md:rounded md:border-4 md:border-solid",
  heading: "text-2xl font-medium mb-3",
  userInputDisplay: "border-2 rounded border-gray-700 w-full m-2",
};

class Previewer extends React.Component {
  render() {
    return (
      <div className={previewerStyles.previewerContainer}>
        <h3 className={previewerStyles.heading}>Previewer</h3>
        <ReactMarkDown>{this.props.userInput}</ReactMarkDown>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInput: state.userInputReducer,
});

const CPreviewer = connect(mapStateToProps)(Previewer);
/* End previewer Component */

/* Start Base App */
const appStyles = {
  base: "flex flex-col items-center h-screen",
  //Heading Section
  headingSection:
    "flex flex-col bg-gray-100 items-center box-border w-full mb-3",
  h1: "text-5xl sm:text-7xl text-center mt-5",
  //Subheading
  subHeading: "mt-8 font-medium",
  logos: "max-h-16 inline text-center",
  tailwind: "ml-2",
  //flexContaier
  flexContainer: "dark flex flex-wrap w-full justify-center h-full",
};

class App extends React.Component {
  render() {
    return (
      <div className={`${appStyles.base}`}>
        <div className={appStyles.headingSection}>
          <h1 className={appStyles.h1}>MarkDown Previewer</h1>
          <p className={appStyles.subHeading}>
            Utilizing:
            <img
              src={reactLogo}
              alt="React Logo"
              width="50px"
              className={appStyles.logos}
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              width="30px"
              className={appStyles.logos}
            />
            <img
              src={tailwindLogo}
              alt="Tailwind CSS Logo"
              width="30px"
              className={`${appStyles.logos} ${appStyles.tailwind}`}
            />
          </p>
        </div>
        <div className={appStyles.flexContainer}>
          <CEditor />
          <CPreviewer />
        </div>
      </div>
    );
  }
}
/* End Base App */

/* Render App to html via Redux */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
