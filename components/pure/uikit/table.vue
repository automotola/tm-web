<template lang="pug">
  .panel
    .uk-card.uk-card-body.uk-padding-remove
                .uk-panel
                  ul.uk-subnav.uk-subnav-pills(uk-tab="connect: #display")
                    li
                      a(href='#Message') Last Message
                    li
                      a(href='#Messages')
                        template(v-if="stream.length === 0") 
                          span {{ 'Messages' }}
                        template(v-else-if="stream.length === 1")
                          span {{ stream.length + ' Message'}}
                        template(v-else)
                          span {{ stream.length + ' Messages'}}
                    li
                      a(href='#Members')
                        template(v-if="users.length === 0") 
                          span {{ 'Member' }}
                        template(v-else-if="users.length === 1")
                          span {{ users.length + ' Member'}}
                        template(v-else)
                          span {{ users.length + ' Members'}}
                  ul.uk-switcher.uk-margin#display
                    li
                        pre.uk-height-small {{ stream }}
                    li
                        .uk-overflow-auto.uk-height-medium
                          table.uk-table.uk-tsable-small.uk-table-divider.uk-table-hover.uk-margin-remove
                            thead
                              tr
                                th Message
                                th From
 
                            tbody
                              tr(v-for="e in stream").rounded
                                td {{ e.message }}
                                td {{ e.from }}
                    li
                        .uk-overflow-auto.uk-height-medium
                          table.uk-table.uk-tsable-small.uk-table-divider.uk-table-hover.uk-margin-remove
                            thead
                              tr
                                th Username
                            tbody
                              tr(v-for="user in users").rounded
                                td {{ user.name }}
</template>
<script>
export default {
  name: 'uk-table',
  props: [
    'users',
    'stream',
  ],

}
</script>

