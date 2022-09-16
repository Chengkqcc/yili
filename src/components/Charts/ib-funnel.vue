<template>
  <div ref="funnel" style="width: 100%; height: 260px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ib-funnel",
  props: {
    funData: {
      type: Array,
      default: function () {
        return [
          { value: 100, name: "库龄>30天" },
          { value: 66, name: "15天<库龄<30天" },
          { value: 33, name: "库龄<15天" },
        ]
      }
    }
  },
  methods: {
    init() {
      var myChart = echarts.init(this.$refs.funnel);
      var option;
      let that = this
      option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%",
        },
        color: ['#f25849', '#e7b918', '#1ceafe'],
        series: that.xSeries
      };
      option && myChart.setOption(option);
    },
  },
  watch: {
    funData() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  computed:{
    xSeries(){
      let arr = []
      this.funData.forEach((item,index)=>{
        let obj = {
            type: "funnel",
            left: "10%",
            top: 20,
            bottom: 15,
            width: "70%",
            min: 0,
            max: 100,
            minSize: "90%",
            maxSize: "0%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              fontSize:10,
              width:20,
              position: index==0?'right':'left',
              overflow:"break"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "transparent",
              borderWidth: 1,
            },
            emphasis: {
              // label: {
              //   fontSize: 20,
              // },
            },
            data: item
          }
        arr.push(obj)
      })
      return arr
    }
  },
  created() {
    console.log(this.funData)
    this.$nextTick(() => {
      this.init()
    })
  }
};
</script>
<style scoped>

</style>