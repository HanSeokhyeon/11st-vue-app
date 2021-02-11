<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <global-banner></global-banner>
    <direct></direct>
    <hot-focus></hot-focus>
    <time-deal></time-deal>
    <airlift></airlift>
    <plan-banner></plan-banner>
    <wide-banner></wide-banner>
    <best-product></best-product>
    <todays-chance></todays-chance>
    <promotion></promotion>
    <mds-recommendation></mds-recommendation>
    <partner></partner>
    <my-footer></my-footer>
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
import Airlift from "./components/Airlift";
import PlanBanner from "./components/PlanBanner";
import WideBanner from "./components/WideBanner";
import BestProduct from "./components/BestProduct";
import TodaysChance from "./components/TodaysChance";
import Promotion from "./components/Promotion";
import MdsRecommendation from "./components/MdsRecommendation";
import Partner from "./components/Partner";
import MyFooter from "./components/MyFooter"

export default {
  components: {
    LNB,
    MyHeader,
    Billboard,
    GlobalBanner,
    Direct,
    HotFocus,
    TimeDeal,
    Airlift,
    PlanBanner,
    WideBanner,
    BestProduct,
    TodaysChance,
    Promotion,
    MdsRecommendation,
    Partner,
    MyFooter
  }
}
</script>

<style lang="scss">
  @import "scss/main";
</style>