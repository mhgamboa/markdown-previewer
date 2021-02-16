import React from "react";
import { connect } from "react-redux";
import marked from "marked";
import { MarkdownPreview } from "react-marked-markdown";
import ReactMarkDown from "react-markdown";
import markdown from "markdown";

const styles = {
  previewerContainer:
    "flex flex-col items-center my-1 w-full p-4 md:mb-5 md:w-6/12 md:ml-2 md:rounded md:border-4 md:border-solid",
  heading: "text-2xl font-medium mb-3",
  userInputDisplay: "border-2 rounded border-gray-700 w-full m-2",
};

class Previewer extends React.Component {
  render() {
    return (
      <div className={styles.previewerContainer}>
        <h3 className={styles.heading}>Previewer</h3>
        <MarkdownPreview value={this.props.userInput} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInput: state.userInputReducer,
});

export default connect(mapStateToProps)(Previewer);
