console.log('Hello world!');

//? Name validation
//todo Rules for name
//* first letter always should be capital and rest of letters should be small.
//* name don't contain any types of special characters

//? input with type text
// let formControl = document.querySelectorAll('.form-control')
let names = document.querySelectorAll(".name")


let regexpForName = /^((\b[A-Z])([a-z]*\b[\s+]?)){1,}$/;
names.forEach((name)=>{
  name.addEventListener('keyup', ()=>{
    let nameValue = name.value;
    let formControl = name.parentElement;
    if(nameValue.length <= 0){
      formControl.classList.remove('nameValid')
    }else{
      if(regexpForName.test(nameValue)){
        formControl.classList.add('nameValid')
        formControl.classList.remove('nameInvalid')
      }else{
        formControl.classList.remove('nameValid')
        formControl.classList.add('nameInvalid')
      }
    }
  })
})


