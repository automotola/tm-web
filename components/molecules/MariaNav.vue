<template lang="pug">
    nav.navbar.is-fixed-top(role="navigation" aria-label="main navigation")
      .navbar-brand
        a.navbar-item
          figure
            img(src="~/assets/img/logo.png")
        a.navbar-burger(role="button" aria-label="main navigation" aria-expanded="false")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      .navbar-menu
        .navbar-start
          .navbar-item {{ `Mother Earth Network / ` + $route.name  }} 
        .navbar-end
          a.navbar-item(:href="item.route" v-for="item in menu" :key="item.index") {{ item.label }}
</template>

<script>
export default {
  props: [
    'brandName'
  ],
  data () {
    return {
      menu: [
        { label: 'home', route:'/website'},
        { label: 'pulse', route:'/pulse'},
        { label: 'horizon', route:'/horizon'}
      ]
    }
  }
}
</script>
