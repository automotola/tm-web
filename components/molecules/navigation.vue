<template lang="pug">
      nav
        .navbar.is-fixed-top(role="navigation" aria-label="main navigation")
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
              .navbar-item Mother Earth Network
            .navbar-end
              .navbar-item About
              .navbar-item Join
</template>
<script>
export default {
  props: [
    'brandName'
  ],
  data () {
    
  }
}
</script>
