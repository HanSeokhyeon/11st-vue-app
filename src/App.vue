<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <global-banner></global-banner>
    <direct></direct>
    <hot-focus></hot-focus>
    <time-deal></time-deal>
  </div>
</template>

<script>
import LNB from "./components/LNB";
import MyHeader from "./components/MyHeader";
import Billboard from "./components/Billboard";
import GlobalBanner from "./components/GlobalBanner";
import Direct from "./components/Direct";
import HotFocus from "./components/HotFocus";
import TimeDeal from "./components/TimeDeal";

export default {
  components: {
    LNB,
    MyHeader,
    Billboard,
    GlobalBanner,
    Direct,
    HotFocus,
    TimeDeal
  }
}
</script>

<style lang="scss">
  @import "scss/main";
</style>