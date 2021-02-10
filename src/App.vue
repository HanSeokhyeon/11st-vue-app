<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <!--전역 배너는 헤더의 다음이나 푸터의 다음이 적당합니다.-->
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
// 전체 JS에서 큰 따옴표나 작은 따옴표 중 하나만 사용하는 것이 좋아요~
// 세미콜론 마무리도 같습니다.
// 강의에서는 말씀드린 대로 ESLint에 JS 관련 린트는 따로 설정하지 않았지만,
// 되도록 설정하는 것이 좋겠죠?!
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
  // 프론트엔드의 모듈 기반으로 개발 환경의 경우,
  // 명시적인 상대 경로 표시(./)가 없으면 하나의 모듈로 읽힐 수 있어요.
  @import "scss/main";
</style>
