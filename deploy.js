import ora from 'ora';
import scpClient from 'scp2'
// const scpClient = require('scp2')
// const ora = require('ora')
const server = {
  host: '116.62.104.237',//服务器IP
  port: 22,//服务器端口
  username: 'root',//服务器ssh登录用户名
  password: 'Zjy3771314520.',//服务器ssh登录密码
  path: '/home/nginx/test'//服务器web目录
}
const loading = ora('正在部署至 ' + server.host)
loading.start()
scpClient.scp('build/', server, (err) => {
  loading.stop()
  if (err) {
    console.log('部署失败')
    throw err
  } else {
    console.log('部署成功')
  }
})


