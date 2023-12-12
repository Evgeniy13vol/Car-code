const correct_code = "1234";

let user_code = "";

let counter = 0;

const check = (num) => {

    if(counter < 4) {
        user_code += num;
        console.log(user_code);
        if(user_code.length === 4) {
            counter++;
            if (user_code === correct_code) {
                document.querySelector("#result").innerHTML = "דרך צלחה";
                user_code = "";
                counter = 0;
            }
            else {
                if (counter < 4) {
                    document.querySelector("#result").innerHTML = `הקוד שגוי ! זהו נסיון מספר ${counter} נסה שוב`;
                    user_code = "";
                }
                else {
                    document.querySelector("#result").innerHTML = "הרכב נעול";
                }
            }
        }
        else {
            document.querySelector("#result").innerHTML = "";
        }
    }

    else {
        document.querySelector("#result").innerHTML = "הרכב נעול";
    }
}