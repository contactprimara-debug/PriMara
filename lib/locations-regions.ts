// Real geographic regions, each ordered south-to-north (or west-to-east
// within a metro). Shared by the location template (nearby-cities
// computation) and the /locations hub (grouping the city grid) so both
// stay in sync as new regions/cities are added — Florida isn't one line,
// so a flat city list breaks down the moment a second, non-contiguous
// metro is added.
export const REGIONS: { name: string; cities: string[] }[] = [
  {
    name: "South Florida",
    cities: [
      "Miami", "Miami Beach", "Coral Gables", "Doral", "Hialeah", "Kendall", "Aventura",
      "Hollywood", "Pembroke Pines", "Fort Lauderdale", "Coral Springs", "Pompano Beach",
      "Boca Raton", "Delray Beach", "Boynton Beach", "West Palm Beach", "Palm Beach Gardens",
      "Jupiter", "Stuart", "Port St. Lucie",
    ],
  },
  {
    name: "Tampa Bay",
    cities: ["Clearwater", "St. Petersburg", "Tampa", "Brandon", "Lakeland"],
  },
  {
    name: "Orlando Metro",
    cities: ["Sanford", "Altamonte Springs", "Winter Park", "Orlando", "Kissimmee"],
  },
  {
    name: "Jacksonville",
    cities: ["Fernandina Beach", "Jacksonville", "Jacksonville Beach", "Orange Park", "St. Augustine"],
  },
];

export function regionFor(city: string) {
  return REGIONS.find((r) => r.cities.includes(city));
}
