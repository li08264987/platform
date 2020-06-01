<template>
  <div class="guapai-type">
    <img src="@/assets/main/dianliSystem/电力1栋2配.png" class="pic-yidongerpei">
    <img src="@/assets/main/dianliSystem/电力1栋3配.png" class="pic-yidongsanpei">
    <img src="@/assets/main/dianliSystem/电力1栋4配.png" class="pic-yidongsipei">
    <img src="@/assets/main/dianliSystem/电力2栋1配.png" class="pic-erdongyipei">
    <img src="@/assets/main/dianliSystem/电力2栋2配.png" class="pic-erdongerpei">
    <img src="@/assets/main/dianliSystem/电力3栋1配.png" class="pic-sandongyipei">
    <img src="@/assets/main/dianliSystem/电力3栋3配.png" class="pic-sandongsanpei">
    <img src="@/assets/main/dianliSystem/电力3栋4配.png" class="pic-sandongsipei">
    <img src="@/assets/main/dianliSystem/电力4栋1配.png" class="pic-sidongyipei">
    <img src="@/assets/main/dianliSystem/电力4栋2配.png" class="pic-sidongerpei">
    <img src="@/assets/main/dianliSystem/电力4栋4配.png" class="pic-sidongsipei">
    <img src="@/assets/main/dianliSystem/电力动力站1配.png" class="pic-donglizhanyipei">
    <img src="@/assets/main/dianliSystem/电力动力站2配.png" class="pic-donglizhanerpei">

    <div class="yidongerpei guapai">
      <div class="line" />
      <div class="pai-yidongerpei">
        <div class="title">一栋2配</div>
        <div class="type">
          <div v-show="showDianYa">
            <div v-for="(item, index) in yidongerpei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in yidongerpei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in yidongsanpei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in yidongsanpei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in yidongsipei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in yidongsipei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in erdongyipei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in erdongyipei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in erdongerpei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in erdongerpei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in sandongyipei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in sandongyipei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in sandongsanpei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in sandongsanpei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in sandongsipei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in sandongsipei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in sidongyipei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in sidongyipei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in sidongerpei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in sidongerpei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in sidongsipei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in sidongsipei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in donglizhanyipei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in donglizhanyipei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
          <div v-show="showDianYa">
            <div v-for="(item, index) in donglizhanerpei.dianya" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>

          <div v-show="showDianLiu">
            <div v-for="(item, index) in donglizhanerpei.dianliu" :key="index" class="text-value">
              <div class="text">{{ item.name }}:</div>
              <span class="value">{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
      yidongerpei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      yidongsanpei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      yidongsipei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      erdongyipei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      erdongerpei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      sandongyipei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      sandongsanpei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      sandongsipei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      sidongyipei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      sidongerpei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      sidongsipei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      donglizhanyipei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      donglizhanerpei: {
        dianya: [{
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
        }],
        dianliu: [{
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
      },
      showDianLiu: false,
      showDianYa: true
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
        this.showDianYa = true
      } else {
        this.showDianLiu = true
        this.showDianYa = false
      }
    }
  },
  created() {
    setInterval(this.getGuaPaiDataDL, 300000)
  },
  mounted() {
    this.getGuaPaiDataDL()
  },
  methods: {
    getGuaPaiDataDL() {
      fetchGuaPaiDataDL().then((res) => {
        this.yidongerpei.dianya = res.data.yidongerpei.filter((item) => { return item.unit === 'V' })
        this.yidongerpei.dianliu = res.data.yidongerpei.filter((item) => { return item.unit === 'A' })

        this.yidongsanpei.dianya = res.data.yidongsanpei.filter((item) => { return item.unit === 'V' })
        this.yidongsanpei.dianliu = res.data.yidongsanpei.filter((item) => { return item.unit === 'A' })

        this.yidongsipei.dianya = res.data.yidongsipei.filter((item) => { return item.unit === 'V' })
        this.yidongsipei.dianliu = res.data.yidongsipei.filter((item) => { return item.unit === 'A' })

        this.erdongyipei.dianya = res.data.erdongyipei.filter((item) => { return item.unit === 'V' })
        this.erdongyipei.dianli = res.data.erdongyipei.filter((item) => { return item.unit === 'A' })

        this.erdongerpei.dianya = res.data.erdongerpei.filter((item) => { return item.unit === 'V' })
        this.erdongerpei.dianli = res.data.erdongerpei.filter((item) => { return item.unit === 'A' })

        this.sandongyipei.dianya = res.data.sandongyipei.filter((item) => { return item.unit === 'V' })
        this.sandongyipei.dianliu = res.data.sandongyipei.filter((item) => { return item.unit === 'A' })

        this.sandongsanpei.dianya = res.data.sandongsanpei.filter((item) => { return item.unit === 'V' })
        this.sandongsanpei.dianliu = res.data.sandongsanpei.filter((item) => { return item.unit === 'A' })

        this.sandongsipei.dianya = res.data.sandongsipei.filter((item) => { return item.unit === 'V' })
        this.sandongsipei.dianliu = res.data.sandongsipei.filter((item) => { return item.unit === 'A' })

        this.sidongyipei.dianya = res.data.sidongyipei.filter((item) => { return item.unit === 'V' })
        this.sidongyipei.dianliu = res.data.sidongyipei.filter((item) => { return item.unit === 'A' })

        this.sidongerpei.dianya = res.data.sidongerpei.filter((item) => { return item.unit === 'V' })
        this.sidongerpei.dianliu = res.data.sidongerpei.filter((item) => { return item.unit === 'A' })

        this.sidongsipei.dianya = res.data.sidongsipei.filter((item) => { return item.unit === 'V' })
        this.sidongsipei.dianliu = res.data.sidongsipei.filter((item) => { return item.unit === 'A' })

        this.donglizhanyipei.dianya = res.data.donglizhanyipei.filter((item) => { return item.unit === 'V' })
        this.donglizhanyipei.dianliu = res.data.donglizhanyipei.filter((item) => { return item.unit === 'A' })

        this.donglizhanerpei.dianya = res.data.donglizhanerpei.filter((item) => { return item.unit === 'V' })
        this.donglizhanerpei.dianliu = res.data.donglizhanerpei.filter((item) => { return item.unit === 'A' })
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
        top: 34vw;
        left: 5vw;
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
        top: 15vw;
        left: 30vw;
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
      bottom: 6vw;
      left: 12.8vw;
    }
    .yidongsanpei{
      bottom: 6vw;
      left: 24.6vw;
    }
    .yidongsipei{
      bottom: 6vw;
      left: 36vw;
    }
    .erdongyipei{
      bottom: 31.6vw;
      left: 2vw;
    }
    .erdongerpei{
      top: 43.4vw;
      left: 3vw;
    }
    .sandongyipei{
      bottom: 6vw;
      right: 0vw;
    }
    .sandongsanpei{
      bottom: 14vw;
      right: 0.8vw;
    }
    .sandongsipei{
      bottom: 23vw;
      right: 0.8vw;
    }
    .sidongyipei{
      top: 10vw;
      left: 23vw;
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
