let A = 0
let B = 0

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
const result = document.getElementById('result')

function calculate(){
    ctx.clearRect(0, 0, canvas.width, canvas.width)

    A = document.getElementById('A').value
    B = document.getElementById('B').value
    
    ctx.beginPath();
    ctx.rect(0, 0, A, B);
    ctx.lineWidth=1;
    ctx.stroke();
    ctx.closePath();
    
    findGCD(1)
}


function findGCD(lengthOfSide){
  while (lengthOfSide<=A){
      if (A % lengthOfSide == 0 && B % lengthOfSide == 0){
          console.log(lengthOfSide)
          draw(lengthOfSide)
          result.innerHTML = lengthOfSide
        }
        if(lengthOfSide == 1){
            result.innerHTML = lengthOfSide + "! You find some coprimes!"
        }
        lengthOfSide+=1
    }
}

function draw(lengthOfSide){
    ctx.beginPath();
    ctx.rect(0, 0, lengthOfSide, lengthOfSide);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
