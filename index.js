var customerName="bob"

function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();
    console.log (customerName);
}


var setBestCustomer;
function setBestCustomer(){
    
    return bestCustomer="not bob";
    
}



function overwriteBestCustomer(){
    var setBestCustomer="maybe bob"
    return setBestCustomer;
}//Not passing,avoiding hardcoding the parameter, logic, when var is used to declare a variable, 
//its inconsistent, it overwrites its vaues.

/*function overwriteBestCustomer(setBestCustomer="maybe bob"){
    return setBestCustomer;
}passes*/



function changeLeastFavoriteCustomer(){
    const changeLeastFavoriteCustomer="Tess";
    changeLeastFavoriteCustomer="Rachael";
    return changeLeastFavoriteCustomer;
}

