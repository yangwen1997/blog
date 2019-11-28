from flask import Flask, request,json
import json
import pymysql
import hashlib

#数据库地址


#注册为flask 项目
app = Flask(__name__)



def mysql_sear(sql):
    conn = pymysql.Connect(host="127.0.0.1", port=3306, user="root", password="root", db="vue_test")
    cursor = conn.cursor()
    try:
        cursor.execute(sql)
        conn.commit()
    except Exception as e:
        print(e)
    if sql[0:7] == "insert":
        return True
    else:
        result = cursor.fetchall()
        return  result


@app.route('/login', methods=['GET','POST'])
def login():
    """
    用户登录
    :return:
    """
    UA = request.headers.get('User-Agent')[0:8]
    dict = {}
    if UA == "Mozilla/":
        if request.method == 'POST':
            data = bytes.decode(request.get_data())
            user = data.split("&")[0].split("=")[1]
            pwd = data.split("&")[1].split("=")[1]

            if len(pwd) < 6:
                dict["code"] = 502
                dict["msg"] = "密码必须大于6位"
            else:
                sql = "select session from user where user='{}';".format(user)
                result = mysql_sear(sql)

                dict["code"] = 200
                dict["session"] = result[0][0]

    else:
        dict["code"] = 503
        dict["msg"] = "请输入正确的User-Agent"

    return json.dumps(dict)

@app.route('/register', methods=["GET","POST"])
def register():
    """
    用户注册
    :return:
    """
    dict = {}
    if request.method == "POST":
        data = bytes.decode(request.get_data())
        user = data.split("&")[0].split("=")[1]
        pwd = data.split("&")[1].split("=")[1]
        sql = "select user from user;"
        print(sql)
        results = mysql_sear(sql)
        try:
            results = results[0][0]
        except:
            requests = ""

        if user == results:
            dict["code"] = 502
            dict["err_msg"] = "用户已经存在"
        else:
            session = hashlib.md5(str(user).encode('utf-8')).hexdigest()
            sql = "insert into user(user,pwd,session)values('{}','{}','{}')".format(user,pwd,session)
            result = mysql_sear(sql)
            if request:
                dict["code"] = 200
                dict["msk"] = "ok"
                dict["ts_msg"] = "用户创建成功"
                dict["session"] = session
                print(dict)

    else:
        dict["code"] = 503
        dict["err_msg"] = "请输入正确的请求方式--POST"
    return json.dumps(dict)

if __name__ == '__main__':
    app.debug = True
    app.run(port=8081)



