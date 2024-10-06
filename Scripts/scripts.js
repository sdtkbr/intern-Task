// signup btn
function changeColor(){
    const signBtn =  document.getElementById('signup-btn');
    signBtn.style.backgroundColor ='black';
    signBtn.style.color = 'white';
}

// heading  point
const elements = document.getElementById('ai-tool');
const paraGraph = document.createElement('h3');
paraGraph.innerHTML= `
<h1> An AI tool made for conversion rate optimization </h1>`;
elements.appendChild(paraGraph);
paraGraph.classList.add('aiTool')

// heading point 2
const headingPoint =  document.getElementById('tool');
const headingPoint2 = document.createElement('h1');
headingPoint2.innerHTML = `
    <h1>
        <p>Increase your <br> conversion rate <span>usign ai</span></p>
    </h1>
`
headingPoint.appendChild(headingPoint2);
headingPoint2.classList.add('tool2');
const spanElement = headingPoint2.querySelector('span');
spanElement.classList.add('highlight');

// button
const  button = document.getElementById('acc-btn');
const  accBtn = document.createElement('button');
accBtn.innerHTML = `
    <button><a>Create Account</a></button>

`
button.appendChild(accBtn);
accBtn.classList.add('accBtn');


// 30  days  trail 
const days = document.getElementById('trail');
const trail  = document.createElement('p');
trail.innerHTML =`
    <p>30 Days free trial     |     No credit card required</p>
`
days.appendChild(trail);
trail.classList.add('trail');