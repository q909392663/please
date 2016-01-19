# 拜托啦前端开发API文档 

## 接口说明
- 全部使用UTF8编码
- 数据返回格式
- 
-
-

###  用户登录

- HTTP请求方式:POST
- 支持格式：JSON
- 是否需要登录：否
- 请求地址：127.0.0.1/api/login(接口地址)
- 请求参数：

字段     | 必选       | 类型以及范围 | 说明
---      | ---        | ----         | -----
username | true       | string       | 登录用户名
password | true       | string       | 密码
...      | true/false | int(0-100)   | 字段说明

- 注意事项：
1. .....
2. .....
3. .....

- 返回结果：

成功时：
```php
{
    status: 0 ,
    msg:'msg',
}

```

失败时：
```php
{
    status: 1 ,
    error:'error',
}

```

- 返回数据参数：

字段   | 必返回      | 类型以及范围 | 说明
---    | ---         | ----         | -----
status | true        | int          | 接口状态码
msg    | false       | string       | 成功的时候才返回
error  | false       | string       | 失败的时候必选返回
...    | true/ false | int(0-100)   | 字段说明

- 错误状态码

错误码 | 说明
---    | ---
0001   | 用户不存在
0002   | 用户账号密码错误
0003   | 用户账号信息异常

