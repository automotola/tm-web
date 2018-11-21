<template lang="pug">
    .uk-panel
        .uk-card.uk-card-small.uk-card-default
            .uk-card-body.uk-padding-remove(v-if="showRecords")
                ul(uk-tab)
                    li
                        a(href="#") History
                ul.uk-switcher.uk-margin.uk-height-small.uk-overflow-auto
                    li.uk-margin-left.uk-margin-right.uk-margin-bottom
                        dl.uk-description-list
                            template(v-for="value in history.values")
                                dt {{ value.time }}
                                dd {{ value.event.description }}
            .uk-card-footer.uk-text-meta 
                span {{ Date.now() }}
                aux-switch(:state="showRecords" :toggle="toggleRecords" :icon="icon")
</template>
<script>
import AuxSwitch from '~/components/custom/AuxSwitch.vue'
export default {
    props: [
        'history'
    ],
    components: {
        AuxSwitch
    },
    data: () => {
        return {
            showRecords: false,
            icon: {
                on: 'chevron-down',
                off: 'history'
            }
        }
    },
    methods: {
        toggleRecords() {
            return this.showRecords = !this.showRecords
        }
    }
}
</script>

