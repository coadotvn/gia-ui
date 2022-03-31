<template lang="pug">
button.gia-button(:class="classes")
  slot
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info'
  },
  size: {
    type: String,
    default: 'medium'
  }
})

const classes = computed(() => ({
  [`gia-button--${props.type}`]: true,
  [`gia-button--${props.size}`]: true
}))
</script>

<style lang="scss" scoped>
.gia-button {
  font-size: .75rem;
  min-height: 2rem;
  appearance: none;
  border: var(--gia-button-border);
  background-color: var(--gia-button-face);
  color: var(--gia-text-color);
  border-radius: var(--gia-base-radius);
  align-items: center;
  padding: 0.25rem .75rem;
  &--primary {
    background-color: var(--gia-primary-color);
  }
}
</style>
