const locations = [
  {
    id: 1,
    uuid: "LOC001ABCDEF",
    postcode: "LE10 1SH",
    city: "Hinckley",
    streetName: "Castle Street",
    houseFlatNumber: "12",
  },
  {
    id: 2,
    uuid: "LOC002GHIJKL",
    postcode: "LE10 2AB",
    city: "Hinckley",
    streetName: "High Street",
    houseFlatNumber: "25A",
  },
  {
    id: 3,
    uuid: "LOC003MNOPQR",
    postcode: "LE10 3CD",
    city: "Hinckley",
    streetName: "Park Road",
    houseFlatNumber: "7",
  },
  {
    id: 4,
    uuid: "LOC004STUVWX",
    postcode: "LE10 4EF",
    city: "Hinckley",
    streetName: "Queens Road",
    houseFlatNumber: "Flat 3",
  },
  {
    id: 5,
    uuid: "LOC005YZABCD",
    postcode: "LE10 5GH",
    city: "Hinckley",
    streetName: "Church Lane",
    houseFlatNumber: "19",
  },
  {
    id: 6,
    uuid: "LOC006EFGHIJ",
    postcode: "LE10 6IJ",
    city: "Hinckley",
    streetName: "London Road",
    houseFlatNumber: "8B",
  },
  {
    id: 7,
    uuid: "LOC007KLMNOP",
    postcode: "LE10 7KL",
    city: "Hinckley",
    streetName: "Station Road",
    houseFlatNumber: "15",
  },
  {
    id: 8,
    uuid: "LOC008QRSTUV",
    postcode: "LE10 8MN",
    city: "Hinckley",
    streetName: "Manor Street",
    houseFlatNumber: "Flat 1",
  },
  {
    id: 9,
    uuid: "LOC009WXYZAB",
    postcode: "LE10 9OP",
    city: "Hinckley",
    streetName: "Hill Street",
    houseFlatNumber: "22",
  },
  {
    id: 10,
    uuid: "LOC010CDEFGH",
    postcode: "LE10 0QR",
    city: "Hinckley",
    streetName: "King Street",
    houseFlatNumber: "10A",
  },
];

export function fetchLocations() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(locations), 500);
  });
}
