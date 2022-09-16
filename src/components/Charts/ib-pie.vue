<template>
    <div ref="production_pie" style="width:100%;height:100%">

    </div>
</template>

<script>
import * as echarts from 'echarts'
export default ({
    name: "ib-pie",
    props:{
        title: {
            type: String,
            default: ''
        },
        data:{
            type:Array,
            dafault:function(){
                return [
                {value:"空",name:'默认1'},
                {value:"空",name:'默认2'}]
            }
        },
        //饼图扇形颜色
        colorList:{
            type:Array,
            default:function(){
                return ['#1bc78b','#f93f00','#ffe400','#22a4f8']
            }
        },
        //饼图单个扇形样式
        itemStyle:{
            type:Object,
            default:function(){
                return {
                    borderRadius:5,
                    borderColor:"#051840",
                    borderWidth:3
                }
            }
        },
        //饼图中心是否显示文字
        center:{
            type:Boolean,
            default:true
        },
        //是否显示图例
        legend:{
            type:Boolean,
            default:true
        }
    },
    methods: {
        drawPie() {
            var myChart = echarts.init(this.$refs.production_pie);
            let that = this
            var option;
            option = {
                tooltip: {
                    // trigger: "item",
                    formatter:"{b}:({d}%)"
                },
                textStyle: {
                    rich: {
                        a: {
                            color: "white",
                            width: 20,
                            align: "right"
                        },
                        x: {
                            width: 30,
                            align: "left",
                            color: "white",
                        },
                    },
                },
                legend: {
                    show:that.legend,
                    orient: "vertical",
                    itemGap: 5,
                    icon:"rect",
                    textStyle:{
                        color:"#fff"
                    },
                    right: 0, //可设定图例在左、右、居中
                    backgroundColor:"transparent",
                    y: "center", //可设定图例在上、下、居中
                    padding: [0, 0, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]

                },
                series:that.pieSeries
            };
            option && myChart.setOption(option);
        }
    },
    computed:{

        pieSeries(){
            let that = this
            let arr = []
            this.data.forEach((item,index)=>{
                let obj = {
                        type: "pie",
                        radius:item.radius?item.radius:["70%", "85%"],
                        center: ['40%', '55%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            normal:{
                                color:function(params){
                                    var colorList = that.colorList;
                                    return colorList[params.dataIndex]
                                },
                                borderRadius: that.itemStyle.borderRadius,
                                borderColor: that.itemStyle.borderColor,
                                borderWidth: that.itemStyle.borderWidth,
                            }
                        },
                        label: {
                            show:true,
                            position:"center",
                            color:"#fff",
                            fontWeight:"bold",
                            formatter: function () {
                                let str = "{a|" + 100 + "}" + "%\n\n"+  "{b|"+that.title+"}";
                                return that.center? str : '';
                            },
                            rich: {
                                a: {
                                    color: "#fff", //a、b不设置颜色的话，字体颜色就会是饼图颜色的混合色
                                    fontSize: "15",
                                },
                                b: {
                                    fontSize: "12",
                                    color: "#fff",
                                    fontWeight: "bold"
                                },
                            },
                            
                        },
                        labelLine: {
                            show: false,
                        },
                        data:item.data
                    }
                arr.push(obj)
            })
            return arr
        }
    },
    watch: {
    data() {
      this.$nextTick(() => {
        this.drawPie()
      })
    }
  },
    created(){
    },
    mounted(){
        this.$nextTick(()=>{
            this.drawPie()
        })
    },
})
</script>
<style scoped>
</style>