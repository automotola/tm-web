<template lang="pug">
.panel
    chart(:data="computedData").card
</template>
<script>
import chart from '~/components/atomic/organism/chart'
const R = require('rambda')
export default {
    props: [
        'datum'
    ],
    components: {
        chart
    },
    methods: {
        computedData: function () {
            const filterFn = a => a % 2 === 0

            const result = R.filter(filterFn, this.datum.values[0])
            // => [2, 4]

            if ( this.datum != null ) {
                const data = {
                labels: this.datum.values[0],
                datasets: [
                    { 
                        label: 'GitHub Commits',
                        // backgroundColor: '#f87979',
                        data: this.datum.values[0]
                    },
                    { 
                        label: 'GitHub',
                        // backgroundColor: '#f87979',
                        data: [40, 30, 40]
                    }
                ]
            }
                return this.datum
            }
            return data
        }
    },
    created: () => {
        console.log("CHART created:")
    },
    mounted: () => {
         // Overwriting base render method with actual data.
        console.log("CHART mounted:")
    },
    updated: () => {
        console.log("CHART updated:")
    }
}
</script>