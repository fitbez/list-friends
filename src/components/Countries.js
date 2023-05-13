import axios from "axios";
import { useEffect, useState } from "react";

function Countries() {
  const [countryData, setCountryData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  async function getCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = await response.data;
      setCountryData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // console.log("country data", countryData);
  useEffect(() => {
    if (countryData !== null) {
      const filteredCountry = countryData.filter(
        (country) => userInput === country.name.official
      );

      console.log("filtered country", filteredCountry);
      console.log("user value", userInput);
    }
  }, []);

  console.log("filtered countries", filteredCountry);
  return (
    <>
      <h2>Welcome to the world</h2>
      <div>
        <input type='text' name='' id='' onChange={handleChange} />
      </div>
      <div>
        {countryData &&
          countryData.map((country) => {
            return (
              <div>
                <p>Name: {country.name.official}</p>
                <img src={country.flags.png} alt={country.flags.alt} />
                <p>Population: {country.population}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Countries;
