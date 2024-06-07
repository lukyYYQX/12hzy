// 近7日用户人数增长 - 流失趋势
var lossGrowth = echarts.init(document.getElementById('lossGrowth'));
var lossGrowth_option = {
    title: {},
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新增人数','流失人数'],
        type:'scroll'
    },
    grid: {
        left: '10',
        right: '30',
        //top:'60',
        bottom: '10',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        //show:'false',
        data: ['9月1日','9月2日','9月3日','9月4日','9月5日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'新增人数',
            type:'line',
            data:[5, 25, 20, 22, 12],
            symbol:'none',
            //smooth:'true',
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
            symbol:'none',
            //smooth:'true',
            data:[3, 11, 13, 4, 8],
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
};
lossGrowth.setOption(lossGrowth_option);