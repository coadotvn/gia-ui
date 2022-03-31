<template lang="pug">
.gia-shortcut(:class="classes")
  .gia-shortcut__icon(v-gia-image="icon")
    slot(name="icon")
    
  .gia-shortcut__name
    slot(name="name" v-if="$slots.name")
    template(v-else) {{ name }}
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  name: {
    type: String,
    required: true
  },

  selected: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => ({
  'gia-shortcut--selected': props.selected
}))
</script>

<style lang="scss" scoped>
.gia-shortcut {
  &--selected {
    background-color: rgba(var(--gia-primary-rgb), .5);
    border: var(--gia-primary-border);
  }
}
</style>
