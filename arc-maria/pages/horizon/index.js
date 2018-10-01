
export const legend = {
  database: [
    ['db'],
    [
      [],
      'usp',
      'zwolle'
    ]
  ],
  sensor: [
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