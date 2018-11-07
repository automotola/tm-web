/* Own props */
const R = require('rambda')
const I = require('uuid/v1')
const T = require('moment')

const tm = () => null
tm.isTrue = () => console.log("TRUE")
tm.isFalse = () => console.log("FALSE")
tm.isArray = (x) => Array.isArray(x)

tm.thisKeys = (x) => Object.keys(x)
tm.thisValues = (x) => R.values(x)

tm.wasEntry = (x,y) => {
  let output = {}
  output[x] = y
  return output
}
tm.wasModel = (y) => {
  const output = {}
  const input = R.forEach(
    x => output[`${x.name}`] = null
  )(y)
  return output
}

tm.wasTable = (x, y) => {
  const keys = y[0]
  const rows = R.drop(1, y)
  const table = {
    name: x,
    keys: keys,
    rows: rows
  }
  return table
}
tm.wasArray = (x,y) => {
  let list = []
  for(let i=0;i<x.length;++i) {
    let newX = R.take(y, x[i])
    list.push(newX) 
  }
  return list
}
tm.wasObject = (x, y) => { 
  let object = {}
  if (tm.isArray(x)) {
    if ( y === undefined) {
        const input = R.forEach(
          o => object[o] = null
        )(x)
    } else if (Array.isArray(y)) {
      object = R.pick(x, y)
    } else {
      object = R.pick(x, y)
    }
  } else {
    object = R.merge(x, y)
    object.time = new Date().getTime()
  }
  return object
}




export default tm