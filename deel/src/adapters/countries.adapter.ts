import { Country } from "../models/country.model";

export const createCountriesAdapter = (countries: Country[]) => {
  return countries.map((country: Country) => ({
    name: country.name,
  }));
};
