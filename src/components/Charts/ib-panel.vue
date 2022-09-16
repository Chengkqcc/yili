<template>
    <div id="panel">

    </div>
</template>

<script>
import * as echarts from 'echarts';

export default ({
    name: "ib-panel",
    props: {
        panelData: {
            type: Array,
            default: function () {
                return [
                    {
                        value: 74,
                        itemStyle: {
                            color: "#407fff",
                            borderWidth: 3
                        }
                    },
                    {
                        value: 96,
                        itemStyle: {
                            color: "#16f5ff",
                            borderWidth: 3
                        }
                    }
                ];
            }
        }
    },
    methods: {
        init() {
            var chartDom = document.getElementById('panel');
            var myChart = echarts.init(chartDom);
            var option;

            const gaugeData = [
                {
                    value: 74,
                    itemStyle: {
                        color: "#407fff",
                        borderWidth: 3
                    }
                },
                {
                    value: 96,
                    itemStyle: {
                        color: "#16f5ff",
                        borderWidth: 3
                    }
                }
            ];
            option = {
                series: [
                    {
                        radius: '100%',
                        type: 'gauge',
                        pointer: {
                            width: 4,
                            length: '40%'
                        },
                        anchor: {
                            show: true,
                            showAbove: true,
                            size: 10,
                            itemStyle: {
                                color: '#fff'
                            }
                        },
                        center: ['50%', '70%'], // 仪表盘位置(圆心坐标)
                        startAngle: 180, // 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
                        endAngle: 0, // 仪表盘结束角度,默认 -45
                        splitNumber: 5,
                        progress: {
                            show: true,
                            overlap: true,
                            roundCap: true
                        },
                        axisLine: {
                            roundCap: true,
                            show: true,
                            lineStyle: {
                                color: [
                                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {
                                            offset: 0.1,
                                            color: "#FFC600"
                                        },
                                        {
                                            offset: 0.6,
                                            color: "#30D27C"
                                        },
                                        {
                                            offset: 1,
                                            color: "#0B95FF"
                                        }
                                    ])
                                    ]
                                ],
                                width: 12
                            }
                        },
                        axisLabel: {
                            color: "#fff",
                            distance: 4
                        },
                        detail: {
                            show: false
                        },
                        splitLine: {
                            length: 15,
                            show: false
                        },
                        axisTick: {
                            distance: 1,
                            show: false,

                        },
                        data: gaugeData,

                    }
                ]
            };

            option && myChart.setOption(option);

        }
    },
    watch: {
    panelData() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    }
})
</script>
<style scoped>

</style>