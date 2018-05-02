const mongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://mongouser:xDiel7sBFj@172.21.0.37:27017/admin'

mongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  consolt.log(db)
  const username = 'test'
  const pwd = 'test1234'
  db.createUser(
    {
      user: userName,
      pwd: password,
      roles: [ { role: 'readWrite', db: 'name' } ]
    }
  );

  if (err) {
    console.info("err:", err)
  }
//   var db = db.db('testdb'); // 选择一个db
//   var col = db.collection('demoCol'); // 选择一个集合(表)
//  // 插入数据
//   col.insertOne(
//       {
//           a: 1,
//           something: "yy"
//       },
//       //可选参数
//       //{
//       //    w: 'majority' // 开启 “大多数”模式，保证数据写入Secondary节点
//       //},
//       function(err, r) {
//           console.info("err:", err);
//           assert.equal(null, err);
//           // 断言写入成功
//           assert.equal(1, r.insertedCount);
//           // 查询数据
//           col.find().toArray(function(err, docs) {
//               assert.equal(null, err);
//               console.info("docs:", docs);
//               db.close();
//           });
//       }
//   );
});