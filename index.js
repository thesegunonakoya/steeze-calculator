const firstQ = document.querySelectorAll(".q1");

firstQ.forEach(item => {
    item.addEventListener('click', function() {
        let pick = this.id;

        switch(pick) {
            case "fq1":
                console.log("1");
                break;
            case "fq2":
                console.log("2");
                break;
            case "fq3":
                console.log("3");
                break;
            case "fq4":
                console.log("4");
                break;
            case "fq5":
                console.log("5");
                break;
            case "fq6":
                console.log("6");
                break;
            default:
                console.log("No matching case for id:", pick);
                break;
        }
    });
});
