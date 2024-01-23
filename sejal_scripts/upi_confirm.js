import navbar from "/sejal_components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

import {footer} from "/sejal_components/footer.js"

document.querySelector("#footer").innerHTML=footer();
document.querySelector("#right_menu").innerText="Sign Out"


document.querySelector("#next").addEventListener("click",()=>{
    let chk_val=document.querySelector("#check");
    if(chk_val.checked){
        window.location.href="./upi_done.html";
    }
    else{
       alert("Please check on I agree !")
    }
})

window.onload = function() {
    const getPlan = localStorage.getItem('Plan');
    const selectedPlan = JSON.parse(getPlan);
    console.log("selected Plan\n",selectedPlan);
    if(selectedPlan!=null){
        document.getElementById('name').innerText = ' '+selectedPlan.name+' ';
        document.getElementById('price').innerText = ' '+selectedPlan.Monthly_price+' ';
    }
    else{
        alert("Please Choose A Plan")
    }
}
let upi_text=localStorage.getItem("payment_check_upi");

document.querySelector("#upi_pay").innerText=upi_text;



document.querySelector("#right_menu").addEventListener("click",()=>{
    event.preventDefault();
    window.location.href="/Signout/signout.html";
})