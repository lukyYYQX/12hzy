// 销售金额 & 订单量 & 毛利润 & 售货机数量 & 购买用户数
$.get("data/无人售货机各特征数据.json").done(function (data) {
    //data = JSON.parse(data);
    saleT('saleM', '销售金额', 0, data.销售金额[0], data.销售金额[1], data.销售金额[2], '','#1779d9','rgba(23,121,217,0.6)');
    saleT('orderQ', '订单量', 0, data.订单量[0], data.订单量[1], data.订单量[2], '','#30b761','rgba(48,183,97,0.5)');
    saleT('grossM', '毛利润', 0, data.毛利润[0], data.毛利润[1], data.毛利润[2], '','#d04a4b','rgba(208,74,75,0.5)');
    saleT('discount', '折扣额', 0, data.折扣额[0], data.折扣额[1], data.折扣额[2], '千','#ca841e','rgba(202,132,30,0.5)');
    saleT('unitP', '客单价', 0, data.客单价[0], data.客单价[1], data.客单价[2], '','#00a7c2','rgba(0,167,194,0.5)');
});
/*
 *id: chart容器id;
 *title: 仪表盘名称
 *min: 最小值
 *max: 最大值
 *val: 当前实际值
 *tag: 目标值
 *unit: 单位符号
 *color1: 主轴颜色
 */

var saleM = echarts.init(document.getElementById("saleM"));
var orderQ = echarts.init(document.getElementById("orderQ"));
var grossM = echarts.init(document.getElementById("grossM"));
var discount = echarts.init(document.getElementById("discount"));
var unitP = echarts.init(document.getElementById("unitP"));

function saleT(id, title, min, max, val, tag, unit, color1,  color2) {

    var myChart = echarts.init(document.getElementById(id));

    option = {
        tooltip: {
            confine:true,
            trigger: 'item',
            formatter:function(data){
                hbl = (data.value/tag).toFixed(2);
                return title + "：" + data.value + '<br/>' + name + "：" + hbl
            }
        },
        series: [{
            startAngle: 180, 
            endAngle: 0,
            splitNumber: 1,
            name: title,
            type: 'gauge',
            radius: '100%',
            axisLine: {
                lineStyle: {
                    color: [
                        [0.25, '#1779da'],
                        [0.5, '#1779da'],
                        [1, '#ddd']
                    ],
                    width: 20
                }
            },
            axisTick: { show: false },
            axisLabel: { 
                distance:0,
                width:30,
                height:24,
                lineHeight:24,
                padding:[25,-30,0],
                color:'rgba(255,255,255,0.5)',
                formatter: function (value) {
                    if(unit=='千'){
                        return (value/1000).toFixed(1) + ' ' + unit;
                    }else if(unit=='万'){
                        return (value/10000).toFixed(1) + ' ' + unit;
                    }else{
                        return value;
                    }
                }
            },
            splitLine: { show: false },
            pointer: { show:false, width: 3 },
            title: {
                offsetCenter: [0, '92%'],
                color:'rgba(255,255,255,0.7)'
            },
            detail: {
                offsetCenter: [0, '-10%'],
                formatter: function(value){
                    value1 = value / tag;
                    return '{a|' + value.toFixed(1) + '}';
                },
                rich: {
                    a: {
                        fontSize:'16',
                        fontWeight:'bold'
                    }
                }
            },
            data: [{}]
        }]
    };
    option.series[0].min = min;
    option.series[0].max = max;
    option.series[0].data[0].value = val;
    option.series[0].axisLine.lineStyle.color[0][0] = (tag - min) / (max - min);
    option.series[0].axisLine.lineStyle.color[0][1] = color2;
    option.series[0].axisLine.lineStyle.color[1][0] = (val - min) / (max - min);
    option.series[0].axisLine.lineStyle.color[1][1] = color1;

    myChart.setOption(option);

}



//销售金额变化趋势
//初始化图表
var saleRate = echarts.init(document.getElementById('saleRate'));
//设置图表option值
$.get("data/售货机销售金额及其环比增长率.json").done(function (data) {
    //data = JSON.parse(data);
	saleRate.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        //用网格定位图表四边留空及顶部避开标题位置
        x: 10,
        y: 50,
        x2: 10,
        y2: 10,
        //使坐标轴数据能完整显示
        containLabel: true
    },
    //设置legend位置及数据，位于图表右上方
    legend: {
        data:['销售金额','销售金额环比增长率'],
        top: 10
    },
    barCategoryGap:'40%',
    xAxis: [
        {
            type: 'category',
            //日期数据
            data: data.日期,
            axisPointer: {
                type: 'shadow'
            },
            //运用eCharts内置方法格式化日期，使x轴日期数据更简洁，同时不影响原数据在鼠标交互时的完整展现
            axisLabel: {
                formatter: function(value){
                    return echarts.format.formatTime('dd', value);
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '销售金额（元）',
            //设置Y坐标轴最小值
            min: 0,
            //设置Y坐标轴最大值
            max: 15000,
            //设置Y坐标轴值间隔值
            interval: 5000
        },
        //定义Y轴右侧坐标轴
        {
            type: 'value',
            name: '环比增长率（%）',
            min: -0.5,
            max: 1,
            interval: 0.5
        }
    ],
    series: [
        {
            name:'销售金额',
            type:'bar',
            //设置显示坐标点数值
            label:{
                show:'true'
            },
            //销售金额数据
            data:data.销售金额
        },
        {
            name:'销售金额环比增长率',
            type:'line',
            //设置“销售金额环比增长率”数值样式,圆角矩形黑底白字，位于数据点上方
            label:{
                //设置显示坐标点数值
                show:'true',
                color:'#fff',
                backgroundColor:'rgba(0,0,0,0.7)',
                verticalAlign:'middle',
                padding:4,
                borderRadius:4,
                position:'top'
            },
            //设置“销售金额环比增长率”在坐标轴右侧显示
            yAxisIndex: 1,
            //销售金额环比增长率数据
            data:data.销售金额环比增长率
        }
    ]
		})
});



//商品销售金额Top5
var saleMtop5 = echarts.init(document.getElementById('saleMtop5'));
$.get("data/商品销售金额前5名.json").done(function (data) {
    //data = JSON.parse(data);
	saleMtop5.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        x: 10,
        y: 20,
        x2: 10,
        y2: 10,
        containLabel: true
    },
    barCategoryGap:'40%',
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine:{lineStyle:{width:0}},
    },
    yAxis: {
        type: 'category',
        splitLine:{lineStyle:{width:0}},
        data: data.商品名称
    },
    series: [
        {
            name: '售出总数量',
            type: 'bar',
            label:{
                position:'right',
                verticalAlign:'middle',
            },
            data: data.销售金额
        }
    ]
		})
});



//售货机销售情况
var saleOrder = echarts.init(document.getElementById('saleOrder'));
$.get("data/不同地点售货机销售数据.json").done(function (data) {
    //data = JSON.parse(data);
	saleOrder.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        x: 10,
        y: 50,
        x2: 10,
        y2: 10,
        containLabel: true
    },
    toolbox: {
        show:false,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        top:10
    },
    barGap:'10%',
    barCategoryGap:'35%',
    xAxis: [
        {
            type: 'category',
            data: data.地点,
            axisPointer: {
                type: 'shadow'
            },
            splitLine:{lineStyle:{width:0}},
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{lineStyle:{width:0}},
        }
    ],
    series: [
        {
            name:'销售金额',
            type:'bar',
            data:data.销售金额
        },
        {
            name:'订单量',
            type:'bar',
            data:data.订单量
        },
        {
            name:'毛利润',
            type:'bar',
            data:data.毛利润
        }
    ]
		})
});



//支付方式占比
var payWay = echarts.init(document.getElementById('payWay'));
$.get("data/不同支付方式用户人数.json").done(function (data) {
    //data = JSON.parse(data);
	payWay.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        data: data.支付方式,
        orient:'vertical',
        left:0,
        top:"25%"
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    series : [
        {
            name: '支付方式占比',
            type: 'pie',
            radius : '62%',
            center: ['65%', '50%'],
            label:{
                formatter:"{b}\n{a|{d}%}",
                rich: {
                    a: {
                        padding:6,
                        align:'left',
                        color:'#999',
                    }
                }
            },
            data:data.data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
		})
});



window.onresize = function() {
    saleM.resize();
    orderQ.resize();
    grossM.resize();
    discount.resize();
    unitP.resize();
    saleRate.resize();
    saleMtop5.resize();
    saleOrder.resize();
    payWay.resize();
};