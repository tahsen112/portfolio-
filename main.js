let isFirst = true;
function mouseEfect(event, thisId){
     let workImg = document.getElementById(thisId);
     let img = document.getElementsByClassName(`work-image`)[thisId];
     let x = event.clientX;
     let rect = workImg.getBoundingClientRect();
     let elementCenter = rect.left + (rect.width / 2);
     if (x < elementCenter) {
          // left
          workImg.style.borderRadius = `3em 8em 4px 4px`;
     }
     else {
          // right
          workImg.style.borderRadius = `8em 3em 4px 4px`;
     }
     if (isFirst) {
          let bigImg = filterNums(img.style.width) + 2;
          console.log(bigImg);
          img.style.width = `${bigImg}em`;
          isFirst = false;
     }
     
}

function mouseOut(thisId){
     setTimeout(() => {
          let workImg = document.getElementById(thisId);
          let img = document.getElementsByClassName(`work-image`)[thisId];
          workImg.style.borderRadius = `7em 7em 4px 4px`;
          let bigImg = filterNums(img.style.width) - 2;
          img.style.width = `${bigImg}em`;
          isFirst = true;
     }, 300);
     
}

function filterNums(nums){
     let result = ``;
     for (let i = 0; i < nums.length; i++) {
          if (Number(nums[i]) || nums[i] == `0`) {
               result += nums[i];
          }
     }
     return Number(result);
}

// if open the site from computer hide unRessponsive site
if (screen.width > 500) {
     let saveWeightsDiv = document.getElementsByClassName(`work`)[0];
     saveWeightsDiv.style.display = `none`;
}
else {
     let crudsDiv = document.getElementsByClassName(`work`)[3];
     crudsDiv.style.display = `none`;
}

window.addEventListener(`load`, () => {
     let container = document.querySelector(`.hide-con`);
     container.classList.toggle(`container`);
})

/* 
https://tahsen112.github.io/falling-sand/
https://tahsen112.github.io/weather-app/
https://tahsen112.github.io/save-weight/
https://tahsen112.github.io/RPS/
https://tahsen112.github.io/tic-tac-toe/
https://tahsen112.github.io/CRUDS/
*/