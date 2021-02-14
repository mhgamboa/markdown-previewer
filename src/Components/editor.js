import React from "react";

const styles = {
  editorContainer:
    "flex flex-col items-center border-4 border-solid m-4 rounded p-2",
  heading: "text-2xl font-medium",
  userInputArea: "border-2 rounded border-gray-700 w-full",
};

class Editor extends React.Component {
  render() {
    return (
      <div className={styles.editorContainer}>
        <h3 className={styles.heading}>Text Editor</h3>
        <textarea
          className={styles.userInputArea}
          id="editor"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    );
  }
}

export default Editor;
