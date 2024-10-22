import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";


const Search= ({onSearchChange}) =>{

  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((response) => {
        if (!response.data) {
          throw new Error('Invalid response data');
        }
        return {
          options: response.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      })
      .catch((err) => {
        console.error(err);
        return {
          options: [], // Return an empty array in case of error
        };
      });
  };


  const handelOnChange =(searchData) =>{
    setSearch(searchData);
    onSearchChange(searchData);
  }


  return(
  <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handelOnChange}
      loadOptions={loadOptions}

    />
  )
}
export default Search;
