import json
import requests


url = "http://127.0.0.1:8081/login"
# url = "http://127.0.0.1:8081/register"

s = requests.session()
s.headers.update({
    'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
})
dict = {"user":"aab","pwd":"a12345678"}
resp = s.post(url,data=dict)
resp.encoding = 'UTF-8'
print(resp.text)
# print(json.loads(resp.text))
