/**
 * Project name(项目名称)：JS_String
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/5
 * Time(创建时间)： 21:30
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// String 对象中的属性
// 属性	    描述
// constructor	获取创建此对象的 String() 函数的引用
// length	获取字符串的长度
// prototype	通过该属性您可以向对象中添加属性和方法

var str = new String('JavaScript');
String.prototype.name = null;
str.name = "Hello World!";
document.write(str.constructor + "<br>");       // 输出：function String() { [native code] }
document.write(str.length + "<br>");            // 输出：10
document.write(str.name);                       // 输出：Hello World!