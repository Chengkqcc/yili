<template>
  <div ref="ibline" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ib-line",
  data(){
    return{
      colorArr:["#ffe400","#0dfbe4"],
    }
  },
  props: {
    lineData: {
      type: Object,
      default: function () {
        return {
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          detail: [
            {
              title: "利润额",
              type: 'line',
              num: [1000, 450, 700, 400, 1100, 650]
            },
            {
              title: "利润率",
              type: 'line',
              num: [1980, 1300, 1480, 750, 2300, 1400],
            },
          ]
        }
      }
    }
  },
  methods: {
    init() {
      var myChart = echarts.init(this.$refs.ibline);
      var option;
      let that = this
      option = {

        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            console.log(params)
            let str = '<div>'+params[0].axisValue+'</div>'
            for (var i = 0; i < params.length; i++) {
              if (i == 1) {
                params[i].value = (params[i-1].value / params[i].value*100).toFixed(2) + '%'
              }
              str += params[i].marker + '<span>'+ that.lineData.detail[i].title + ':' + params[i].value + '</span><br/>'
            }
            return str
          }
        },
        grid:{
          top:'10%',
          height:'70%'
        },
        legend: {
          top: '5%',
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
            padding: [0, 20, 0, 0],
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: that.lineData.data,
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: "12",
            },
          },
          axisTick: {
            //y轴刻度线
            show: false,
            itemStyle:{
              color:"#fff"
            }
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              //文字样式
              color: "#fff",
              fontSize: "12",
            },
          },
          // 控制网格线
          splitLine: {
            //  改变轴线颜色
            lineStyle: {
              color: "rgba(255,255,255,0.6)",
              type:"dashed"
            },
          },
          axisTick: {
            //y轴刻度线
            show: false,
          },
        },
        series: that.xSeries,
      };

      option && myChart.setOption(option);
    },
  },
  computed: {
    xSeries() {
      let arr = []
      let that = this
      this.lineData.detail.forEach((item, index) => {
        let obj = {
          name: item.name,
          type: item.type,
          itemStyle: {
            normal: {
              color: that.colorArr[index],
              borderColor:that.colorArr[index]
            },
          },
          data: item.num,
          
        }
        arr.push(obj)
      })
      return arr
    }
  },
  watch: {
    lineData() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
};
</script>
<style scoped>

</style>