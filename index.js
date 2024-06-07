const check = document.getElementById("steeze")
const refresh = document.getElementById('refresh')

let user = 0;
let result;
const first = ['A','A','A','A','A']
const second = ['B','B','B','B','B']
const third = ['C','C','C','C','C']
const fourth = ['D','D','D','D','D']
const fifth = ['E','E','E','E','E']
const sixth = ['F','F','F','F','F']


check.addEventListener('submit',e =>{
    e.preventDefault()
    const score = document.getElementById("score")
    let logo = document.getElementById('name').value.toUpperCase();
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

    if (user < 30 ){
        score.textContent = `${logo}, see your score ${user} u don dey fuck up o `
        score.classList.add('style')
    }else if (user > 30 &&  user <= 49){
        score.textContent = `${logo}, see your score ${user} wetin be this na `
        score.classList.add('style2')
    }else if (user > 50 &&  user <= 70){
        score.textContent = `${logo}, see your score ${user} ur steeze dey go oo`
        score.classList.add('style3')
    }else if (user > 71 &&  user <= 89){
        score.textContent = `${logo}, see your score ${user} osheyy but e remain small o`
        score.classList.add('style4')
    }else if (user > 90){
        score.textContent = `${logo}, see your score ${user} agba of all steeze`
        score.classList.add('style5')
    }


})

refresh.addEventListener('click',function() {
window.location.reload();

})

