'use strict';

const Service = require('ee-core').Service;
const Storage = require('ee-core').Storage;
const { MenuItem } = require('electron');
const _ = require('lodash');

/**
 * 数据存储
 * @class
 */
class StorageService extends Service {

  constructor (ctx) {
    super(ctx);

    // lowdb数据库
    this.systemDB = Storage.JsonDB.connection('system');//数据库名system
    let lowdbOptions = {
      driver: 'lowdb'
    }
    this.demoDB = Storage.JsonDB.connection('demo', lowdbOptions);  //数据库名demo
    this.systemDBKey = {
      cache: 'cache'
    };
    this.demoDBKey = {
      preferences: 'preferences',
      test_data: 'test_data'
    };

    // sqlite数据库
    let sqliteOptions = {
      driver: 'sqlite',
      default: {
        timeout: 6000,
        verbose: console.log // 打印sql语法
      }
    }
    this.demoSqliteDB = Storage.JsonDB.connection('sqlite-demo.db', sqliteOptions);
  }

  /*
   * 增 Test data
   */
  async addTestData(user) {
    const key = this.demoDBKey.test_data;
    if (!this.demoDB.db.has(key).value()) {
      this.demoDB.db.set(key, []).write();
    }
    //console.log(this.demoDB);
    //console.log(this.demoDB.getFilePath(this.demoDB.name));打印数据库存放位置
    const data = this.demoDB.db
    .get(key)
    .push(user)
    .write();

    return data;
  }

  /*
   * 删 Test data
   */
  async delTestData(name = '') {
    const key = this.demoDBKey.test_data;
    const data = this.demoDB.db
    .get(key)
    .remove({name: name})
    .write();

    return data;
  }

  /*
   * 改 Test data
   */
  async updateTestData(name= '', age = 0) {
    const key = this.demoDBKey.test_data;
    const data = this.demoDB.db
    .get(key)
    .find({name: name}) // 修改找到的第一个数据，貌似无法批量修改 todo
    .assign({age: age})
    .write();

    return data;
  }

  /*
   * 查 Test data
   */
  async getTestData(age = 0) {
    const key = this.demoDBKey.test_data;
    let data = this.demoDB.db
    .get(key)
    //.find({age: age}) 查找单个
    .filter(function(o) {
      let isHas = true;
      isHas = age === o.age ? true : false;
      return isHas;
    })
    //.orderBy(['age'], ['name']) 排序
    //.slice(0, 10) 分页
    .value();

    if (_.isEmpty(data)) {
      data = []
    }

    return data;
  }

  /*
   * all Test data
   */
  async getAllTestData() {
    const key = this.demoDBKey.test_data;
    if (!this.demoDB.db.has(key).value()) {
      this.demoDB.db.set(key, []).write();
    }
    let data = this.demoDB.db
    .get(key)
    .value();

    if (_.isEmpty(data)) {
      data = []
    }

    return data;
  }

  /*
   * 检查并创建表 (sqlite)
   */
  async checkAndCreateTableSqlite(tableName = '') {
    if (_.isEmpty(tableName)) {
      throw new Error(`table name is required`);
    }
    // 检查表是否存在
    const userTable = this.demoSqliteDB.db.prepare('SELECT * FROM sqlite_master WHERE type=? AND name = ?');
    const result = userTable.get('table', tableName);
    //console.log('result:', result);
    if (result) {
      return;
    }

    // 创建表
    const create_table_user =
    `CREATE TABLE ${tableName}
     (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name CHAR(50) NOT NULL,
        age INT
     );`
    this.demoSqliteDB.db.exec(create_table_user);

  }

  /*
   * 增 Test data (sqlite)
   */
  async addTestDataSqlite(data) {
    //console.log("add data:", data);

    let table = 'user';
    await this.checkAndCreateTableSqlite(table);

    const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${table} (name, age) VALUES (@name, @age)`);
    insert.run(data);

    return true;
  }

  /*
   * 删 Test data (sqlite)
   */
  async delTestDataSqlite(name = '') {
    //console.log("delete name:", name);

    let table = 'user';
    await this.checkAndCreateTableSqlite(table);

    const delUser = this.demoSqliteDB.db.prepare(`DELETE FROM ${table} WHERE name = ?`);
    delUser.run(name);

    return true;
  }
  
  
    /*
   * 检查并创建AT指令表 (at sqlite)
   */
    async checkAndCreateATTableSqlite(tableName = '') {
      if (_.isEmpty(tableName)) {
        throw new Error(`table name is required`);
      }
      // 检查表是否存在
      const userTable = this.demoSqliteDB.db.prepare('SELECT * FROM sqlite_master WHERE type=? AND name = ?');
      const result = userTable.get('table', tableName);
      //console.log('result:', result);
      if (result) {
        return;
      }
  
      // 创建表
      const create_table_user =
      `CREATE TABLE ${tableName}
       (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          at_key CHAR(200) NOT NULL,
          eq CHAR(16),
          at_param CHAR(1000) NULL
       );`
      this.demoSqliteDB.db.exec(create_table_user);
  
    }

  /*
   * 增 AT data (sqlite)
   */
  async addATSqlite(data) {
    //console.log("add data:", data);

    let table = 'atlist801';
    await this.checkAndCreateATTableSqlite(table);

    const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${table} (at_key,eq,at_param) VALUES (@at_key,@eq,@at_param)`);
    insert.run(data);

    return true;
  }

    /*
   * 批量新增 AT data (sqlite)
   */
    async addBatchATSqlite(datas) {
  
      let table = 'atlist801';
      await this.checkAndCreateATTableSqlite(table);
      
      //组装sql
      // let sql=`INSERT INTO ${table} (at_key,eq,at_param) values `;
      
      // let flag=0;

      // datas.forEach(element => {
       
      //   sql+=`(?'`+element.at_key +`',`;
      //   sql+=`?'`+element.eq +`',`;
      //   sql+=`?'`+element.at_param+`')`;

      //   if(flag++<datas.length-1){
      //     sql+=`,`;
      //   }
       
      // });
       
      //console.log(sql);

      const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${table} (at_key,eq,at_param) values (@at_key, @eq,@at_param)`);
      console.log(datas);
      const insertMany = this.demoSqliteDB.db.transaction((cats) => {
        
        for (const cat of cats) 
          {
            insert.run(cat);
          }
      });
       
      insertMany(datas);
      return true;
    }

  /*
   * 删 Test data (sqlite)
   */
  async delATSqlite(delete_at = '') {
 
    let table = 'atlist801';
    await this.checkAndCreateATTableSqlite(table);

    const delUser = this.demoSqliteDB.db.prepare(`DELETE FROM ${table} WHERE at_key||eq||at_param = ?`);
    delUser.run(delete_at);

    return true;
  }

  /*
   * 改 Test data (sqlite)
   */
  async updateATSqlite(data) {

    let table = 'atlist801';
    await this.checkAndCreateATTableSqlite(table);

    const updateUser = this.demoSqliteDB.db.prepare(`UPDATE ${table} SET at_key = @at_key,eq = @eq,at_param = @at_param WHERE at_key||eq||at_param = @at_update`);
    updateUser.run(data);

    return true;
  }  

    /*
   * all AT data (sqlite)
   */
    async getAllATDataSqlite(searchkey) {
  
      let table = 'atlist801';
      await this.checkAndCreateATTableSqlite(table);
  
      if(searchkey==''||searchkey==null){
        const all = this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} `);
        const allresult =  all.all();
        return allresult;
      }

      const selectAllUser = this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} where at_key||eq||at_param like '%`+searchkey+`%' `);
      const allUser =  selectAllUser.all({searchkey:searchkey});
      return allUser;
    }  

  /*
   * 改 Test data (sqlite)
   */
  async updateTestDataSqlite(name= '', age = 0) {
    //console.log("update :", {name, age});

    let table = 'user';
    await this.checkAndCreateTableSqlite(table);

    const updateUser = this.demoSqliteDB.db.prepare(`UPDATE ${table} SET age = ? WHERE name = ?`);
    updateUser.run(age, name);

    return true;
  }  

  /*
   * 查 Test data (sqlite)
   */
  async getTestDataSqlite(age = 0) {
    //console.log("select :", {age});

    let table = 'user';
    await this.checkAndCreateATTableSqlite(table);

    const selectUser = this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} WHERE age = @age`);
    const users = selectUser.all({age: age});
    //console.log("select users:", users);
    return users;
  }  
  
  /*
   * all Test data (sqlite)
   */
  async getAllTestDataSqlite() {
    //console.log("select all user");

    let table = 'user';
    await this.checkAndCreateTableSqlite(table);

    const selectAllUser = this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} `);
    const allUser =  selectAllUser.all();
    //console.log("select allUser:", allUser);
    return allUser;
  }  
}

StorageService.toString = () => '[class StorageService]';
module.exports = StorageService;
