import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('gia-image', (e, binding) => {
    const url = binding.value
    // const mods = binding.modifiers
    if (typeof url !== 'string' || binding.value === binding.oldValue) return
    if (e.tagName === 'IMG') e.src = url
    else e.style.backgroundImage = `url('${url}')`
  })
})
