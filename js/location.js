var getLocation = function (successFunc, errorFunc) { //successFunc获取定位成功回调函数，errorFunc获取定位失败回调
    //首先设置默认城市
    var cityInfo= {
        status:0,
        id: '000001',
        province: '广东省',
        city:'深圳市',
        district:'',
        street:'',
        date:new Date().getTime()
        //date: curDateTime()//获取当前时间方法
    };
    //默认城市
    $.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(cityInfo), { expires: 1, path: '/' });
 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            //var map = new BMap.Map("container");   // 创建Map实例
            var point = new BMap.Point(lon, lat); // 创建点坐标
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function (rs) {
                var addComp = rs.addressComponents;
                var cityInfo= {
                    status:1,
                    id: '',
                    province: addComp.province,
                    city: addComp.city,
                    district: addComp.district,
                    street: addComp.street,
                    date:new Date().getTime()
                };
                //当前定位城市
                $.cookie('VPIAO_MOBILE_CURRENTCITY', JSON.stringify(cityInfo), { expires: 7, path: '/' });
                if (successFunc != undefined)
                    successFunc(JSON.stringify(cityInfo));
            });
        },
        function (error) {
            var errorInfo;
            switch (error.code) {
                case 1:
                    errorInfo = '位置服务被拒绝';
                    break;
                case 2:
                    errorInfo = '暂时获取不到位置信息';
                    break;
                case 3:
                    errorInfo = '获取位置信息超时';
                    break;
                default:
                    errorInfo = '未知错误';
                    break;
            }
            cityInfo= {
                status:error.code,
                error:errorInfo,
                id: '',
                name: '广东省',
                date:new Date().getTime()
            };
            //默认城市
            $.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(cityInfo), { expires: 1, path: '/' });
            if (errorFunc != undefined)
                errorFunc(JSON.stringify(cityInfo));
        }, { timeout: 5000, enableHighAccuracy: true });
    } else {
        errorInfo = '您的浏览器不支持获取地理位置信息';
        cityInfo= {
            status:error.code,
            error:errorInfo,
            id: '',
            name: '广东省',
            date:new Date().getTime()
        };
        if (errorFunc != undefined)
            errorFunc(JSON.stringify(cityInfo));
    }
};