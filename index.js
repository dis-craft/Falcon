let TCE; //Total Carbon Emission
let CE_coalprod; //Carbon Emission from coal production
let CE_fuel; //Carbon Emission from fuel
let CE_electricity; //Carbon Emission from electricity

document.getElementById("submit").onclick = function(){
    CE_coalprod = parseFloat(document.getElementById("coal-produced").value);
    CE_fuel = parseFloat(document.getElementById("fuel").value);
    CE_electricity = parseFloat(document.getElementById("electricity").value);

    // Multiply factors for respective emissions
    let CE_coalprodMultiplied = CE_coalprod * 30;
    let CE_fuelMultiplied = CE_fuel * 230;
    let CE_electricityMultiplied = CE_electricity * 127;

    // Display individual results
    document.getElementById("CE-output-coal-prod").textContent = `Carbon emission from coal production in one year is ${CE_coalprodMultiplied.toFixed(3)} KG`;
    document.getElementById("CE-output-vehicles").textContent = `Number of vehicles ${parseFloat(document.getElementById("no-of-vehicles").value)}`;
    document.getElementById("CE-output-fuel").textContent = `Carbon emission from fuel used in vehicles in one year is ${CE_fuelMultiplied.toFixed(3)} KG`;
    document.getElementById("CE-output-electricity").textContent = `Carbon emission from electricity used in one year is ${CE_electricityMultiplied.toFixed(3)} KG`;

    // Calculate total carbon emissions and round it to 3 decimal places
    TCE = CE_coalprodMultiplied + CE_fuelMultiplied + CE_electricityMultiplied;
    document.getElementById("CE-output-total").textContent = `Total Carbon emission in one year is ${TCE.toFixed(3)} KG`;
}
