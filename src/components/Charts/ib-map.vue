<template>
  <div class="echartsMapAllDemo" style="width: 100%; height: 100%">
    <!-- style的宽高一定要写，不写也不会展示echarts图 -->
    <div id="myEcharts" ref="myEcharts" style="width: 100%; height: 100%"></div>
    <div class="select">
      <el-select v-model="time" @change="changeTime">
        <el-option label="2022年1月" :value="0"></el-option>
        <el-option label="2022年2月" :value="1"></el-option>
        <el-option label="2022年3月" :value="2"></el-option>
      </el-select>
    </div>
    <div class="btns">
      <div @click="returnBtn"><i class="el-icon-arrow-left"></i></div>
      <div @click="magnify"><i class="el-icon-plus"></i></div>
      <div @click="shrink"><i class="el-icon-minus"></i></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import chinaJson from "@/utils/china.json";
// require("echarts/lib/chart/map");
// require("echarts/map/js/china");
export default {
  name: "ib-map",
  data() {
    return {
      zoom: 1.2,
      time: 0,
      normalData: [
        [
          { name: "内蒙古", stock: 51, production: 46, sale: 41 },
          { name: "云南", stock: 45, production: 20, sale: 35 },
          { name: "西藏", stock: 39, production: 28, sale: 5 },
          { name: "青海", stock: 37, production: 23, sale: 8 },
        ],
        [
          { name: "内蒙古", stock: 52, production: 50, sale: 45 },
          { name: "云南", stock: 45, production: 26, sale: 36 },
          { name: "西藏", stock: 43, production: 36, sale: 1 },
          { name: "青海", stock: 42, production: 24, sale: 2 },
        ],
        [
          { name: "内蒙古", stock: 54, production: 50, sale: 43 },
          { name: "云南", stock: 46, production: 31, sale: 3 },
        ],
      ],
      mapdata: [
        { name: "北京", value: 88 },
        { name: "天津", value: 1 },
        { name: "河北", value: 1 },
        { name: "山西", value: 88 },
        { name: "内蒙古", value: 88 },
        { name: "辽宁", value: 1 },
        { name: "吉林", value: 1 },
        { name: "黑龙江", value: 1 },
        { name: "上海", value: 1 },
        { name: "江苏", value: 1 },
        { name: "浙江", value: 1 },
        { name: "安徽", value: 1 },
        { name: "福建", value: 1 },
        { name: "江西", value: 1 },
        { name: "山东", value: 1 },
        { name: "河南", value: 77 },
        { name: "湖北", value: 1 },
        { name: "湖南", value: 77 },
        { name: "重庆", value: 1 },
        { name: "四川", value: 77 },
        { name: "贵州", value: 88 },
        { name: "云南", value: 88 },
        { name: "西藏", value: 88 },
        { name: "陕西", value: 1 },
        { name: "甘肃", value: 1 },
        { name: "青海", value: 88 },
        { name: "宁夏", value: 1 },
        { name: "新疆", value: 1 },
        { name: "广东", value: 1 },
        { name: "广西", value: 1 },
        { name: "海南", value: 1 },
      ],
    };
  },
  created() {
    this.initData(1);
  },
  mounted() {
    this.chinaEcharts();
  },
  methods: {
    shrink() {
      this.zoom -= 0.2;
      this.chinaEcharts();
    },
    magnify() {
      this.zoom += 0.2;
      this.chinaEcharts();
    },
    //改变时间
    changeTime() {
      console.log(this.time);
      this.initData(this.time);
      this.$store.commit("changebarData3", this.time);
      this.$store.commit("changeList", this.time);
      this.chinaEcharts();
    },
    //地图下钻回到全国地图
    returnBtn() {
      this.$store.commit("changeProduction");
      this.chinaEcharts();
    },
    //初始化数据
    initData(i) {
      let that = this;
      if (!i) i = 1;
      that.mapdata.forEach((item) => {
        that.normalData[i].forEach((item2) => {
          if (item2.name == item.name) {
            for (let i in item2) {
              item[i] = item2[i];
            }
          }
        });
      });
    },
    chinaEcharts() {
      let that = this;
      echarts.registerMap("china", chinaJson);
      let myChart = echarts.init(this.$refs.myEcharts);

      //定义全国省份的数组
      var provinces = {
        // 23个省
        台湾: "taiwan",
        河北: "hebei",
        山西: "shanxi",
        辽宁: "liaoning",
        吉林: "jilin",
        黑龙江: "heilongjiang",
        江苏: "jiangsu",
        浙江: "zhejiang",
        安徽: "anhui",
        福建: "fujian",
        江西: "jiangxi",
        山东: "shandong",
        河南: "henan",
        湖北: "hubei",
        湖南: "hunan",
        广东: "guangdong",
        海南: "hainan",
        四川: "sichuan",
        贵州: "guizhou",
        云南: "yunnan",
        陕西: "shanxi1",
        甘肃: "gansu",
        青海: "qinghai",
        // 5个自治区
        新疆: "xinjiang",
        广西: "guangxi",
        内蒙古: "neimenggu",
        宁夏: "ningxia",
        西藏: "xizang",
        // 4个直辖市
        北京: "beijing",
        天津: "tianjin",
        上海: "shanghai",
        重庆: "chongqing",
        // 2个特别行政区
        香港: "xianggang",
        澳门: "aomen",
      };

      // 市
      var cityMap = {
        北京市: "110100",
        天津市: "120100",
        上海市: "310100",
        重庆市: "500100",
        崇明县: "310200",
        湖北省直辖县市: "429000",
        铜仁市: "522200",
        毕节市: "522400",
        石家庄市: "130100",
        唐山市: "130200",
        秦皇岛市: "130300",
        邯郸市: "130400",
        邢台市: "130500",
        保定市: "130600",
        张家口市: "130700",
        承德市: "130800",
        沧州市: "130900",
        廊坊市: "131000",
        衡水市: "131100",
        太原市: "140100",
        大同市: "140200",
        阳泉市: "140300",
        长治市: "140400",
        晋城市: "140500",
        朔州市: "140600",
        晋中市: "140700",
        运城市: "140800",
        忻州市: "140900",
        临汾市: "141000",
        吕梁市: "141100",
        呼和浩特市: "150100",
        包头市: "150200",
        乌海市: "150300",
        赤峰市: "150400",
        通辽市: "150500",
        鄂尔多斯市: "150600",
        呼伦贝尔市: "150700",
        巴彦淖尔市: "150800",
        乌兰察布市: "150900",
        兴安盟: "152200",
        锡林郭勒盟: "152500",
        阿拉善盟: "152900",
        沈阳市: "210100",
        大连市: "210200",
        鞍山市: "210300",
        抚顺市: "210400",
        本溪市: "210500",
        丹东市: "210600",
        锦州市: "210700",
        营口市: "210800",
        阜新市: "210900",
        辽阳市: "211000",
        盘锦市: "211100",
        铁岭市: "211200",
        朝阳市: "211300",
        葫芦岛市: "211400",
        长春市: "220100",
        吉林市: "220200",
        四平市: "220300",
        辽源市: "220400",
        通化市: "220500",
        白山市: "220600",
        松原市: "220700",
        白城市: "220800",
        延边朝鲜族自治州: "222400",
        哈尔滨市: "230100",
        齐齐哈尔市: "230200",
        鸡西市: "230300",
        鹤岗市: "230400",
        双鸭山市: "230500",
        大庆市: "230600",
        伊春市: "230700",
        佳木斯市: "230800",
        七台河市: "230900",
        牡丹江市: "231000",
        黑河市: "231100",
        绥化市: "231200",
        大兴安岭地区: "232700",
        南京市: "320100",
        无锡市: "320200",
        徐州市: "320300",
        常州市: "320400",
        苏州市: "320500",
        南通市: "320600",
        连云港市: "320700",
        淮安市: "320800",
        盐城市: "320900",
        扬州市: "321000",
        镇江市: "321100",
        泰州市: "321200",
        宿迁市: "321300",
        杭州市: "330100",
        宁波市: "330200",
        温州市: "330300",
        嘉兴市: "330400",
        湖州市: "330500",
        绍兴市: "330600",
        金华市: "330700",
        衢州市: "330800",
        舟山市: "330900",
        台州市: "331000",
        丽水市: "331100",
        合肥市: "340100",
        芜湖市: "340200",
        蚌埠市: "340300",
        淮南市: "340400",
        马鞍山市: "340500",
        淮北市: "340600",
        铜陵市: "340700",
        安庆市: "340800",
        黄山市: "341000",
        滁州市: "341100",
        阜阳市: "341200",
        宿州市: "341300",
        六安市: "341500",
        亳州市: "341600",
        池州市: "341700",
        宣城市: "341800",
        福州市: "350100",
        厦门市: "350200",
        莆田市: "350300",
        三明市: "350400",
        泉州市: "350500",
        漳州市: "350600",
        南平市: "350700",
        龙岩市: "350800",
        宁德市: "350900",
        南昌市: "360100",
        景德镇市: "360200",
        萍乡市: "360300",
        九江市: "360400",
        新余市: "360500",
        鹰潭市: "360600",
        赣州市: "360700",
        吉安市: "360800",
        宜春市: "360900",
        抚州市: "361000",
        上饶市: "361100",
        济南市: "370100",
        青岛市: "370200",
        淄博市: "370300",
        枣庄市: "370400",
        东营市: "370500",
        烟台市: "370600",
        潍坊市: "370700",
        济宁市: "370800",
        泰安市: "370900",
        威海市: "371000",
        日照市: "371100",
        莱芜市: "371200",
        临沂市: "371300",
        德州市: "371400",
        聊城市: "371500",
        滨州市: "371600",
        菏泽市: "371700",
        郑州市: "410100",
        开封市: "410200",
        洛阳市: "410300",
        平顶山市: "410400",
        安阳市: "410500",
        鹤壁市: "410600",
        新乡市: "410700",
        焦作市: "410800",
        濮阳市: "410900",
        许昌市: "411000",
        漯河市: "411100",
        三门峡市: "411200",
        南阳市: "411300",
        商丘市: "411400",
        信阳市: "411500",
        周口市: "411600",
        驻马店市: "411700",
        省直辖县级行政区划: "469000",
        武汉市: "420100",
        黄石市: "420200",
        十堰市: "420300",
        宜昌市: "420500",
        襄阳市: "420600",
        鄂州市: "420700",
        荆门市: "420800",
        孝感市: "420900",
        荆州市: "421000",
        黄冈市: "421100",
        咸宁市: "421200",
        随州市: "421300",
        恩施土家族苗族自治州: "422800",
        长沙市: "430100",
        株洲市: "430200",
        湘潭市: "430300",
        衡阳市: "430400",
        邵阳市: "430500",
        岳阳市: "430600",
        常德市: "430700",
        张家界市: "430800",
        益阳市: "430900",
        郴州市: "431000",
        永州市: "431100",
        怀化市: "431200",
        娄底市: "431300",
        湘西土家族苗族自治州: "433100",
        广州市: "440100",
        韶关市: "440200",
        深圳市: "440300",
        珠海市: "440400",
        汕头市: "440500",
        佛山市: "440600",
        江门市: "440700",
        湛江市: "440800",
        茂名市: "440900",
        肇庆市: "441200",
        惠州市: "441300",
        梅州市: "441400",
        汕尾市: "441500",
        河源市: "441600",
        阳江市: "441700",
        清远市: "441800",
        东莞市: "441900",
        中山市: "442000",
        潮州市: "445100",
        揭阳市: "445200",
        云浮市: "445300",
        南宁市: "450100",
        柳州市: "450200",
        桂林市: "450300",
        梧州市: "450400",
        北海市: "450500",
        防城港市: "450600",
        钦州市: "450700",
        贵港市: "450800",
        玉林市: "450900",
        百色市: "451000",
        贺州市: "451100",
        河池市: "451200",
        来宾市: "451300",
        崇左市: "451400",
        海口市: "460100",
        三亚市: "460200",
        三沙市: "460300",
        成都市: "510100",
        自贡市: "510300",
        攀枝花市: "510400",
        泸州市: "510500",
        德阳市: "510600",
        绵阳市: "510700",
        广元市: "510800",
        遂宁市: "510900",
        内江市: "511000",
        乐山市: "511100",
        南充市: "511300",
        眉山市: "511400",
        宜宾市: "511500",
        广安市: "511600",
        达州市: "511700",
        雅安市: "511800",
        巴中市: "511900",
        资阳市: "512000",
        阿坝藏族羌族自治州: "513200",
        甘孜藏族自治州: "513300",
        凉山彝族自治州: "513400",
        贵阳市: "520100",
        六盘水市: "520200",
        遵义市: "520300",
        安顺市: "520400",
        黔西南布依族苗族自治州: "522300",
        黔东南苗族侗族自治州: "522600",
        黔南布依族苗族自治州: "522700",
        昆明市: "530100",
        曲靖市: "530300",
        玉溪市: "530400",
        保山市: "530500",
        昭通市: "530600",
        丽江市: "530700",
        普洱市: "530800",
        临沧市: "530900",
        楚雄彝族自治州: "532300",
        红河哈尼族彝族自治州: "532500",
        文山壮族苗族自治州: "532600",
        西双版纳傣族自治州: "532800",
        大理白族自治州: "532900",
        德宏傣族景颇族自治州: "533100",
        怒江傈僳族自治州: "533300",
        迪庆藏族自治州: "533400",
        拉萨市: "540100",
        昌都地区: "542100",
        山南地区: "542200",
        日喀则地区: "542300",
        那曲地区: "542400",
        阿里地区: "542500",
        林芝地区: "542600",
        西安市: "610100",
        铜川市: "610200",
        宝鸡市: "610300",
        咸阳市: "610400",
        渭南市: "610500",
        延安市: "610600",
        汉中市: "610700",
        榆林市: "610800",
        安康市: "610900",
        商洛市: "611000",
        兰州市: "620100",
        嘉峪关市: "620200",
        金昌市: "620300",
        白银市: "620400",
        天水市: "620500",
        武威市: "620600",
        张掖市: "620700",
        平凉市: "620800",
        酒泉市: "620900",
        庆阳市: "621000",
        定西市: "621100",
        陇南市: "621200",
        临夏回族自治州: "622900",
        甘南藏族自治州: "623000",
        西宁市: "630100",
        海东地区: "632100",
        海北藏族自治州: "632200",
        黄南藏族自治州: "632300",
        海南藏族自治州: "632500",
        果洛藏族自治州: "632600",
        玉树藏族自治州: "632700",
        海西蒙古族藏族自治州: "632800",
        银川市: "640100",
        石嘴山市: "640200",
        吴忠市: "640300",
        固原市: "640400",
        中卫市: "640500",
        乌鲁木齐市: "650100",
        克拉玛依市: "650200",
        吐鲁番地区: "652100",
        哈密地区: "652200",
        昌吉回族自治州: "652300",
        博尔塔拉蒙古自治州: "652700",
        巴音郭楞蒙古自治州: "652800",
        阿克苏地区: "652900",
        克孜勒苏柯尔克孜自治州: "653000",
        喀什地区: "653100",
        和田地区: "653200",
        伊犁哈萨克自治州: "654000",
        塔城地区: "654200",
        阿勒泰地区: "654300",
        自治区直辖县级行政区划: "659000",
        台湾省: "710000",
        香港特别行政区: "810100",
        澳门特别行政区: "820000",
      };
      //省份
      var geoCoordMap = {
        上海: [121.472644, 31.231706],
        云南: [102.712251, 25.040609],
        内蒙古: [111.670801, 40.818311],
        北京: [116.405285, 39.904989],
        台湾: [121.509062, 25.044332],
        吉林: [125.3245, 43.886841],
        四川: [104.065735, 30.659462],
        天津: [117.190182, 39.125596],
        宁夏: [106.278179, 38.46637],
        安徽: [117.283042, 31.86119],
        山东: [117.000923, 36.675807],
        山西: [112.549248, 37.857014],
        广东: [113.280637, 23.125178],
        广西: [108.320004, 22.82402],
        新疆: [87.617733, 43.792818],
        江苏: [118.767413, 32.041544],
        江西: [115.892151, 28.676493],
        河北: [114.502461, 38.045474],
        河南: [113.665412, 34.757975],
        浙江: [120.153576, 30.287459],
        海南: [110.33119, 20.031971],
        湖北: [114.298572, 30.584355],
        湖南: [112.982279, 28.19409],
        澳门: [113.54909, 22.198951],
        甘肃: [103.823557, 36.058039],
        福建: [119.306239, 26.075302],
        西藏: [91.132212, 29.660361],
        贵州: [106.713478, 26.578343],
        辽宁: [123.429096, 41.796767],
        重庆: [106.504962, 29.533155],
        陕西: [108.948024, 34.263161],
        青海: [101.778916, 36.623178],
        香港: [114.173355, 22.320048],
        黑龙江: [126.642464, 45.756967],
      };
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(
                data[i].value,
                data[i].production,
                data[i].sale
              ),
            });
          }
        }
        // console.log(res)
        return res;
      };
      // 点击触发
      myChart.on("click", (param) => {
        console.log(param);
        if (param.name in provinces) {
          // 处理省模块
          let names = param.name;
          for (let key in provinces) {
            if (names == key) {
              showProvince(provinces[key], key);
              break;
            }
          }
        } else if (param.name in cityMap) {
          // 处理市模块
          let names = param.name;
          for (let key in cityMap) {
            if (names == key) {
              showCitys(cityMap[key], key);
              break;
            }
          }
        }
      });

      //展示对应的省
      function showProvince(eName, param) {
        that.$store.commit("changeProduction", eName);
        console.log(eName, param);
        console.log("+++", that.$store.state.production_item);
        $.getJSON(`/map/province/${eName}.json`, (data) => {
          echarts.registerMap(param, data);
          initEcharts(param);
        });
      }

      //展示对应市
      function showCitys(cName, param) {
        console.log(cName, param);
        // 显示县级地图
        $.getJSON(`/map/city/${cName}.json`, (data) => {
          echarts.registerMap(param, data);
          initEcharts(param);
        });
      }
      initEcharts("china");
      // function initEcharts(map) {
      //   let option = {

      //     geo: {
      //       map: map,
      //       roam: false,
      //       scaleLimit: {
      //         min: 1.2,
      //         max: 3
      //       },
      //       zoom: 1.2,
      //       //图形上的文本标签，可用于说明图形的一些数据信息
      //       label: {
      //         normal: {
      //           show: true,
      //           fontSize: "10",
      //           color: "rgba(0,0,0,0.7)"
      //         }
      //       },
      //       //地图区域的多边形 图形样式，有 normal 和 emphasis 两个状态
      //       itemStyle: {
      //         //normal 是图形在默认状态下的样式；
      //         normal: {
      //           borderColor: "rgba(0, 0, 0, 0.2)"
      //         },
      //         //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
      //         emphasis: {
      //           areaColor: "#F3B329",
      //           shadowOffsetX: 0,
      //           shadowOffsetY: 0,
      //           shadowBlur: 20,
      //           borderWidth: 0,
      //           shadowColor: "rgba(0, 0, 0, 0.5)"
      //         }
      //       }
      //     },
      //     series: [
      //       {
      //         name: "信息量",
      //         type: "map",
      //         //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
      //         mapType: map,
      //         geoIndex: 0
      //         // data: dataList
      //       }
      //     ]
      //   };

      //   myChart.setOption(option);
      // }
      function initEcharts(map) {
        let option = {
          backgroundColor: "transparent",
          title: {
            show: false,
            text: "库存量",
            left: "center",
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            formatter: (params) => {
              let num = params.dataIndex;
              let str = `<div style="padding:16px 10px 16px 18px">
              <p style="font-size:20px;margin-bottom:18px">${params.name}${
                params.seriesName
              }:${
                that.mapdata[num].stock ? that.mapdata[num].stock + "吨" : "-"
              }<p>`;
              str += `<div style="display:flex;justify-content:space-around">
                      <div style="font-size:14px;color:#00fee5;margin-right:17px">
                        <p style="margin-bottom:11px">生产量</p>
                        <strong style="font-size:17px">${
                          that.mapdata[num].production
                            ? that.mapdata[num].production
                            : "-"
                        }吨</strong>
                      </div>
                      <div style="font-size:14px;color:#00fee5;margin-right:17px">
                        <p style="margin-bottom:11px">销售量</p>
                        <strong style="font-size:17px">${
                          that.mapdata[num].sale ? that.mapdata[num].sale : "-"
                        }吨</strong>
                      </div>
                      </div>
                        </div>`;
              return str;
            },
          },
          //这个属性配置一定要有，要不然无法实现光圈效果
          // geo: {
          //   show: true,
          //   map: map,
          //   zoom:that.zoom,
          //   label: {
          //     normal: {
          //       show: true,
          //       textStyle:{
          //         color:"#fff"
          //       }
          //     },
          //     emphasis: {
          //       show: that.flag,
          //       color:"#fff"
          //     },
          //   },
          //   roam: false,
          //   itemStyle: {
          //     areaColor: "rgba(26,179,232,0.3)",
          //     borderColor: "#2d8bc9",
          //     borderWidth: 2,
          //     emphasis: {
          //       areaColor: "rgba(26,179,232,0.1)",
          //     },
          //   },
          // },
          //series就是地图上的数据（去掉就没有数据了）
          // series: [
          //   //所有的市
          //   {
          //     name: "库存量（吨）",
          //     type: "map",
          //     coordinateSystem: "geo",
          //     data: convertData(data),
          //     symbolSize: function (val) {
          //       return val[2] / 10;
          //     },
          //     //这几个样式一定要加，加上才有那种光圈的效果
          //     showEffectOn: "render",
          //     rippleEffect: {
          //       brushType: "stroke",
          //     },
          //     hoverAnimation: true,
          //     label: {
          //       formatter: "{b}",
          //       position: "right",
          //       show: true,
          //     },
          //     //圆点的样式
          //     itemStyle: {
          //       color: that.font_color,
          //     },
          //     emphasis: {
          //       label: {
          //         show: false,
          //       },
          //     },
          //   },
          // ],
          series: {
            name: "库存量",
            type: "map",
            //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
            mapType: map,
            show: true,
            map: map,
            zoom: that.zoom,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
              },
              emphasis: {
                show: that.flag,
                color: "#fff",
              },
            },
            roam: false,
            itemStyle: {
              areaColor: "rgba(26,179,232,0.3)",
              borderColor: "#2d8bc9",
              borderWidth: 2,
              emphasis: {
                areaColor: "rgba(26,179,232,0.1)",
              },
            },
            // data: dataList
          },
        };
        myChart.setOption(option);
      }

      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
<style scoped lang="scss">
/deep/ .el-select-dropdown.el-popper {
  background-color: rgba(60, 116, 197, 0.5) !important;
}
/deep/ .el-input__inner {
  background-color: rgba(60, 116, 197, 0.5);
  color: #fff;
}
.echartsMapAllDemo {
  position: relative;
  .select {
    width: 142px;
    height: 42px;
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -71px;
  }
  .btns {
    position: absolute;
    right: 29px;
    bottom: 31px;
    width: 30px;
    height: 90px;
    div {
      width: 100%;
      height: 30px;
      border: 1px solid #1c5a90;
      background-color: rgba(10, 20, 72, 0.6);
      color: #fff;
      box-sizing: border-box;
      line-height: 28px;
      font-size: 15px;
      text-align: center;
    }
  }
}
</style>