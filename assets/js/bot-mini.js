import Vue from 'vue'
import BotUI from 'botui/build/botui.js'
import 'botui/build/botui.min.css'
import 'botui/build/botui-theme-default.css'

export default function initMiniBot() {
  let botui = BotUI('mini-bot',  { vue: Vue } )
  /* botui.message.add({ content: 'Hello World from Mini!' })
   .then(function () {
    botui.message.add({
      delay: 1000,
      human: true,
      content: 'Hello World from User!'
    })
  }) */
  Vue.config.devtools = true
}