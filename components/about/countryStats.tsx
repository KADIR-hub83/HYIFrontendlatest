"use client";

import ProgressBar from "@/components/about/progressBar";

interface CountryApiData {
  country: string;
  count: number;
  flag?: string;
}

interface CountryStatsProps {
  countryData: CountryApiData[];
}

interface CountryData {
  name: string;
  flag: string;
  count: number;
}

const COUNTRY_FLAGS: Record<string, string> = {
  India: "🇮🇳",
  "United States": "🇺🇸",
  USA: "🇺🇸",
  "United Kingdom": "🇬🇧",
  UK: "🇬🇧",
  Canada: "🇨🇦",
  Germany: "🇩🇪",
  Australia: "🇦🇺",
  France: "🇫🇷",
  Singapore: "🇸🇬",
  Japan: "🇯🇵",
  UAE: "🇦🇪",
  "United Arab Emirates": "🇦🇪",
};

const CountryStats: React.FC<CountryStatsProps> = ({
  countryData,
}) => {
  const countries: CountryData[] = countryData
    .slice(0, 4)
    .map((apiCountry) => ({
      name: apiCountry.country,
      flag: COUNTRY_FLAGS[apiCountry.country] || "🌍",
      count: apiCountry.count,
    }));

  const maxCount =
    countries.length > 0
      ? Math.max(
          ...countries.map((country) => country.count)
        )
      : 0;

  return (
    <div className="space-y-10">
      {countries.map((country) => (
        <ProgressBar
          key={country.name}
          label={
            <span className="flex items-center gap-2">
              <span
                className="text-xl leading-none"
                role="img"
                aria-label={`${country.name} flag`}
              >
                {country.flag}
              </span>

              <span>{country.name}</span>
            </span>
          }
          value={country.count}
          total={maxCount}
        />
      ))}
    </div>
  );
};

export default CountryStats;