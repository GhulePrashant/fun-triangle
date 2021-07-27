const formTriangle = document.querySelector("#formTriangle");
const inputAngles = document.querySelectorAll(".inputAngle");
const submitBtn = document.querySelector("#submitBtn");
const output = document.querySelector("#isTriangle");

let angles = [];

submitBtn.addEventListener('click', triangleHandler);

function triangleHandler(e){
    e.preventDefault();
    for(let i=0; i<inputAngles.length; i++){
        angles[i] = Number(inputAngles[i].value);
    }
    let sum=0;
    angles.map((angle)=>{
        sum = sum + angle;
    })
    // console.log(sum);
    if(sum==180){
        output.innerText = "Yes, these angles make a triangle.";
    }else{
        output.innerText = "No, these angles do not make a triangle.";
    }
}