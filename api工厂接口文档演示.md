

## 商品类别接口


**接口地址**:`/{domain}/shop/goods/category/all`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:全局错误码： 
-1:服务器内部错误
300:禁止JSP功能
403:禁止访问
404:接口不存在
405:接口请求方式错误，请检查您的 GET / POST 方式
600:缺少参数
601:参数格式错误
700:暂无数据
800:接口无响应
900:并发异常，请重试
1000:您未获得该接口权限
2000:当前登录token无效，请重新登录
3000:当前功能仅针对专业版或者增值版开放
4000:当前功能已被限制使用
5000:当前插件未购买或者已过期



**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|token|登录接口返回的token|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|JSONResultCode|
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```