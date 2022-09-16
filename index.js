let h1 = document.getElementById("sai-form");
const h2 = () => {
    let h3 = localStorage.getItem("sai-ent");
    if(h3){
        h3 = JSON.parse(h3);

    }else{
        h3 = [];
    }
    return h3;
};

let h4 = h2();
const h5 = () =>{
    const h6 = h2();
    const h7 = h6.map((entry) => {
        
        const namesai = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailsai = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordsai = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobsai = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermssai = `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rowsai = `<tr>${namesai} ${emailsai} ${passwordsai} ${dobsai} ${acceptTermssai}</tr>`;
        return rowsai;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${h7} </table>`;
    let details = document.getElementById("sai-ent");
    details.innerHTML = table;
}
const h8 = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndConditions = document.getElementById("acceptTerms").checked;
    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions,
    };
    h4.push(entry);
    localStorage.setItem("sai-ent", JSON.stringify(h4));
    h5();
}
h1.addEventListener("submit",h8);
h5();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------

   
        function ganval10()
        {   let element = document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let sai1 = new Date(dob);
            var todaydate = new Date(); 
            var age=parseInt(todaydate.getFullYear()) - parseInt(sai1.getFullYear());
            if (todaydate.getMonth() < sai1.getMonth() || (todaydate.getMonth() === sai1.getMonth() && todaydate.getDate() < sai1.getDate()))
             age--;
            if(!(age > 18 && age < 55))
            {
                element.setCustomValidity(" Entered age is not valid and age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

//=======================================email=========================================
