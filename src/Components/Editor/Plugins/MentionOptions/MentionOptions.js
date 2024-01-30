import './MentionOptions.css'
import { IconUsersGroup } from '@codexteam/icons';

export class MentionOptions {
  currentDiv
   users = [{
    id: 1,
    username: 'barney85',
    name: 'Barney'
  },
  {
    id: 2,
    username: 'lily21',
    name: 'Lily'
  },
  {
    id: 3,
    username: 'marry_ann',
    name: 'Marry Ann'
  },
  {
    id: 4,
    username: 'marshall_g',
    name: 'Marshall'
  },
  {
    id: 5,
    username: 'robin99',
    name: 'Robin'
  },
  {
    id: 6,
    username: 'ted123',
    name: 'Ted'
  },
]

    static get toolbox() {
        return {
            title: 'Mention',
            name: "Mention",
            icon: IconUsersGroup
        };
    }

    render() {
        return this.doOpenDropdown((newlyCreatedDiv)=>{
          this.currentDiv=newlyCreatedDiv
        })
    }

    save(blockContent) {
        return {
            url: blockContent.value
        }
    }
     showDropdown () {
      const structure = document.createElement("div");
      structure.classList.add("structure");
    
      this.users.forEach(user => {
        const {
          id,
          name,
          username
        } = user;
        const option = document.createElement("div");
        option.addEventListener("click", (event) => {
          this.selectOption(name)});
          // this.focusNextInput(this.currentDiv)
  
        option.setAttribute("id", id);
    
        const t = document.createElement("p");
        t.textContent = `@${username}`;
    
        option.appendChild(t);
        structure.appendChild(option);
      });
      return structure;
    };
     doOpenDropdown(currentDiv) {
      var array = this.users;
  var selectList = document.createElement("select");
  
   
  for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i].name;
      option.text = array[i].name;
      selectList.appendChild(option);
  }
  const dropDownObj=this.dropdown()
  currentDiv(dropDownObj)
      return dropDownObj
  }
  
   
    
     dropdown()  {
      const component = document.createElement("p");
      component.classList="ce-paragraph cdx-block"
      const input = this.createInput();
      const dropdown = this.showDropdown();
    
      component.appendChild(input);
      component.appendChild(dropdown);
      return component
    };
    
     createInput()  {
      const input = document.createElement("div");
      input.classList = "input";
      input.addEventListener("click", ()=>{
        this.toggleDropdown()
        // this.focusNextInput()
      });
      const inputPlaceholder = document.createElement("span");
      inputPlaceholder.classList = "input__placeholder";
        inputPlaceholder.classList.add('placeholderinput')
  
      inputPlaceholder.textContent = "@";
      input.appendChild(inputPlaceholder);
    
      return input;
    };
    
    
     focusNextInput(){
       let div =document.getElementById("DDDD")
       div.focus()
    }
    
     toggleDropdown(){
      const dropdown = document.querySelector(".structure");
      dropdown.classList.toggle("hide");
    
      const input = document.querySelector(".input");
      input.classList.toggle("input__active");
    };
    
     selectOption(name){
      const text = document.getElementsByClassName('input__placeholder placeholderinput');
      if(text?.length>0){
      text[0].innerText = `@${name}`;
      text[0].style="color:red;"
      this.toggleDropdown();
    }
  
    };
    
}

  