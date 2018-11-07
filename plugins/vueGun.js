import Vue from 'vue'
import VueGun from 'vue-gun'

/* var gun = Gun()
Vue.use(VueGun, {
  gun: gun // your gun instance
}); */

Vue.use(VueGun, {
  peers: ['https://athensux.herokuapp.com/gun']
});


