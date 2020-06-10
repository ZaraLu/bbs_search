<template>
  <div id="articlePage">
    <el-backtop></el-backtop>
    <el-container>
      <el-header height="100px">
        <div class="head">
          <el-button type="primary" icon="el-icon-arrow-left" @click="backToListPage">返回</el-button>
        </div>
      </el-header>
      <el-main>
        <el-card class="box-card" shadow="always">
          <el-row :gutter="20">
            <el-col :span="16"><div class="title">{{title}}</div></el-col>
            <el-col :span="8"><div class="send_time">{{send_time}}</div></el-col>
          </el-row>
          <el-row>
            <el-divider></el-divider>
              <el-col :span="4">
                <el-row><div class="sender" style="letter-spacing: 0.064em;">作者  {{sender}}</div></el-row>
                <el-row><div class="partition" style="letter-spacing: 0.064em;">版面  {{partition}}</div></el-row>
                <el-row><div class="reply_count" style="letter-spacing: 0.064em;">回帖数  {{reply_count}}</div></el-row>
                <el-row><br class="reply_count" style="letter-spacing: 0.064em;">原帖地址 {{url}}</el-row>
              </el-col>
              <el-col :span="20"><div class="content" v-html="content"></div></el-col>
          </el-row>
        </el-card>
        <div v-for="art in articleListData" :key="art.id">
          <el-card class="reply" >
            <el-col :span="24"><div class="content" style="font-size: 18px;padding-bottom: 18px;">{{art.content}}</div></el-col>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  data () {
    // var striphtml = require('js-striphtml')
    return {
      articleId: 'Kr_5fHEBWwJHAQ4W06II',
      // content: '发信人: buptvis (大数据可视化)\n信区: Visualization\n标 题: 【可视化案例】Life in the camps 集中营里的生活\n发信站: 北邮人论坛 (Mon Oct 21 21:52:29 2019), 站内 Life in the camps 集中营里的生活\n孟加拉国罗辛亚难民区泥泞的山坡上挤满了临时搭建的棚屋，附近的厕所污染了水井，容易迅速传播疾病。卫生专家表示，罗辛亚难民区过度拥挤，卫生条件差，医疗服务有限，是“灾难的根源”。此项目\n是对居民临时避难所生活的近距离的观察和发现。从地理位置宏观的角度分析居民健康与生活设施分布的联系。 \n数据来源：[未开放]Inter Sector Coordination Group (ISCG) 部门间协调小组；REACH Initiative；OpenStreetMap；World Health Organization世界卫生组织；UNHCR;难民署；Reuters路透社\n数据维度: 孟加拉国地图(卫星图像) Kutupalong扩建点的防护卫星图，避难所的区域信息 厕所分布坐标(数据由联合国移民机构 IOM 收集和分析) 临时厕所的坐标，距离厕所太远和太近的收容所区域信息 露天排便区的坐标\n水泵的坐标 霍乱产生的疾病类型所占人数百分比 欧乱时期每日死亡人数以及死因 维度映射: 作品主要在平面上用坐标映射成点，直观反映设施的分布情况； 简单的面积比例图和柱形图清晰反映死亡比例和人数，用不同的颜色\n对疾病进行分类。 设计点: 网页+滚动动效的形式来讲故事，一段段图文结合达到阅读故事的效果，动效增加互动感； 桌面调研、实地调研、专家建议、结合可视化图形传递事实，充分体现作品的完整性和故事的真实性。 \n-- ※ 来源:·北邮人论坛 http://bbs.byr.cn ·[FROM: 10.128.195.*]',
      // content: striphtml.striptags('发信人: jay1427 (咖啡有癮), 信区: SCS<br>标&nbsp;&nbsp;题: 【校招】阿里巴巴数据技术及产品部<br>发信站: 北邮人论坛 (Fri Mar 15 15:53:09 2019), 站内<br><br><a target="_blank" href="http://img.alicdn.com/tfs/TB129NnMkvoK1RjSZFNXXcxMVXa-1500-6270.jpg"><img title="单击此在新窗口浏览图片" src="http://img.alicdn.com/tfs/TB129NnMkvoK1RjSZFNXXcxMVXa-1500-6270.jpg" alt="http://img.alicdn.com/tfs/TB129NnMkvoK1RjSZFNXXcxMVXa-1500-6270.jpg" class="resizeable" style="width: 590px;" border="0"></a><br><br>p.s.同时诚邀P7及以上Java大牛：shengfeng.lsf@alibaba-inc.com<br><br>--<br><br><font class="f000"></font><font class="f003">※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 106.11.34.*]</font><font class="f000"><br></font>', ['b']),
      content: '发信人: iphone (iphone), 信区: Talking<br>标&nbsp;&nbsp;题: 非毕业硕士到底能不能自由返京呀？也没个通知<br>发信站: 北邮人论坛 (Wed Jun 10 14:11:13 2020), 站内<br><br>RT，不用求导师同意那种，大家有信息共享下嘛？比如学院+措施。ps：难道不同学院还有不同政策？<br>--<br><br><font class="f000"></font><font class="f005">※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 39.76.212.*]</font><font class="f000"><br></font><div id="nice_view" class="corner" style="margin:0;display:block"><div class="a-nice-comment-divline"><h3><span>精彩回复</span></h3><h5><a class="a-func-toggle" style="color:#555;" href="#">收起 ▲</a></h5></div><div class="a-nice-comment"><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/MigReady"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/MigReady"><strong style="color:red;">MigReady</strong></a></div><div class="a-nice-comment-content">xt院明说还不能自由返啊<img src="/img/ubb/ema/2.gif" alt="ema2" style="display:inline;border-style:none"></div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Talking/6201581?s=6201615">第12楼</a></li><li><a href="/article/Talking/ajax_voteup/6201615.json" class="a-func-like" id="like_list6201615"><samp class="ico-pos-zaninactive" id="icon_like_list6201615"></samp>赞(3)</a></li><li><a href="/article/Talking/ajax_votedown/6201615.json" id="listCai6201615" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai6201615"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Talking/post/6201615" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">我开始怀疑，在这个世界上，还有什么是不会过期的。 7/10</a></li></ul></div></div></div><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/sheis"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/sheis">sheis</a></div><div class="a-nice-comment-content">xt院真的无语了，直接说返京没变，别被其他的消息影响，我尼玛</div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Talking/6201581?s=6201619">第13楼</a></li><li><a href="/article/Talking/ajax_voteup/6201619.json" class="a-func-like" id="like_list6201619"><samp class="ico-pos-zaninactive" id="icon_like_list6201619"></samp>赞(2)</a></li><li><a href="/article/Talking/ajax_votedown/6201619.json" id="listCai6201619" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai6201619"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Talking/post/6201619" class="a-post">回复</a></li></ul></div></div></div></div></div><!--成就解锁：彩蛋2号获得！输入魂斗罗秘籍可解锁彩蛋3号。hint： IE 0=A  1=B--来自bbs.byr.cn---->',
      // content: '"发信人: lianji (【意涵团】shmily), 信区: Clothing 标  题: 男生们都爱穿哪种鞋啊~ 发信站: 北邮人论坛 (Thu Aug 20 16:22:03 2015), 站内 BYR第8个年头了，第一次上十大~好开森！ 在国企上班，想搞点副业，刚好有个靠谱渠道，就问了下大家都喜欢穿什么牌子的鞋，一觉醒来发现十大了~ 总结了下：拖鞋、洞洞鞋居多。。。其次ASICS、阿迪的贝壳貌似很受欢迎，AJ、NB也有很多粉丝~还有那些高大上的牌子估计一般人也穿不起吧~   谢谢大家~ ======================================================================= rt  北邮的男生们都爱穿哪种鞋啊，有木有偏爱的牌子捏？！ -- ※ 修改:·lianji 于 Aug 21 15:39:44 2015 修改本文·[FROM: 221.130.253.*] ※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 221.130.253.*] <h3><span>精彩回复</span></h3><h5><a class="a-func-toggle" style="color:#555;" href="#">收起 ▲</a></h5><a class="a-nice-comment-face" href="/user/query/deepocean"><img src="https://bbs.byr.cn/uploadFace/D/deepocean.2109.jpg"></a><a href="/user/query/deepocean"><strong style="color:red;">deepocean</strong></a>不服来辩。 <a target="_blank" href="/att/Clothing/0/38912/341"><img border="0" title="TB11xS5GXXXXXaRXFXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg" src="/att/Clothing/0/38912/341" alt="TB11xS5GXXXXXaRXFXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg" class="resizeable"></a> 【 在 lianji 的大作中提到: 】 : rt  北邮的男生们都爱穿哪种鞋啊，有木有偏爱的牌子捏？！<ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Clothing/38883?s=38912">第27楼</a></li><li><a href="/article/Clothing/ajax_voteup/38912.json" class="a-func-like" id="like_list38912"><samp class="ico-pos-zaninactive" id="icon_like_list38912"></samp>赞(78)</a></li><li><a href="/article/Clothing/ajax_votedown/38912.json" id="listCai38912" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai38912"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Clothing/post/38912" class="a-post">回复</a></li></ul><a class="a-nice-comment-face" href="/user/query/YUEYE"><img src="https://bbs.byr.cn/uploadFace/Y/YUEYE.8415.jpg"></a><a href="/user/query/YUEYE">YUEYE</a>（更新最重要想信息，Timberland天猫旗舰店最近5,6折。非常划算，我几周前刚刚买一双，便宜了500多块。尤其是8月24到8月26天猫有活动，又便宜了很多。很适合现在入手买鞋子。不然以后又恢复原价了。我刚刚看了大部分都便宜了将近一半。） -------更新之前的信息------------- 看到楼里面也有几个人给大家推荐Timberland。我就把我最喜欢Timberland，也给大家推荐一下。我买过的Timberland里我觉得最好的几双鞋子。我以前拍过的照片：（最近刚刚入手一双，就是电脑前那双） <a target="_blank" href="/att/Clothing/0/38968/994"><img border="0" title="QQ图片20150821130001.jpg" src="/att/Clothing/0/38968/994" alt="QQ图片20150821130001.jpg" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/38968/90618"><img border="0" title="QQ图片20150821130016.jpg" src="/att/Clothing/0/38968/90618" alt="QQ图片20150821130016.jpg" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/38968/314594"><img border="0" title="QQ图片20150821130022.jpg" src="/att/Clothing/0/38968/314594" alt="QQ图片20150821130022.jpg" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/38968/476191"><img border="0" title="QQ图片20150821130051.jpg" src="/att/Clothing/0/38968/476191" alt="QQ图片20150821130051.jpg" class="resizeable"></a> 网上的照片： <a target="_blank" href="/att/Clothing/0/38968/898412"><img border="0" title="QQ图片20150821130030.jpg" src="/att/Clothing/0/38968/898412" alt="QQ图片20150821130030.jpg" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/38968/918667"><img border="0" title="QQ图片20150821130035.jpg" src="/att/Clothing/0/38968/918667" alt="QQ图片20150821130035.jpg" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/38968/954126"><img border="0" title="QQ图片20150821130043.jpg" src="/att/Clothing/0/38968/954126" alt="QQ图片20150821130043.jpg" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/38968/977752"><img border="0" title="QQ图片20150821130058.jpg" src="/att/Clothing/0/38968/977752" alt="QQ图片20150821130058.jpg" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/38968/1046236"><img border="0" title="QQ图片20150821130105.jpg" src="/att/Clothing/0/38968/1046236" alt="QQ图片20150821130105.jpg" class="resizeable"></a> 最最重要的是： 天猫Timberland旗舰店最近5,6折。非常划算。尤其是8月24到8月26<ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Clothing/38883?s=38968">第80楼</a></li><li><a href="/article/Clothing/ajax_voteup/38968.json" class="a-func-like" id="like_list38968"><samp class="ico-pos-zaninactive" id="icon_like_list38968"></samp>赞(7)</a></li><li><a href="/article/Clothing/ajax_votedown/38968.json" id="listCai38968" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai38968"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Clothing/post/38968" class="a-post">回复</a></li></ul><a class="a-nice-comment-face" href="/user/query/ruok"><img src="https://bbs.byr.cn/uploadFace/R/ruok.9911.jpg"></a><a href="/user/query/ruok">ruok</a>adadis<ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Clothing/38883?s=38925">第40楼</a></li><li><a href="/article/Clothing/ajax_voteup/38925.json" class="a-func-like" id="like_list38925"><samp class="ico-pos-zaninactive" id="icon_like_list38925"></samp>赞(5)</a></li><li><a href="/article/Clothing/ajax_votedown/38925.json" id="listCai38925" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai38925"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Clothing/post/38925" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">我开始怀疑，在这个世界上，还有什么是不会过期的。 7/10</a></li></ul><a class="a-nice-comment-face" href="/user/query/offer123"><img src="https://bbs.byr.cn/uploadFace/O/offer123.1324.jpg"></a><a href="/user/query/offer123">offer123</a>似乎看到了几个酸葡萄，自己品味一般就别冷嘲热讽别人。每个人都有权推荐自己喜欢的。干嘛要讽刺别人。你也可以推荐你喜欢的呀。论坛总有一种人，通过讽刺抨击别人来得到自己内心的满足。其实就是对现实的不满，自己现实到底都什么样自己清楚。看到别人围了一条爱马仕大腰带就立马说高仿，看到别人拎限量版lv就说是被包养的。我怎么这么讨厌这些酸葡萄呢。  尤其是在某几个版块（求职，化妆）就是有一种人，别人写经验贴之类的，他（她）就在旁边冷嘲热讽的，有本事你也写呀。自己写不出来就别bb。 板鞋，休闲鞋推荐奥尔高，英伦风十足： <a target="_blank" href="/att/Clothing/0/39037/979"><img border="0" title="NRYHN7(8]8HW{0HUFQ11PMN.png" src="/att/Clothing/0/39037/979" alt="NRYHN7(8]8HW{0HUFQ11PMN.png" class="resizeable"></a> <a target="_blank" href="/att/Clothing/0/39037/292959"><img border="0" title="S)~$AXHPS%K4Z7KR2Z%MVHQ.png" src="/att/Clothing/0/39037/292959" alt="S)~$AXHPS%K4Z7KR2Z%MVHQ.png" class="resizeable"></a> 拖鞋推荐EE&amp;XX <a target="_blank" href="/att/Clothing/0/39037/612101"><img border="0" title="ZT1JNO3KN`~9%7X~~KWS252.png" src="/att/Clothing/0/39037/612101" alt="ZT1JNO3KN`~9%7X~~KWS252.png" class="resizeable"></a> （楼主要是真心想赚钱，就应该多了解点。）<ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Clothing/38883?s=39037">第144楼</a></li><li><a href="/article/Clothing/ajax_voteup/39037.json" class="a-func-like" id="like_list39037"><samp class="ico-pos-zaninactive" id="icon_like_list39037"></samp>赞(2)</a></li><li><a href="/article/Clothing/ajax_votedown/39037.json" id="listCai39037" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai39037"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Clothing/post/39037" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">Tomorrow is another day. 4/10</a></li></ul><a class="a-nice-comment-face" href="/user/query/l2011211878"><img src="https://bbs.byr.cn/uploadFace/L/l2011211878.7488.gif"></a><a href="/user/query/l2011211878">l2011211878</a>哎呀呀瞅见了个我能答得哈哈哈哈哈好激动啊好激动<img src="/img/ubb/ema/3.gif" alt="ema3" style="display:inline;border-style:none"><img src="/img/ubb/ema/3.gif" alt="ema3" style="display:inline;border-style:none"><img src="/img/ubb/ema/3.gif" alt="ema3" style="display:inline;border-style:none"> 首推鬼冢虎啊啊啊！！！一百多年的品牌啊啊啊，Nike最早也只是鬼冢虎在美国开的一家代售店的名字啊啊啊后来才独立出去成就了今天这个样子！今天的北京世锦赛不知大家关注了木有，男子马拉松队伍里一片片全是ASICS啊有木有，想当年它只是鬼冢虎旗下一个专做运动系列的小品牌啊，如今却统治了整个地球的田径赛场啊哈哈哈哈。只可惜造化弄人最后的最后鬼冢虎却被自己的子公司亚瑟士给并购了......但是这仍然不能撼动鬼冢虎在世界人民心目中的王者地位啊啊啊。 忘说了，鬼冢虎是做休闲鞋起家的，所以，要买就买休闲系列的吧。价格800-2000不等，绝对不会错 亚瑟士放到第二，上面说了，专业跑步者只会选择亚瑟士！懂的人自然懂，别跟我提Nike，要不我会呵呵你哒~ 亚瑟士做运动鞋起家，所以，推荐运动鞋，尤其是跑鞋，那不是Nike鞋能比的。价格600+（海淘会便宜很多，港台地区最低只有400RMB左右） DC第三吧。其实喜欢了好久好久，前不久才买了一双，大家一致评价太骚气，想不明白大家为什么看不到那些比Nike休闲系列精致的细节呢。。。DC可是有来头的，美国最早的冲浪鞋王牌，发展到今天的冲浪系列休闲系列blablabla，评价就是三个字，品质好！他们家不做运动鞋，想买DC运动鞋的绕道吧。 DC做冲浪鞋滑板鞋起家，所以推荐冲浪鞋滑板鞋，绝对是街头最抢眼的，相信我。价格相当良心，最便宜的400多一点。 Dickies放到第四。美国工装品牌老大，做鞋只是近几十年的事但是品牌诞生113年了，我的最爱啊啊啊哈哈哈哈哈，我才不会说我柜子里有5件Dickies的T恤和裤子<img src="/img/ubb/ema/20.gif" alt="ema20" style="display:inline;border-style:none"><img src="/img/ubb/ema/20.gif" alt="ema20" style="display:inline;border-style:none"> Dickies做工装起家，所以鞋子也是工装鞋最好，冬季牛皮鞋搭配一条Wrangler的牛仔裤马上穿出了经典英伦风了有木有！价格良心，400起，最贵也就800。 Nike出场！靠着烧钱砸广告出名的Nike一帆风顺地统治了世界的足球场和篮球场大半个江山，连Adidas也要服个软，但是说实话人家越烧钱越有钱，所以给那些足球篮球明星们做出了最能让教爽的鞋，哪个喜欢C罗的不买双Nike来穿？所以结果很明白，Nike是球鞋市场的老大，阿迪你别争。 其实Nike做运动鞋起家，但还是推荐球鞋，跑步鞋除了亚瑟士也推荐Nike，别的跑步鞋真的也就将就了。价格大家都知道。 The Thing不能不放到第六。现在牛逼了涨价速度比A股的牛市还快，所以我也不敢买了，尼玛比DC贵那么多！！凭什么，质量很OK不怀疑但是大学生里能经常消费得起的人不多。 他家做潮牌起家，但现在一点都不潮。你说什么？美国的街头乐队人人一双？他们在美国便宜啊哈哈哈。推荐冬季款，一般夏季出的款我不敢看，画面太美。。。 CLOT来也~冠希哥一手打造的潮牌，想说第一次看到时其实我的内心是崩溃的，你说为啥？我驾驭不了啊啊啊哈哈哈，拖鞋很潮很潮的，沙滩鞋休闲鞋也不错，做了两年还好了些，可以拿来审美了，正想买一双来穿穿，应该不会太差。之所以没穿过就推荐是因为冠希哥家的衣服面料实在是太好了，努力看齐I.T.啊啊啊，值得表扬，所以我觉得鞋子的材料和质量必然不差。 推荐凉鞋沙滩鞋，价格比一般凉鞋略贵，就酱紫。 其实匡威，鳄鱼，阿玛尼的鞋子都不错，匡威风格明显，价格适中，鳄鱼略商务，适合刚毕业的学生，阿玛尼很贵但是攒几个月钱买一双来搭配西装还是绝对有逼格的，官网经常打折，相当实惠。当然如果你不穿西装的话就算了。 发言到此结束！ 想说明的是大家不要再说什么阿迪New Balence了，冒牌货烂大街啊啊啊有木有，简直成了屌丝的代名词！谁说不是你来咬我啊~ 最后说明一下，因为LZ说的是给学生们销售，所以我提到的都是自己和身边男生们穿的潮牌和看着比较有活力的，什么意大利品牌牛皮鞋兔皮鞋真心不适合大学生们穿，也没几个人消费得起，动辄好几千甚至上万的没那必要。<ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Clothing/38883?s=39061">第168楼</a></li><li><a href="/article/Clothing/ajax_voteup/39061.json" class="a-func-like" id="like_list39061"><samp class="ico-pos-zaninactive" id="icon_like_list39061"></samp>赞(2)</a></li><li><a href="/article/Clothing/ajax_votedown/39061.json" id="listCai39061" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai39061"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Clothing/post/39061" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">我猜着了开头，但我猜不中这结局。1/10</a></li></ul><a class="a-nice-comment-face" href="/user/query/byrRbyr"><img src="https://bbs.byr.cn/img/face_default_f.jpg"></a><a href="/user/query/byrRbyr">byrRbyr</a>我只穿下面的… quascutum（中译 拒水、雅格狮丹） Ermenegildo Zegna） TRUSSARDI 范思哲 克里斯汀 迪奥（Christian Dior） 乔治·阿玛尼（Giorgio Armani） 登喜路 Gucci Ferragamo DAKS 切瑞蒂(cerruti) valentino 瓦伦蒂诺 卡尔文克莱恩（calvin klein） 拉夫·劳伦ralph lauren PRADA<ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Clothing/38883?s=38959">第74楼</a></li><li><a href="/article/Clothing/ajax_voteup/38959.json" class="a-func-like" id="like_list38959"><samp class="ico-pos-zaninactive" id="icon_like_list38959"></samp>赞(3)</a></li><li><a href="/article/Clothing/ajax_votedown/38959.json" id="listCai38959" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai38959"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Clothing/post/38959" class="a-post">回复</a></li></ul><!--成就解锁：彩蛋2号获得！输入魂斗罗秘籍可解锁彩蛋3号。hint： IE 0=A 1=B--来自bbs.byr.cn---->"\n',
      // content: '发信人: kksuzyjane (kksuzyjane), 信区: Friends<br>标&nbsp;&nbsp;题: 93年女生征友（更新照片）<br>发信站: 北邮人论坛 (Mon Jun&nbsp;&nbsp;8 19:28:11 2020), 站内<br><br>最近身边的朋友都陆续的脱单、领证，所以我也要更加努力的脱单才行！嗯，下面是基本情况<img src="/img/ubb/ema/0.gif" alt="ema0" style="display:inline;border-style:none"><br>【我】<br>1、93年，身高160，体重43kg，211研究生<br>2、金融行业工作，京户同时单位可以解决配偶户口，但是家里给不了啥帮助，所以以后留北京或者去其他地方发展都可<br>3、性格有点慢热，比较独立，脾气温和<br>4、喜欢看电影，以前没事就照着豆瓣top250刷电影，喜欢猫<br>哈哈 以及最近迷上了看历史节目 <br>【希望你】<br>1、身高173+，年龄96-89之间<br>2、合眼缘，三观正，有上进心和责任感，懂得体贴照顾人，没有过于复杂的感情经历<br>喜欢猫加分 喜欢吃辣加分～<br>希望可以在论坛上找到一个互相喜欢的人，一起完成情侣100件事，谈一场不分手的恋爱<br>最后的最后，留个邮箱kkwaitingforyou@163.com<br>非诚勿扰 附照必回！<br>--<br><br><a target="_blank" href="/att/Friends/0/1962746/726686"><img title="53E0C48B-9CF0-4013-8E7D-EACAFE4E1CB2.jpeg" src="/att/Friends/0/1962746/726686" alt="53E0C48B-9CF0-4013-8E7D-EACAFE4E1CB2.jpeg" class="resizeable" style="width: 590px;" border="0"></a><br><font class="f006">※ 修改:·kksuzyjane 于 Jun&nbsp;&nbsp;9 18:21:17 2020 修改本文·[FROM: 60.10.17.*]</font><font class="f000"><br></font><font class="f000"></font><font class="f001">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 114.255.29.*]</font><font class="f000"><br></font><br><a target="_blank" href="/att/Friends/0/1962746/1007"><img title="84821-1EBE-4F45-9E71-03F8D71C33B7-78567-0000156EE0DD1ADD.jpg" src="/att/Friends/0/1962746/1007" alt="84821-1EBE-4F45-9E71-03F8D71C33B7-78567-0000156EE0DD1ADD.jpg" class="resizeable" style="width: 590px;" border="0"></a><div id="nice_view" class="corner" style="margin:0;display:block"><div class="a-nice-comment-divline"><h3><span>精彩回复</span></h3><h5><a class="a-func-toggle" style="color:#555;" href="#">收起 ▲</a></h5></div><div class="a-nice-comment"><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/jeekeung"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/jeekeung"><strong style="color:red;">jeekeung</strong></a></div><div class="a-nice-comment-content">脸上长了个手机，这种照片已经看腻了</div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Friends/1962746?s=1962766">第8楼</a></li><li><a href="/article/Friends/ajax_voteup/1962766.json" class="a-func-like" id="like_list1962766"><samp class="ico-pos-zaninactive" id="icon_like_list1962766"></samp>赞(91)</a></li><li><a href="/article/Friends/ajax_votedown/1962766.json" id="listCai1962766" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai1962766"></samp>踩(9)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Friends/post/1962766" class="a-post">回复</a></li></ul></div></div></div><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/hepangpang"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/hepangpang">hepangpang</a></div><div class="a-nice-comment-content">我也是南方省份的，能再说说是哪个省吗？<br>【 在 kksuzyjane 的大作中提到: 】<br>: 南方某个没什么存在感的省</div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Friends/1962746?s=1962883">第19楼</a></li><li><a href="/article/Friends/ajax_voteup/1962883.json" class="a-func-like" id="like_list1962883"><samp class="ico-pos-zaninactive" id="icon_like_list1962883"></samp>赞(3)</a></li><li><a href="/article/Friends/ajax_votedown/1962883.json" id="listCai1962883" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai1962883"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Friends/post/1962883" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">每个人都在忙，要么忙着活，要么忙着死。 6/10</a></li></ul></div></div></div><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/poetry"><img src="https://bbs.byr.cn/uploadFace/P/poetry.4102.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/poetry">poetry</a></div><div class="a-nice-comment-content">中国通史 百集大片 b站 敬请关注 敲好看 你值得拥有<img src="/img/ubb/emb/0.gif" alt="emb0" style="display:inline;border-style:none"></div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Friends/1962746?s=1962754">第5楼</a></li><li><a href="/article/Friends/ajax_voteup/1962754.json" class="a-func-like" id="like_list1962754"><samp class="ico-pos-zaninactive" id="icon_like_list1962754"></samp>赞(4)</a></li><li><a href="/article/Friends/ajax_votedown/1962754.json" id="listCai1962754" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai1962754"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Friends/post/1962754" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">对不起，我是警察。 3/10</a></li></ul></div></div></div><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/andlase"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/andlase">andlase</a></div><div class="a-nice-comment-content">预测这个贴的走向：南方没有存在感的省份-&gt;江西-&gt;江西彩礼高是真的吗?<br>【 在 hepangpang 的大作中提到: 】<br>: 我也是南方省份的，能再说说是哪个省吗？</div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Friends/1962746?s=1962940">第43楼</a></li><li><a href="/article/Friends/ajax_voteup/1962940.json" class="a-func-like" id="like_list1962940"><samp class="ico-pos-zaninactive" id="icon_like_list1962940"></samp>赞(11)</a></li><li><a href="/article/Friends/ajax_votedown/1962940.json" id="listCai1962940" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai1962940"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Friends/post/1962940" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">我胡汉三又回来了！ 5/10</a></li></ul></div></div></div><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/luoren"><img src="https://bbs.byr.cn/uploadFace/L/luoren.1537.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/luoren">luoren</a></div><div class="a-nice-comment-content">可惜不在北京，bd</div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Friends/1962746?s=1962753">第4楼</a></li><li><a href="/article/Friends/ajax_voteup/1962753.json" class="a-func-like" id="like_list1962753"><samp class="ico-pos-zaninactive" id="icon_like_list1962753"></samp>赞(4)</a></li><li><a href="/article/Friends/ajax_votedown/1962753.json" id="listCai1962753" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai1962753"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Friends/post/1962753" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">听过无数的道理，可依然过不好这一生 2/10</a></li></ul></div></div></div><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/caida0204"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/caida0204">caida0204</a></div><div class="a-nice-comment-content">这颜值可以了<img src="/img/ubb/emb/6.gif" alt="emb6" style="display:inline;border-style:none"></div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Friends/1962746?s=1962886">第20楼</a></li><li><a href="/article/Friends/ajax_voteup/1962886.json" class="a-func-like" id="like_list1962886"><samp class="ico-pos-zaninactive" id="icon_like_list1962886"></samp>赞(5)</a></li><li><a href="/article/Friends/ajax_votedown/1962886.json" id="listCai1962886" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai1962886"></samp>踩(1)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Friends/post/1962886" class="a-post">回复</a></li></ul></div></div></div></div></div><!--成就解锁：彩蛋2号获得！输入魂斗罗秘籍可解锁彩蛋3号。hint： IE 0=A  1=B--来自bbs.byr.cn---->',
      partition: 'Visualization',
      reply_count: 3,
      send_time: '2019-10-21',
      sender: 'buptvis',
      title: '【可视化案例】Life in the camps 集中营里的生活',
      url: 'https://bbs.byr.cn/article/Visualization/463',
      articleListData: [
        {
          id: '1',
          title: '张文宏谈五一假期出游',
          send_time: '2019-10-21',
          sender: 'buptvis',
          reply_count: 3,
          partition: 'Visualization',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '2',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '3',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '4',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '5',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '6',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '7',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '8',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '9',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }, {
          id: '10',
          title: '张文宏谈五一假期出游',
          content: '随着北京朝阳区疫情风险等级降为低风险,全国已无高风险地区的好消息让不少人摩拳擦掌,准备五一出游好好放飞自己'
        }]
    }
  },
  created () {
    this.keyWord = this.$route.params.keyWord
    // console.log(this.$route.params.pageParams)
  },
  methods: {
    // searchDefault () {
    //   this.$router.push({ name: 'listPage', params: { keyWord: this.keyWord } })
    // },
    backToListPage () {
      this.$router.push({ name: 'listPage', params: { pageParams: this.$route.params.pageParams } })
    }
  }
}
</script>

<style lang="less">
  #articlePage .head {
    /*background-color: #B3C0D1;*/
    color: #333;
    height: 100px;
    width: 1260px;
    padding-top: 15px;
    padding-left: 5px;
  }
  #articlePage .log {
    float: left;
    height: 70px;
    margin: 10px auto;
  }
  #articlePage .el-form {
    float: left;
    margin: 20px auto;
  }
  #articlePage .reply {
    border-radius: 20px;
  }
  #articlePage .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 0;
  }
  #articlePage .searchBox .el-form-item__content{
    width: 500px;
  }
  #articlePage .searchBox .el-input__inner {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  #articlePage .searchBox .el-input-group__append, .el-input-group__prepend {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  #articlePage .searchBox .el-input-group{
    width: 100%;
  }
  #articlePage .searchBox .el-input--medium .el-input__inner {
    height: 50px;
  }
  #articlePage .sortRole {
    margin-left: 20px;
    margin-top: 10px;
  }
  #articlePage .el-button [class*=el-icon-]+span {
    margin-left: 0;
  }
  #articlePage .el-range-editor--mini.el-input__inner {
    width: 205px;
  }
  #articlePage .timePicker{
    width: 205px;
    display: inline-block;
  }

  #articlePage .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  #articlePage .el-col {
    border-radius: 4px;
  }
  #articlePage .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  #articlePage .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  #articlePage div.el-col-16:nth-child(2) {
    padding-left: 100px;
    padding-right: 10px;
    padding-top: 20px;
  }
  #articlePage .title {
    font-size: 35px;
    font-weight: 600;
    margin: 10px auto;
  }
  #articlePage .send_time {
    font-size: 15px;
    text-align: right;
    margin: 10px auto;
  }
  #articlePage div.el-card:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
    margin: auto;
  }
  #articlePage div.el-card:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) {
    margin: 5px auto;
  }
  #articlePage .content {
    line-height: 1.6;
    height: auto;
    /*overflow-y: scroll;*/
    font-size: 14px;
    letter-spacing: 0.069em;
    font-weight: 300;
  }
  #articlePage .el-card {
    border:1px solid #EBEEF5;
    background-color:#FFF;
    color:#303133;
    transition:.3s;
    margin-bottom: 30px;
  }
  .t-btn a {
    display:inline-block;
    text-align:center;
    font-size:14px;
    margin-right:4px;
    padding:2px 6px;
    padding:3px 6px 1px\9
  }
  .t-btn a:hover {
    color:#FFF
  }
  .t-btn .input {
    font-size:12px;
    margin-right:5px
  }
  .t-btn .rss {
    padding:0;
    vertical-align:bottom
  }
  .t-btn label {
    margin-right:5px;
    margin-left:2px;
    vertical-align:middle
  }
  .page {
    float:right;
    padding-top:2px;
    *padding-top:0
  }
  .t-pre,
  .t-pre-bottom {
    margin-top:2px;
    width:100%
  }
  .t-pre-bottom .t-btn {
    margin-left:5px
  }
  .b-head div {
    cursor:pointer
  }
  .b-content {
    padding:1px 0;
    border:0 none;
    margin-top:0
  }
  .a-comment {
    margin-top:6px;
    padding:10px;
    border:1px solid #ddd;
    background-color:#f9f9f9
  }
  .a-comment-txt {
    margin-right:88px
  }
  .a-comment-txt textarea {
    width:100%;
    height:60px;
    font-size:12px;
    padding:5px
  }
  .a-comment-btn {
    float:right
  }
  .a-comment-btn .button {
    height:70px;
    width:70px;
    cursor:pointer
  }
  .a-nice-comment {
    border:1px solid #BDCAD0;
    margin-right:160px;
    width:750px
  }
  .a-nice-comment img {
    max-width:650px
  }
  .a-nice-comment-item {
    padding:10px 0 25px;
    margin:0 20px;
    width:710px
  }
  .a-nice-comment-func li:first-child {
    margin-left:5px;
    *margin_left:2px
  }
  .a-nice-comment-item + .a-nice-comment-item {
    border-top:1px solid #ddd
  }
  .a-nice-comment-face {
    float:left;
    margin-top:3px
  }
  .a-nice-comment-face img {
    width:30px
  }
  .a-nice-comment-cell {
    margin-left:45px;
    min-height:30px
  }
  .a-nice-comment-id {
    margin-bottom:5px
  }
  .a-nice-comment-id a {
    color:#4F7DC2
  }
  .a-nice-comment-content {
    margin-bottom:5px
  }
  .a-nice-comment-floor {
    color:#888;
    margin:0 5px 0 -5px
  }
  .a-nice-comment-divline {
    margin:40px 0 20px;
    height:0;
    width:750px;
    font-size:0;
    border-top:1px solid #D2D2D2;
    border-bottom:1px solid #FFF;
    position:relative
  }
  .a-nice-comment-divline h3 {
    color:#1E90FF;
    font-size:14px;
    margin:-10px 0 0 1px;
    width:9%;
    background-color:#FFF
  }
  .a-nice-comment-divline h5 {
    color:#555;
    margin:-20px 0 0 700px;
    font-size:12px;
    width:9%;
    background-color:#FFF;
    text-align:center
  }
  #spb-wrap {
    position:fixed;
    z-index:1000;
    width:auto;
    height:auto;
    bottom:88px;
    border:1px outset #BBB;
    pading:1px;
    -moz-box-shadow:0 0 3px #bbb;
    -webkit-box-shadow:0 0 3px #BBB;
    -box-shadow:0 0 3px #bbb
  }
  #spb-container {
    position:relative;
    z-index:1001;
    display:table;
    margin:0;
    padding:0 8px 0 4px;
    width:auto;
    height:auto;
    border-radius:1px;
    box-shadow:0 1px 3px rgba(0,0,0,0.3);
    color:#fff;
    white-space:pre-wrap;
    word-break:break-all;
    font-weight:bold;
    font-size:12px;
    line-height:24px;
    *display:block;
    background-color:#30B4D5;
    border-color:#258bcf
  }
  #spb-container a {
    color:#fff;
    font-size:14px
  }
  .a-content2 .a-background {
    background:rgb(243,245,253);
    margin-top:20px;
    margin-left:25px;
    width:250px;
    padding-left:20px;
    padding-top:20px;
    padding-right:50px;
    border:1px solid #eee
  }
  .a-content2 .a-background p {
    /*font-family:宋体,Lucida Grande,Lucida Sans,Verdana,Arial,sans-serif;*/
    color:#2244bb;
    font-size:15px;
    margin-bottom:5px
  }
  .a-func-dispCai {
    margin-top:5px;
    margin-bottom:10px
  }
  .a-wrap {
    border:1px solid #d4e6fc;
    margin:3px 0
  }
  .article {
    width:100%
  }
  .article td {
    vertical-align:top;
    background-color:#f3f5fc
  }
  .a-left {
    width:170px;
    border-right:1px solid #d4e6fc
  }
  .a-pos {
    float:right;
    font-size:12px;
    color:#2244bb;
    padding-right:5px;
    padding-top:2px
  }
  .a-status {
    float:left
  }
  .a-status li {
    height:16px;
    line-height:16px;
    text-align:center;
    margin-left:10px;
    display:inline-block;
    *display:inline;
    *zoom:1
  }
  .a-status li samp {
    width:16px;
    height:18px
  }
  .a-status li a {
    font-size:12px;
    color:#2244bb;
    vertical-align:middle;
    padding-top:2px;
    *zoom:1
  }
  .a-func {
    float:left;
    font-size:0
  }
  .a-func li {
    margin-left:10px;
    display:inline-block;
    *display:inline;
    *zoom:1
  }
  .a-func li a {
    font-size:12px;
    color:#2244bb;
    vertical-align:middle;
    padding-top:2px;
    *zoom:1
  }
  .a-func li span {
    font-size:12px
  }
  .a-func li samp {
    margin-right:4px;
    width:16px;
    height:16px
  }
  .a-func-info li {
    margin-left:6px
  }
  .a-u-name {
    float:left;
    margin-left:15px;
    font-weight:bold;
    padding-top:2px
  }
  .a-u-focus {
    float:right
  }
  .a-u-sex {
    float:right;
    margin-right:8px;
    padding-left:8px
  }
  .a-u-sex samp {
    width:15px;
    height:17px
  }
  .a-u-img {
    width:124px;
    margin:12px auto 8px
  }
  .a-u-img img {
    display:block;
    border:1px solid #CCC;
    padding:2px
  }
  .a-u-uid,
  .a-u-info {
    width:120px;
    margin:auto;
    margin-bottom:8px
  }
  .a-u-uid {
    color:#000
  }
  .a-u-info {
    overflow:hidden
  }
  .a-u-info dt,
  .a-u-info dd {
    color:#666;
    line-height:1.4em;
    float:left;
    height:1.4em;
    overflow:hidden
  }
  .a-u-info dt {
    width:50px
  }
  .a-u-info dd {
    width:70px;
    color:#000
  }
  .a-u-title {
    width:14px;
    height:14px;
    margin-left:2px;
    vertical-align:text-bottom
  }
  .a-u-title-info {
    width:22px;
    height:22px;
    margin-right:5px
  }
  .a-u-title-name {
    font-size:16px;
    font-weight:bold
  }
  .a-content {
    padding:10px;
    font-size:13px;
    line-height:1.4
  }
  .a-content .a-content-wrap {
    vertical-align:bottom
  }
  .a-content img {
    display:inline
  }
  .a-content img.resizeable {
    -moz-box-shadow:3px 3px 6px #333;
    -webkit-box-shadow:3px 3px 6px #333;
    box-shadow:3px 3px 6px #333;
    margin-right:8px;
    margin-bottom:8px;
    *margin:0;
    *border:1px solid #CCC;
    *padding:2px
  }
  .a-content a {
    color:#00f
  }
  .a-content a:hover {
    text-decoration:underline
  }
  .a-head {
    height:22px
  }
  .a-head td {
    border-top-width:0;
    vertical-align:middle
  }
  .a-body td {
    background-color:#FFF
  }
  .a-bottom {
    color:#2244bb;
    font-size:12px;
    height:23px
  }
  .a-bottom td {
    border-bottom-width:0;
    vertical-align:middle
  }
  .a-back {
    float:right;
    padding-right:5px
  }
  #a_forward li {
    padding:4px 0 4px 4px
  }
  #a_forward li span {
    padding-right:4px
  }
  #a_forward .input-text {
    width:120px;
    margin-right:4px
  }
  #a_cross li {
    padding:4px 0 4px 4px
  }
  #a_cross li span {
    padding-right:4px
  }
  #a_cross .input-text {
    width:120px;
    margin-right:4px
  }
  #a_cross .warning {
    border:1px solid #C3D9FF;
    background-color:#fafafa
  }
  #a_cross .warning span {
    color:red;
    padding-right:0
  }
</style>
