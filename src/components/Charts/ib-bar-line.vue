<template>
    <div ref="capacity" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts'
export default ({
    name: "ib-bar-line",
    props: {
        barData: {
            //如果数据超过三条 默认从三条以上为折线柱状混合图
            type: Object,
            default: function () {
                return {
                    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    detail: [
                        {
                            title: "产能",
                            type: 'bar',
                            num: [120, 149, 70, 132, 186, 176.7]
                        },
                        {
                            title: "产量",
                            type: 'bar',
                            num: [126, 159, 90, 164, 128, 135,],
                        },
                        {
                            title: "产能利用率",
                            type: 'line',
                            num: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2],
                        }
                    ]
                }
            }
        },
        height: {
            type: String,
            default: "100%"
        },
        max: {
            type: Number,
            default: 250
        },
        min: {
            type: Number,
            default: 0
        },
        interval: {
            type: Number,
            default: 50
        },
        barWidth: {
            type: Number,
            default: 20
        },
        colorArr: {
            type: Array,
            default: () => ["#0895e0", "#f25849", '#ffee0a']
        }
    },
    methods: {
        init() {
            var myChart = echarts.init(this.$refs.capacity);
            var option;
            let that = this
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none',
                    },
                    formatter: function (params) {
                        let str = '<div>' + params[0].axisValue + '</div>'
                        //完整写法
                        // let str = params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+':'+params[0].value+'<br/>'+params[1].marker+params[1].seriesName+':'+params[1].value+'<br/>'+params[2].marker+(params[2].seriesName+":"+params[2].value/10)+'%'
                        for (var i = 0; i < params.length; i++) {
                            if (i >= 2) {
                                params[i].value = params[i].value / 10 + '%'
                            }
                            str += params[i].marker + '<span>' + params[i].seriesName + ':' + params[i].value + '</span><br/>'
                        }
                        return str

                    }
                },
                grid: {
                    height: '60%',
                    top:'25%',
                    
                },
                legend: {
                    data: that.legendData,
                    textStyle: {
                        color: "#fff"
                    },
                    top: '4%',
                },
                xAxis: [
                    {
                        type: 'category',
                        data: that.barData.data,
                        axisPointer: {
                            type: 'shadow',
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        min: that.min,
                        max: that.max,
                        name: '万吨',
                        interval: that.interval,
                        axisLabel: {
                            formatter: '{value} '
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    {
                        type: 'value',
                        min: 0,
                        max: 25,
                        interval: 0,
                    }
                ],
                series: that.xSeries
            };

            option && myChart.setOption(option);

        }
    },
    computed: {
        //处理x轴
        xSeries() {
            let arr = []
            let that = this
            that.barData.detail.forEach((item, index) => {
                let obj = {
                    name: item.title,
                    type: item.type,
                    stack: item.stack ? item.stack : '',
                    barWidth: that.barWidth,
                    tooltip: {
                        valueFormatter: function (value) {
                            return 123;
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: this.colorArr[index]
                        }
                    },
                    data: item.num

                }
                arr.push(obj)
            })
            return arr
        },
        legendData() {
            let arr = this.barData.detail.map((item, index) => {
                return item.title
            })
            return arr
        }

    },
    watch: {
        barData() {
            this.$nextTick(() => {
                this.init()
            })
        }
    },
    created() {
        console.log(this.barData)
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },

})
</script>
<style scoped>

</style>