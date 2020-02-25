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
    .pic-donglizhan{
      
    }
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
            .text,.value{
                font-family: MicrosoftYaHeiUI;
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
          top: 2vw;
          left: 5.7vw;
       }
       .yidong{
           position: relative;
           top: 21vw;
            left: 4.7vw;
       }
       .erdong{
           position: relative;
           top: 3vw;
            left: 5.7vw;
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
           top: 6vw;
            left: 7.7vw;
       }
       .sidong{
           position: relative;
           top: 16.3vw;
            left: 17vw;
       }
       .sandong{
           position: relative;
           top: 17vw;
          left: 12.5vw;
       }
    }
}
</style>
