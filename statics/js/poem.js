var quotes=new Array();
quotes[0] = "汉皇重色思倾国，御宇多年求不得";
quotes[1] = "回眸一笑百媚生，六宫粉黛无颜色";
quotes[2] = "金屋妆成娇侍夜，玉楼宴罢醉和春";
quotes[3] = "骊宫高处入青云，仙乐风飘处处闻";
quotes[4] = "汉皇重色思倾国，御宇多年求不得";
quotes[5] = "缓歌慢舞凝丝竹，尽日君王看不足";
quotes[6] = "渔阳鼙鼓动地来，惊破霓裳羽衣曲";
quotes[7] = "九重城阙烟尘生，千乘万骑西南行";
quotes[8] = "黄埃散漫风萧索，云栈萦纡登剑阁";
quotes[9] = "峨嵋山下少人行，旌旗无光日色薄";
quotes[10] = "蜀江水碧蜀山青，圣主朝朝暮暮情";
quotes[11] = "君臣相顾尽沾衣，东望都门信马归";
quotes[12] = "归来池苑皆依旧，太液芙蓉未央柳";
quotes[13] = "芙蓉如面柳如眉，对此如何不泪垂";
quotes[14] = "春风桃李花开日，秋雨梧桐叶落时";
quotes[15] = "西宫南内多秋草，落叶满阶红不扫";
quotes[16] = "夕殿萤飞思悄然，孤灯挑尽未成眠";
quotes[17] = "迟迟钟鼓初长夜，耿耿星河欲曙天";
quotes[18] = "悠悠生死别经年，魂魄不曾来入梦";
quotes[19] = "临邛道士鸿都客，能以精诚致魂魄";
quotes[20] = "排空驭气奔如电，升天入地求之遍";
quotes[21] = "上穷碧落下黄泉，两处茫茫皆不见";
quotes[21] = "风吹仙袂飘飖举，犹似霓裳羽衣舞";
quotes[23] = "含情凝睇谢君王，一别音容两渺茫";
quotes[24] = "昭阳殿里恩爱绝，蓬莱宫中日月长";
quotes[25] = "回头下望人寰处，不见长安见尘雾";
quotes[26] = "但教心似金钿坚，天上人间会相见";
quotes[27] = "临别殷勤重寄词，词中有誓两心知";
quotes[28] = "七月七日长生殿，夜半无人私语时";
quotes[29] = "在天愿作比翼鸟，在地愿为连理枝";
quotes[30] = "天长地久有时尽，此恨绵绵无绝期";


var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));

function showquote(){document.write(quotes[whichquote]);}

showquote();