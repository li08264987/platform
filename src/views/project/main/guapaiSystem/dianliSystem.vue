<template>
  <div class="guapai-type">
    <img src="@/assets/main/dianliSystem/电力1栋2配.png" class="pic-yidongerpei">
    <img src="@/assets/main/dianliSystem/电力1栋3配.png" class="pic-yidongsanpei">
    <img src="@/assets/main/dianliSystem/电力1栋4配.png" class="pic-yidongsipei">
    <img src="@/assets/main/dianliSystem/电力2栋1配.png" class="pic-erdongyipei">
    <!-- <img src="@/assets/main/dianliSystem/电力2栋2配.png" class="pic-erdongerpei"> -->
    <img src="@/assets/main/dianliSystem/电力3栋1配.png" class="pic-sandongyipei">
    <img src="@/assets/main/dianliSystem/电力3栋3配.png" class="pic-sandongsanpei">
    <img src="@/assets/main/dianliSystem/电力3栋4配.png" class="pic-sandongsipei">
    <!-- <img src="@/assets/main/dianliSystem/电力4栋1配.png" class="pic-sidongyipei"> -->
    <img src="@/assets/main/dianliSystem/电力4栋2配.png" class="pic-sidongerpei">
    <img src="@/assets/main/dianliSystem/电力4栋4配.png" class="pic-sidongsipei">
    <img src="@/assets/main/dianliSystem/电力动力站1配.png" class="pic-donglizhanyipei">
    <img src="@/assets/main/dianliSystem/电力动力站2配.png" class="pic-donglizhanerpei">

    <div class="yidongerpei guapai">
      <div class="line" />
      <div class="pai-yidongerpei">
        <div class="title">一栋2配</div>
        <div class="type">
          <div v-for="(item, index) in yidongerpei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>

        </div>
      </div>
      <div class="line" />
    </div>

    <div class="yidongsanpei guapai">
      <div class="line" />
      <div class="pai-yidongsanpei">
        <div class="title">一栋3配</div>
        <div class="type">
          <div v-for="(item, index) in yidongsanpei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="yidongsipei guapai">
      <div class="line" />
      <div class="pai-yidongsipei">
        <div class="title">一栋4配</div>
        <div class="type">
          <div v-for="(item, index) in yidongsipei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="erdongyipei guapai">
      <div class="line" />
      <div class="pai-erdongyipei">
        <div class="title">二栋1配</div>
        <div class="type">
          <div v-for="(item, index) in erdongyipei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="erdongerpei guapai">
      <div class="line" />
      <div class="pai-erdongerpei">
        <div class="title">二栋2配</div>
        <div class="type">
          <div v-for="(item, index) in erdongerpei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="sandongyipei guapai">
      <div class="line" />
      <div class="pai-sandongyipei">
        <div class="title">三栋1配</div>
        <div class="type">
          <div v-for="(item, index) in sandongyipei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="sandongsanpei guapai">
      <div class="line" />
      <div class="pai-sandongsanpei">
        <div class="title">三栋3配</div>
        <div class="type">
          <div v-for="(item, index) in sandongsanpei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="sandongsipei guapai">
      <div class="line" />
      <div class="pai-sandongsipei">
        <div class="title">三栋4配</div>
        <div class="type">
          <div v-for="(item, index) in sandongsipei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="sidongyipei guapai">
      <div class="line" />
      <div class="pai-sidongyipei">
        <div class="title">四栋1配</div>
        <div class="type">
          <div v-for="(item, index) in sidongyipei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="sidongerpei guapai">
      <div class="line" />
      <div class="pai-sidongerpei">
        <div class="title">四栋2配</div>
        <div class="type">
          <div v-for="(item, index) in sidongerpei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="sidongsipei guapai">
      <div class="line" />
      <div class="pai-sidongsipei">
        <div class="title">四栋4配</div>
        <div class="type">
          <div v-for="(item, index) in sidongsipei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="donglizhanyipei guapai">
      <div class="line" />
      <div class="pai-donglizhanyipei">
        <div class="title">动力站房1配</div>
        <div class="type">
          <div v-for="(item, index) in donglizhanyipei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="donglizhanerpei guapai">
      <div class="line" />
      <div class="pai-donglizhanerpei">
        <div class="title">动力站房2配</div>
        <div class="type">
          <div v-for="(item, index) in donglizhanerpei" v-show="item.unit === 'V' ? true : false || showDianLiu" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>
  </div>
</template>

<script>
import { fetchGuaPaiDataDL } from '@/api/main/guapai'
export default {
  name: 'DianLiSystem',
  data() {
    return {
      showDianLiu: false,
      yidongerpei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      yidongsanpei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      yidongsipei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      erdongyipei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      erdongerpei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      sandongyipei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      sandongsanpei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      sandongsipei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      sidongyipei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      sidongerpei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      sidongsipei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      donglizhanyipei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }],
      donglizhanerpei: [{
        name: 'A相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'B相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'C相电压',
        value: 500,
        unit: 'V',
        show: true
      }, {
        name: 'A相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'B相电流',
        value: 500,
        unit: 'A',
        show: false
      }, {
        name: 'C相电流',
        value: 500,
        unit: 'A',
        show: false
      }]
    }
  },
  computed: {
    mainElectricType() {
      return this.$store.state.settings.mainElectricType
    }
  },
  watch: {
    mainElectricType: function(param) {
      if (param === 'voltage') {
        this.showDianLiu = false
      } else {
        this.showDianLiu = true
      }
    }
  },
  created() {
    setInterval(this.getGuaPaiDataDL, 5000)
  },
  mounted() {
    this.getGuaPaiDataDL()
  },
  methods: {
    getGuaPaiDataDL() {
      fetchGuaPaiDataDL().then((res) => {
        this.yidongerpei = res.data.yidongerpei
        this.yidongsanpei = res.data.yidongsanpei
        this.yidongsipei = res.data.yidongsipei
        this.erdongyipei = res.data.erdongyipei
        this.erdongerpei = res.data.erdongerpei
        this.sandongyipei = res.data.sandongyipei

        this.sandongsanpei = res.data.sandongsanpei
        this.sandongsipei = res.data.sandongsipei
        this.sidongyipei = res.data.sidongyipei
        this.sidongerpei = res.data.sidongerpei
        this.sidongsipei = res.data.sidongsipei
        this.donglizhanyipei = res.data.donglizhanyipei
        this.donglizhanerpei = res.data.donglizhanerpei
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.guapai-type{
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
    height: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
    }
    .pic{
      &-yidongerpei{
        bottom: 11vw;
        left: 10vw;
      }
      &-yidongsanpei{
        bottom: 11vw;
        left: 21vw;
      }
      &-yidongsipei{
        bottom: 11vw;
        left: 24.8vw;
      }
      &-erdongyipei{
        bottom: 23vw;
        left: 5vw;
      }
      &-erdongerpei{

      }
      &-sandongyipei{
        bottom: 10.5vw;
        right: 7vw;
      }
      &-sandongsanpei{
        bottom: 19vw;
        right: 7.8vw;
      }
      &-sandongsipei{
        bottom: 28vw;
        right: 7.8vw;
      }
      &-sidongyipei{

      }
      &-sidongerpei{
        bottom: 32vw;
        right: 7vw;
      }
      &-sidongsipei{
        bottom: 33.5vw;
        right: 8vw;
      }
      &-donglizhanyipei{
        bottom: 34vw;
        right: 27vw;
      }
      &-donglizhanerpei{
        bottom: 37vw;
        right: 18vw;
      }
    }
    .line{
      height: 1px;
      width: 7vw;
      background: linear-gradient(to right, rgba(61,59,234,0),rgba(61,59,234,0.5),rgba(47,84,235,1), rgba(78,223,255,1), rgba(61,59,234,1), rgba(61,59,234,1), rgba(61,59,234,0));
    }
    .guapai{
        background-color: rgba(1,7,54,0.60);
        width: 7vw;
        position: absolute;

        .pai-yidongerpei,.pai-yidongsanpei,.pai-yidongsipei,
        .pai-erdongyipei,.pai-erdongerpei,
        .pai-sandongyipei,.pai-sandongsanpei,.pai-sandongsipei,
        .pai-sidongyipei,.pai-sidongerpei,.pai-sidongsipei,
        .pai-donglizhanyipei,.pai-donglizhanerpei{
            margin-top: 0.5vw;
            margin-left: 0.3vw;
        }

        .title{
            font-family: MicrosoftYaHeiUISemibold;
            font-size: 0.8vw;
            color: #F4F8FF;
            letter-spacing: 0;
            margin-bottom: 0.65vw;
        }
        .text-value{
            display: flex;
            flex-direction: row;
            margin-bottom: 0.4vw;
            .text{
                font-family: MicrosoftYaHeiUI;
                font-size: 0.6vw;
                color: #D9DEFF;
                letter-spacing: 0;
                text-align: center;
            }
            .value{
              font-family: Bebas;
              font-size: 0.6vw;
              color: #D9DEFF;
              letter-spacing: 0;
              width: 2.5vw;
              text-align: center;
            }
            .text{
                width: 5vw;
            }
            .unit{
              color: #D9DEFF;
              font-size: 0.6vw;
              width: 2vw;
              text-align: center;
            }
        }
    }
    .yidongerpei{
      bottom: 5vw;
      left: 12.8vw;
    }
    .yidongsanpei{
      bottom: 5vw;
      left: 24.6vw;
    }
    .yidongsipei{
      bottom: 5vw;
      left: 36vw;
    }
    .erdongyipei{
      bottom: 31.6vw;
      left: 2vw;
    }
    .erdongerpei{

    }
    .sandongyipei{
      bottom: 5vw;
      right: 0vw;
    }
    .sandongsanpei{
      bottom: 14vw;
      right: 0.8vw;
    }
    .sandongsipei{
      bottom: 22vw;
      right: 0.8vw;
    }
    .sidongyipei{

    }
    .sidongerpei{
      bottom: 38vw;
      right: 0vw;
    }
    .sidongsipei{
      bottom: 30vw;
      right: 1vw;
    }
    .donglizhanyipei{
      bottom: 36vw;
      right: 34.8vw;
    }
    .donglizhanerpei{
      bottom: 40vw;
      right: 11vw;
    }
}
</style>
