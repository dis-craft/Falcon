let TCE; //Total Carbon Emission
let CE_coalprod; //Carbon Emission from coal production
let CE_vehicles; //Carbon Emission from vehicles
let CE_fuel; //Carbon Emission from fuel
let CE_electricity; //Carbon Emission from electricity

document.getElementById("submit").onclick = function(){
    CE_coalprod = document.getElementById("coal-produced").value;
    document.getElementById("CE-output-coal-prod").textContent = `Coal produced ${CE_coalprod}`

    CE_vehicles = document.getElementById("no-of-vehicles").value;
    document.getElementById("CE-output-vehicles").textContent = `Coal produced ${CE_vehicles}`

    CE_fuel = document.getElementById("fuel").value;
    document.getElementById("CE-output-fuel").textContent = `Fuel used is ${CE_fuel}`

    CE_fuel = document.getElementById("electricity").value;
    document.getElementById("CE-output-electricity").textContent = `Electricity used is ${CE_fuel}`   
}

