/**
 * Created by Administrator on 2016/2/19.
 */
$(document).ready(function () {
 setInterval(function(){
     $(".map_tip h3 img").fadeOut(500);
     $(".map_tip h3 img").fadeIn(500);
 },500);
});
(function () {
    require.config({
        paths: {
            echarts: 'doc/example/www/js'
        },
        packages: [
            {
                name: 'BMap',
                location: 'js/src',
                main: 'main'
            }
        ]
    });
    require(
        [
            'echarts',
            'BMap',
            'echarts/chart/map'
        ],
        function (echarts, BMapExtension) {
            var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
                enableMapClick: false
            });
            var map = BMapExt.getMap();
            var container = BMapExt.getEchartsContainer();

            var startPoint = {
                x: 104.114129,
                y: 37.550339
            };
            var point = new BMap.Point(startPoint.x, startPoint.y);
            map.centerAndZoom(point,5);
            map.enableScrollWheelZoom(true);

            var markerArr = [
                { point: "120.150018,33.377923", address: "江苏省盐城市",url:'http://www.rivermap.cn/images/sanweigis.jpg'},
                { point: "116.863806,38.297615", address: "河北沧州 ",url:'http://www.rivermap.cn/images/sanweigis.jpg'},
                { point: "116.335525,39.952766", address: "北京中国气象局",url:'http://www.rivermap.cn/images/sanweigis.jpg'},
                { point: "117.787107,38.277324", address: "河北省沧州市渤海新区",url:'http://www.rivermap.cn/images/sanweigis.jpg'},
                { point: "91.122462,29.652348", address: "西藏拉萨",url:'http://www.rivermap.cn/images/sanweigis.jpg'},
                { point: "113.255747,22.851358", address: "佛山市顺德区大良蓬莱路72号",url:'http://www.rivermap.cn/images/sanweigis.jpg'},
                { point: "108.40366111,22.804013", address: "广西南宁市气象局"},
                { point: "115.96395,40.524258", address: "北京市延庆石京龙滑雪场"},
                { point: "104.892166,11.544872", address: "柬埔寨"},
                { point: "121.558508,31.221777", address: "上海浦东"}
            ];
            var point = new Array(); //存放标注点经纬信息的数组
            var marker = new Array(); //存放标注点对象的数组
            var info = new Array(); //存放提示信息窗口对象的数组
            for (var i = 0; i < markerArr.length; i++) {
                var p0 = markerArr[i].point.split(",")[0]; //
                var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
                point[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点
                var myIcon = new BMap.Icon("img/maker.png", new BMap.Size(25, 50));
                marker[i] = new window.BMap.Marker(point[i],{icon: myIcon}); //按照地图点坐标生成标记
                map.addOverlay(marker[i]);
                marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                var opts = {
                    width : 220,     // 信息窗口宽度
                    height: 80    // 信息窗口高度
                };
                info[i] = new window.BMap.InfoWindow("<img style='height:100%;' src='" + markerArr[i].url + "'>",opts); // 创建信息窗口对象
            }
            marker[0].addEventListener("mouseover", function () {
                this.openInfoWindow(info[0]);
            });
            marker[1].addEventListener("mouseover", function () {
                this.openInfoWindow(info[1]);
            });
            marker[2].addEventListener("mouseover", function () {
                this.openInfoWindow(info[2]);
            });
            marker[3].addEventListener("mouseover", function () {
                this.openInfoWindow(info[3]);
            });
            info[0].addEventListener("click", function () {
                alert("nihao");
            });
            info[1].addEventListener("click", function () {
                alert("nihao");
            });
            info[2].addEventListener("click", function () {
                alert("nihao");
            });
            info[3].addEventListener("click", function () {
                alert("nihao");
            });
            info[4].addEventListener("click", function () {
                alert("nihao");
            });
            option = {
    series : [
        {
            name:'北京',
            type:'map',
            mapType: 'none',
            data:[],
            geoCoord: {
                '东莞': [113.8953,22.901],
                '东营': [118.7073,37.5513],
                '中山': [113.4229,22.478],
                '临汾': [111.4783,36.1615],
                '临沂': [118.3118,35.2936],
                '丹东': [124.541,40.4242],
                '丽水': [119.5642,28.1854],
                '乌鲁木齐': [87.9236,43.5883],
                '佛山': [112.8955,23.1097],
                '保定': [115.0488,39.0948],
                '兰州': [103.5901,36.3043],
                '包头': [110.3467,41.4899],
                '北京': [116.4551,40.2539],
                '北海': [109.314,21.6211],
                '南京': [118.8062,31.9208],
                '南宁': [108.479,23.1152],
                '南昌': [116.0046,28.6633],
                '南通': [121.1023,32.1625],
                '厦门': [118.1689,24.6478],
                '台州': [121.1353,28.6688],
                '合肥': [117.29,32.0581],
                '呼和浩特': [111.4124,40.4901],
                '咸阳': [108.4131,34.8706],
                '哈尔滨': [127.9688,45.368],
                '唐山': [118.4766,39.6826],
                '嘉兴': [120.9155,30.6354],
                '大同': [113.7854,39.8035],
                '大连': [122.2229,39.4409],
                '天津': [117.4219,39.4189],
                '太原': [112.3352,37.9413],
                '威海': [121.9482,37.1393],
                '宁波': [121.5967,29.6466],
                '宝鸡': [107.1826,34.3433],
                '宿迁': [118.5535,33.7775],
                '常州': [119.4543,31.5582],
                '广州': [113.5107,23.2196],
                '廊坊': [116.521,39.0509],
                '延安': [109.1052,36.4252],
                '张家口': [115.1477,40.8527],
                '徐州': [117.5208,34.3268],
                '德州': [116.6858,37.2107],
                '惠州': [114.6204,23.1647],
                '成都': [103.9526,30.7617],
                '扬州': [119.4653,32.8162],
                '承德': [117.5757,41.4075],
                '无锡': [120.3442,31.5527],
                '日照': [119.2786,35.5023],
                '昆明': [102.9199,25.4663],
                '杭州': [119.5313,29.8773],
                '枣庄': [117.323,34.8926],
                '柳州': [109.3799,24.9774],
                '株洲': [113.5327,27.0319],
                '武汉': [114.3896,30.6628],
                '汕头': [117.1692,23.3405],
                '江门': [112.6318,22.1484],
                '沈阳': [123.1238,42.1216],
                '沧州': [116.8286,38.2104],
                '河源': [114.917,23.9722],
                '泉州': [118.3228,25.1147],
                '泰安': [117.0264,36.0516],
                '泰州': [120.0586,32.5525],
                '济南': [117.1582,36.8701],
                '济宁': [116.8286,35.3375],
                '海口': [110.3893,19.8516],
                '淄博': [118.0371,36.6064],
                '淮安': [118.927,33.4039],
                '深圳': [114.5435,22.5439],
                '清远': [112.9175,24.3292],
                '温州': [120.498,27.8119],
                '渭南': [109.7864,35.0299],
                '湖州': [119.8608,30.7782],
                '湘潭': [112.5439,27.7075],
                '滨州': [117.8174,37.4963],
                '潍坊': [119.0918,36.524],
                '烟台': [120.7397,37.5128],
                '玉溪': [101.9312,23.8898],
                '珠海': [113.7305,22.1155],
                '盐城': [120.2234,33.5577],
                '盘锦': [121.9482,41.0449],
                '石家庄': [114.4995,38.1006],
                '福州': [119.4543,25.9222],
                '秦皇岛': [119.2126,40.0232],
                '绍兴': [120.564,29.7565],
                '聊城': [115.9167,36.4032],
                '肇庆': [112.1265,23.5822],
                '舟山': [122.2559,30.2234],
                '苏州': [120.6519,31.3989],
                '莱芜': [117.6526,36.2714],
                '菏泽': [115.6201,35.2057],
                '营口': [122.4316,40.4297],
                '葫芦岛': [120.1575,40.578],
                '衡水': [115.8838,37.7161],
                '衢州': [118.6853,28.8666],
                '西宁': [101.4038,36.8207],
                '西安': [109.1162,34.2004],
                '贵阳': [106.6992,26.7682],
                '连云港': [119.1248,34.552],
                '邢台': [114.8071,37.2821],
                '邯郸': [114.4775,36.535],
                '郑州': [113.4668,34.6234],
                '鄂尔多斯': [108.9734,39.2487],
                '重庆': [107.7539,30.1904],
                '金华': [120.0037,29.1028],
                '铜川': [109.0393,35.1947],
                '银川': [106.3586,38.1775],
                '镇江': [119.4763,31.9702],
                '长春': [125.8154,44.2584],
                '长沙': [113.0823,28.2568],
                '长治': [112.8625,36.4746],
                '阳泉': [113.4778,38.0951],
                '青岛': [120.4651,36.3373],
                '韶关': [113.7964,24.7028],
                '江苏省盐城市': [120.150018,33.377923],
                '河北沧州': [116.863806,38.297615],
                '河北省沧州市渤海新区': [117.787107,38.277324],
                '西藏拉萨': [91.122462,29.652348],
                '佛山市顺德区大良蓬莱路72号': [113.255747,22.851358],
                '北京中国气象局': [116.335525,39.952766],
                '广西南宁市气象局': [108.40366111,22.804013],
                '北京市延庆石京龙滑雪场': [115.96395,40.524258],
                '柬埔寨': [104.892166,11.544872],
                '上海浦东': [121.558508,31.221777]
            },
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#2bade9',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        lineStyle: {

                            type: 'dotted',
                            shadowBlur: 10,
                            color:'#2bade9'

                        }
                    }
                },
                data : [
                    [{name:'北京中国气象局'}, {name:'江苏省盐城市'}],
                    [{name:'北京中国气象局'}, {name:'河北沧州'}],
                    [{name:'北京中国气象局'}, {name:'河北省沧州市渤海新区'}],
                    [{name:'北京中国气象局'}, {name:'西藏拉萨'}],
                    [{name:'北京中国气象局'}, {name:'佛山市顺德区大良蓬莱路72号'}],
                    [{name:'北京中国气象局'}, {name:'广西南宁市气象局'}],
                    [{name:'北京中国气象局'}, {name:'北京市延庆石京龙滑雪场'}],
                    [{name:'北京中国气象局'}, {name:'柬埔寨'}],
                    [{name:'北京中国气象局'}, {name:'上海浦东'}]


                ]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 5 + v/100
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false},
                        color:'red'
                    }
                },
                data : [
                ]
            }

        },
        {
            name:'全国',
            type:'map',
            mapType: 'none',
            data:[],
            markLine : {
                smooth:true,
                symbol: ['none', 'circle'],
                symbolSize : 1,
                itemStyle : {
                    normal: {
                        color:'red',
                        borderWidth:1,
                        borderColor:'rgba(30,144,255,0.5)'
                    }
                },
                data : [
                ]
            }
        }
    ]
};
if (myChart && myChart.dispose) {
    myChart.dispose();
}
            var myChart = BMapExt.initECharts(container);
            BMapExt.setOption(option);
        }
    );
})();