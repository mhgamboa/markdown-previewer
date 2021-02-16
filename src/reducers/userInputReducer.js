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

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const userInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINPUT:
      return action.userText;
    default:
      return state;
  }
};

export default userInputReducer;
