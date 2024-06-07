// 销售金额
var saleM_Site = echarts.init(document.getElementById('saleM_Site'));
$.get("data/不同区域的各指标数据.json").done(function (data) {
    //data = JSON.parse(data),
	saleM_Site.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{b}：<br/>{c} 元<br/>（{d}%）"
    },
    legend: {
        type:'scroll',
        data:data.where
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'地点',
            type:'pie',
            radius : ["25%", '60%'],
            center : ['50%', '57%'],
            roseType : 'area',
            label:{
                show:true,
                formatter:'{c}'
            },
            data:data.sale
        },
        {
            type:'pie',radius:'25%',center:['50%','57%'],
            label: {normal:{position:'center',color:'#fff'}},
            labelLine:{normal:{show:false}},itemStyle:{color:'transparent'},
            data:[{value:1,name:'地点',tooltip:{formatter:' ',backgroundColor:'none'}}]
        },
    ]
		})
});



// 订单量
var orderQ_Site = echarts.init(document.getElementById('orderQ_Site'));
$.get("data/不同区域的各指标数据.json").done(function (data) {
    //data = JSON.parse(data),
	orderQ_Site.setOption({
    tooltip : {
        trigger: 'item',
        formatter:  "{b}：<br/>{c} 个<br/>（{d}%）"
    },
    legend: {
        type:'scroll',
        data:data.where
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'地点',
            type:'pie',
            radius : ["25%", '60%'],
            center : ['50%', '57%'],
            roseType : 'area',
            label:{
                show:true,
                formatter:'{c}'
            },
            data:data.order
        },
        {
            type:'pie',radius:'25%',center:['50%','57%'],
            label: {normal:{position:'center',color:'#fff'}},
            labelLine:{normal:{show:false}},itemStyle:{color:'transparent'},
            data:[{value:1,name:'地点',tooltip:{formatter:' ',backgroundColor:'none'}}]
        },
    ]
		})
});



// 毛利润
var grossM_Site = echarts.init(document.getElementById('grossM_Site'));
$.get("data/不同区域的各指标数据.json").done(function (data) {
    //data = JSON.parse(data),
	grossM_Site.setOption({
    tooltip : {
        trigger: 'item',
        formatter:  "{b}：<br/>{c} 元<br/>（{d}%）"
    },
    legend: {
        type:'scroll',
        data:data.where
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'地点',
            type:'pie',
            radius : ["25%", '60%'],
            center : ['50%', '57%'],
            roseType : 'area',
            label:{
                show:true,
                formatter:'{c}'
            },
            data:data.gross
        },
        {
            type:'pie',radius:'25%',center:['50%','57%'],
            label: {normal:{position:'center',color:'#fff'}},
            labelLine:{normal:{show:false}},itemStyle:{color:'transparent'},
            data:[{value:1,name:'地点',tooltip:{formatter:' ',backgroundColor:'none'}}]
        },
    ]
		})
});



// 客单价平均值
var unitP_Site = echarts.init(document.getElementById('unitP_Site'));
$.get("data/不同区域的各指标数据.json").done(function (data) {
    //data = JSON.parse(data),
	unitP_Site.setOption({
    tooltip : {
        trigger: 'item',
        formatter:  "{b}：<br/>{c} 元<br/>（{d}%）"
    },
    legend: {
        type:'scroll',
        data:data.where
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'地点',
            type:'pie',
            radius : ["25%", '60%'],
            center : ['50%', '57%'],
            roseType : 'area',
            label:{
                show:true,
                formatter:'{c}'
            },
            data:data.unit
        },
        {
            type:'pie',radius:'25%',center:['50%','57%'],
            label: {normal:{position:'center',color:'#fff'}},
            labelLine:{normal:{show:false}},itemStyle:{color:'transparent'},
            data:[{value:1,name:'地点',tooltip:{formatter:' ',backgroundColor:'none'}}]
        },
    ]
		})
});



// 商品销售数量Top10
var saleMtop10 = echarts.init(document.getElementById('saleMtop10'));
$.get("data/商品销售数量前10.json").done(function (data) {
    //data = JSON.parse(data),
	saleMtop10.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
        top:'20',
        right:'2%',
        bottom: '10',
        containLabel: true
    },
    barCategoryGap:'40%',
    xAxis: {
        type: 'value',
        min: 0,
        interval: 5,
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
            data: data.销售数量
        }
    ]
		})
});



// 商品价格区间
var priceRange = echarts.init(document.getElementById('priceRange'));
$.get("data/商品销量数量和价格数据.json").done(function (data) {
    //data = JSON.parse(data),
	priceRange.setOption({
    grid: {
        left: '3%',
        right: '10',
        bottom: '10',
        containLabel: true
    },
    tooltip : {
        showDelay : 0,
        formatter : function (params) {
                return params.seriesName + '<br/>'
                + '单价：' + params.value[0] + '<br/>'
                + '销量：' + params.value[1];
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
	})
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
    priceRange.setOption({
        series:series
    });
});



// 销售金额预测值与实际值
var saleAll = echarts.init(document.getElementById('saleAll'));
$.get("data/销售金额实际值与预测值.json").done(function (data) {
    //data = JSON.parse(data),
	saleAll.setOption({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type:'scroll'
    },
    grid: {
        left: '10',
        right: '20',
        bottom: '10',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日',
		'11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日']
    },
    yAxis: {
        type: 'value',
        name: '金额（万元）',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'销售金额实际值',
            type:'line',
            data:data.T,
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
            },
        },
        {
            type:'line',
            name:'销售金额预测值',
            data:data.Y,
            areaStyle:{
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(47, 69, 84,.4)'
                    }, {
                        offset: 1,
                        color: 'transparent'
                    }])
                }
            }
        },
    ]
		})
});



window.onresize = function() {
    saleM_Site.resize();
    orderQ_Site.resize();
    grossM_Site.resize();
    unitP_Site.resize();
    saleMtop10.resize();
    priceRange.resize();
    saleAll.resize();
}