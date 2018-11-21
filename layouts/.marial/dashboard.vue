<template lang="pug">
  .dashboard
    nuxt
    Header
    Sidebar(:links="links")
</template>
<script>
import Header from '~/components/patterns/header'
import Sidebar from '~/components/patterns/sidebar'

export default {
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      links: [
        {
          name: "Dashboard",
          link: "dashboard",
          icon: "icon: home"
        },
        {
          name: "Alerts",
          link: "alerts",
          icon: "icon: bell"
        },
        {
          name: "Geofences",
          link: "geofences",
          icon: "icon: location"
        },
        {
          name: "Routes",
          link: "routes",
          icon: "icon: git-branch"
        },
        {
          name: "Schedule",
          link: "schedule",
          icon: "icon: calendar"
        }
      ]
    }
  }
}
</script>
