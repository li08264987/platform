<template>
  <div class="guapai-container">
    <img src="@/assets/main/动力站.png" class="pic-donglizhan">
    <img src="@/assets/main/一栋.png" class="pic-yidong">
    <img src="@/assets/main/二栋.png" class="pic-erdong">
    <img src="@/assets/main/胶水厂.png" class="pic-jiaoshuichang">
    <img src="@/assets/main/三栋.png" class="pic-sandong">
    <img src="@/assets/main/四栋.png" class="pic-sidong">

    <div class="guapai-left">
      <div class="donglizhan guapai">
        <div class="line" />
        <div class="pai-donglizhan">
          <div class="title">动力站</div>
          <div class="type">
            <div class="text-value">
              <div class="text">常压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">常压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="data-detail">数据详情</div>
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
              <div class="text">常压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">常压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="data-detail">数据详情</div>
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
              <div class="text">常压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">常压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="data-detail">数据详情</div>
          </div>
        </div>
        <div class="line" />
      </div>

    </div>

    <div class="guapai-right">
      <div class="jiaoshuichang guapai">
        <div class="line" />
        <div class="pai-jiaoshuichang">
          <div class="title">胶水厂</div>
          <div class="type">
            <div class="text-value">
              <div class="text">常压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">常压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="data-detail">数据详情</div>
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
              <div class="text">常压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">常压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="data-detail">数据详情</div>
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
              <div class="text">常压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">常压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压压力(bar):</div>
              <span class="value">378</span>
            </div>
            <div class="text-value">
              <div class="text">高压露点温度(℃):</div>
              <span class="value">378</span>
            </div>
            <div class="data-detail">数据详情</div>
          </div>
        </div>
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuaPai',
  components: {},
  data() {
    return {

    }
  },

  computed: {},

  mounted() {
  },

  methods: {}
}

</script>

<style lang='scss' scoped>
img {
    position: absolute;
}
.pic{
    &-donglizhan{
        top: 220px;
        left: 280px;
    }
    &-yidong{
        top: 725px;
    left: 260px;
    }
    &-erdong{
        top: 575px;
        left: 260px;
    }
    &-jiaoshuichang{
        top: 330px;
        left: 835px;
    }
    &-sandong{
        top: 575px;
        left: 700px;
    }
    &-sidong{
        top: 453px;
        left: 626px;
    }
}

.guapai-container{
    display: flex;
    flex-direction: row;
    .line{
      height: 1px;
      width: 160px;
      background: linear-gradient(to right, rgba(61,59,234,0),rgba(61,59,234,0.5),rgba(47,84,235,1), rgba(78,223,255,1), rgba(61,59,234,1), rgba(61,59,234,1), rgba(61,59,234,0));
    }
    .guapai{
        background-color: rgba(1,7,54,0.60);
        width: 160px;
        height: 131px;
        .pai-donglizhan,.pai-yidong,.pai-erdong,.pai-sandong,.pai-sidong,.pai-jiaoshuichang{
            margin-top: 10px;
            margin-left: 9px;
        }
        .title{
            font-family: MicrosoftYaHeiUISemibold;
            font-size: 16px;
            color: #F4F8FF;
            letter-spacing: 0;
            margin-bottom: 12px;
        }
        .text-value{
            display: flex;
            flex-direction: row;
            margin-bottom: 8px;
            .text,.value{
                font-family: MicrosoftYaHeiUI;
                font-size: 12px;
                color: #D9DEFF;
                letter-spacing: 0;
                line-height: 11px;
            }
            .text{
                width: 106px;
            }
        }
        .data-detail{
            font-family: MicrosoftYaHeiUI;
            font-size: 10px;
            color: #DAD128;
            letter-spacing: 0;
            line-height: 9px;
            text-align: right;
            position: relative;
            margin-right: 10px;
            margin-bottom: 7px;
        }
    }
    .guapai-left{
       display: flex;
       flex-direction: column;
       .donglizhan{
           position: relative;
           top: 96px;
           left: 120px;
       }
       .yidong{
           position: relative;
           top: 470px;
           left: 100px;
       }
       .erdong{
           position: relative;
           top: 115px;
           left: 100px;
       }
    }
    .guapai-right{
       display: flex;
       flex-direction: column;
       .jiaoshuichang{
           position: relative;
           top: 177px;
           left: 515px;
       }
       .sidong{
           position: relative;
           top: 390px;
           left: 680px;
       }
       .sandong{
           position: relative;
           top: 400px;
           left: 605px;
       }
    }
}
</style>
