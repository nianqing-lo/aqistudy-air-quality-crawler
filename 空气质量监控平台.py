import requests
import subprocess
import json
city = input("请输入城市: ")
param = subprocess.run(
    ["node","一.js",city],
    capture_output=True,
    text=True,
    encoding = "utf-8",
)
json_data = json.loads(param.stdout.strip())
cookies = {
    'Hm_lvt_6088e7f72f5a363447d4bafe03026db8': '1781853738,1781868412',
    'HMACCOUNT': 'A752EA3B31925488',
    'Hm_lpvt_6088e7f72f5a363447d4bafe03026db8': '1781909369',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://www.aqistudy.cn',
    'Referer': 'https://www.aqistudy.cn/html/city_realtime.php?v=2.3',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Microsoft Edge";v="149", "Chromium";v="149", "Not)A;Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'Hm_lvt_6088e7f72f5a363447d4bafe03026db8=1781853738,1781868412; HMACCOUNT=A752EA3B31925488; Hm_lpvt_6088e7f72f5a363447d4bafe03026db8=1781909369',
}
data = {
    'h1zlb1QoZ': str(json_data["param"])}
response = requests.post('https://www.aqistudy.cn/apinew/aqistudyapi.php', cookies=cookies, headers=headers, data=data)
text_data = response.text
txt = subprocess.run(
    ["node","二.js",text_data],
    capture_output=True,
    text=True,
    encoding="utf-8"
)
try:
    second = json.loads(txt.stdout.strip())
    print(f"城市:{second["cityinfo"]["cityname"]}")
    keys = second["rows"]
    for key in keys:
        pointname = key["pointname"]
        aqi1 = key["aqi"]
        pm2= key["pm2_5"]
        pm10 = key["pm10"]
        CO = key["co"]
        NO2 = key["no2"]
        O3 = key["o3"]
        SO2 = key["so2"]
        quality = key["quality"]
        print(f"具体监测点名:{pointname}  AQI:{aqi1}  PM2.5:{pm2}  PM10:{pm10}  CO:{CO}  NO2:{NO2}  O3:{O3}  SO2:{SO2}  空气质量:{quality}")
except:
    print("可能寻找的不是城市，有可能是搜成了省份或者其他")