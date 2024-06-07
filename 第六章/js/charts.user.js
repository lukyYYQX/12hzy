// 近5日用户人数新增和流失趋势
var lossGrowth = echarts.init(document.getElementById('lossGrowth'));
$.get("data/近5日新增和流失用户数据.json").done(function (data) {
    //data = JSON.parse(data);
	lossGrowth.setOption({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            type:'scroll'
        },
        grid: {
            left: '10',
            right: '30',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.日期
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'新增人数',
                type:'line',
                data:data.新增人数,
                symbol:'circle',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(194, 53, 49,.8)'
                        }, {
                            offset: 1,
                            color: 'transparent'
                        }])
                    }
                }
            },
            {
                name:'流失人数',
                type:'line',
                symbol:'circle',
                data:data.流失人数,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(47, 69, 84,.8)'
                        }, {
                            offset: 1,
                            color: 'transparent'
                        }])
                    }
                }
            }
        ]
	});
});



//用户类型人数
var cSorNum = echarts.init(document.getElementById('cSorNum'));
$.get("data/不同类型用户的人数.json").done(function (data) {
    //data = JSON.parse(data);
	cSorNum.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show:false
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    series : [
        {
            name: '用户类型人数',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            label:{
                formatter:"{b}\n{a|{d}%}",
                rich: {
                    a: {
                        padding:6,
                        align:'left',
                        color:'#fff'
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



// 用户分群
var userGroup = echarts.init(document.getElementById('userGroup'));
$.get("data/用户分群数据.json").done(function (data) {
    //data = JSON.parse(data);
	userGroup.setOption({
    tooltip: {},
    legend: {
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        center: ['50%', '58%'],
        splitArea: {
            areaStyle: {
                color:'transparent'
            }
        },
        axisLine: { lineStyle: {color: '#061e42' }},
        splitLine: { lineStyle: {color: '#061e42' }},
        indicator: [
           { name: '消费金额', max: 80,color:'black'},
           { name: '购买数量', max: 80,color:'black'},
           { name: '购买频率', max: 80,color:'black'},
           { name: '交易次数', max: 80,color:'black'},
           { name: '客单价', max: 80,color:'black' }
        ]
    },
    series: [{
        name: '用户分群',
        type: 'radar',
        
        areaStyle:{
            show:true,
            opacity:0.3
        },
        data : data.data
    }]
		})
});



// 用户消费时段
var expTime = echarts.init(document.getElementById('expTime'));
$.get("data/用户消费时段数据.json").done(function (data) {
    //data = JSON.parse(data);
	expTime.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10',
        top:'30',
        right:'10',
        bottom: '10',
        containLabel: true
    },
    barCategoryGap:'50%',
    xAxis: {
        type: 'value',
        min: 0,
        boundaryGap: [0, 0.01],
        axisLine:{lineStyle:{width:0}}
    },
    yAxis: {
        type: 'category',
        splitLine:{lineStyle:{width:0}},
        data: data.消费时段
    },
    series: [
        {
            name: '售出总数量',
            type: 'bar',
            label:{
                position:'right',
                verticalAlign:'middle'
            },
            data: data.用户人数
        }
    ]
		})
});



// 用户消费地点
var expLoc = echarts.init(document.getElementById('expLoc'));
$.get("data/用户消费地点数据.json").done(function (data) {
    //data = JSON.parse(data),
	expLoc.setOption({
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '10',
        right: '10',
        bottom: '0',
        top:'30',
        containLabel: true
    },
    barCategoryGap:'60%',
    xAxis: [
        {
            type: 'category',
            data: data.消费地点,
            axisPointer: {
                type: 'shadow'
            },
            splitLine:{lineStyle:{width:0}}
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
        }
    ],
    series: [
        {
            type:'bar',
            data:data.用户人数,
        }
    ]
		})
});



// 商品价格区间
var pInterval = echarts.init(document.getElementById('pInterval'));
pInterval.setOption({
    grid: {
        left: '3%',
        right: '10',
        bottom: '10',
        containLabel: true
    },
    tooltip : {
        showDelay : 0,
        formatter : function (params) {
                return params.seriesName + '<br/>' + '单价：' + params.value[0] + '<br/>' + '销量：' + params.value[1];
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },

    legend: {
        type:'scroll',
    },
    xAxis :{ scale:true},
    yAxis :{ scale:true},
});

$.get("data/商品销量数量和价格数据.json").done(function (data) {
    //data = JSON.parse(data);
    var series=[];
    for(var i = 0;i < data.data.length;i++){
        series.push({
            name: data.data[i].name,
            type: 'scatter',
            data: [data.data[i].value],
            symbolSize:data.data[i].value[1]*2
        });
    }
    pInterval.setOption({
        series:series
    });
});



// 用户画像
var chart = echarts.init(document.getElementById('userHot'));
$.get("data/用户购买的商品名称和商品数量数据.json").done(function (data) {
    //data = JSON.parse(data);
    var option = {
        tooltip : {
            trigger: 'item',
            formatter:function(item){
                return item.name + "：" + item.value.toFixed(2);
            }
        },
        series: [ {
            type: 'wordCloud',
            sizeRange: [10,30],
            rotationRange: [0, 0],
            rotationStep: 180,
            gridSize: 0,
            autoSize: {enable:true, minSize:5},
            shape: 'roundRect',
            left: 'center',
            top: 'center',
            width: '100%',
            height: '100%',
            right: null,
            bottom: null,
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 26,
                    color:'#333',
                    shadowColor: '#ccc',
                    fontSize:20
                }
            },
            data: data.data.sort(function (a, b) {
                return b.value  - a.value;
            })
        } ]
    };
    chart.setOption(option);
});




window.onresize = function() {
    cSorNum.resize();
    lossGrowth.resize();
    expTime.resize();
    expLoc.resize();
    pInterval.resize();
    userGroup.resize();
    chart.resize();
};