<template>
    <div class="uk-panel">
        <div class="uk-card uk-card-small uk-card-default uk-text-meta">
            <div class="uk-card-header">
                <span>{{ Date.now() }}</span>
                <aux-switch :state="isEditable" :toggle="toggleEditable" :icon="icon" />
            </div>
            <div class="uk-card-body uk-card-default uk-inline" v-if="isEditable">
                <p id="#query" class="editing uk-margin-remove uk-width-1-1" v-contenteditable:isEditing="isEditable" style="padding-right: 55px"/>
                <button class="uk-icon-button uk-button-default uk-margin-small-right uk-position-center-right" uk-icon="check" @click="saveQuery"></button>
            </div>
            <div class="uk-card-body uk-inline" v-else>
                <button id="#query" class="edited uk-button uk-button-text uk-width-1-1" v-contenteditable:newQuery="isEditable" @click="toggleEditable" style="padding-right: 55px" />
                <button class="uk-icon-button uk-button-default uk-margin-small-right uk-position-center-right" uk-icon="plus" @click="action"></button>
            </div>
        </div>
    </div>
</template>
<style>
.editing {
    line-height: 1.5;
}
.editing:focus {
    outline: none !important;
    border: none;
    background: none;
}
.uk-button {
    text-transform: none;
    text-align: left;
}
.uk-card-body.uk-inline {
    display: block;
}
.uk-card-small .uk-card-body .uk-position-right {
    right: 20px;
}
::selection {
    background-color: none !important
}
</style>
<script>
import AuxSwitch from '~/components/custom/AuxSwitch.vue'
export default {
    name: 'aux-editable',
    props: [
        'query',
        'action'
    ],
    components: {
        AuxSwitch
    },
    data: () => {
        return {
            isEditable: false,
            isEditing: null,
            icon: {
                on: 'chevron-down',
                off: 'plus-circle'
            }
        }
    },
    computed: {
        newQuery: function() {
            return this.query
        }
    },
    methods: {
        editQuery() {
            let query = this.newQuery
            this.isEditing = query
            this.isEditable = true
            console.log("EDITING")
        },
        saveQuery() {
            let query = this.isEditing
            this.$emit('update:query', query)
            this.isEditable = false
            console.log("SAVING")
        },
        toggleEditable() {
            this.isEditable ? this.saveQuery() : this.editQuery()
        }
    },
    created: () => {
        console.log("Card Created at", Date.now())
    },
    mounted: () => {
        console.log("Card Mounted at", Date.now())
    }
}
</script>
