var config = {
    style: "mapbox://styles/fandilladp/ckxdi9e6qeyjl15luv88kx85q",
    accessToken:
      "pk.eyJ1IjoiZmFuZGlsbGFkcCIsImEiOiJja2t2bGhtdW8xNWE1MnBsbXR5bTFyNm94In0.Cw8RqeLPToDY7XpQuI4cjw",
    showMarkers: false,
    theme: "light",
    title: "",
    subtitle: "",
    byline: "",
    footer: "",
    chapters: [
      {
        id: "phl",
        alignment: "right",
        title: "Philadelphia Bicycle Infrastructure",
        image: "",
        description:
          "Getting around Philadelphia on two wheels is fast, fun, and cheap. As a typical East Coast large city, the urban core is dense, so there is a lot within reach of a 15 minute ride... even mountain bike trails. Paired with the public transit infrastructure, cycling can be more efficient and much less expensive than driving (and parking) a car.",
        location: {
          center: { lon: 104.79068, lat: -5.61578 },
          zoom: 9.91,
          pitch: 60.0,
          bearing: -27.72,
        },
        onChapterEnter: [
          {
            layer: "resikoBanjirTanggamus",
            opacity: 0,
          },
          {
            layer: "desa-tanggamus-1-1jw5rx",
            opacity: 0,
          },
        ],
        onChapterExit: [
          {
            layer: "resikoBanjirTanggamus",
            opacity: 0,
          },
          {
            layer: "desa-tanggamus-1-1jw5rx",
            opacity: 0,
          },
        ],
      },
      {
        id: "bike-lanes",
        alignment: "right",
        title: "Bike Lanes",
        image: "",
        description:
          "Philadelphia has XX miles of bike lanes, XX miles of which are protected. Drivers are getting more used to sharing the road, but ride defensively.",
        location: {
          center: { lon: 104.62852, lat: -5.53842 },
          zoom: 9.90,
          pitch: 0.00,
          bearing: -50.92
        },
        onChapterEnter: [
          {
            layer: "resikoBanjirTanggamus",
            opacity: 1,
          },
        ],
        onChapterExit: [],
      },
      {
        id: "indego",
        alignment: "right",
        title: "Indego Bike Share",
        image: "",
        description:
          "Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city's residents.",
        location: {
          center: { lon: 104.4957, lat: -5.50425 },
          zoom: 11.87,
          pitch: 60.0,
          bearing: 101.08,
        },
        onChapterEnter: [
          {
            layer: "desa-tanggamus-1-1jw5rx",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "desa-tanggamus-1-1jw5rx",
            opacity: 0,
          },
        ],
      },
    ],
  }; 