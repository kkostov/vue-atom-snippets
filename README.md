# Vue Atom Snippets

## Description

This package is an Atom port of the excellent [`Vue VSCode Snippets`](https://github.com/sdras/vue-vscode-snippets) by @sdras.

My main motivation for creating this package is that I often need to switch between Atom and VSCode and I really, really love the snippets Sarah Drasner crafted for VSCode.

The goals of this package are

* To remain compatible with the `vue-vscode-snippets` - all prefixes from the original repository should be available and should produce the same output.

* Implement Atom-specific tweaks and improvements which can help productivity.

* The package does not aim to become an "ubermegablob" of snippets but rather focus on parts which are useful in every day code work.

* The scope of the snippets is the core ecosystem around Vue, including `vue`, `vuex`, `vue-router` and `nuxt`. This is just a baseline, others may added as needed.

## Plugin installation

`apm install vue-atom-snippets`

## Availability

The snippets provided by the plugin will be available in all **.vue** files as well as **.js** (e.g. `nuxt.config.js`).

## Snippets

### Vue

| Snippet | Purpose                    |
| ------- | -------------------------- |
| `vbase` | Single file component base |

### Template

| Snippet           | Purpose                             |
| ----------------- | ----------------------------------- |
| `vfor`            | v-for directive                     |
| `vmodel`          | Semantic v-model directive          |
| `vmodel-num`      | Semantic v-model number directive   |
| `von`             | v-on click handler with arguments   |
| `vel-props`       | Component element with props        |
| `vsrc`            | Image src binding                   |
| `vstyle`          | Inline style binding                |
| `vstyle-obj`      | Inline style binding with objects   |
| `vclass`          | Class binding                       |
| `vclass-obj`      | Class binding with objects          |
| `vclass-obj-mult` | Multiple conditional class bindings |
| `vanim`           | Transition component with JS hooks  |
| `vnuxtl`          | Nuxt Routing Link                   |

### Script

| Snippet          | Purpose                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| `vdata`          | Component data as a function                                             |
| `vmethod`        | Vue method                                                               |
| `vcomputed`      | Vue computed property                                                    |
| `vwatcher`       | Vue watcher with new and old value args                                  |
| `vprops`         | Props with type and default                                              |
| `vimport`        | Import one component into another                                        |
| `vimport-c`      | Import one component into another within the export statement            |
| `vimport-export` | Import one component into another and use it within the export statement |
| `vfilter`        | Vue filter                                                               |
| `vmixin`         | Create a Vue Mixin                                                       |
| `vmixin-use`     | Bring a mixin into a component to use                                    |
| `vc-direct`      | Vue create a custom directive                                            |
| `vimport-lib`    | Import a library                                                         |
| `vimport-gsap`   | Import GreenSock with Timeline and Eases                                 |
| `vanimhook-js`   | Using the Transition component JS hooks in methods                       |
| `vcommit`        | Commit to Vuex store in methods for mutation                             |
| `vdispatch`      | Dispatch to Vuex store in methods for action                             |
| `vtest`          | A simple unit testing component                                          |
| `vinc`           | incrementer                                                              |
| `vdec`           | decrementer                                                              |

### Vuex

| Snippet         | Purpose                        |
| --------------- | ------------------------------ |
| `vstore`        | Base for Vuex store.js         |
| `vgetter`       | Vuex Getter                    |
| `vmutation`     | Vuex Mutation                  |
| `vaction`       | Vuex Action                    |
| `vstore-import` | Import vuex store into main.js |

### Nuxt Config

| Snippet  | Purpose                                                 |
| -------- | ------------------------------------------------------- |
| `nfont`  | link to include fonts in a nuxt project, in nuxt-config |
| `ncss`   | link to css assets such as normalize                    |
| `nmod`   | add module entry                                        |
| `nplugs` | add plugins for global level functionality              |
| `nplug`  | add a plugin to the plugins section                     |


### Nuxt Page

| Snippet | Purpose                                                 |
| ------- | ------------------------------------------------------- |
| `nasyncdata`    | Nuxt asyncData                                  |
| `nfetch`        | Nuxt Fetch                                      |
| `nhead`         | Nuxt Head                                       |


### Extra (plaintext)

| Snippet     | Purpose                 |
| ----------- | ----------------------- |
| `gitignore` | .gitignore file presets |
