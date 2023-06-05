<template>
  <Nuxt />
</template>

<style lang="scss">
.wrapper {
  min-height: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  margin-top: auto;
  @include less-than(laptop) {
  }
}
</style>
