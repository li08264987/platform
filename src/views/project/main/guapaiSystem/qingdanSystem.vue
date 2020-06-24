<template>
  <div class="guapai-type">
    <div class="guapai-left">

      <div class="yidong guapai">
        <div class="line" />
        <div class="pai-yidong">
          <div class="title">一栋车间</div>
          <div class="type">
            <div v-for="(item, index) in yidong" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>

      <div class="erdong guapai">
        <div class="line" />
        <div class="pai-erdong">
          <div class="title">二栋车间</div>
          <div class="type">
            <div v-for="(item, index) in erdong" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>

      <div class="donglizhan guapai">
        <div class="line" />
        <div class="pai-donglizhan">
          <div class="title">动力站</div>
          <div class="type">
            <div v-for="(item, index) in donglizhan" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>
    </div>

    <div class="guapai-right">
      <!-- <div class="jiaoshuichang guapai" style="">
        <div class="line" />
        <div class="pai-jiaoshuichang">
          <div class="title">胶水厂</div>
          <div class="type">
            <div v-for="(item, index) in jiaoshuichang" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div>
          </div>
        </div>
        <div class="line" />
      </div> -->
      <div class="sidong guapai">
        <div class="line" />
        <div class="pai-sidong">
          <div class="title">四栋车间</div>
          <div class="type">
            <div v-for="(item, index) in sidong" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>
      <div class="sandong guapai">
        <div class="line" />
        <div class="pai-sandong">
          <div class="title">三栋车间</div>
          <div class="type">
            <div v-for="(item, index) in sandong" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGuaPaiDataQD } from '@/api/main/guapai'
export default {
  name: 'QingDanSystem',
  data() {
    return {
      yidong: [{
        name: '常压压力',
        value: 500,
        unit: 'MPa'
      }, {
        name: '常压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }, {
        name: '高压压力',
        value: 378,
        unit: 'MPa'
      }, {
        name: '高压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }],
      erdong: [{
        name: '常压压力',
        value: 500,
        unit: 'MPa'
      }, {
        name: '常压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }, {
        name: '高压压力',
        value: 378,
        unit: 'MPa'
      }, {
        name: '高压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }],
      sandong: [{
        name: '常压压力',
        value: 500,
        unit: 'MPa'
      }, {
        name: '常压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }, {
        name: '高压压力',
        value: 378,
        unit: 'MPa'
      }, {
        name: '高压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }],
      sidong: [{
        name: '常压压力',
        value: 500,
        unit: 'MPa'
      }, {
        name: '常压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }, {
        name: '高压压力',
        value: 378,
        unit: 'MPa'
      }, {
        name: '高压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }],
      jiaoshuichang: [{
        name: '常压压力',
        value: 500,
        unit: 'MPa'
      }, {
        name: '常压流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点温度',
        value: 378,
        unit: '℃'
      }],
      donglizhan: [{
        name: '常压平均压力',
        value: 500,
        unit: 'MPa'
      }, {
        name: '常压总流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点平均温度',
        value: 378,
        unit: '℃'
      }, {
        name: '高压平均压力',
        value: 378,
        unit: 'MPa'
      }, {
        name: '高压总流量',
        value: 378,
        unit: 'm³/h'
      }, {
        name: '常压露点平均温度',
        value: 378,
        unit: '℃'
      }],
      interval: null
    }
  },
  created() {
    this.interval = setInterval(this.getGuaPaiDataQD, 300000)
  },
  mounted() {
    this.getGuaPaiDataQD()
  },
  deactivated() {
    clearInterval(this.interval)
  },
  methods: {
    getGuaPaiDataQD() {
      fetchGuaPaiDataQD().then((res) => {
        this.yidong = res.data.yidong
        this.erdong = res.data.erdong
        this.sandong = res.data.sandong
        this.sidong = res.data.sidong
        this.donglizhan = res.data.donglizhan
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
    flex-direction: row;
    flex-shrink: 1;
    flex-grow: 1;
    height: 0;
    width: 100%;
    height: 100%;
    .line{
      height: 1px;
      width: 10vw;
      background: linear-gradient(to right, rgba(61,59,234,0),rgba(61,59,234,0.5),rgba(47,84,235,1), rgba(78,223,255,1), rgba(61,59,234,1), rgba(61,59,234,1), rgba(61,59,234,0));
    }
    .guapai{
        background-color: rgba(1,7,54,0.60);
        width: 10vw;
        .pai-donglizhan,.pai-yidong,.pai-erdong,.pai-sandong,.pai-sidong,.pai-jiaoshuichang{
            margin: 0.5vw 0.3vw;
        }
        .pai-jiaoshuichang{
          .data-detail{
              margin-top: 2.3vw;
          }
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
        .data-detail{
            font-family: MicrosoftYaHeiUI;
            font-size: 0.6vw;
            color: #DAD128;
            letter-spacing: 0;
            line-height: 0.55vw;
            text-align: right;
            position: relative;
            margin-right: 0.5vw;
            margin-bottom: 0.35vw;
            cursor: pointer;
        }
    }
    .donglizhan{
      width: 11vw;
      .pai-donglizhan .text{
        width: 6vw;
      }
    }
    .guapai-left{
       display: flex;
       flex-direction: column;
       flex-shrink: 0;
        flex-grow: 0;
        height: 100%;
        width: 27vw;
       .donglizhan{
           position: relative;
          top: -5vw;
          left: 5vw;
       }
       .yidong{
           position: relative;
           top: 29vw;
            left: 3vw;
       }
       .erdong{
           position: relative;
           top: 16vw;
           left: 4vw;
       }
    }
    .guapai-right{
       display: flex;
       flex-direction: column;
       flex-shrink: 1;
        flex-grow: 1;
        height: 100%;
        width: 0;
       .jiaoshuichang{
           position: relative;
           top: 5vw;
          left: 15vw;
       }
       .sidong{
           position: relative;
           top: 22vw;
          left: 15vw;
       }
       .sandong{
          position: relative;
          top: 27vw;
          left: 12.5vw;
       }
    }
}
</style>
