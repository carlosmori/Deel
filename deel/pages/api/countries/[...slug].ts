// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { countries } from "./countries";

type Data = {
  countries: any[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const searchParam = req.query.slug;
  let filteredCountries = countries;
  if (!searchParam) {
    res.status(200).json({ countries: [] });
  } else if (Array.isArray(searchParam)) {
    searchParam.forEach((searchTerm) => {
      filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    res.status(200).json({ countries: filteredCountries });
  }
}
