var archieml = require('archieml');
var storytxt = require('~/static/txt/mini.txt')
var miniStory = archieml.load(storytxt);
console.log(miniStory)

export const state = () => ({
  script: miniStory.script,
  point: 0
})

export const mutations = {
  toggleOption(state, setting) {
    console.log('MUTATION: Registering User Account, ' + setting)
    let option = state.story.activity[setting.activity].option[setting.option]
    console.log("WAS:", option)
    option !== 'checked' ? 'checked' : ''
    console.log("IS:", option)
  },
  add(state, profile) {
    console.log('MUTATION: Adding User to Register: ' + profile.username)
    state.contacts.push(profile)
  },
  remove(state, { profile }) {
    state.contacts.splice(state.contacts.indexOf(profile), 1)
  },
}
