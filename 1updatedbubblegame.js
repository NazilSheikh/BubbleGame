
var hitscore = document.querySelector(".hitscorepara");
var settime = document.querySelector(".settimer");
var score = document.querySelector(".score");
var target = document.querySelector(".targetscore")
var pbottom = document.querySelector(".pbottom");
 var newgamepara = document.querySelector(".newgamepara")
 let hitrun = 0 ; 
function makebubble()
{
   var clutter="";
   for(let i =1;i<91;i++ )
   {
      var rn = Math.floor(Math.random()*10);
      clutter+=`<div class="bubble">${rn}</div>`;

   }
   pbottom.innerHTML=clutter;

}
makebubble();

 function randomhit()
 {
   hitrun = Math.floor(Math.random()*10);
  hitscore.innerText = `${hitrun}`;
 }
 randomhit();

 var targethit = 0;
 function randomtarget()
 {
    //  targethit=Math.floor(Math.random()*200)
    // let targethit = Math.floor(Math.random() * 41) * 10 + 100;
        // Generate a random number between 0 and 20
        let randomBase = Math.floor(Math.random() * 21);

        // Multiply by 10 to make it between 0 and 200, then add 100 to make it between 100 and 300
         targethit = randomBase * 10 + 100;
     target.innerText=`${targethit}`;
  }
    randomtarget();

    function userwin()
    {
       if(scorevalue>targethit)
        {
          pbottom.innerHTML=`<h1> Congratulation you won the game </h1>`;
          return true ;
        }
        return false ;
    }

    function checkwinner()
    {
        if(scorevalue==targethit)
        {
           pbottom.innerHTML=`<h1>The game is Draw </h1>`;
        }
        if(scorevalue<targethit)
        {
          pbottom.innerHTML=`<h1> Sorry you lose the game ! </h1>`;
        }
    }

 var timer = 60;
 function timeout()
 {

   let timerinterval = setInterval(function()
  {

    if(timer>0)
      {
        timer--;
        settime.innerText=`${timer}`;
        if(userwin())
        {
          clearInterval(timerinterval);
        }
      }
      else
      {
        clearInterval(timerinterval);
        // pbottom.innerHTML=`<h1>The game is over </h1>`;
        checkwinner();
          
      }
      
    },1000);
    }
    timeout();

    var scorevalue = 0;
  function  increasescore()
  {
    scorevalue+=10;
    score.innerText=`${scorevalue}`;
  }
  
    pbottom.addEventListener("click" ,function(dets)
  {
    //  console.log(dets.target.innerText);
    var clickednum = Number(dets.target.innerText);
    if(clickednum==hitrun)
    {
      increasescore();
      makebubble();
      randomhit();
    }
  })
  

  newgamepara.addEventListener("click", function () {
    console.log("button was clicked");
    timer = 60;
    scorevalue = 0;
    score.innerText = `${scorevalue}`;
    settime.innerText = `${timer}`;
    makebubble();
    randomhit();
    randomtarget();
    timeout();
});



// var hitscore = document.querySelector(".hitscorepara");
// var settime = document.querySelector(".settimer");
// var score = document.querySelector(".score");
// var target = document.querySelector(".targetscore")
// var pbottom = document.querySelector(".pbottom");
// var newgamepara = document.querySelector(".newgamepara");
// let hitrun = 0;
// let timerinterval;

// function makebubble() {
//     var clutter = "";
//     for (let i = 1; i < 91; i++) {
//         var rn = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${rn}</div>`;
//     }
//     pbottom.innerHTML = clutter;
// }
// makebubble();

// function randomhit() {
//     hitrun = Math.floor(Math.random() * 10);
//     hitscore.innerText = `${hitrun}`;
// }
// randomhit();

// var targethit = 0;
// function randomtarget() {
//     let randomBase = Math.floor(Math.random() * 21);
//     targethit = randomBase * 10 + 100;
//     target.innerText = `${targethit}`;
// }
// randomtarget();

// function userwin() {
//     if (scorevalue > targethit) {
//         pbottom.innerHTML = `<h1> Congratulation you won the game </h1>`;
//         return true;
//     }
//     return false;
// }

// function checkwinner() {
//     if (scorevalue == targethit) {
//         pbottom.innerHTML = `<h1>The game is Draw </h1>`;
//     } else if (scorevalue < targethit) {
//         pbottom.innerHTML = `<h1> Sorry you lose the game ! </h1>`;
//     }
// }

// var timer = 60;
// function timeout() {
//     clearInterval(timerinterval);
//     timerinterval = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//             settime.innerText = `${timer}`;
//             if (userwin()) {
//                 clearInterval(timerinterval);
//             }
//         } else {
//             clearInterval(timerinterval);
//             checkwinner();
//         }
//     }, 1000);
// }
// timeout();

// var scorevalue = 0;
// function increasescore() {
//     scorevalue += 10;
//     score.innerText = `${scorevalue}`;
// }

// pbottom.addEventListener("click", function (dets) {
//     var clickednum = Number(dets.target.innerText);
//     if (clickednum == hitrun) {
//         increasescore();
//         makebubble();
//         randomhit();
//     }
// });
