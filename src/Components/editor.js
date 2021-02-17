import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ userInputAction }, dispatch);

const mapStateToProps = (state) => ({ userText: state.userInputReducer });

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
