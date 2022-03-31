import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(resolver.resolve('runtime'))
    nuxt.options.build.transpile.push(resolver.resolve('components'))

    addPlugin(resolver.resolve('runtime/directives'))
    
    nuxt.hook('components:dirs', dirs => {
      dirs.push({
        path: resolver.resolve('components'),
        prefix: 'gia'
      })
    })
  }
})
