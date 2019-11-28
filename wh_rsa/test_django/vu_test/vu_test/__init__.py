import pymysql

# 需要导入mysql的初始化方法，否则迁移数据库会失败
pymysql.install_as_MySQLdb()
