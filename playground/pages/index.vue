<template lang="pug">
.page
  .buttons
    gia-button(type="info") Info
    gia-button(type="primary") Primary

  .shortcuts
    gia-shortcut(name="filename.ext")
    gia-shortcut(name="filename.ext" selected)
</template>

<style lang="scss" scoped>
.buttons {
  > * {
    margin-right: 1rem;
  }
}
</style>
