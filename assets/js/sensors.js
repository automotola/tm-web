
export const legend = {
  database: [
    ['db'],
    [
      [],
      'usp',
      'zwolle'
    ]
  ],
  zwolleSensors: [
    ['kit_id', 'lat', 'lon', 'x', 'y', 'label'],
    [
      [],
      ['ZWL_4891339', '52.5377', '6.0399', '199280', '505762', 'PZ001'],
      ['ZWL_4985304', '52.5361', '6.0368', '199074', '505581', 'PZ004'],
      ['ZWL_4983451', '52.5382', '6.0551', '200311', '505829', 'PZ006'],
      ['ZWL_4983539', '52.5412', '6.0624', '200808', '506165', 'PZ005'],
      ['ZWL_4983339', '52.5251', '6.0619', '200789', '504378', 'PZ002']
    ]
  ],
  utrechtSensors: [
    {
      "kit_id": "USP_15773509",
      "lat": 52.0919,
      "lon": 5.17468,
      "label": "PU005"
    },
    {
      "kit_id": "USP_15708774",
      "lat": 52.0884,
      "lon": 5.17685,
      "label": "PU018"
    },
    {
      "kit_id": "USP_15709259",
      "lat": 52.0833,
      "lon": 5.18231,
      "label": "PU016"
    },
    {
      "kit_id": "USP_15709341",
      "lat": 52.0844,
      "lon": 5.16136,
      "label": "JCD01"
    },
    {
      "kit_id": "USP_15709689",
      "lat": 52.0834,
      "lon": 5.17742,
      "label": "PU012"
    },
    {
      "kit_id": "USP_15709818",
      "lat": 52.0829,
      "lon": 5.17567,
      "label": "PU003"
    },
    {
      "kit_id": "USP_10695905",
      "lat": 52.0854,
      "lon": 5.16822,
      "label": "PU017"
    },
    {
      "kit_id": "USP_10763145",
      "lat": 52.0858,
      "lon": 5.176,
      "label": "PU009"
    },
    {
      "kit_id": "USP_10763351",
      "lat": 52.086,
      "lon": 5.17368,
      "label": "PU014"
    },
    {
      "kit_id": "USP_15710688",
      "lat": 52.0889,
      "lon": 5.18102,
      "label": "PU020"
    },
    {
      "kit_id": "USP_15771764",
      "lat": 52.0829,
      "lon": 5.1721,
      "label": "PU001"
    },
    {
      "kit_id": "USP_15772004",
      "lat": 52.0892,
      "lon": 5.18775,
      "label": "PU004"
    },
    {
      "kit_id": "USP_15772731",
      "lat": 52.0837,
      "lon": 5.16944,
      "label": "PU007"
    },
    {
      "kit_id": "USP_15707842",
      "lat": 52.1205,
      "lon": 5.19178,
      "label": "PU021"
    },
    {
      "kit_id": "USP_15709749",
      "lat": 52.0867,
      "lon": 5.16449,
      "label": "PU019"
    },
    {
      "kit_id": "USP_15711107",
      "lat": 52.0806,
      "lon": 5.17469,
      "label": "PU011"
    },
    {
      "kit_id": "USP_15771119",
      "lat": 52.1205,
      "lon": 5.19177,
      "label": "PU022"
    },
    {
      "kit_id": "USP_15711100",
      "lat": 52.0891,
      "lon": 5.16567,
      "label": "PU002"
    },
    {
      "kit_id": "USP_15769948",
      "lat": 52.0846,
      "lon": 5.17166,
      "label": "PU006"
    },
    {
      "kit_id": "USP_15771968",
      "lat": 52.0846,
      "lon": 5.17181,
      "label": "JCD02"
    },
    {
      "kit_id": "USP_15711612",
      "lat": 52.0842,
      "lon": 5.17225,
      "label": "PU008"
    },
    {
      "kit_id": "USP_15772929",
      "lat": 52.0841,
      "lon": 5.16497,
      "label": "PU010"
    }
  ],
  air: [
    ['time', 'id', 'val0', 'val1', 'val3', 'val4', 'val5', 'val9'],
    [
      'timestamp (UTC)',
      'id of the sensor (without the prefix USP or ZWL but unique)',
      'Temp (Celsius)',
      'relative humidity (%)',
      'substance (not the absolute PM10 concentration but as far as we know, a linear relationship therewith)',
      'op1',
      'op2',
      'atmospheric pressure (hPa)'
    ]
  ]
}