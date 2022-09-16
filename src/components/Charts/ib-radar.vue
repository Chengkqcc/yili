<template>
    <div id="radar"  style="width:100%;height:100%">

    </div>
</template>

<script>
import * as echarts from 'echarts';
export default ({
    name: "ib-radar",
    methods: {
        init() {
            var chartDom = document.getElementById('radar');
            var myChart = echarts.init(chartDom);
            var option;
            let that = this
            option = {
                color: ['#67F9D8', '#fff', '#fff', '#fff'],
                textStyle: {
                        fontSize: 12,
                    },
                legend: {},
                radar: [
                    {
                        shape: 'circle',
                        axisName: {
                            formatter: '【{value}】',
                            color: 'red'
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                                shadowColor: 'rgba(0, 0, 0, 0.2)',
                                shadowBlur: 10
                            }
                        }
                    },
                    {
                        indicator: [
                            { text: '产品合格率', max: 10 ,color: '#fff'},
                            { text: '交付及时率', max: 10 ,color: '#fff'},
                            { text: '品相达成率', max: 10 ,color: '#fff'}
                        ],
                        center: ['50%', '70%'],
                        radius: 60,
                        startAngle: 90,
                        splitNumber: 4,
                        nameGap:5,
                        axisName: {
                            color: '#fff',
                            backgroundColor: '#666',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    }
                ],
                series: [
                    {
                        type: 'radar',
                        radarIndex: 1,
                        data: [
                            {
                                value: that.indicatorRules,
                                symbol: 'circle',
                                symbolSize: 5,
                                lineStyle: {
                                    type: 'solid'
                                },
                                label: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value;
                                    }
                                }
                            }
                        ]
                    }
                ]
            };

            option && myChart.setOption(option);
        }
    },
    props: {
        indicatorRules: {// { name: '能力', max: 100 } 可参考供应017.vue
            type: Array,
            default: function () {
                return [6.1, 3.2, 6.4]
            }
        }
    },
//     watch: {
//     lineData() {
//       this.$nextTick(() => {
//         this.init()
//       })
//     }
//   },
    mounted(){
        this.$nextTick(()=>{
            this.init()
        })
    }
})
</script>
<style scoped>
</style>