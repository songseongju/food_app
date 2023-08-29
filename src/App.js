import React from "react";



function Food({name,picture}){

  return (
  
  <div>

    <h3> {name} </h3>
    <img src = {picture} ></img>

  </div>
  
  );
}

const foodList = [


{
  name : '300샐러드Meal + 밸런스 케이크' ,
  image : 'https://dm.pulmuone.com/upload/img/202212/202212216uFHU5s.jpg',

},
{
  name : '300샐러드&라이스Meal MIX식단(2주)',
  image : 'https://dm.pulmuone.com/upload/img/202306/20230615phTw0R948FIW.jpg',


},
{
  name : '300샐러드&라이스Meal MIX식단(4주)',
  image : 'https://dm.pulmuone.com/upload/img/202306/20230615UD0I9M-.jpg',

},

];
function App() {
  return (
    <div>
      {foodList.map(dish =>(<Food name = {dish.name} picture={dish.image}/>))}
      
    </div>
  );
}

export default App;
