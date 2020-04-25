<template>
  <div class="guapai-container">
    <word-cloud-chart @fromSon="getMsgFormSon" />
    <img v-show="showDongLiZhan()" src="@/assets/main/donglizhanLine.png" class="pic-donglizhan">
    <img v-show="showYiDong()" src="@/assets/main/yidongLine.png" class="pic-yidong">
    <img v-show="showErDong()" src="@/assets/main/erdongLine.png" class="pic-erdong">
    <img v-show="showJiaoShuiChang()" src="@/assets/main/jiaoshuichangLine.png" class="pic-jiaoshuichang">
    <img v-show="showSanDong()" src="@/assets/main/sandongLine.png" class="pic-sandong">
    <img v-show="showSiDong()" src="@/assets/main/sidongLine.png" class="pic-sidong">

    <div class="guapai-system">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script>
import { fetchSystem } from '@/api/main/guapai'
import WordCloudChart from './wordCloudChart'
import KongYaSystem from './guapaiSystem/kongyaSystem'
import QingDanSystem from './guapaiSystem/qingdanSystem'
import ZhenKongSystem from './guapaiSystem/zhenkongSystem'
import DianLiSystem from './guapaiSystem/dianliSystem'
/* import LengShuiSystem from './guapaiSystem/lengshuiSystem'
import ReShuiSystem from './guapaiSystem/reshuiSystem' */
export default {
  name: 'GuaPai',
  components: {
    WordCloudChart,
    KongYaSystem,
    QingDanSystem,
    ZhenKongSystem,
    DianLiSystem/* ,
    LengShuiSystem,
    ReShuiSystem */
  },
  data() {
    return {
      currentView: '',
      viewList: ['KongYaSystem', 'QingDanSystem', 'ZhenKongSystem', 'DianLiSystem'],
      nowIndex: 0
    }
  },
  computed: {},
  created() {
    setInterval(this.guapaiChange, 300000)
  },

  mounted() {
    fetchSystem().then((res) => {
      // this.viewList = res.data
      this.currentView = 'KongYaSystem'
    }).catch(err => {
      console.log(err)
    })
  },

  methods: {
    guapaiChange() {
      const viewLength = this.viewList.length
      if (this.nowIndex === viewLength - 1) {
        this.nowIndex = 0
        this.currentView = this.viewList[this.nowIndex]
      } else {
        ++this.nowIndex
        this.currentView = this.viewList[this.nowIndex]
      }
    },
    getMsgFormSon(index, type, systemNumber) {
      const number = index % systemNumber
      if (number !== 4 && number !== 5) {
        switch (type) {
          case 'ky':
            this.currentView = 'KongYaSystem'
            break
          case 'qd':
            this.currentView = 'QingDanSystem'
            break
          case 'zk':
            this.currentView = 'ZhenKongSystem'
            break
          case 'dl':
            this.currentView = 'DianLiSystem'
            break
        }

        this.nowIndex = index % systemNumber
      }
    },
    showDongLiZhan() {
      const view = this.currentView
      if (view === 'KongYaSystem' || view === 'ZhenKongSystem') {
        return false
      } else {
        return true
      }
    },
    showYiDong() {
      return true
    },
    showErDong() {
      return true
    },
    showSanDong() {
      const view = this.currentView
      if (view === 'ZhenKongSystem') {
        return false
      } else {
        return true
      }
    },
    showSiDong() {
      const view = this.currentView
      if (view === 'ZhenKongSystem') {
        return false
      } else {
        return true
      }
    },
    showJiaoShuiChang() {
      const view = this.currentView
      if (view === 'QingDanSystem') {
        return false
      } else {
        return true
      }
    }
  }
}

</script>

<style lang='scss' scoped>
img {
    position: absolute;
}
.pic{
    &-donglizhan{
        top: 12vw;
        left: 15vw;
    }
    &-yidong{
        top: 38vw;
        left: 14vw;
    }
    &-erdong{
        top: 30vw;
        left: 15vw;
    }
    &-jiaoshuichang{
        top: 17vw;
        left: 44vw;
    }
    &-sandong{
        top: 30vw;
        left: 37vw;
    }
    &-sidong{
        top: 23.2vw;
        left: 34vw;
    }
  }
  .guapai-container{
    display: flex;
    flex-direction: row;
    flex-shrink: 1;
    flex-grow: 1;
    height: 0;
    width: 100%;
  }
.guapai-system{
  width: 100%;
  height: 100%;
}
</style>
