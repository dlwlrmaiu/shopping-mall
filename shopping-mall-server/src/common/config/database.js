/*
 * @Author: your name
 * @Date: 2020-05-08 11:55:41
 * @LastEditTime: 2020-05-08 14:07:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \23_VueCLI3.x\mall-server\src\common\config\database.js
 */
const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'twl064458',
  dateStrings: true
};
