import navbar from "/sejal_components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

import {footer} from "/sejal_components/footer.js"

document.querySelector("#footer").innerHTML=footer();

document.querySelector("#footer").innerHTML=footer();

document.querySelector("#right_menu").innerText="Sign Out";

document.querySelector("#next").addEventListener("click",()=>{
    const plan = localStorage.getItem('NetflixPlan');
    if(plan!=null){

        window.location.href="./payment_method.html"
    }
    else{
        alert("Please Choose A Plan")
    }
})


document.querySelector("#right_menu").addEventListener("click",()=>{
    event.preventDefault();
    window.location.href="/Signout/signout.html";
})



// Dheeraj js
document.getElementById('Mobileplan').addEventListener('click', Addmobileplan);
document.getElementById('basicplan').addEventListener('click', AddbasicPlan);
document.getElementById('standredplan').addEventListener('click', AddStandredplan);
document.getElementById('premiumplan').addEventListener('click', Addprimumplan);

function Addmobileplan(){
    var mobile = {
        'name':'mobile',
        'Monthly_price':'₹149' ,
        'Video_quality':'Good' ,
        'Resolution':'480p' ,
        'Devices':'Phone,Tablet' ,    
    };
    console.log("plan ",mobile.name);
    var jsonString = JSON.stringify(mobile);
    localStorage.setItem('Plan', jsonString);
    localStorage.setItem('NetflixPlan', 'MobilePlan');
    document.getElementById('Mobileplan').style.opacity='1';
    document.getElementById('basicplan').style.opacity='0.5';
    document.getElementById('standredplan').style.opacity='0.5';
    document.getElementById('premiumplan').style.opacity='0.5';

   
    document.getElementById('PlanAmountone').style.color='red'
    document.getElementById('QualityTypeone').style.color='red'
    document.getElementById('reso_type_one').style.color='red'
    document.getElementById('reso_item-two').style.color='red'
   
    // 

    document.getElementById('PlanAmounttwo').style.color='white'
    document.getElementById('QualityTypetwo').style.color='white'
    document.getElementById('reso_type_tow').style.color='white'
    document.getElementById('reso_item_three').style.color='white'
   
    document.getElementById('PlanAmountthree').style.color='white'
    document.getElementById('QualityTypethree').style.color='white'
    document.getElementById('reso_type_three').style.color='white'
    document.getElementById('reso_item-four').style.color='white'
   
    document.getElementById('PlanAmountfour').style.color='white'
    document.getElementById('QualityTypefour').style.color='white'
    document.getElementById('reso_type_four').style.color='white'
    document.getElementById('reso_item-five').style.color='white'
   
}
function AddbasicPlan(){
    var basic = {
        'name':'basic',
        'Monthly_price':'₹199' ,
        'Video_quality':'Good' ,
        'Resolution':'480p' ,
        'Devices':'Phone,Tablet,computer,tv' ,    
    };
    console.log("plan ",basic.name);
    var jsonString = JSON.stringify(basic);
    localStorage.setItem('Plan', jsonString);
    localStorage.setItem('NetflixPlan', 'BasicPlan');
    document.getElementById('Mobileplan').style.opacity='0.5';
    document.getElementById('basicplan').style.opacity='1';
    document.getElementById('standredplan').style.opacity='0.5';
    document.getElementById('premiumplan').style.opacity='0.5';

    document.getElementById('PlanAmountone').style.color='white'
    document.getElementById('QualityTypeone').style.color='white'
    document.getElementById('reso_type_one').style.color='white'
    document.getElementById('reso_item-two').style.color='white'
   
    // 

    document.getElementById('PlanAmounttwo').style.color='red'
    document.getElementById('QualityTypetwo').style.color='red'
    document.getElementById('reso_type_tow').style.color='red'
    document.getElementById('reso_item_three').style.color='red'
   
    document.getElementById('PlanAmountthree').style.color='white'
    document.getElementById('QualityTypethree').style.color='white'
    document.getElementById('reso_type_three').style.color='white'
    document.getElementById('reso_item-four').style.color='white'
   
    document.getElementById('PlanAmountfour').style.color='white'
    document.getElementById('QualityTypefour').style.color='white'
    document.getElementById('reso_type_four').style.color='white'
    document.getElementById('reso_item-five').style.color='white'
   
}
function AddStandredplan(){
    var standard = {
        'name':'standard',
        'Monthly_price':'₹499' ,
        'Video_quality':'Better' ,
        'Resolution':'1080p' ,
        'Devices':'Phone,Tablet,computer,tv' ,    
    };
    console.log("plan ",standard.name);
    var jsonString = JSON.stringify(standard);
    localStorage.setItem('Plan', jsonString);
    localStorage.setItem('NetflixPlan', 'StandredPlan');
    document.getElementById('Mobileplan').style.opacity='0.5';
    document.getElementById('basicplan').style.opacity='0.5';
    document.getElementById('standredplan').style.opacity='1';
    document.getElementById('premiumplan').style.opacity='0.5';
   
    document.getElementById('PlanAmountone').style.color='white'
    document.getElementById('QualityTypeone').style.color='white'
    document.getElementById('reso_type_one').style.color='balck'
    document.getElementById('reso_item-two').style.color='white'
   
    // 

    document.getElementById('PlanAmounttwo').style.color='white'
    document.getElementById('QualityTypetwo').style.color='white'
    document.getElementById('reso_type_tow').style.color='white'
    document.getElementById('reso_item_three').style.color='white'
   
    document.getElementById('PlanAmountthree').style.color='red'
    document.getElementById('QualityTypethree').style.color='red'
    document.getElementById('reso_type_three').style.color='red'
    document.getElementById('reso_item-four').style.color='red'
   
    document.getElementById('PlanAmountfour').style.color='white'
    document.getElementById('QualityTypefour').style.color='white'
    document.getElementById('reso_type_four').style.color='white'
    document.getElementById('reso_item-five').style.color='white'
}
function Addprimumplan(){
    var premium = {
        'name':'premium',
        'Monthly_price':'₹649' ,
        'Video_quality':'Best' ,
        'Resolution':'4K+HDR' ,
        'Devices':'Phone,Tablet,computer,tv' ,    
    };
    console.log("plan ",premium.name);
    var jsonString = JSON.stringify(premium);
    localStorage.setItem('Plan', jsonString);
    localStorage.setItem('NetflixPlan', 'PreimiumPlan');
    document.getElementById('Mobileplan').style.opacity='0.5';
    document.getElementById('basicplan').style.opacity='0.5';
    document.getElementById('standredplan').style.opacity='0.5';
    document.getElementById('premiumplan').style.opacity='1';

    document.getElementById('PlanAmountone').style.color='white'
    document.getElementById('QualityTypeone').style.color='white'
    document.getElementById('reso_type_one').style.color='white'
    document.getElementById('reso_item-two').style.color='white'
   
    // 

    document.getElementById('PlanAmounttwo').style.color='white'
    document.getElementById('QualityTypetwo').style.color='white'
    document.getElementById('reso_type_tow').style.color='white'
    document.getElementById('reso_item_three').style.color='white'
   
    document.getElementById('PlanAmountthree').style.color='white'
    document.getElementById('QualityTypethree').style.color='white'
    document.getElementById('reso_type_three').style.color='white'
    document.getElementById('reso_item-four').style.color='white'
   
    document.getElementById('PlanAmountfour').style.color='red'
    document.getElementById('QualityTypefour').style.color='red'
    document.getElementById('reso_type_four').style.color='red'
    document.getElementById('reso_item-five').style.color='red'
   
}

// dheeraj js end