import Vue from 'vue'
import VueFormGenerator from "vue-form-generator";
Vue.use(VueFormGenerator);

export default {
  components: {
    "vue-form-generator": VueFormGenerator.component
  }
};