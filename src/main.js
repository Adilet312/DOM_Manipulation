
import './styles.css';

document.querySelector('#buttonID').addEventListener('click',function(){
  let element = document.querySelector('.container');
  let children = element.children;
  let colors = ["purple","yellow","green","red","lightblue","blue"]
  let indexColor = Math.floor(Math.random()*colors.length);
  let indexPosition = Math.floor(Math.random()*children.length);
  children[indexPosition].style.backgroundColor = `${colors[indexColor]}`;
});

/*
for(let idx = 0; idx < children.length; idx++){
  let index = Math.floor(Math.random()*colors.length);
  console.log(index)
  children[idx].style.backgroundColor = `${colors[index]}`
}
*/
// for(let idx = 0; idx < element.length; idx++){
//   console.log(element[idx].firstChild.innerText=`(${idx})`)
// }

// for(let idx = 0; idx < children.length; idx++){
//
//       console.log(children[idx].childNode);
//
//
// }
