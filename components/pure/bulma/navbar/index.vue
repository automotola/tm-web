<template lang="pug">
nav.navbar(role='navigation', aria-label='main navigation')
  .navbar-brand
    a.navbar-item(:href="i.logo.target")
      img(:src="i.logo.source", width='28', height='28').blend
    a.navbar-burger.burger(role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample')
      span(aria-hidden='true')
      span(aria-hidden='true')
      span(aria-hidden='true')
  #navbarBasicExample.navbar-menu.is-active
    .navbar-start
      nuxt-link(v-for="route in router" :key="route.name" :to="route.path").navbar-link
        | {{ route.name }}
      .navbar-item.has-dropdown.is-hoverable
        a.navbar-link
          | More
        .navbar-dropdown
          a.navbar-item
            | About
          a.navbar-item
            | Jobs
          a.navbar-item
            | Contact
          hr.navbar-divider
          a.navbar-item
            | Report an issue
    // .navbar-end
      .navbar-item
        .buttons
          a.button.is-primary
            strong Sign up
          a.button.is-light
            | Log in

</template>
<style>
.blend {
  mix-blend-mode: exclusion;
}
</style>
<script>
export default {
  props: [
    'i'
  ],
  created: function () {
    // console.log(this.router)
  },
  computed: {
    router: function () {
      const R = require('rambda')
      const route = this.$route
      const routes = this.$router.options.routes

      const findName = a => a.name === route.name
      const findNames = a => a.name.search(`${route.name}`) === 0
      const members = R.filter(findNames, routes)
      // const member = R.find(findName, routes)
      /* console.log(
        "ROUTE:",
        members,
        route.name,
        route.path,
        route.matched[0].regex,
        route.matched[0].components.default.extendOptions.layout,
        route.matched
      ) */
      return members
    }
  }
}
</script>
