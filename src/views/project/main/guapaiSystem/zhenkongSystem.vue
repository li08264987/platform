<template>
  <div class="guapai-type">
    <img src="@/assets/main/zhenkongSystem/真空1-1.png" class="pic-yidonyipei">
    <img src="@/assets/main/zhenkongSystem/真空1-2.png" class="pic-yidongerpei">
    <img src="@/assets/main/zhenkongSystem/真空1-3.png" class="pic-yidongsanpei">
    <img src="@/assets/main/zhenkongSystem/真空1-4.png" class="pic-yidongsipei">
    <img src="@/assets/main/zhenkongSystem/真空2-1.png" class="pic-erdongyipei">
    <img src="@/assets/main/zhenkongSystem/真空2-2.png" class="pic-erdongerpei">
    <img src="@/assets/main/zhenkongSystem/真空j-1.png" class="pic-wudongyipei">
    <img src="@/assets/main/zhenkongSystem/真空j-2.png" class="pic-wudongerpei">

    <div class="yidonyipei guapai">
      <div class="line" />
      <div class="pai-yidonyipei">
        <div class="title">1-1</div>
        <div class="type">
          <div v-for="(item, index) in yidonyipei" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>

        </div>
      </div>
      <div class="line" />
    </div>

    <div class="yidongerpei guapai">
      <div class="line" />
      <div class="pai-yidongerpei">
        <div class="title">1-2</div>
        <div class="type">
          <div v-for="(item, index) in yidongerpei" :key="index" class="text-value">
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
        <div class="title">1-3</div>
        <div class="type">
          <div v-for="(item, index) in yidongsanpei" :key="index" class="text-value">
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
        <div class="title">1-4</div>
        <div class="type">
          <div v-for="(item, index) in yidongsipei" :key="index" class="text-value">
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
        <div class="title">2-1</div>
        <div class="type">
          <div v-for="(item, index) in erdongyipei" :key="index" class="text-value">
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
        <div class="title">2-2</div>
        <div class="type">
          <div v-for="(item, index) in erdongerpei" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="wudongyipei guapai">
      <div class="line" />
      <div class="pai-wudongyipei">
        <div class="title">j-1</div>
        <div class="type">
          <div v-for="(item, index) in wudongyipei" :key="index" class="text-value">
            <div class="text">{{ item.name }}:</div>
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="line" />
    </div>

    <div class="wudongerpei guapai">
      <div class="line" />
      <div class="pai-wudongerpei">
        <div class="title">j-2</div>
        <div class="type">
          <div v-for="(item, index) in wudongerpei" :key="index" class="text-value">
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
export default {
  name: 'ZhenKongSystem',
  data() {
    return {
      yidonyipei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '2#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }],
      yidongerpei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '2#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }],
      yidongsanpei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '2#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }],
      yidongsipei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '2#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }],
      erdongyipei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '2#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }],
      erdongerpei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '2#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }],
      wudongyipei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }],
      wudongerpei: [{
        name: '1#真空计真空度',
        value: 500,
        unit: 'kPa'
      }, {
        name: '瞬时功率',
        value: 500,
        unit: 'kW'
      }, {
        name: '系统耗电量',
        value: 500,
        unit: 'kWh'
      }]
    }
  },
  methods: {

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
      &-yidonyipei{
        bottom: 11vw;
        left: 10vw;
      }
      &-yidongerpei{
        bottom: 17vw;
        left: 9vw;
      }
      &-yidongsanpei{
        bottom: 19vw;
        left: 24vw;
      }
      &-yidongsipei{
        bottom: 22vw;
        left: 22vw;
      }
      &-erdongyipei{
        bottom: 21vw;
        left: 7vw;
      }
      &-erdongerpei{
        bottom: 24vw;
        left: 6vw;
      }
      &-wudongyipei{
        bottom: 35vw;
        right: 13vw;
      }
      &-wudongerpei{
        bottom: 29vw;
        right: 9vw;
      }
    }
    .line{
      height: 1px;
      width: 9vw;
      background: linear-gradient(to right, rgba(61,59,234,0),rgba(61,59,234,0.5),rgba(47,84,235,1), rgba(78,223,255,1), rgba(61,59,234,1), rgba(61,59,234,1), rgba(61,59,234,0));
    }
    .guapai{
        background-color: rgba(1,7,54,0.60);
        width: 9vw;
        position: absolute;

        .pai-yidonyipei,.pai-yidongerpei,.pai-yidongsanpei,
        .pai-yidongsipei,.pai-erdongyipei,
        .pai-erdongerpei,.pai-wudongyipei,.pai-wudongerpei{
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
              width: 1.5vw;
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
    .yidonyipei{
      bottom: 5vw;
      left: 20.9vw;
    }
    .yidongerpei{
      bottom: 14vw;
      left: 12.5vw;
    }
    .yidongsanpei{
      bottom: 18vw;
      left: 32vw;
    }
    .yidongsipei{
      bottom: 28vw;
      left: 29.3vw;
    }
    .erdongyipei{
      bottom: 24vw;
      left: 13vw;
    }
    .erdongerpei{
      bottom: 33vw;
      left: 9vw;
    }
    .wudongyipei{
      bottom: 40vw;
      right: 17vw;
    }
    .wudongerpei{
      bottom: 24vw;
      right: 0vw;
    }
}
</style>
