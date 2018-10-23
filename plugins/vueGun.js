import Vue from 'vue'
import VueGun from 'vue-gun'

/* var gun = Gun()
Vue.use(VueGun, {
  gun: gun // your gun instance
}); */

Vue.use(VueGun, {
  peers: ['https://gunjs.herokuapp.com/gun']
});

