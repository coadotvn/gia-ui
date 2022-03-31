<template lang="pug">
.gia-dialog
  .gia-dialog__header
    slot(name="header")

  .gia-dialog__content
    slot

  .gia-dialog__footer
    slot(name="footer")
</template>
