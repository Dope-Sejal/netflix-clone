import navbar from "/sejal_components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

import {footer} from "/sejal_components/footer.js"

document.querySelector("#footer").innerHTML=footer();

document.querySelector("#right_menu").innerText="Sign Out"

// document.querySelector("#next").addEventListener("click",()=>{
//     window.location.href="./password_creation.html"
// })

window.onload = function() {
    const getPlan = localStorage.getItem('Plan');
    const selectedPlan = JSON.parse(getPlan);
    console.log("selected Plan\n",selectedPlan);
    if(selectedPlan!=null){
        document.getElementById('name').innerText = ' '+selectedPlan.name+' ';
        document.getElementById('price').innerText = ' '+selectedPlan.Monthly_price+' ';
        document.getElementById('quality').innerText = ' '+selectedPlan.Video_quality+' ';
        document.getElementById('resolution').innerText = ' '+selectedPlan.Resolution+' ';
        document.getElementById('device').innerText = ' '+selectedPlan.Devices+' ';
    }
    else{
        alert("Please Choose A Plan")
    }
}
document.querySelector("#right_menu").addEventListener("click",()=>{
    event.preventDefault();
    window.location.href="/Signout/signout.html";
})