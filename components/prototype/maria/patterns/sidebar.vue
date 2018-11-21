<template>
  <!-- Left sidebar menu -->
  <div class="uk-offcanvas-content">
      <aside id="left-col" class="uk-light uk-visible@m">
          <div class="left-nav-wrap">
              <ul class="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
                  <li class="uk-nav-header">Navigation</li>
                  <li v-for="item in links" :key="item.link"><a :href=item.link><span class="uk-margin-right" :uk-icon=item.icon> </span>{{ item.name }}</a></li>
              </ul>
          </div>
      </aside>
  </div>
</template>
<script>
export default {
  props: [
    'links'
  ]
}
</script>
