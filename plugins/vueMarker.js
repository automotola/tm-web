import Vue from 'vue'
import tm from '~/assets/js/tm-marker'

export default ({ app }, inject) => {
  inject('mark', tm)
}

