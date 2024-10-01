'use strict'

let apiURL="https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"; //url

fetch(apiURL).then(response => {
    return response.json();
}).then(data => {
    const result = data.Results;
    console.log(result);



    
    const vehicleList = document.getElementById('cars');

    result.forEach(car => {
        let list = document.createElement('li');
        list.textContent = `Vehicle Name: ${car.MakeName}, Type: ${car.VehicleTypeName}`;

        vehicleList.appendChild(list);
    });
    
})