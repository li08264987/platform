<template>
  <div class="guapai-type">
    <div class="guapai-left">
      <div class="donglizhan guapai">
        <div class="line" />
        <div class="pai-donglizhan">
          <div class="title">动力站</div>
          <div class="type">
            <div class="text-value">
              <div class="text">瞬时功率(kWh):</div>
              <span class="value">378</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>

      <div class="yidong guapai">
        <div class="line" />
        <div class="pai-yidong">
          <div class="title">一栋车间</div>
          <div class="type">
            <div class="text-value">
              <div class="text">瞬时功率(kWh):</div>
              <span class="value">378</span>
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
            <div class="text-value">
              <div class="text">瞬时功率(kWh):</div>
              <span class="value">378</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>
    </div>

    <div class="guapai-right">
      <div class="jiaoshuichang guapai" style="">
        <div class="line" />
        <div class="pai-jiaoshuichang">
          <div class="title">胶水厂</div>
          <div class="type">
            <div class="text-value">
              <div class="text">瞬时功率(kWh):</div>
              <span class="value">378</span>
            </div>
            <!-- <div class="data-detail">数据详情<i class="el-icon-caret-right" /></div> -->
          </div>
        </div>
        <div class="line" />
      </div>
      <div class="sidong guapai">
        <div class="line" />
        <div class="pai-sidong">
          <div class="title">四栋车间</div>
          <div class="type">
            <div class="text-value">
              <div class="text">瞬时功率(kWh):</div>
              <span class="value">378</span>
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
            <div class="text-value">
              <div class="text">瞬时功率(kWh):</div>
              <span class="value">378</span>
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
export default {
  name: 'DianLiSystem',
  data() {
    return {

    }
  },
  methods: {

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
      width: 8vw;
      background: linear-gradient(to right, rgba(61,59,234,0),rgba(61,59,234,0.5),rgba(47,84,235,1), rgba(78,223,255,1), rgba(61,59,234,1), rgba(61,59,234,1), rgba(61,59,234,0));
    }
    .guapai{
        background-color: rgba(1,7,54,0.60);
        width: 8vw;
        height: 7vw;
        .pai-donglizhan,.pai-yidong,.pai-erdong,.pai-sandong,.pai-sidong,.pai-jiaoshuichang{
            margin-top: 0.5vw;
            margin-left: 0.3vw;
            height: 6.4vw;
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
                line-height: 0.6vw
            }
            .value{
              font-family: Bebas;
              font-size: 0.6vw;
              color: #D9DEFF;
              letter-spacing: 0;
              line-height: 0.6vw;
            }
            .text{
                width: 6vw;
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
            margin-top:3vw;
            cursor: pointer;
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
          top: 5vw;
          left: 8.05vw;
       }
       .yidong{
           position: relative;
           top: 21vw;
            left: 5vw;
       }
       .erdong{
           position: relative;
           top: 3vw;
            left: 6vw;
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
           left: 18vw;
       }
       .sidong{
           position: relative;
           top: 16.3vw;
            left: 17vw;
       }
       .sandong{
           position: relative;
           top: 18vw;
          left: 12.5vw;
       }
    }
}
</style>
