import React from "react";
import { connect } from "react-redux";
import ReactMarkDown from "react-markdown";

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

export default connect(mapStateToProps)(Previewer);
