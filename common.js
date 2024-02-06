function calculateAge() {
   
    const birthdate= document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

    if (birthdate) {
        const today= new Date();
        const birthDate = new Date(birthdate);
        
        
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if(ageDays < 0) {
            ageMonths --;
            ageDays += new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
        }
    

        if(ageMonths < 0) {
            ageYears --;
            ageMonths += 12;
            
            
            
        }

        if (ageYears > 1997) {
            alert("Sach me Bhude ho chuke ho ap");
            console.log("harsh");
        }

            resultElement.innerText= `Your Age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
            resultElement.style.color = "green"; 
        }
        else {
            resultElement.innerText = "Please enter your Birthdate";
            resultElement.style.color = "red";
            
           
        }
}
