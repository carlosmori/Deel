import axios from "axios";
import { Country } from "../models/country.model";
import { loadAbort } from "../utils";

export const getMatchedCountries = (searchTerm: string) => {
  const controller = loadAbort();
  // type this
  return {
    call: axios.get<Country[]>(
      `http://localhost:3002/api/countries/${searchTerm}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
