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
// import { mapGetters } from 'vuex'
import { fetchSystem } from '@/api/main/guapai'
import WordCloudChart from './wordCloudChart'
import ky from './guapaiSystem/kongyaSystem'
import qd from './guapaiSystem/qingdanSystem'
import zk from './guapaiSystem/zhenkongSystem'
import dianli from './guapaiSystem/dianliSystem'
/* import LengShuiSystem from './guapaiSystem/lengshuiSystem'
import ReShuiSystem from './guapaiSystem/reshuiSystem' */
export default {
  name: 'GuaPai',
  components: {
    WordCloudChart,
    ky,
    qd,
    zk,
    dianli/* ,
    LengShuiSystem,
    ReShuiSystem */
  },
  data() {
    return {
      viewList: [{
        value: 'ky',
        name: '空压系统'
      }, {
        value: 'qd',
        name: '氢氮系统'
      }, {
        value: 'zk',
        name: '真空系统'
      }, {
        value: 'dianli',
        name: '电力系统'
      }],
      nowIndex: 0,
      currentView: null
    }
  },
  computed: {
  },
  created() {
    setInterval(this.guapaiChange, 3000000)
  },

  mounted() {
    fetchSystem().then((res) => {
      // this.viewList = res.data
      this.currentView = this.$store.state.settings.currentView.value
    }).catch(err => {
      console.log(err)
    })
  },

  methods: {
    guapaiChange() {
      const viewLength = this.viewList.length
      if (this.nowIndex === viewLength - 1) {
        this.nowIndex = 0
        this.currentView = this.viewList[this.nowIndex].value
        this.$store.dispatch('settings/changeSetting', {
          key: 'currentView',
          value: this.viewList[this.nowIndex]
        })
      } else {
        ++this.nowIndex
        this.currentView = this.viewList[this.nowIndex].value
        this.$store.dispatch('settings/changeSetting', {
          key: 'currentView',
          value: this.viewList[this.nowIndex]
        })
      }
    },
    getMsgFormSon(index, type, name, systemNumber) {
      const number = index % systemNumber
      if (number !== 4 && number !== 5) {
        this.currentView = type

        this.nowIndex = index % systemNumber
        this.$store.dispatch('settings/changeSetting', {
          key: 'currentView',
          value: { value: type, name: name }
        })
      }
    },
    showDongLiZhan() {
      const view = this.currentView
      if (view === 'zk' || view === 'dl' || view === 'dianli') {
        return false
      } else {
        return true
      }
    },
    showYiDong() {
      const view = this.currentView
      if (view === 'zk' || view === 'dl' || view === 'dianli') {
        return false
      } else {
        return true
      }
    },
    showErDong() {
      const view = this.currentView
      if (view === 'zk' || view === 'dl' || view === 'dianli') {
        return false
      } else {
        return true
      }
    },
    showSanDong() {
      const view = this.currentView
      if (view === 'zk' || view === 'dl' || view === 'dianli') {
        return false
      } else {
        return true
      }
    },
    showSiDong() {
      const view = this.currentView
      if (view === 'zk' || view === 'dl' || view === 'dianli') {
        return false
      } else {
        return true
      }
    },
    showJiaoShuiChang() {
      const view = this.currentView
      if (view === 'qd' || view === 'zk' || view === 'dl' || view === 'dianli') {
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
        top: 15vw;
        left: 17vw;
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
        top: 15vw;
        left: 40vw;
    }
    &-sandong{
        top: 30vw;
        left: 37vw;
    }
    &-sidong{
        top: 22vw;
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
