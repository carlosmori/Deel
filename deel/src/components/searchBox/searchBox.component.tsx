import React, { useRef, useState } from "react";
import { createCountriesAdapter } from "../../adapters";
import { useAsync } from "../../hooks";
import useFetchAndLoad from "../../hooks/useFetchAndLoad";
import { Country } from "../../models/country.model";
import { getMatchedCountries } from "../../services/public.service";

function SearchBox() {
  // useFetchAndLoad is a custom hook that gives me a loading flag meanwhile we call our endpoint,
  // but at the same time aborts the call if the component unmounts.
  const { loading, callEndpoint } = useFetchAndLoad();
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedCountries, setMatchedCountries] = useState<Country[]>([]);

  const didMount = useRef(false);

  const getApiData = async () =>
    await callEndpoint(getMatchedCountries(searchTerm));

  const adaptCountries = (data: any) => {
    // Adapt Api Response
    const countries: Country[] = createCountriesAdapter(data.countries);
    // Then save it in the component state
    setMatchedCountries(countries);
  };

  useAsync(getApiData, adaptCountries, () => {}, [searchTerm]);

  return (
    <div className="relative">
      <div className="flex flex-col ">
        <label htmlFor="search" className="text-sm h-4 mb-2">
          Search Country
        </label>
        <input
          id="search"
          className=" border-2 h-8"
          placeholder="Enter a country"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBox;
