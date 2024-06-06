const firstQ = document.querySelectorAll(".q1");
const secondQ = document.querySelectorAll(".q2");
const thirdQ = document.querySelectorAll(".q3");
const fourthQ = document.querySelectorAll(".q4");
const fifthQ = document.querySelectorAll(".q5");
const score = 100;
let user = 0;


firstQ.forEach(item => {
    item.addEventListener('change', function() {
        let pick = this.id;

        switch(pick) {
            case "fq1":
                user = user + 10;
                console.log(user);
                break;
            case "fq2":
                user = user + 5;
                console.log(user);
                break;
            case "fq3":
                user = user + 2;
                console.log(user);
                break;
            case "fq4":
                user = user + 4;
                console.log(user);
                break;
            case "fq5":
                user = user + 1;
                console.log(user);
                break;
            case "fq6":
                user = user - 5;
                console.log(user);
                break;
            
        }
    });
});


secondQ.forEach(item2 => {
    item2.addEventListener('change', function() {
        let pick2 = this.id;

        switch(pick2) {
            case "sq1":
                user = user + 10;
                console.log(user);
                break;
            case "sq2":
                user = user + 5;
                console.log(user);
                break;
            case "sq3":
                user = user + 2;
                console.log(user);
                break;
            case "sq4":
                user = user + 4;
                console.log(user);
                break;
            case "sq5":
                user = user + 1;
                console.log(user);
                break;
            case "sq6":
                user = user - 5;
                console.log(user);
                break;
            
        }
    });
});


thirdQ.forEach(item3 => {
    item3.addEventListener('change', function() {
        let pick2 = this.id;

        switch(pick2) {
            case "tq1":
                user = user + 10;
                console.log(user);
                break;
            case "tq2":
                user = user + 5;
                console.log(user);
                break;
            case "tq3":
                user = user + 2;
                console.log(user);
                break;
            case "tq4":
                user = user + 4;
                console.log(user);
                break;
            case "tq5":
                user = user + 1;
                console.log(user);
                break;
            case "tq6":
                user = user - 5;
                console.log(user);
                break;
            
        }
    });
});
