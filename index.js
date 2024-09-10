let TCE; //Total Carbon Emission
let CE_coalprod; //Carbon Emission from coal production
let CE_vehicles; //Carbon Emission from vehicles
let CE_fuel; //Carbon Emission from fuel
let CE_electricity; //Carbon Emission from electricity

document.getElementById("submit").onclick = function(){
    CE_coalprod = parseFloat(document.getElementById("coal-produced").value);
    CE_vehicles = parseFloat(document.getElementById("no-of-vehicles").value);
    CE_fuel = parseFloat(document.getElementById("fuel").value);
    CE_electricity = parseFloat(document.getElementById("electricity").value);

    CE_coalprodMultiplied = (CE_coalprod * 30);
    CE_fuelMultiplied = (CE_fuel * 230);
    CE_electricityMultiplied = (CE_electricity * 127);

    document.getElementById("CE-output-coal-prod").textContent = `Carbon emission from coal production in one year is ${CE_coalprodMultiplied}KG`
    document.getElementById("CE-output-vehicles").textContent = `Number of vehicles ${CE_vehicles}`
    document.getElementById("CE-output-fuel").textContent = `Carbon emission from Fuel used in vehicles in one year is ${CE_fuelMultiplied}KG`
    document.getElementById("CE-output-electricity").textContent = `Carbon emission from Electricity used in one year is ${CE_electricityMultiplied}KG`
    
    TCE = CE_coalprodMultiplied + CE_fuelMultiplied + CE_electricityMultiplied;
    document.getElementById("CE-output-total").textContent = `Total Carbon emission in one year is ${TCE.toFixed(3)} KG`;
}
