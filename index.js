const check = document.getElementById("steeze")


let total = 100;
let user = 0;
let result;
const first = ['A','A','A','A','A']
const second = ['B','B','B','B','B']
const third = ['C','C','C','C','C']
const fourth = ['D','D','D','D','D']
const fifth = ['E','E','E','E','E']
const sixth = ['F','F','F','F','F']


check.addEventListener('submit',e =>{
    const score = document.getElementById("score")
    let logo = document.querySelector('#name').value.toLowerCase();
    e.preventDefault()
    const userAnswers = [check.q1.value,check.q2.value,check.q3.value,check.q4.value,check.q5.value]

    userAnswers.forEach((answer, index)=>{
        if(answer === first[index]){
            user += 10;
        }else if(answer === second[index]){
            user += 20
        }else if(answer === third[index]){
            user += 30
        }else if(answer === fourth[index]){
            user += 40
        }else if(answer === fifth[index]){
            user += 50
        }else if(answer === sixth[index]){
            user -= 20
        }
    })

    if (user < 50){
        score.textContent = `${logo}, see your score ${user} u dey fuck up o `
    }else if (user > 50){
        score.textContent = `${logo}, see your score ${user} u don over pass o`
    }
    console.log(logo);
    console.log(user);

})

