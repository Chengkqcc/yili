<template>
  <div class='grid-content report'>
    <ib-title :title='title'><slot></slot></ib-title>
    <ve-pie v-if="componentStatus !== 'nodata'" :theme='theme' :height='height'
      :loading="componentStatus === 'loading'"  :data="data" :settings="chart.chartSettings" :extend="chart.chartExtend" :events="chart.chartEvents">
      <span v-show="showSwitch && componentStatus === 'normal'" @click="switchChange" class="show_Label_btn" :class="[showLabel?'ali-icon-eye':'ali-icon-eye-blocked']"></span>
    </ve-pie>
    <ib-nodata :height='height' v-else></ib-nodata>
  </div>
</template>

<script>

import theme from '@/assets/echarts-macarons'
import IbNodata from '@/components/Charts/ib-nodata'
import ibTitle from '@/components/Title/ib-title'
// import store from '@/store'

export default {
  components: {
    ibTitle, 
    IbNodata
  },
  props: {
    // 接收参数
    data: {
      type: Object,
      default: function() {
        return {}
      }
    },
    legend: {
      type: Object,
      default: function() {
        return {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20
        }
      }
    },
    height: {
      // 报表高度
      type: String,
      default: '240px'
    },
    title: {
      type: String,
      default: '请输入标题'
    },
    isAbsolute: { // 是否使用绝对值
      type: Boolean,
      default: false
    },
    isDefaultShow: { // 饼图占比是否显示
      type: Boolean,
      default: true
    },
    stateName: {
      type: String
    },
    legendSelectChanged: {
      type: String
    },
    legendSelect: {
      type: String
    },
    labelName: { // 显示label时的名称
      type: String,
      default: '数值'
    },
    showSwitch: {
      type: Boolean,
      default: true // 是否显示Label开关
    },
    showLabelDefault: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      theme: theme,
      showLabel: this.showLabelDefault
    }
  },
  
  computed: {
    componentStatus() {
      let state = 'loading'
      if (this.data.rows === undefined) {
        state = 'loading'
      } else if (this.data.rows.length === 0) {
        state = 'nodata'
      } else {
        state = 'normal'
      }
      return state
    },
    chart: function() {
      const that = this
      return {
        chartSettings: {
          radius: parseInt(that.height) / 4, // 饼图半径 60
          offsetY: parseInt(that.height) / 2, // 纵向偏移量 120
          label: {
            show: this.showLabel,
            formatter: `{b}: \n ${that.isAbsolute ? '绝对值:' : (that.labelName + ':')} {c} \n ${that.isDefaultShow ? '占比: {d}%' : ''}`
          }
        },
        chartExtend: {
          legend: this.legend,
          tooltip: {
            formatter: function(e) {
              return e.marker + e.name + '<br>' + (that.isAbsolute ? '绝对值：' : (that.labelName + '：')) + e.value + '<br>' + (that.isDefaultShow ? ('占比：' + e.percent + '%') : '')
            }
          },
          series(v) {
            if (v === false) return v
            // 设置label颜色
            if (that.isAbsolute) {
              for (const item of v) {
                for (const i in item.data) {
                  item.data[i].label = { color: parseFloat(item.data[i].value) > 0 ? '#FF7872' : '#7ACE4C' }
                  item.data[i].value = Math.abs(parseFloat(item.data[i].value))
                }
              }
            }
            return v
          }
        },
        chartEvents: {
          click: function(e) {
            const value = e.name
            const type = that.connectType === 1 ? 'Array' : 'String'
            that.$store.dispatch('link', { value: value, type: type, name: that.stateName, method: 'set' })
          },
          legendselectchanged: function(e) {
            that.$store.dispatch('link', { value: e.name, type: 'String', name: that.legendSelectChanged, method: 'set' })
            that.$store.dispatch('link', { value: e.selected, type: 'String', name: that.legendSelect, method: 'set' })
            that.selected = e.selected
          }
        }
      }
    }
  },
  methods: {
    switchChange() {
      this.showLabel = !this.showLabel
    }
  }
}
</script>
<style scoped>
.show_Label_btn {
  position: absolute;
  top: -27px;
  right: 16px;
  z-index: 2;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 13px;
  line-height: 20px;
  color: #6f6f6f;
}
.show_Label_btn:hover{
  color: #0af;
}
</style>

