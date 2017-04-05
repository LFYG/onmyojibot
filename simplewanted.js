/*
  秘聞 > 8
  御魂 > 8
  BOSS < 2
*/
var wanted = {
  '大天狗':
`第十五章 （普＋困）提燈小僧3－第二回合x1
第十八章 （普＋困）三尾狐1－第二回合x1、BOSSx1
御魂四x1`,
  '閻魔':
`御魂六x1`,
  '酒吞童子':
`第十章 （普）BOSSx2
番外一‧見習鬼使 （困）酒吞童子x1
御魂七x1`,
  '茨木童子':
`御魂八x2`,
  '荒川之主':
`第十七章 （普＋困）BOSSx1
御魂七x2`,
  '孟婆':
`第九章 （普＋困）BOSSx2
祕聞‧河畔童謠 （陸）第5層－第二回合x1
御魂五x2、御魂六x1`,
  '鬼使黑':
`祕聞‧妖刀之祕籍 （台＋陸）第7層－第三回合x1
妖氣封印 鬼使黑x3
御魂四x1`,
  '鬼使白':
`祕聞‧妖刀之祕籍 （台＋陸）第7層－第三回合x1
御魂四x1`,
  '骨女':
`第十章 （普＋困）BOSSx2
祕聞‧紅葉的羈絆 （台＋陸）第5層－第三回合x1
祕聞‧妖刀之祕籍 （台＋陸）第5層－第三回合x1
祕聞‧河畔童謠 （台）第7層－第三回合x2
妖氣封印 骨女x3
御魂五x1、御魂六x2`,
  '妖狐':
`第七章 （普＋困）BOSSx2
御魂二x1`,
  '犬神':
`第十章 （普＋困）傀儡師2－第二回合x1、覺2－第二回合x1
番外一‧見習鬼使 （普＋困）古籠火123各x3
祕聞‧紅葉的羈絆 （台＋陸）第8~10層－第二回合各x1
御魂四x1`,
  '鐮鼬':
`祕聞‧河畔童謠 （台）第3層－第三回合x2
御魂五x1`,
  '雪女':
`第八章 （普＋困）櫻花妖1－第二回合x1、櫻花妖2－第二回合x1
第十二章 （普＋困）童女1－第二回合x1、童女2－第二回合x1、BOSSx2
祕聞‧紅葉的羈絆 （台＋陸）第6層－第三回合x1
祕聞‧河畔童謠 （台）第五層－第三回合x2`,
  '判官':
`第十六章 （普＋困）BOSSx1
祕聞‧妖刀之祕籍 （台＋陸）第7層－第三回合x1
祕聞‧河畔童謠 （陸）第7層－第三回合x1`,
  '清姬':
`第十九章 （普＋困）清姬1x3、清姬2x1、絡新婦1x3、絡新婦2x2、BOSSx2
祕聞‧妖刀之祕籍 （台＋陸）第6層－第三回合x1`,
  '海坊主':
`第十二章 （普＋困）海坊主1x1、海坊主2x1
妖氣封印 海坊主x3
御魂三x1`,
  '傀儡師':
`第十章 （普＋困）丑時之女1x1、丑時之女2x1、傀儡師1x1、傀儡師2x1
祕聞‧妖刀之祕籍 （台＋陸）第5層－第3回合x1
祕聞‧河畔童謠 （台）第4層－第三回合x2
御魂五x1`,
  '桃花妖':
`第八章 （普＋困）BOSSx1
祕聞‧妖刀之祕籍 （台＋陸）第6層－第三回合x1、第10層－第三回合x1
御魂三x1`,
  '櫻花妖':
`第八章 （普＋困）櫻花妖1x1、櫻花妖2x1、BOSSx1
祕聞‧妖刀之祕籍 （台＋陸）第6層－第三回合x1
祕聞‧河畔童謠 （台）第10層－第三回合x1`,
  '吸血姬':
`祕聞‧紅葉的羈絆 （台＋陸）第7層－第三回合x2
御魂二x1`,
  '食夢貘':
`第十四章 （普＋困）塗壁3－第二回合x1、BOSSx5
御魂四x2、御魂九x1`,
  '鳳凰火':
`第三章 （普＋困）BOSSx1
祕聞‧河畔童謠 （陸）第5層－第三回合x1
御魂七x1`,
  '二口女':
`第十九章 （普＋困）清姬1x1、清姬2x3、二口女1x1、二口女2x4、二口女3x3、BOSSx1
祕聞‧妖刀之祕籍 （台＋陸）第5層－第三回合x1
祕聞‧河畔童謠 （台）第6層－第三回合x2
妖氣封印 二口女x3
御魂十x1`,
  '鬼女紅葉':
`第十一章 （普＋困）BOSSx2
番外一‧見習鬼使 （普＋困）鬼女紅葉1(坐)x1、鬼女紅葉2x1
祕聞‧紅葉的羈絆 （台＋陸）第1~10層－第三回合各x1
祕聞‧河畔童謠 （陸）第5層－第一回合x1`,
  '跳跳哥哥':
`第十二章 （普＋困）BOSSx2
祕聞‧紅葉的羈絆 （台＋陸）第2層－第三回合x1
妖氣封印 跳跳哥哥x3
御魂五x1`,
  '黑童子':
`番外一‧見習鬼使 （普＋困）BOSSx1`,
  '覺':
`第十章 （普＋困）傀儡師1x1、傀儡師2x1、覺1x1、覺2x1
番外一‧見習鬼使 （普）鬼女紅葉1(坐)x3、鬼女紅葉2x3
祕聞‧紅葉的羈絆 （台＋陸）第1層－第三回合x3
祕聞‧河畔童謠 （台）第1層－第三回合x2
御魂十x1`,
  '兵俑':
`第三章 （普＋困）兵俑1x1、兵俑2x1
祕聞‧紅葉的羈絆 （台）第4層－第二回合x1
祕聞‧河畔童謠 （台）第7層－第二回合x1
御魂二x1`,
  '雨女':
`第四章 （普＋困）BOSSx1
祕聞‧妖刀之祕籍 （台＋陸）第3層－第三回合x3
祕聞‧河畔童謠 （台）第7層～第10層－第一回合各x1
御魂六x1`,
  '椒圖':
`祕聞‧紅葉的羈絆 （台＋陸）第6~7層－第二回合各x1
祕聞‧河畔童謠 （台）第5層－第二回合x1
妖氣封印 椒圖x3
御魂三x1`,
  '童男':
`第十二章 （普＋困）童男1x1、童男2x1
祕聞‧河畔童謠 （台）第6層－第二回合x1
御魂四x1`,
  '童女':
`第三章 （普）天邪鬼黃2x3、赤舌2x2、兵俑1(普)x2(困)x1
第十二章 （普＋困）童男2x1、童女1x1、童女2x3
御魂二x2、御魂四x1`,
  '河童':
`第七章 （普＋困）河童1x1、河童2x1
番外一‧見習鬼使 （普＋困）山童1x3、山童2x3
祕聞‧河畔童謠 （台）第1層～第10層各x1
御魂二x1`,
  '山童':
`第八章 （普＋困）唐紙傘妖2x1
第十六章 （普＋困）餓鬼123各x2
番外一‧見習鬼使 （普＋困）山童1x1、山童2x1
祕聞‧河畔童謠 （台）第1層～第3層各x3
御魂一x1`,
  '山兔':
`第九章 （普＋困）山兔1x4、山兔2x3
第十六章 （普＋困）餓鬼123各x1
祕聞‧河畔童謠 （陸）第5層－第二回合x1
御魂七x1`,
  '螢草':
`祕聞‧河畔童謠 （台）第7層－第二回合x3
御魂二x1`,
  '管狐':
`第五章 （普＋困）管狐1x2、管狐2x1
第十一章 （普＋困）獨眼小僧2x1、餓鬼1x2、餓鬼2x1
番外一‧見習鬼使 （普＋困）古籠火123各x2
祕聞‧紅葉的羈絆 （台）第1層－第一回合x4、第4層－第一回合x3、第6~10層－第一回合x3`,
  '餓鬼':
`第九章 （普＋困）BOSSx3
第十一章 （普＋困）餓鬼1x1、餓鬼2x3
第十三章 （普＋困）餓鬼123各x1
第十六章 （普＋困）餓鬼123各x1
祕聞‧紅葉的羈絆 （台）第1層－第二回合x4、第4層－第二回合x3、第6~10層－第二回合x3
妖氣封印 餓鬼x3`,
  '鐵鼠':
`第九章 （普＋困）提燈小僧2x2、鐵鼠1x1、鐵鼠2x2、山兔2x1
祕聞‧紅葉的羈絆 （台＋陸）第5層－第三回合x2
妖氣封印 金幣妖怪x18`,
  '首無':
`第十三章 （普＋困）餓鬼3－第二回合x1、唐紙傘妖3－第二回合x1、BOSSx1
番外一‧見習鬼使 山童1x2、山童2x2、(困)酒吞童子x2
祕聞‧紅葉的羈絆 （台）第2層－第三回合x2
祕聞‧河畔童謠 （台）第2層－第二回合x1`,
  '狸貓':
`第十章 （普＋困）傀儡師1x2、覺1x3
第十七章 （普＋困）狸貓123各x1
番外一‧見習鬼使 （困）酒吞童子x3
祕聞‧紅葉的羈絆 （台＋陸）第7層－第三回合x1
祕聞‧妖刀之祕籍 （台＋陸）第1~3層+第9層－第二回合各x4、第4~8層－第二回合各x3`,
  '三尾狐':
`第六章 （普＋困）蝴蝶精－第二回合x1
第十八章 （普＋困）三尾狐123各x2
祕聞‧紅葉的羈絆 （台＋陸）第3層－第三回合x1
祕聞‧妖刀之祕籍 （台＋陸）第5層－第三回合x1
御魂一x1`,
  '巫蠱師':
`第六章 （普＋困）BOSSx1
御魂六x1`,
  '鴉天狗':
`第九章 （普＋困）山兔1－第二回合x1、山兔2－第二回合x1、BOSSx2
第十二章 （普＋困）海坊主2x2、童男1x2、童男2x2
第十七章 （普＋困）鴉天狗123各x1
第十八章 （普＋困）BOSSx3
祕聞‧紅葉的羈絆 （台＋陸）第4層－第三回合x2
祕聞‧妖刀之祕籍 （台＋陸）第6層－第二回合x1、第7層－第二回合x1
御魂六x1`,
  '鯉魚精':
`第七章 （普＋困）鯉魚精1x3、鯉魚精2x1、河童1x1、提燈小僧3x2
祕聞‧河畔童謠 （台）第1層～第10層－第三回合各x1
御魂二x1、御魂三x1`,
  '蝴蝶精':
`第六章 （普＋困）蝴蝶精1x1、蝴蝶精2x1
第八章 （普＋困）BOSSx2
祕聞‧妖刀之祕籍 （台＋陸）第2層－第三回合x3、第4層－第二回合x1、第5層－第二回合x1
御魂三x1`,
  '食髮鬼':
`第十章 （普＋困）BOSSx2
御魂七x1`,
  '九命貓':
`第一章 （普＋困）BOSSx3
第十五章 （普＋困）提燈小僧123各x2、BOSSx3
第十八章 （普＋困）九命貓123各x6、三尾狐123各x2
祕聞‧河畔童謠 （台）第一層－第二回合x1`,
  '獨眼小僧':
`第十一章 （普＋困）武士之靈2x3、獨眼小僧1－第一&二回合各x1、獨眼小僧2－第一&二回合各x1
祕聞‧河畔童謠 （台）第3層－第二回合x1
御魂一x1、御魂五x1`,
  '青蛙瓷器':
`第四章 （普＋困）BOSSx1
祕聞‧河畔童謠 （台）第7層～第10層－第一回合各x3
御魂三x1`,
  '座敷童子':
`第十章 （普＋困）傀儡師2x2、覺2x2
祕聞‧河畔童謠 （台）第2層－第三回合x2
御魂三x2、御魂六x1`,
  '武士之靈':
`第十一章 （普＋困）武士之靈1x1、武士之靈2x1
第十二章 （普＋困）BOSSx2
祕聞‧河畔童謠 （台）第4層～第6層－第二回合各x3`,
  '跳跳弟弟':
`祕聞‧紅葉的羈絆 （台＋陸）第2層－第三回合x1
祕聞‧河畔童謠 （台）第10層－第二回合x1`,
  '跳跳妹妹':
`第十二章 （普＋困）BOSSx1（可用跳哥棺材復活跳妹無限刷法，必須要破棺後打死才算）
祕聞‧紅葉的羈絆 （台＋陸）第2層－第三回合x1`,
  '丑時之女':
`第十章 （普＋困）丑時之女1x1、丑時之女2x1
祕聞‧紅葉的羈絆 （台＋陸）第4層－第三回合x1、第9層－第三回合x1
祕聞‧河畔童謠 （台）第4層－第二回合x1
御魂五x1、御魂七x1`,
  '古籠火':
`第十九章 （普＋困）二口女3x1
番外一‧見習鬼使 （普＋困）古籠火1x1、古籠火2x1、古籠火3x1`,
  '赤舌':
`第三章 （普＋困）赤舌1x1、赤舌2x1
第十五章 （普＋困）天邪鬼123各x1、提燈小僧123各x1
第十六章 （普＋困）赤舌1x1、赤舌2第一&第二回合各x1、赤舌3x1`,
  '帚神':
`第四章 （普＋困）帚神1x1、帚神2x1、BOSSx2
第六章 （普＋困）燈籠鬼1x3、燈籠鬼2x3
第七章 （普＋困）鯉魚精1x1、鯉魚精2x3
第八章 （普＋困）唐紙傘妖1x3、唐紙傘妖2x2、櫻花妖1x1、BOSSx1
第九章 （普＋困）鐵鼠1x3、鐵鼠2x2
第十四章 （普＋困）帚神123各x1
妖氣封印 骨女x4
妖氣封印 二口女x4
妖氣封印 鬼使黑x3
妖氣封印 跳跳哥哥x2`,
  '燈籠鬼':
`第一章 （普）天邪鬼綠2x2、提燈小僧2x2
第一章 （困）提燈小僧2x2
第二章 （普＋困）盜墓小鬼2x2、寄生魂1x2
第三章 （普＋困）赤舌1x2、兵俑2x2
第九章 （普＋困）提燈小僧1x3、提燈小僧2x1、BOSSx1`,
  '寄生魂':
`第二章 （普＋困）帚神x1、盜墓小鬼1x2、寄生魂1x1、寄生魂2x1
第三章 （普＋困）BOSSx3
第五章 （普＋困）管狐1－第二回合x1、管狐2－第二回合x1
第十一章 （普＋困）武士之靈1x3
第十六章 （普＋困）赤舌123各x3`,
  '提燈小僧':
`第一章 （普＋困）天邪鬼綠2x2、提燈小僧1x1、提燈小僧2x1
第三章 （普）赤舌1x1、兵俑1x1、兵俑2x1
第三章 （困）赤舌1x1、兵俑1x2、兵俑2x1
第七章 （普＋困）提燈小僧123各x1
第十五章 （普＋困）提燈小僧123各x1
妖氣封印 海坊主x4
妖氣封印 餓鬼x3
妖氣封印 二口女x4
妖氣封印 鬼使黑x3`,
  '天邪鬼綠':
`第一章 （普＋困）天邪鬼綠1x1、天邪鬼綠2x1、提燈小僧1x2
第五章 （普＋困）管狐2x3
第六章 （普＋困）天邪鬼青1x3、天邪鬼青2x3、BOSSx3
第十三章 （普＋困）唐紙傘妖123各x2
第十五章 （普＋困）天邪鬼綠123各x1
番外一‧見習鬼使 （普＋困）BOSSx3
祕聞‧妖刀之祕籍 （台＋陸）第6層－第一回合x1、第7層－第一回合x1
祕聞‧河畔童謠 （台）第8層－第三回合x1
妖氣封印 椒圖x8
妖氣封印 骨女x6
妖氣封印 跳跳哥哥x4
妖氣封印 餓鬼x6`,
  '天邪鬼赤':
`第四章 （普）唐紙傘妖1x3、唐紙傘妖2x1、天邪鬼赤1x1、天邪鬼赤2x1
第四章 （困）唐紙傘妖1x3、天邪鬼赤1x1、天邪鬼赤2x1
第五章 （普＋困）塗壁1x2、塗壁2x3、帚神1x1、帚神2x1
第六章 （普＋困）蝴蝶精1x2、蝴蝶精2x2
第十一章 （普＋困）獨眼小僧1x2、獨眼小僧2x2
第十三章 （普＋困）餓鬼123各x3、唐紙傘妖123各x1
第十四章 （普＋困）帚神123各x3、BOSSx3
第十五章 （普＋困）天邪鬼綠123各x2
妖氣封印 海坊主x2`,
  '天邪鬼青':
`第六章 （普＋困）天邪鬼青1x1、天邪鬼青2x1
第八章 （普＋困）天邪鬼綠1x1、天邪鬼綠2x1、BOSSx1
第十章 （普＋困）丑時之女1x2、丑時之女2x2
番外一‧見習鬼使 （普＋困）鬼女紅葉1(坐)x2、鬼女紅葉2x2
祕聞‧妖刀之祕籍 （台＋陸）第1~3層－第一回合各x4、第4~9層－第一回合各x3、第10層－第一回合x2
妖氣封印 二口女x3
妖氣封印 跳跳哥哥x3`,
  '天邪鬼黃':
`第三章 （普＋困）天邪鬼黃1x1、天邪鬼黃2x1、赤舌2x1
第五章 （普＋困）帚神2x2、管狐1x2
第八章 （普＋困）天邪鬼綠1x2、天邪鬼綠2x2
妖氣封印 海坊主x3
妖氣封印 椒圖x2`,
  '盜墓小鬼':
`第二章 （普＋困）帚神x1、盜墓小鬼1x1、盜墓小鬼2x1、寄生魂2x2
第十二章 （普＋困）童女1x1、童女2x1
祕聞‧妖刀之祕籍 （台＋陸）第１層－第三回合x3
祕聞‧河畔童謠 （台）第1層～第6層－第一回合各x3`,
  '唐紙傘妖':
`第四章 （普）帚神(坐)x2、唐紙傘妖1x1、唐紙傘妖2x1、天邪鬼赤1x1、天邪鬼赤2x2
第四章 （困）帚神(坐)x3、唐紙傘妖1x1、唐紙傘妖2x1、天邪鬼赤2x2
第八章 （普＋困）唐紙傘妖1x1、唐紙傘妖2x1
第十三章 （普＋困）唐紙傘妖123各x1`,
  '塗壁':
`第三章 （普＋困）天邪鬼黃1x2
第四章 （普）帚神1x2、帚神2x1、唐紙傘妖2x2、天邪鬼赤1x2
第四章 （困）帚神1x2、唐紙傘妖2x3、天邪鬼赤1x3
第五章 （普＋困）塗壁1x1、塗壁2x1、帚神1x2
第八章 （普＋困）櫻花妖1x2、櫻花妖2x3
第十二章 （普＋困）海坊主1x2、海坊主2x1
第十四章 （普＋困）塗壁123各x6
妖氣封印 餓鬼x1
妖氣封印 鬼使黑x4`,
  '跳跳犬':
`第一章 （困）天邪鬼綠1x2
第七章 （普＋困）河童2x2、提燈小僧12各x3、提燈小僧3x1`,
  '黑豹':
`第五章 （普）塗壁1x1
祕聞‧河畔童謠 （陸）第4層－第一回合x3`
}
module.exports = wanted
