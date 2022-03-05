/**
 * Project name(项目名称)：JS_String
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/5
 * Time(创建时间)： 21:34
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// String 对象中的方法
// 方法	    描述
// anchor()	创建一个 HTML 锚点，即生成一个<a>标签，标签的 name 属性为 anchor() 方法中的参数
// big()	用大号字体显示字符串
// blink()	显示闪动的字符串
// bold()	使用粗体显示字符串
// charAt()	返回在指定位置的字符
// charCodeAt()	返回指定字符的 Unicode 编码
// concat()	拼接字符串
// fixed()	以打字机文本显示字符串
// fontcolor()	使用指定的颜色来显示字符串
// fontsize()	使用指定的尺寸来显示字符串
// fromCharCode()	将字符编码转换为一个字符串
// indexOf()	检索字符串，获取给定字符串在字符串对象中首次出现的位置
// italics()	使用斜体显示字符串
// lastIndexOf()	获取给定字符串在字符串对象中最后出现的位置
// link()	将字符串显示为链接
// localeCompare()	返回一个数字，并使用该数字来表示字符串对象是大于、小于还是等于给定字符串
// match()	根据正则表达式匹配字符串中的字符
// replace()	替换与正则表达式匹配的子字符串
// search()	获取与正则表达式相匹配字符串首次出现的位置
// slice()	截取字符串的片断，并将其返回
// small()	使用小字号来显示字符串
// split()	根据给定字符将字符串分割为字符串数组
// strike()	使用删除线来显示字符串
// sub()	把字符串显示为下标
// substr()	从指定索引位置截取指定长度的字符串
// substring()	截取字符串中两个指定的索引之间的字符
// sup()	把字符串显示为上标
// toLocaleLowerCase()	把字符串转换为小写
// toLocaleUpperCase()	把字符串转换为大写
// toLowerCase()	把字符串转换为小写
// toUpperCase()	把字符串转换为大写
// toString()	返回字符串
// valueOf()	返回某个字符串对象的原始值



document.write("<br>");
document.write("<br>");

var str = new String('JavaScript教程');
document.write(str.anchor("myanchor") + "<br>");     // 生成一段 HTML 代码：<a name="myanchor">JavaScript教程</a>
document.write(str.big() + "<br>");                  // 生成一段 HTML 代码：<big>JavaScript教程</big>
document.write(str.blink() + "<br>");                // 生成一段 HTML 代码：<blink>JavaScript教程</blink>
document.write(str.bold() + "<br>");                 // 生成一段 HTML 代码：<b>JavaScript教程</b>
document.write(str.charAt(10) + "<br>");             // 获取 str 中的第 11 个字符，输出：教
document.write(str.charCodeAt(10) + "<br>");         // 获取 str 中第 11 个字符的 Unicode 编码，输出：25945
document.write(str.concat(" String 对象") + "<br>"); // 将字符串“ String 对象”拼接到字符串 str 之后，输出：JavaScript教程 String 对象
document.write(str.fixed() + "<br>");                // 生成一段 HTML 代码：<tt>JavaScript教程</tt>
document.write(str.fontcolor("red") + "<br>");       // 生成一段 HTML 代码：<font color="red">JavaScript教程</font>
document.write(str.fontsize(2) + "<br>");            // 生成一段 HTML 代码：<font size="2">JavaScript教程</font>
document.write(String.fromCharCode(72, 69, 76, 76, 79) + "<br>");             // 将 Unicode 编码转换为具体的字符，输出：HELLO
document.write(str.indexOf("Script") + "<br>");             // 获取字符串“Script”在 str 中首次出现的为，输出：4
document.write(str.italics() + "<br>");                     // 生成一段 HTML 代码：<i>JavaScript教程</i>
document.write(str.lastIndexOf("a") + "<br>");              // 获取字符串“a”在 str 中最后一次出现的位置，输出 3
document.write(str.link("#") + "<br>");  // 生成一段 HTML 代码：<a href="#">JavaScript教程</a>
document.write(str.localeCompare("JavaScript") + "<br>");       // 比较字符串对象与给定字符串，返回：1
document.write(str.match(/[abc]/g) + "<br>");                   // 根据正则 /[abc]/g 检索 str，返回：a,a,c
document.write(str.replace(/[abc]/g, "Y") + "<br>");            // 使用字符串“Y”替换正则 /[abc]/g 匹配的字符，返回：JYvYSYript教程
document.write(str.search(/[Script]/g) + "<br>");               // 获取与正则匹配的字符串首次出现的位置，返回：4
document.write(str.slice(6, 11) + "<br>");           // 截取字符串（获取 str 中第 7 到第 11 个字符），返回：ript教
document.write(str.small() + "<br>");               // 生成一段 HTML 代码：<small>JavaScript教程</small>
document.write(str.split("a") + "<br>");            // 根据“a”将字符串 str 拆分为数组，返回：J,v,Script教程
document.write(str.strike() + "<br>");              // 生成一段 HTML 代码：<strike>JavaScript教程</strike>
document.write(str.sub() + "<br>");                 // 生成一段 HTML 代码：<sub>JavaScript教程</sub>
document.write(str.substr(3, 7) + "<br>");          // 从第 4 个字符开始，向后截取 7 个字符，返回：aScript
document.write(str.substring(3, 7) + "<br>");       // 截取字符串（获取 str 中第 4 到第 7 个字符），返回：aScr
document.write(str.sup() + "<br>");                 // 生成一段 HTML 代码：<sup>JavaScript教程</sup>
document.write(str.toLocaleLowerCase() + "<br>");   // 返回：javascript教程
document.write(str.toLocaleUpperCase() + "<br>");   // 返回：JAVASCRIPT教程
document.write(str.toLowerCase() + "<br>");         // 返回：javascript教程
document.write(str.toUpperCase() + "<br>");         // 返回：JAVASCRIPT教程
document.write(str.toString() + "<br>");            // 返回：JavaScript教程
document.write(str.valueOf() + "<br>");             // 返回：JavaScript教程