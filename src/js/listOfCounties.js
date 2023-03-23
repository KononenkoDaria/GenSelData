import countryList from "country-list";

function listOfCountries() {
    document.addEventListener("DOMContentLoaded", function() {
        const countries = countryList.getNames();
        const select = document.getElementById("countriesList");
      
        countries.forEach(function(country) {
          const option = document.createElement("option");
          option.text = country;
          option.value = country;
          select.add(option);
        });
    });
}

export { listOfCountries }