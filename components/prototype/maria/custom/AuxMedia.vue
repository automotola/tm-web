<template>
    <div class="uk-panel">
        <img :src="imgSrc" alt="" v-if="data.size">
    </div>
</template>
<script>
export default {
    name: 'aux-media',
    props: [
        'data'
    ],
    computed: {
        imgSrc() {
            let domain =  'https://via.placeholder.com/'
            let src = domain + this.data.size.w + 'x' + this.data.size.h
            return src
        }
    }
}
</script>

