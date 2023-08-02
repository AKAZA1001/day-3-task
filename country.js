
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
 
    console.log("Country Flags:");
    data.forEach((country) => {
      console.log(country.flags.png);
    });
    console.log("Countries Information:");
    data.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Region: ${country.region}, Sub-region: ${country.subregion}, Population: ${country.population}`
      );
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
