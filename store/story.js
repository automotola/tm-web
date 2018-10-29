export const state = () => ({
  script: [
    {
      title: 'Messaging',
      description: 'Write a message!',
      activity: [
        {
          name: "user",
          symbol: "user",
          cue: "create a user",
          type: "text",
          valid: 'alpha_num|required|min:5'
        },
        {
          name: "role",
          symbol: "info",
          cue: "write a role or description",
          type: "text",
          valid: 'required|min:10'
        },
        {
          name: "message",
          symbol: "comment",
          cue: "write a message",
          type: "text"
        },
        {
          name: "context",
          symbol: "rss",
          cue: "select a broadcast",
          type: "option",
          default: 'private',
          option: [
            { name: 'context', symbol: 'rss', value: undefined, disabled: 'disabled' },
            { name: 'private', symbol: 'lock', value: 'private', checked: '' },
            { name: 'personal', symbol: 'users', value: 'personal', checked: '' },
            { name: 'social', symbol: 'social', value: 'social', checked: '' },
            { name: 'global', symbol: 'world', value: 'global', checked: '' }
          ]
        }
      ],
      event: []
    }
  ],
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
