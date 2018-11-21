<template>
  <!-- This is the off-canvas -->
  <div id="offcanvas" uk-offcanvas="push">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul>
        <li v-for="link in links[1]" v-bind:key="link.index">
          <a :href="link[1]">{{ link[0] }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'links'
  ]
}
</script>
