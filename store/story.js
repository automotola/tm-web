var archieml = require('archieml');
var storetxt = require('~/static/txt/store.txt')
var initialState = archieml.load(storetxt);
console.log("STORE LOADED", initialState)

export const state = () => ({
  script: initialState.script
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
