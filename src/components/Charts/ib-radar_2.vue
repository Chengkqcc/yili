<template>
  <div id="radar2"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ib-radar_2",
  props: {
    radar2Data: {
      type: Array,
      default: function () {
        return [6.9, 9.9, 9.5, 6.7, 9.6]
      }
    },
    name_arr:{
      type:Array,
      default:function(){
        return [{
          name: "有货率",
        },
        {
          name: "准时送到率",
        },
        {
          name: "运输完整率",
        },
        {
          name: "收货及时率",
        },
        {
          name: "准时发货率",
        },]
      }
    },
  },
  methods: {
    init() {
      var chartDom = document.getElementById("radar2");
      var myChart = echarts.init(chartDom);
      var option;
      let that = this
      option = {
        legend: {
          data: [""],
        },
        radar: {
          nameGap: 5,
          indicator: that.indicator,
          splitArea: {
            show: true,
            areaStyle: {
              color: "rgba(255,255,255,.1)", // 图表背景的颜色
            },
          },
        },
        series: [
          {
            name: "物流状态",
            type: "radar",
            data: [
              {
                value: that.radar2Data,
                name: "",
                itemStyle: {
                  normal: {
                    color: "#00f0f1",
                    lineStyle: {
                      color: "#00f0f1",
                    },
                  },
                },
                areaStyle: {
                  color: "rgba(0,240,241,0.1)",
                },
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  watch: {
    radar2Data() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  computed:{
    indicator(){
      let arr = []
      this.name_arr.forEach(item=>{
        let obj = {
          name:item.name,
          max:10,
          color:'#fff'
        }
        arr.push(obj)
      })
      return arr
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  }
};
</script>
<style scoped>

</style>