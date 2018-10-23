export const user1 = {
  id: 'omotola',
  hash: '099ea30c960be231cb236eaad86d6428',
  // isPinned: true, // the node is now pinned and will not be moved
  url: 'https://yt3.ggpht.com/-S69n7PYf-4Y/AAAAAAAAAAI/AAAAAAAAAAA/fa28GQgqIns/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
  size: "20"
}

export const userData = {
  influx: {
    h: 'http://influx.rivm.nl:8086',
    u: 'motherearth',
    p: 'Y47bB108',
    db: 'usp',
    q: "SELECT time, id, val0, val1, val3, val4, val5, val9 FROM KIT_RTD01 WHERE time > '2018-05-07 10:00:00' and time < '2018-05-07 10:10:10'"
  },
  mailchimp: {
    h: 'http://us17.api.mailchimp.com/3.0/',
    u: 'apiKey',
    p: '99828db4fa70ffcab5dbcdc332a0b074-us17',
    db: 'lists/fa72b1c58c/',
    q: 'members'
  }
}

export const wasClicked = (event) => {
  let e = event
  let s = {}
  s.type = e.type
  s.targetId = e.path[0].id
  s.targetName = e.path[0].localName
  e.path[1].attributes['uk-icon'] ? s.icon = e.path[1].attributes['uk-icon'].nodeValue : null
  s.time = e.timeStamp
  s.x = e.x
  s.y = e.y
  console.dir(s, e)
  return s
}