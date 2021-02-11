<template>
  <section
    class="plan-banner"
    ref="lazyLoadElement">
    <div class="inner"></div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$lazyLoad(this.$refs.lazyLoadElement)
  }
}
</script>

<style scoped lang="scss">
  section {
    background-color: #6C7EEE;
    .inner {
      height: 320px;
    }
  }
</style>