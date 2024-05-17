import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';
import "../components/Main/Main.css";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      const citiesArray = result.data;

      if (!Array.isArray(citiesArray)) {
        console.error('Error: Response data is not an array');
        return { options: [] };
      }

      const options = citiesArray.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));

      return { options }; // Return an object with the options array
    } catch (error) {
      console.error('Error:', error);
      return { options: [] }; // Return an empty array of options in case of error
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder='Search location'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;


























/*import React, { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import { GEO_API_URL,geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
  
    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
    
            const citiesArray = result.data;

      if (!Array.isArray(citiesArray)) {
        console.error('Error: Response data is not an array');
        return { options: [] };
      }

      const options = citiesArray.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label:  `${city.name}, ${city.countryCode}`,
      }));

        } catch (error) {
            console.error('Error:', error);
            return { options: [] }; // Return an empty array of options in case of error
        }
    };
    
  
    const handleOnChange = (searchData) => {
      setSearch(searchData);
      onSearchChange(searchData);
    };
  

    return (
        <AsyncPaginate 
            placeholder="Search location"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;*/