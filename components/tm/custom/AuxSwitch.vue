<template lang="pug">
        span.uk-float-right(v-if="state" :uk-icon="icon.on" @click="toggle")
        span.uk-float-right(v-else :uk-icon="icon.off" @click="toggle")
</template>
<script>
export default {
    name: 'aux-switch',
    props: [
        'state',
        'toggle',
        'icon'
    ]
}
</script>
