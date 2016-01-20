# 拜托啦前端开发API文档 

## 接口说明
- 全部使用UTF8编码
- 数据返回格式

###  用户登录

- HTTP请求方式:POST
- 支持格式：JSON
- 是否需要登录：否
- 请求地址：http://119.29.26.197:8080/springmvchibernate/login.do(接口地址)
- 请求参数：

字段     | 必选       | 类型以及范围 | 说明
---      | ---        | ----         | -----
mobilePhoneNumber | true       | string       | 登录用户名
passwprd | true       | string       | 密码
terminalnumber | true       | string       | 机器码
phonetype | true        | string        | 安卓为andriod,iOS为ios
...      | true/false | int(0-100)   | 字段说明

- 注意事项：
1. .....
2. .....
3. .....

- 返回结果：

成功时：
```php
{"loginuser":[
        {"address":"地址",
         "age":"年龄",
         "sex":1,
         "carcolor":"车的颜色",
         "carnumber":"车的牌号",
         "cartype":"车的类型",
         "email":"用户邮箱",
         "headId":1,
         "longitude":0,
         "mobilePhoneNumber":"用户账号",
         "phonetype":"手机类型",
         "state":0,
         "userId":1,
         "usname":"用户名"}
         ]
}

```

失败时：
```php

返回值：1

```

- 返回数据参数：

字段   | 必返回      | 类型以及范围 | 说明
---    | ---         | ----         | -----
address | true        | int          | 接口状态码
age    | false       | string       | 成功的时候才返回
sex  | false       | string       | 失败的时候必选返回
sex  | false       | string       | 失败的时候必选返回
sex  | false       | string       | 失败的时候必选返回sex  | false       | string       | 失败的时候必选返回
...    | true/ false | int(0-100)   | 字段说明

- 错误状态码

错误码 | 说明
---    | ---
0001   | 用户不存在
0002   | 用户账号密码错误
0003   | 用户账号信息异常

