<template lang="pug">
  .uk-position-bottom.uk-overlay.uk-overlay-default.uk-text-center
    a.uk-button.uk-button-default.rounded-full(href='#offcanvas-slide', uk-toggle='') {{ medium }}
    #offcanvas-slide.uk-background-muted(uk-offcanvas='')
      .uk-offcanvas-bar
        ul.uk-nav.uk-nav-default
          li
            a(href='#') Options
          li(v-for="option in options" :key="option.index")
            a(href='#') 
              i(:class="'icon' + ' ' + 'ion-ios-' + option")
              |{{ option }}
</template>
<script>
export default {
  props: [
    'medium',
    'options'
  ],
  data() {
    return {
      selection: 1,
    }
  }
}
</script>
