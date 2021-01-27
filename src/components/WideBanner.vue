<template>
  <section
    class="wide-banner"
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
    background-color: #FBB93F;
    .inner {
      height: 220px;
    }
  }
</style>