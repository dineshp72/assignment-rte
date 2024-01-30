import { IconText } from "@codexteam/icons";
export class CodeSnippet {
  static get toolbox() {
    return {
      title: "CodeSnippet",
      name: "Code Snippet",
      icon: IconText,
    };
  }

  render() {
    return doDrawTextArea();
  }
}

function doDrawTextArea() {
  const div = document.createElement("div");
  div.contentEditable = true;
  div.classList = "ce-code";
  div.style = "outline: 0px solid transparent;";

  const textArea = document.createElement("textarea");
  textArea.classList = "ce-code__textarea";
  textArea.style = "outline: 0px solid transparent;padding-top:10px";

  textArea.rows = 15;
  textArea.cols = 50;
  textArea?.addEventListener("keydown", (s) => {
    if (s.code === "Enter") {
      s.preventDefault();
      s.stopPropagation();
      textArea.value = textArea.value + "    \n";
    }
  });

  div.append(textArea);
  return div;
}
