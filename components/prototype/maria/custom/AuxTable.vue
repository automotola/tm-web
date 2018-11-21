<template>
<div class="uk-panel uk-overflow-auto">
    <div class="uk-card uk-card-small uk-text-meta">
        <div class="uk-card-body">
            <table class="uk-table uk-table-divider" v-if="data">
        <caption class="uk-padding-small uk-text-center">{{ data.name }} </caption>
        <thead>
            <tr>
                <th v-for="h in data.columns" :key="h.index">{{ h }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="r in data.values" :key="r.index">
                <td v-for="c in r" :key="c.index">{{ c }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td v-for="h in data[2]" :key="h.index">{{ h }}</td>
            </tr>
        </tfoot>
    </table>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'aux-table',
    props: [
        'data'
    ],
    created: () => {
        console.log("TABLE created:", this.data)
    },
    mounted: () => {
        console.log("TABLE mounted:", this.data)
    },
    updated: () => {
        console.log("TABLE updated:", this.data)
    }
}
</script>
