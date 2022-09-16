import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    production_item: {
      //默认为内蒙古数据
      id: "neimeng",
      indicatorRules: [6.1, 3.2, 6.4],
      bazaarData: [
        {
          radius: [0, '50%'],
          data: [
            { value: 30, name: "伊利" },
            { value: 20, name: "光明" },
            { value: 25, name: "蒙牛" },
            { value: 5, name: "三元" },
          ]
        },
        {
          radius: ['65%', '85%'],
          data: [
            { value: 30, name: "有机" },
            { value: 20, name: "有加" },
            { value: 25, name: "QQ星" },
            { value: 5, name: "植选" },
          ]
        },
      ],
      productionData: [
        {
          data: [
            { value: 1048, name: "储藏" },
            { value: 735, name: "采购" },
            { value: 580, name: "工时" },
            { value: 484, name: "运输" }
          ]
        }
      ],
      barData: {
        data: ["1月", "2月", "3月", "4月", "5月", "6月"],
        detail: [
          {
            title: "产能",
            type: "bar",
            num: [135, 130, 95, 145, 96, 170],
          },
          {
            title: "产量",
            type: "bar",
            num: [117, 136, 81, 112, 95, 87],
          },
          {
            title: "产能利用率",
            type: "line",
            num: [92, 86.7, 83.3, 90, 83, 88.6],
          },
        ],
      },
      panelData: [
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
      ],
      funData: [
        [
          { value: 120, name: "库龄>30天" },
          { value: 70, name: "15天<库龄<30天" },
          { value: 40, name: "库龄<15天" },
        ],
        [
          { value: 120, name: "1232吨" },
          { value: 70, name: "284万吨" },
          { value: 40, name: "362万吨" },
        ]
      ],
      radar2Data: [6.9, 9.9, 9.5, 6.7, 9.6],
      lineData: {
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
      },
      barData2: {
        data: ["1月", "2月", "3月"],
        detail: [
          {
            title: "订单",
            type: "bar",
            num: [200, 400, 600],
          },
          {
            title: "交付",
            type: "bar",
            num: [180, 370, 580],
          },
        ],
      },
      maintableData: [
        {
          name: "呼伦贝尔牧场",
          ping: "96分",
          lv: "36%",
          fen: "46分"
        }, {
          name: "锡林郭勒牧场",
          ping: "72分",
          lv: "85%",
          fen: "39分"
        }
      ],
      sec_table: [
        {
          name: "金典",
          nums: 8.3,
          sales: 410,
          zeng: 3.3,
          zhang: 3.1
        },
        {
          name: "安慕希",
          nums: 6.2,
          sales: 350,
          zeng: 1.5,
          zhang: 1.2
        }, {
          name: "植选",
          nums: 4.1,
          sales: 200,
          zeng: 2.1,
          zhang: 2.5
        }, {
          name: "舒化",
          nums: 5.9,
          sales: 180,
          zeng: 5.2,
          zhang: 6.2
        }, {
          name: "优酸乳",
          nums: 5.4,
          sales: 156,
          zeng: 8.3,
          zhang: 0.3
        },
      ],
      baz_tabData: [
        {
          nums: "安慕希",
          sales: "23%",
          zeng: "早餐奶",
          zhang: "3.5%"
        },
        {
          nums: "金典",
          sales: "22%",
          zeng: "莫斯利安",
          zhang: "3.5%"
        },
        {
          nums: "优酸乳",
          sales: "18%",
          zeng: "优加%",
          zhang: "2.8%"
        },
        {
          nums: "QQ星",
          sales: "20%",
          zeng: "有机",
          zhang: "1.6%"
        },
        {
          nums: "精选",
          sales: "16%",
          zeng: "有机",
          zhang: "0.72%"
        }
      ],
    },
    production_list: [
      {
        //默认为内蒙古数据
        id: "neimeng",
        indicatorRules: [6.1, 3.2, 6.4],
        bazaarData: [
          {
            radius: [0, '50%'],
            data: [
              { value: 30, name: "伊利" },
              { value: 20, name: "光明" },
              { value: 25, name: "蒙牛" },
              { value: 5, name: "三元" },
            ]
          },
          {
            radius: ['65%', '85%'],
            data: [
              { value: 30, name: "伊利" },
              { value: 20, name: "光明" },
              { value: 25, name: "蒙牛" },
              { value: 5, name: "三元" },
            ]
          },
        ],
        funData: [
          [
            { value: 120, name: "库龄>30天" },
            { value: 70, name: "15天<库龄<30天" },
            { value: 40, name: "库龄<15天" },
          ],
          [
            { value: 120, name: "1232吨" },
            { value: 70, name: "284万吨" },
            { value: 40, name: "362万吨" },
          ]
        ],
        productionData: [
          {
            data: [
              { value: 1048, name: "储藏" },
              { value: 735, name: "采购" },
              { value: 580, name: "工时" },
              { value: 484, name: "运输" }
            ]
          }
        ],
        barData: {
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          detail: [
            {
              title: "产能",
              type: "bar",
              num: [135, 130, 95, 145, 96, 170],
            },
            {
              title: "产量",
              type: "bar",
              num: [117, 136, 81, 112, 95, 87],
            },
            {
              title: "产能利用率",
              type: "line",
              num: [92, 86.7, 83.3, 90, 83, 88.6],
            },
          ],
        },
        panelData: [
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
        ],
        radar2Data: [6.9, 9.9, 9.5, 6.7, 9.6],
        lineData: {
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
        },
        barData2: {
          data: ["1月", "2月", "3月"],
          detail: [
            {
              title: "订单",
              type: "bar",
              num: [200, 400, 600],
            },
            {
              title: "交付",
              type: "bar",
              num: [180, 370, 580],
            },
          ],
        },
        maintableData: [
          {
            name: "呼伦贝尔牧场",
            ping: "96分",
            lv: "36%",
            fen: "46分"
          }, {
            name: "锡林郭勒牧场",
            ping: "72分",
            lv: "85%",
            fen: "39分"
          }
        ],
        barData3: {
          data: ["华东", "华南", "华北", "华中"],
          detail: [
            {
              title: "线上",
              type: "bar",
              num: [200, 300, 250, 300],
              stack: "one"
            },
            {
              title: "线下",
              type: "bar",
              num: [280, 260, 420, 260],
              stack: "one"
            },
          ],
        },
        sec_table: [
          {
            name: "金典",
            nums: 8.3,
            sales: 410,
            zeng: 3.3,
            zhang: 3.1
          },
          {
            name: "安慕希",
            nums: 6.2,
            sales: 350,
            zeng: 1.5,
            zhang: 1.2
          }, {
            name: "植选",
            nums: 4.1,
            sales: 200,
            zeng: 2.1,
            zhang: 2.5
          }, {
            name: "舒化",
            nums: 5.9,
            sales: 180,
            zeng: 5.2,
            zhang: 6.2
          }, {
            name: "优酸乳",
            nums: 5.4,
            sales: 156,
            zeng: 8.3,
            zhang: 0.3
          },
        ],
        baz_tabData: [
          {
            nums: "安慕希",
            sales: "23%",
            zeng: "早餐奶",
            zhang: "0.5%"
          },
          {
            nums: "金典",
            sales: "22%",
            zeng: "莫斯利安",
            zhang: "0.35%"
          },
          {
            nums: "优酸乳",
            sales: "18%",
            zeng: "优加%",
            zhang: "0.28%"
          },
          {
            nums: "QQ星",
            sales: "20%",
            zeng: "有机",
            zhang: "1.6%"
          },
          {
            nums: "精选",
            sales: "16%",
            zeng: "有机",
            zhang: "0.72%"
          }
        ],
      },
      {
        //云南数据
        id: "yunnan",
        indicatorRules: [3.1, 6.2, 4.4],
        funData: [
          [
            { value: 120, name: "库龄>30天" },
            { value: 70, name: "15天<库龄<30天" },
            { value: 40, name: "库龄<15天" },
          ],
          [
            { value: 120, name: "1232吨" },
            { value: 70, name: "284万吨" },
            { value: 40, name: "362万吨" },
          ]
        ],
        bazaarData: [
          {
            radius: [0, '50%'],
            data: [
              { value: 15, name: "伊利" },
              { value: 25, name: "光明" },
              { value: 40, name: "蒙牛" },
              { value: 20, name: "三元" },
            ]
          },
          {
            radius: ['65%', '85%'],
            data: [
              { value: 40, name: "伊利" },
              { value: 25, name: "光明" },
              { value: 15, name: "蒙牛" },
              { value: 10, name: "三元" },
            ]
          },
        ],
        productionData: [
          {
            data: [
              { value: 1208, name: "储藏" },
              { value: 635, name: "采购" },
              { value: 780, name: "工时" },
              { value: 604, name: "运输" }
            ]
          }
        ],
        barData: {
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          detail: [
            {
              title: "产能",
              type: "bar",
              num: [155, 100, 155, 125, 106, 150],
            },
            {
              title: "产量",
              type: "bar",
              num: [137, 146, 101, 132, 125, 107],
            },
            {
              title: "产能利用率",
              type: "line",
              num: [121, 76.7, 99.3, 66, 93, 98.6],
            },
          ],
        },
        panelData: [
          {
            value: 88,
            itemStyle: {
              color: "#407fff",
              borderWidth: 3
            }
          },
          {
            value: 97,
            itemStyle: {
              color: "#16f5ff",
              borderWidth: 3
            }
          }
        ],
        radar2Data: [6.5, 7.9, 8.5, 8.7, 6.6],
        lineData: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          detail: [
            {
              title: "利润额",
              type: 'line',
              num: [1200, 550, 680, 380, 1000, 600]
            },
            {
              title: "利润率",
              type: 'line',
              num: [1680, 1400, 1280, 700, 2000, 1700],
            },
          ]
        },
        barData2: {
          data: ["1月", "2月", "3月"],
          detail: [
            {
              title: "订单",
              type: "bar",
              num: [220, 380, 560],
            },
            {
              title: "交付",
              type: "bar",
              num: [200, 350, 520],
            },
          ],
        },
        maintableData: [
          {
            name: "呼伦贝尔牧场",
            ping: "90分",
            lv: "40%",
            fen: "55分"
          }, {
            name: "锡林郭勒牧场",
            ping: "78分",
            lv: "80%",
            fen: "45分情况"
          }
        ],
        sec_table: [
          {
            name: "安慕希",
            nums: 8.1,
            sales: 390,
            zeng: 2.3,
            zhang: 1.8
          },
          {
            name: "QQ星",
            nums: 7.2,
            sales: 370,
            zeng: 1.6,
            zhang: 1.1
          }, {
            name: "金典",
            nums: 6.9,
            sales: 300,
            zeng: 1.4,
            zhang: 1.6
          }, {
            name: "优酸乳",
            nums: 5.4,
            sales: 170,
            zeng: 4.2,
            zhang: 3.2
          }, {
            name: "谷粒多",
            nums: 4.1,
            sales: 156,
            zeng: 6.3,
            zhang: 0.8
          },
        ],
        baz_tabData: [
          {
            nums: "舒化奶",
            sales: "25%",
            zeng: "早餐奶",
            zhang: "25%"
          },
          {
            nums: "金典",
            sales: "22%",
            zeng: "莫斯利安",
            zhang: "28%"
          },
          {
            nums: "味可滋",
            sales: "20%",
            zeng: "优加%",
            zhang: "20%%"
          },
          {
            nums: "核桃乳",
            sales: "26%",
            zeng: "有机",
            zhang: "19%"
          },
          {
            nums: "精选",
            sales: "16%",
            zeng: "有机",
            zhang: "72%%"
          }
        ],
      },
      {
        //西藏数据
        id: "xizang",
        indicatorRules: [3.2, 7.5, 8.4],
        funData: [
          [
            { value: 120, name: "库龄>30天" },
            { value: 70, name: "15天<库龄<30天" },
            { value: 40, name: "库龄<15天" },
          ],
          [
            { value: 120, name: "1232吨" },
            { value: 70, name: "284万吨" },
            { value: 40, name: "362万吨" },
          ]
        ],
        bazaarData: [
          {
            radius: [0, '50%'],
            data: [
              { value: 55, name: "伊利" },
              { value: 15, name: "光明" },
              { value: 10, name: "蒙牛" },
              { value: 40, name: "三元" },
            ]
          },
          {
            radius: ['65%', '85%'],
            data: [
              { value: 10, name: "伊利" },
              { value: 45, name: "光明" },
              { value: 35, name: "蒙牛" },
              { value: 50, name: "三元" },
            ]
          },
        ],
        productionData: [
          {
            data: [
              { value: 2008, name: "储藏" },
              { value: 835, name: "采购" },
              { value: 980, name: "工时" },
              { value: 904, name: "运输" }
            ]
          }
        ],
        barData: {
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          detail: [
            {
              title: "产能",
              type: "bar",
              num: [145, 120, 145, 178, 91, 110],
            },
            {
              title: "产量",
              type: "bar",
              num: [122, 96, 81, 112, 155, 117],
            },
            {
              title: "产能利用率",
              type: "line",
              num: [101, 86.7, 89.3, 88, 83, 108.6],
            },
          ],
        },
        panelData: [
          {
            value: 78,
            itemStyle: {
              color: "#407fff",
              borderWidth: 3
            }
          },
          {
            value: 84,
            itemStyle: {
              color: "#16f5ff",
              borderWidth: 3
            }
          }
        ],
        radar2Data: [7.8, 6.9, 9.5, 8.7, 8.1],
        lineData: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          detail: [
            {
              title: "利润额",
              type: 'line',
              num: [900, 750, 780, 460, 800, 700]
            },
            {
              title: "利润率",
              type: 'line',
              num: [880, 1360, 1180, 840, 1610, 1520],
            },
          ]
        },
        barData2: {
          data: ["1月", "2月", "3月"],
          detail: [
            {
              title: "订单",
              type: "bar",
              num: [280, 280, 460],
            },
            {
              title: "交付",
              type: "bar",
              num: [240, 300, 460],
            },
          ],
        },
        maintableData: [
          {
            name: "新疆天山牧场",
            ping: "80分",
            lv: "50%",
            fen: "48分"
          }, {
            name: "新疆地山牧场",
            ping: "64分",
            lv: "70%",
            fen: "55分情况"
          },
          {
            name: "新疆天山牧场",
            ping: "60分",
            lv: "68%",
            fen: "40分情况"
          }
        ],
        sec_table: [
          {
            name: "安慕希",
            nums: 7.1,
            sales: 340,
            zeng: 2.7,
            zhang: 2.8
          },
          {
            name: "QQ星",
            nums: 5.2,
            sales: 300,
            zeng: 2.6,
            zhang: 0.9
          }, {
            name: "金典",
            nums: 5.0,
            sales: 270,
            zeng: 1.2,
            zhang: 0.6
          }, {
            name: "优酸乳",
            nums: 5.2,
            sales: 230,
            zeng: 3.2,
            zhang: 2.2
          }, {
            name: "谷粒多",
            nums: 4.7,
            sales: 196,
            zeng: 4.3,
            zhang: 0.8
          },
        ],
        baz_tabData: [
          {
            nums: "舒化奶",
            sales: "35%",
            zeng: "早餐奶",
            zhang: "5%"
          },
          {
            nums: "金典",
            sales: "22%",
            zeng: "莫斯利安",
            zhang: "2%"
          },
          {
            nums: "味可滋",
            sales: "20%",
            zeng: "优加%",
            zhang: "2%"
          },
          {
            nums: "核桃乳",
            sales: "26%",
            zeng: "有机",
            zhang: "1.9%"
          },
          {
            nums: "精选",
            sales: "16%",
            zeng: "有机",
            zhang: "3.2%"
          }
        ],
      },
    ],

    barData3: {
      data: ["华东", "华南", "华北", "华中"],
      detail: [
        {
          title: "线上",
          type: "bar",
          stack: "one",
          num: [200, 300, 250, 300],
        },
        {
          title: "线下",
          type: "bar",
          stack: "one",
          num: [280, 260, 420, 260]
        },
      ],
    },
    barData3List: [
      {
        data: ["华东", "华南", "华北", "华中"],
        detail: [
          {
            title: "线上",
            type: "bar",
            stack: "one",
            num: [200, 300, 250, 300],
          },
          {
            title: "线下",
            type: "bar",
            stack: "one",
            num: [280, 260, 420, 260]
          },
        ],
      },
      {
        data: ["华东", "华南", "华北", "华中"],
        detail: [
          {
            title: "线上",
            type: "bar",
            stack: "one",
            num: [230, 280, 190, 290],
          },
          {
            title: "线下",
            type: "bar",
            stack: "one",
            num: [350, 290, 440, 360]
          },
        ],
      },
      {
        data: ["华东", "华南", "华北", "华中"],
        detail: [
          {
            title: "线上",
            type: "bar",
            stack: "one",
            num: [400, 350, 450, 400],
          },
          {
            title: "线下",
            type: "bar",
            stack: "one",
            num: [270, 240, 320, 290]
          },
        ],
      },
    ],

    listData: [
      {
        tit: "产量展示",
        last: 31.6,
        num: 468357
      },
      {
        tit: "库存展示",
        last: 21.5,
        num: 989258
      },
      {
        tit: "销售额展示",
        last: 18.1,
        num: 639921
      },
      {
        tit: "利润展示",
        last: 13.7,
        num: 436921
      },
    ],
    mainData: [
      [
        {
          tit: "产量展示",
          last: 31.6,
          num: 468357
        },
        {
          tit: "库存展示",
          last: 21.5,
          num: 989258
        },
        {
          tit: "销售额展示",
          last: 18.1,
          num: 639921
        },
        {
          tit: "利润展示",
          last: 13.7,
          num: 436921
        },
      ],
      [
        {
          tit: "产量展示",
          last: 26.6,
          num: 445357
        },
        {
          tit: "库存展示",
          last: 18.5,
          num: 159258
        },
        {
          tit: "销售额展示",
          last: 40.1,
          num: 670921
        },
        {
          tit: "利润展示",
          last: 16.9,
          num: 346921
        },
      ],
      [
        {
          tit: "产量展示",
          last: 34.3,
          num: 408357
        },
        {
          tit: "库存展示",
          last: 23.5,
          num: 909258
        },
        {
          tit: "销售额展示",
          last: 19.4,
          num: 579921
        },
        {
          tit: "利润展示",
          last: 16.4,
          num: 496921
        },
      ]
    ]
  },
  getters: {},
  mutations: {
    //时间更改时更改销售表数据
    changebarData3(state, payload) {
      state.barData3 = state.barData3List[payload]
    },

    //地图下钻时更改其余图表数据
    changeProduction(state, payload) {
      state.production_list.forEach(item => {
        if (!payload) {
          state.production_item = state.production_list[0]
        } else if (payload == item.id) {
          state.production_item = item
        }
      })
    },
    changeList(state, payload) {
      state.listData = state.mainData[payload]
    }
  },
  actions: {

  },
  modules: {},
});
