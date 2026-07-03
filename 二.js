const askkGFJ5KlKY = "a5slhqEdLos7hvjr";
const asi1rHbZTh7V = "bhb9eTODiif32jv0";
const ackfskOkfwA1 = "dKg91apx9amJmDml";
const aciYSbd2DJGJ = "fLZmIAjKrfUIwrJI";
const dskoNjS2oMS6 = "hXenRdbrF1iqaMLr";
const dsi7NK4eh564 = "xAWozmps3eqYftMA";
const dckl57vrC1PD = "oXEjtZBCJ9JG2byi";
const dciVmwkDpoSy = "p8Fd1sdL6pr5WLEE";
const aes_local_key = 'emhlbnFpcGFsbWtleQ==';
const aes_local_iv = 'emhlbnFpcGFsbWl2';
const CryptoJS = require("crypto-js");



var dXacm = process.argv[2]
var AES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};
var DES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};
function Base64() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64
            } else {
                if (isNaN(chr3)) {
                    enc4 = 64
                }
            }
            output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4)
        }
        return output
    }
    ;
    this.decode = function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2)
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3)
            }
        }
        output = _utf8_decode(output);
        return output
    }
    ;
    _utf8_encode = function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c)
            } else {
                if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128)
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128)
                }
            }
        }
        return utftext
    }
    ;
    _utf8_decode = function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++
            } else {
                if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3
                }
            }
        }
        return string
    }
}
var BASE64 = {
    encrypt: function(text) {
        var b = new Base64();
        return b.encode(text)
    },
    decrypt: function(text) {
        var b = new Base64();
        return b.decode(text)
    }
};
function d6o2KJrVnYKBvdlc6mTrx4(data) {
    data = AES.decrypt(data, askkGFJ5KlKY, asi1rHbZTh7V);
    data = DES.decrypt(data, dskoNjS2oMS6, dsi7NK4eh564);
    data = BASE64.decrypt(data);
    return data
}
 function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else
                r = t
        }
        return r
    }

// var cA43Npnni = function(obj) {
//       console.log(obj);
//       data = obj.data;
//       initMap('allmap',city, data.cityinfo.longitude,data.cityinfo.latitude);
//       $('#dg').datagrid({
//         data:data,
//         singleSelect:true,
//         loadMsg:"正在载入，请稍后...",
//         title:"具体监测点",
//         rownumbers:true,
//         pagination:false,
//         sortName:name,
//         remoteSort:false,
//         sortOrder:'asc',
//         fit:true,
//         columns:[[
//           {field:'pointname',title:'监测点',sortable:true,width:80,halign:'center',align:'left',formatter:formatName},
//           {field:'aqi',title:'AQI',sortable:true,width:45,align:'center'},
//           {field:'quality',title:'质量等级',sortable:true,width:60,align:'center',styler:cellLevel},
//           {field:'pm2_5',title:'PM2.5',sortable:true,width:45,align:'center'},
//           {field:'pm10',title:'PM10',sortable:true,width:45,align:'center'},
//           {field:'co',title:'CO',sortable:true,width:45,align:'center',formatter:formatValue},
//           {field:'no2',title:'NO2',sortable:true,width:45,align:'center'},
//           {field:'o3',title:'O3',sortable:true,width:45,align:'center'},
//           {field:'so2',title:'SO2',sortable:true,width:45,align:'center'},
//           {field:'primary_pollutant',title:'首要污染物',sortable:true,width:100,align:'left'},
//           {field:'time_point',title:'测量时间',sortable:true,width:120,halign:'center',align:'center',hidden:true}
//         ]],
//         onLoadSuccess: function(data){
//
//         },
//         onSelect: function (index, data) {
//             var point = new BMap.Point(data.longitude, data.latitude);
//              map.centerAndZoom(point, 13);
//             map.centerAndZoom(new T.LngLat(data.longitude, data.latitude), 13);
//         }
//       });
//        var aqi=0;
//        var aqiArray = [];
//        var aqilevel;
//        var cityid = data.cityinfo.cityid;
//        var rank;
//        var weather,temp,wd,time;
//        $('#citylogo').attr("src", "https://www.zq12369.com/resource/img/cityimage/" + cityid + ".jpg");
//        $.cookie('dcode', cityid, {expires : 30});
//        if(data.rows.length>0)
//                {
//            //clearMap();
//                var desp = null;
//                var title = null;
//                for(i=0;i<data.rows.length;i++)
//                {
//                   var desp =
//             "<table width='100%'><tr><td style='font-size:12px' valign='top'>"
//             +"<table width='100%' class='fitem'>"
//             +"<tr><th width='50px'>AQI:</th><td style='width:70px;text-align:center;background-color:" + getColorByIndex(getAQILevelIndex(data.rows[i].aqi)) +";color:#fff'>" + data.rows[i].aqi
//             +"</td><th width='50px'>等级:</th><td style='width:70px;text-align:center;'>" + data.rows[i].quality
//             +"</td></tr><tr><th>PM2.5:</th><td style='width:70px;text-align:center;background-color:" + getColorByIndex(getPM25LevelIndex(data.rows[i].pm2_5)) +";color:#fff'>" + parseInt(data.rows[i].pm2_5)
//             +"</td><th>PM10:</th><td style='width:70px;text-align:center;background-color:" + getColorByIndex(getPM10LevelIndex(data.rows[i].pm10)) +";color:#fff'>" + parseInt(data.rows[i].pm10)
//           +"</td></tr><tr><th>CO:</th><td style='width:70px;text-align:center;background-color:" + getColorByIndex(getCOLevelIndex(data.rows[i].co)) +";color:#fff'>" + data.rows[i].co
//             +"</td><th>NO2:</th><td style='width:70px;text-align:center;background-color:" + getColorByIndex(getNO2LevelIndex(data.rows[i].no2)) +";color:#fff'>" + parseInt(data.rows[i].no2)
//             +"</td></tr><tr><th>SO2:</th><td style='width:70px;text-align:center;background-color:" + getColorByIndex(getSO2LevelIndex(data.rows[i].so2)) +";color:#fff'>" + parseInt(data.rows[i].so2)
//             +"</td><th>O3:</th><td style='width:70px;text-align:center;background-color:" + getColorByIndex(getO3LevelIndex(data.rows[i].o3)) +";color:#fff'>" + parseInt(data.rows[i].o3)
//             +"</td></tr><tr><th>首要污染:</th><td colspan='3'>" + data.rows[i].primary_pollutant
//             +"</td></tr><tr><th>站点类型:</th><td colspan='3'>" + data.rows[i].pointlevel
//             +"</td></tr><tr><th>监测时间:</th><td colspan='3'>" + data.rows[i].time
//             +"</td></tr></table>"
//             +"</td>"
//             +"<td valign='top' align='right'><img src='http://www.zq12369.com/resource/img/cityimage/" + cityid + ".jpg' width='70px' height='70px'/><td>"
//             +"</tr></table>";
//
//                   //var point = new BMap.Point(data.rows[i].longitude, data.rows[i].latitude);
//                   //addPoint(data.rows[i].pointname,point,title,desp,getIcon(data.rows[i].aqi),true,true)
//                   var point = new T.LngLat(data.rows[i].longitude,data.rows[i].latitude);
//
//                   showMapMarker(data.rows[i].pointname,point,desp,getIcon(data.rows[i].aqi),true,true,i,city,data.rows[i].pointname,parseInt(data.rows[i].aqi),getAQILevelIndex(data.rows[i].aqi),getColorByIndex(getAQILevelIndex(data.rows[i].aqi)));
//                }
//              }
//        time = data.aqi.time;
//        var hour = (converTimeFormat(time)).getHours();
//        var tp = null;
//        if(hour<5)
//        {
//         tp = "凌晨" + hour;
//        }
//        else if(hour<8)
//        {
//         tp = "早上" + hour;
//        }
//        else if(hour<11)
//        {
//         tp = "上午" + hour;
//        }
//        else if(hour < 13)
//        {
//         tp = "中午" + hour;
//        }
//        else if(hour < 18)
//        {
//          hour = hour-12;
//          tp = "下午" + hour;
//        }
//        else if(hour < 24)
//        {
//          hour = hour -12;
//          tp = "晚上" + hour
//        }
//        $('#timeSpan').html(tp + '时 实时空气质量');
//        aqi = parseInt(data.aqi.aqi);
//        aqiArray.push(aqi);
//
//        aqilevel = getAQILevel(aqi);
//        showGaugeChart("containerAQI",aqiArray);
//        rank=data.aqi.rank;
//        $('#aqiSpan').html(aqilevel.value);
//        $('#tipSpan').html('温馨提示：' + aqilevel.tip);
//        $('#rankSpan').html('全国排名：' + rank + "/367");
//
//        weather = data.weather.weather;
//        temp = data.weather.temp;
//        wd = data.weather.wd;
//        wl = data.weather.wl + '级';
//        $('#tempSpan').html(temp + '℃');
//        $('#weaSpan').html(weather + ' ' + wd + wl);
//     }
Xacm = d6o2KJrVnYKBvdlc6mTrx4(dXacm);
oUSlm6 = JSON.parse(Xacm);
if (oUSlm6.success) {
                    if (0.5 > 0) {
                        oUSlm6.result.time = new Date().getTime();
                        // localStorageUtil.save(kVIY, oUSlm6.result)
                    };}
                    // cA43Npnni(oUSlm6.result);}
console.log(JSON.stringify(oUSlm6.result.data))
