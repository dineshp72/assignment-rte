import { IconUser } from "@codexteam/icons";
export class AgeOptions {
  static get toolbox() {
    return {
      title: "Add Age Question",
      name: "Add Age Question",
      icon: IconUser,
    };
  }

  render() {
    return doAddAgeQuestions();
  }
}
function doAddAgeQuestions() {
  let span = document.createElement("span");
  span.contentEditable = true;
  span.style = "outline: 0px solid transparent;";
  span.innerText = "What is your Age?";
  const ul = document.createElement("ul");
  function doAddAgesNodes(from, to, domObj) {
    let age = from;
    for (let i = 0; i <= to - from; i++) {
      const list1 = document.createElement("li");
      list1.contentEditable = true;
      const ageText1 = document.createTextNode(age);
      ageText1.contentEditable = true;
      list1.appendChild(ageText1);
      domObj.appendChild(list1);
      age = age + 1;
    }
    return domObj;
  }
  const ulAgesNodes = doAddAgesNodes(18, 22, ul);
  span.appendChild(ulAgesNodes);
  return span;
}
