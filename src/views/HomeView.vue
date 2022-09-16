<template >
  <div class="background">
    <div class="main">
      <header>
        <div class="head_lt">
          <span>星期{{ day }}</span>
          <span>晴天</span>
          <span>13℃~25℃</span>
        </div>
        <h1>伊利企业管理驾驶舱</h1>
        <div class="head_rt">
          <span>{{ newTime }}</span>
        </div>
      </header>
      <main class="main_body">
        <section class="section_item">
          <div class="production chart_item">
            <h5>生产数据展示</h5>
            <div class="tit">
              <p>生产</p>
            </div>
            <div class="main_charts">
              <ibBarline :num="30"></ibBarline>
              <div class="charts_m">
                <ibPie
                  style="flex: 1"
                  :title="title"
                  :data="production_item.productionData"
                ></ibPie>
                <ibRadar
                  :indicatorRules="production_item.indicatorRules"
                  style="flex: 1"
                ></ibRadar>
              </div>
            </div>
            <div class="tit">
              <p>产能</p>
            </div>
            <div class="main_charts">
              <div class="charts_m capacity">
                <ibBar
                  :barData="production_item.barData"
                  :max="200"
                  :min="0"
                  :interval="50"
                  :barWidth="16"
                  style="flex: 1"
                ></ibBar>
              </div>
            </div>
            <div class="chart_item-footer"></div>
          </div>
          <div class="express chart_item">
            <h5>物流状态展示</h5>
            <div class="tit">
              <p>物流</p>
            </div>
            <div class="main_charts" style="padding: 0px 25px">
              <div class="charts_m panel">
                <ibPanel
                  style="flex: 1"
                  :panData="production_item.panData"
                ></ibPanel>
                <div class="panel_rt" style="flex: 1">
                  <div style="color: #52ffff">完成值：74</div>
                  <div style="color: #407fff">计划值：96</div>
                </div>
              </div>
            </div>
            <div class="main_charts" style="padding: 0px 25px">
              <div class="charts_m">
                <ibRadar2
                  style="width: 256px; height: 175px"
                  :radar2Data="production_item.radar2Data"
                ></ibRadar2>
                <div style="flex: 1" class="radar_list">
                  <p v-for="(item, index) in name_arr" :key="index">
                    {{ item.name }}：{{ production_item.radar2Data[index] }}
                  </p>
                  <div></div>
                </div>
                <div class="chart_item-footer"></div>
              </div>
            </div>
          </div>
        </section>
        <section class="section_main">
          <div class="main_list">
            <div v-for="(item, index) in mainList" :key="index">
              <p class="detail">
                {{ item.tit }}<span>环比去年+{{ item.last }}%</span>
              </p>
              <p class="kg">{{ item.num }}<span>吨</span></p>
            </div>
          </div>
          <div class="main_maps">
            <ibMap></ibMap>
          </div>
          <div class="chart_item days">
            <div class="tit">
              <p>供应</p>
            </div>
            <div class="main_charts">
              <div class="charts_m gongying">
                <ibBar
                  :barData="production_item.barData2"
                  style="flex: 1"
                  :interval="200"
                  :max="600"
                  :min="0"
                ></ibBar>
                <div style="flex-basis: 240px">
                  <ibFunnel
                    :funData="production_item.funData"
                    style="height: 200px"
                  ></ibFunnel>
                </div>
                <div style="flex: 1">
                  <el-table
                    :data="production_item.maintableData"
                    style="width: 100%; font-size: 13px"
                    :header-cell-style="{
                      background: 'transparent',
                      height: '40px',
                      color: '#fff',
                    }"
                    :row-class-name="tableRowClassName"
                  >
                    <el-table-column
                      prop="name"
                      label="供应商"
                      :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                    <el-table-column prop="ping" label="供应商评价" width="90">
                    </el-table-column>
                    <el-table-column prop="lv" label="交付及时率" width="90">
                    </el-table-column>
                    <el-table-column prop="fen" label="交付质量分" width="100">
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            <div class="chart_item-footer"></div>
          </div>
        </section>
        <section class="section_item">
          <div class="sale chart_item">
            <h5>销售数据展示</h5>
            <div class="tit">
              <p>利润</p>
            </div>
            <div class="main_charts line">
              <div class="charts_m">
                <ibLine :lineData="production_item.lineData"></ibLine>
              </div>
            </div>
            <div class="tit">
              <p>销量展示</p>
            </div>

            <div class="main_charts sales">
              <p v-html="ibbardata" style="margin: 10px 20px 0"></p>
              <div class="charts_m capacity">
                <ibBar
                  :barData="barData3"
                  style="flex: 1"
                  :max="800"
                  :min="0"
                  :interval="200"
                  :barWidth="14"
                  :colorArr="iBarcolor"
                ></ibBar>
              </div>
              <div class="sale_table">
                <el-table
                  class="speTab"
                  :data="production_item.sec_table"
                  style="width: 100%; font-size: 13px"
                  :header-cell-style="{
                    background: 'transparent',
                    height: '35px',
                    color: '#fff',
                  }"
                  cell-class-name="cell-class-name"
                  :row-class-name="tableRowClassName"
                >
                  <el-table-column type="index"> </el-table-column>
                  <el-table-column label="销售量" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      <span>{{ scope.row.name }}{{ scope.row.nums }}万吨</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="销售额" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      <span>{{ scope.row.name }}{{ scope.row.sales }}万元</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="zeng" label="销量增长">
                    <template slot-scope="scope">
                      <span>{{ scope.row.zeng }}%</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="销量额增长">
                    <template slot-scope="scope">
                      <span>{{ scope.row.zhang }}%</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <div class="tit">
              <p>市场</p>
            </div>
            <div class="main_charts bazaar">
              <div class="charts_m">
                <ibPieSpecial
                  style="flex: 1"
                  :bazaarDatatest="bazaarDatatest"
                  :itemStyle="pieStyle"
                  :colorList="['#0dfbe4', '#22a4f8', '#ffe400', '#f96f00']"
                  :center="false"
                  :legend="false"
                ></ibPieSpecial>
                <div class="baz_table">
                  <el-table
                    class="baz_tab"
                    :data="production_item.baz_tabData"
                    style="width: 100%; font-size: 12px"
                    :row-class-name="tableRowClassName"
                    :header-cell-style="{
                      background: 'transparent',
                      height: '35px',
                      color: '#fff',
                    }"
                    cell-class-name="cell-class-name"
                  >
                    <el-table-column prop="nums" label="新品">
                    </el-table-column>
                    <el-table-column prop="sales" label="铺市率">
                    </el-table-column>
                    <el-table-column prop="zhang" label="增长率">
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            <div class="chart_item-footer"></div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
// import { getData, getData2, getData3, getData4, getData5 } from "@/api/api";
import ibLine from "@/components/Charts/ib-line.vue";
import ibFunnel from "@/components/Charts/ib-funnel.vue";
import ibMap from "@/components/Charts/ib-map.vue";
import ibPieSpecial from "@/components/Charts/ib-pie-special.vue"
import ibRadar2 from "@/components/Charts/ib-radar_2.vue";
import ibPanel from "@/components/Charts/ib-panel.vue";
import ibRadar from "@/components/Charts/ib-radar.vue";
import ibBarline from "@/components/Charts/ib-progress.vue";
import ibPie from "@/components/Charts/ib-pie.vue";
import ibBar from "@/components/Charts/ib-bar-line.vue";
const days = ["天", "一", "二", "三", "四", "五", "六"]; // 星期数组
var icnow = new Date(); // 初始化时间
var interval; // 定义全局定时器，用于清除定时器
export default {
  name: "HomeView",
  methods: {
    // createdData() {
    //   getData()
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    //   getData2()
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    //   getData3()
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    //   getData4()
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    //   getData5()
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    // },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "danRow";
      }
    },
  },
  components: {
    ibPieSpecial,
    ibLine,
    ibFunnel,
    ibBarline,
    ibPie,
    ibBar,
    ibRadar,
    ibPanel,
    ibRadar2,
    ibMap,
  },
  data() {
    return {
      bazaarDatatest:[
        {
          name:"伊利",
          value:45,
          itemStyle:{
            color:"#1bc78b",
          },
          itemArr:[
            {
              name:"金典",
              value:12
            },
            {
              name:"优酸乳",
              value:10
            },
            {
              name:"酸酸乳",
              value:8
            },
            {
              name:"味可滋",
              value:8
            },
            {
              name:"早餐奶",
              value:7
            },
          ]
        },
        {
          name:"蒙牛",
          value:23,
          itemStyle:{
            color:"#f93f00"
          },
          itemArr:[
            {
              name:"优酸乳",
              value:8
            },
            {
              name:"优酸乳",
              value:6
            },
            {
              name:"优酸乳",
              value:4
            },
            {
              name:"优酸乳",
              value:3
            },
            {
              name:"优酸乳",
              value:2
            },
          ]
        },
        {
          name:"光明",
          value:20,
           itemStyle:{
            color:"#ffe400"
          },
          itemArr:[
            {
              name:"优酸乳",
              value:7
            },
            {
              name:"优酸乳",
              value:5
            },
            {
              name:"优酸乳",
              value:3
            },
            {
              name:"优酸乳",
              value:3
            },
            {
              name:"优酸乳",
              value:2
            },
          ]
        },
        {
          name:"三元",
          value:12,
           itemStyle:{
            color:"#22a4f8"
          },
          itemArr:[
            {
              name:"优酸乳",
              value:4
            },
            {
              name:"优酸乳",
              value:3
            },
            {
              name:"优酸乳",
              value:2
            },
            {
              name:"优酸乳",
              value:2
            },
            {
              name:"优酸乳",
              value:1
            },
          ]
        },
      ],
      iBarcolor: ["rgba(63,221,230,1)", "#F79819"],
      pieStyle: {
        borderRadius: 0,
        borderColor: "rgba(3,9,26,0.6)",
        borderWidth: 3,
      },
      name_arr: [
        {
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
        },
      ],
      year: icnow.getFullYear(),
      month: icnow.getMonth() + 1,
      date: icnow.getDate(),
      day: days[icnow.getDay() - 1],
      time: icnow.toTimeString().substring(0, 8),
      title: "总成本",
    };
  },
  created() {
    interval = setInterval(() => {
      let icnow = new Date();
      this.year = icnow.getFullYear();
      this.month = icnow.getMonth() + 1;
      this.date = icnow.getDate();
      this.day = days[icnow.getDay()];
      this.time = icnow.toTimeString().substring(0, 8);
    }, 1000);
    // this.createdData();
  },
  computed: {
    barData3() {
      return this.$store.state.barData3;
    },
    production_item() {
      return this.$store.state.production_item;
    },
    mainList() {
      return this.$store.state.listData;
    },
    ibbardata() {
      let that = this;
      let arr = 0;
      let arr2 = 0;
      that.production_item.barData.detail[0].num.forEach((item) => {
        arr += item;
      });
      that.production_item.barData.detail[1].num.forEach((item) => {
        arr2 += item;
      });
      let str = `<span style="color:#22a4f8;font-size: 13px;">计划值：${arr} </span><span style="color:#0dfbe4;margin:0 16px;font-size: 13px;">完成值：${arr2}</span> <span style="color:#f95900;font-size: 13px;">完成率：${
        (arr2 / arr).toFixed(2) * 100
      }%</span>`;
      console.log(str);
      return str;
    },
    // 当前时间
    newTime: function () {
      return (
        this.year +
        "年" +
        this.month +
        "月" +
        this.date +
        "日 星期" +
        this.day +
        " " +
        this.time
      );
    },
  },
  watch: {
    production_item(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    },
  },
  beforeDestroy() {
    clearInterval(interval);
  },
};
</script>

<style lang="scss">
.el-table .danRow {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.baz_tab .cell {
  padding: 0;
}

.cell-class-name {
  background-color: transparent;
  height: 40px;
}

.el-table tr {
  background: url("@/assets/img/beijing.png") transparent no-repeat cover !important;
}
</style>

<style scoped lang="scss">
/deep/ .el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: rgba(148, 144, 144, 0.3);
}

/deep/ .el-table::before {
  height: 0;
}

/deep/ .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf,
/deep/ .el-table th.el-table__cell.is-leaf {
  border: none;
}

/*最外层透明*/
/deep/ .el-table,
/deep/ .el-table__expanded-cell {
  background-color: transparent;
  color: #fff;
}

/deep/ .speTab td,
/deep/ .speTab th,
/deep/ .speTab tr {
  padding: 0;
}

/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  height: 36px;
  background-color: transparent;
  color: #fff;
}

/deep/ .baz_tab th,
/deep/ .baz_tab tr,
/deep/ .baz_tab td {
  height: 24px;
  padding: 0;
}

/deep/ .el-table tr:hover {
  background-color: transparent;
}

/deep/ .el-table__body tr:hover > td {
  background-color: #1d5480 !important;
}

.background {
  background-image: url("@/assets/img/background.png");
  background-size: cover;
}

.main {
  color: #fff;
  background-image: url("@/assets/img/earth.png");
  background-size: cover;
  width: 1920px;
  height: 1080px;
  box-sizing: border-box;
  padding: 30px;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #1af5ff;
      font-size: 35px;
    }
  }

  .main_body {
    display: flex;

    .section_item,
    section {
      width: 25vw;
      height: 100%;

      .chart_item {
        position: relative;
        background-color: rgba($color: rgb(204, 204, 204), $alpha: 0.1);
        overflow: hidden;
        margin-bottom: 20px;

        h5 {
          text-align: center;
          font-size: 15px;
          margin: 16px 0;
        }

        .tit {
          width: 50%;
          // background-color: #163469;
          background-image: linear-gradient(
            90deg,
            rgba(61, 143, 255, 0.6),
            rgba(61, 143, 255, 0)
          );
          padding: 7px 25px;
          box-sizing: border-box;
          height: 28px;

          p {
            border-left: 3px solid #00f0f1;
            padding-left: 6px;
            font-size: 14px;
            line-height: 14px;
          }
        }

        .main_charts.sales {
          padding-top: 0;
          padding-bottom: 10px;
        }

        .main_charts {
          width: 100%;
          box-sizing: border-box;
          padding: 20px 25px;

          .charts_m {
            display: flex;
            height: 130px;
            width: 100%;

            .radar_list {
              margin-left: 40px;

              p {
                font-size: 12px;
                margin-bottom: 15px;
              }
            }
          }

          .charts_m.capacity {
            height: 184px;
            padding: 0;
          }

          .charts_m.panel {
            height: 170px;

            .panel_rt {
              box-sizing: border-box;
              padding: 40px 24px 24px;

              div {
                margin-bottom: 14px;
                width: 100%;
                height: 30px;
                box-sizing: border-box;
                line-height: 32px;
                padding-left: 16px;
                font-size: 12px;
                background-color: rgba(64, 127, 255, 0.2);
              }
            }
          }

          .sale_table {
            height: 220px;
          }

          .baz_table {
            flex-basis: 169px;
          }
        }

        .main_charts.line {
          height: 190px;
          padding: 0 20px;

          .charts_m {
            height: 100%;
          }
        }
      }

      .chart_item::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }

      .chart_item::after {
        position: absolute;
        top: 0;
        right: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }

      .chart_item .chart_item-footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }

      .chart_item .chart_item-footer::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }

      .chart_item .chart_item-footer::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }

      .chart_item.express {
        height: 418px;
      }

      .main_charts.bazaar {
        height: 190px;
        padding-bottom: 0;
        .charts_m {
          height: 150px;
        }
      }
    }

    .section_main {
      width: 940px;
      margin: 0 16px;
      box-sizing: border-box;
      padding-top: 30px;

      .main_maps {
        height: 602px;
      }

      .main_list {
        display: flex;
        justify-content: space-between;

        div {
          p.detail {
            margin-bottom: 12px;
            color: #fff;
            font-size: 16px;

            span {
              font-size: 13px;
              color: #16f5ff;
            }
          }

          p.kg {
            font-size: 30px;
            color: #fff;
            font-weight: bold;
            text-align: center;

            span {
              font-size: 11px;
            }
          }
        }
      }

      .chart_item.days {
        height: 260px;
        padding: 20px 0;
        box-sizing: border-box;

        .main_charts {
          height: 240px;
          padding: 10px 20px;
          box-sizing: border-box;

          .charts_m.gongying {
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
