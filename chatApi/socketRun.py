'''
@Author: hua
@Date: 2019-06-17 14:14:28
@description: 
@LastEditors  : hua
@LastEditTime : 2020-01-23 21:41:20
'''
import environment
environment.init("app")
""" from gevent import monkey
monkey.patch_all(select=True, socket=True) #这边win下会报错用http请求时 """
from app import app, socketio
from flask_cors import CORS
# https://www.cnblogs.com/franknihao/p/7202253.html uwsgi配置
app = app
CORS(app, supports_credentials=True)
if __name__ == '__main__':
    app.debug = False
    socketio.run(app, host='0.0.0.0', port=501)
    