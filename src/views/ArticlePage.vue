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
            <div class="sender" style="letter-spacing: 0.107em;font-size: 14px;font-weight: 300;">
              <a>{{sender}}</a> 在 <a>{{partition}}</a> 这个版面水了一贴……，居然有 <a>{{reply_count}}</a> 个人理TA
            </div>
<!--            <el-col :span="6"><div class="sender" align="right" style="letter-spacing: 0.064em;">{{sender}}在</div></el-col>-->
<!--            <el-col :span="6"><div class="partition" style="letter-spacing: 0.064em;">{{partition}}这个版面</div></el-col>-->
<!--            <el-col :span="6"><div class="reply_count" style="letter-spacing: 0.064em;">回帖数  {{reply_count}}</div></el-col>-->

            <el-divider></el-divider>
            <el-col :span="24" align="center"><el-link @click="gotoOrigin" style="letter-spacing: 0.064em;color: #1E90FF">点我看原帖</el-link></el-col>
<!--            <el-col :span="18"><div class="content" v-html="content"></div></el-col>-->
          </el-row>
        </el-card>
        <div v-for="art in comments" :key="art.id">
<!--        <div v-for="art in articleListData" :key="art.id">-->
        <el-card class="reply" >
          <el-col :span="24"><div style="font-size: 18px;padding-bottom: 18px;"  v-html="art"></div></el-col>
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
    return {
      articleId: 'Kr_5fHEBWwJHAQ4W06II',
      comments: '<div class="a-content-wrap">发信人: zhajm2333 (zhajm2333), 信区: Health<br>标  题: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 07:48:48 2020), 站内<br><br>现在好买吗多少钱了，都什么渠道啊<br>--<br><br><font class="f000"></font><font class="f006">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 223.104.3.*]</font><font class="f000"><br></font><div id="nice_view" class="corner" style="margin:0;display:block"><div class="a-nice-comment-divline"><h3><span>精彩回复</span></h3><h5><a class="a-func-toggle" style="color:#555;" href="#">收起 ▲</a></h5></div><div class="a-nice-comment"><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/lyaleo"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/lyaleo"><strong style="color:red;">lyaleo</strong></a></div><div class="a-nice-comment-content">三个月没出门了，根本不用口罩<img src="/img/ubb/ema/21.gif" alt="ema21" style="display:inline;border-style:none"></div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Health/220913?s=220921">第8楼</a></li><li><a href="/article/Health/ajax_voteup/220921.json" class="a-func-like" id="like_list220921"><samp class="ico-pos-zaninactive" id="icon_like_list220921"></samp>赞(18)</a></li><li><a href="/article/Health/ajax_votedown/220921.json" id="listCai220921" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai220921"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Health/post/220921" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">我猜着了开头，但我猜不中这结局。1/10</a></li></ul></div></div></div></div></div><!--成就解锁：彩蛋2号获得！输入魂斗罗秘籍可解锁彩蛋3号。hint： IE 0=A 1=B--来自bbs.byr.cn----></div><div class="a-content-wrap">发信人: whnineteen (wangh), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 08:03:16 2020), 站内<br><br>药店里有卖的了<br>--<br><br><font class="f000"></font><font class="f005">※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 112.41.171.*]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: muli (muli), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 08:37:35 2020), 站内<br><br>记住 民用口罩跟医用口罩有区别...在淘宝买的时候，问清楚<br>--<br><br><font class="f000"></font><font class="f007">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 112.26.78.*]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: biggerstupid (傻不拉几的矮胖子), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 08:40:16 2020), 站内<br><br>昨天在抽屉又找到了几个N95，意外之喜。<br>--<br><br><font class="f000"></font><font class="f002">※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 117.136.0.*]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: Tooooouch (Tooooouch), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 09:01:08 2020), 站内<br><br>消过毒的医用外科口罩一般两块钱一个 没消过毒的医用外科口罩一般一块多一点 淘宝挺多的了<br>--<br><br><font class="f000"></font><font class="f005">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 117.136.7.*]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: damnid (【意涵团】工作了也要认真搞一搞), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 09:19:38 2020), 站内<br><br>药店已经有售<br>--<br><br><font class="f000"></font><font class="f003">※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 223.104.148.83]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: alexmaowei (静静白桦林), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 10:01:28 2020), 站内<br><br>淘宝上就好多卖口罩的啊<br>--<br><br><font class="f000"></font><font class="f004">※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 211.141.83.*]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: gcy165180 (沐宇), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 10:02:19 2020), 站内<br><br>记错了，是2.8一个hhh<br><br>2.7块一包医用外科口罩10个<br><br>--<br><font class="f006">※ 修改:·gcy165180 于 Mar 31 21:42:53 2020 修改本文·[FROM: 124.239.117.*]</font><font class="f000"><br></font><font class="f000"></font><font class="f002">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 124.239.117.*]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: lyaleo (Leo), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 10:03:18 2020), 站内<br><br>三个月没出门了，根本不用口罩<img src="/img/ubb/ema/21.gif" alt="ema21" style="display:inline;border-style:none"><br>--<br><br><font class="f000"></font><font class="f005">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 123.114.116.*]</font><font class="f000"><br></font></div><div class="a-content-wrap">发信人: yyiyyiyyiyyi (biubiubiu), 信区: Health<br>标  题: Re: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 10:22:11 2020), 站内<br><br>药店3块一个外科口罩<img src="/img/ubb/emb/2.gif" alt="emb2" style="display:inline;border-style:none"><br>--<br><br><font class="f000"></font><font class="f005">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 223.104.13.*]</font><font class="f000"><br></font></div>',
      content: '<div class="a-content-wrap">发信人: zhajm2333 (zhajm2333), 信区: Health<br>标  题: 大家现在口罩都续命上了吗<br>发信站: 北邮人论坛 (Tue Mar 31 07:48:48 2020), 站内<br><br>现在好买吗多少钱了，都什么渠道啊<br>--<br><br><font class="f000"></font><font class="f006">※ 来源:·<a target="_blank" href="http://developers.byr.cn/mobile">北邮人论坛手机客户端</a> bbs.byr.cn·[FROM: 223.104.3.*]</font><font class="f000"><br></font><div id="nice_view" class="corner" style="margin:0;display:block"><div class="a-nice-comment-divline"><h3><span>精彩回复</span></h3><h5><a class="a-func-toggle" style="color:#555;" href="#">收起 ▲</a></h5></div><div class="a-nice-comment"><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/lyaleo"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/lyaleo"><strong style="color:red;">lyaleo</strong></a></div><div class="a-nice-comment-content">三个月没出门了，根本不用口罩<img src="/img/ubb/ema/21.gif" alt="ema21" style="display:inline;border-style:none"></div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Health/220913?s=220921">第8楼</a></li><li><a href="/article/Health/ajax_voteup/220921.json" class="a-func-like" id="like_list220921"><samp class="ico-pos-zaninactive" id="icon_like_list220921"></samp>赞(18)</a></li><li><a href="/article/Health/ajax_votedown/220921.json" id="listCai220921" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai220921"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Health/post/220921" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">我猜着了开头，但我猜不中这结局。1/10</a></li></ul></div></div></div></div></div><!--成就解锁：彩蛋2号获得！输入魂斗罗秘籍可解锁彩蛋3号。hint： IE 0=A 1=B--来自bbs.byr.cn----></div>',
      // content: '发信人: iphone (iphone), 信区: Talking<br>标&nbsp;&nbsp;题: 非毕业硕士到底能不能自由返京呀？也没个通知<br>发信站: 北邮人论坛 (Wed Jun 10 14:11:13 2020), 站内<br><br>RT，不用求导师同意那种，大家有信息共享下嘛？比如学院+措施。ps：难道不同学院还有不同政策？<br>--<br><br><font class="f000"></font><font class="f005">※ 来源:·北邮人论坛 <a target="_blank" href="http://bbs.byr.cn">http://bbs.byr.cn</a>·[FROM: 39.76.212.*]</font><font class="f000"><br></font><div id="nice_view" class="corner" style="margin:0;display:block"><div class="a-nice-comment-divline"><h3><span>精彩回复</span></h3><h5><a class="a-func-toggle" style="color:#555;" href="#">收起 ▲</a></h5></div><div class="a-nice-comment"><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/MigReady"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/MigReady"><strong style="color:red;">MigReady</strong></a></div><div class="a-nice-comment-content">xt院明说还不能自由返啊<img src="/img/ubb/ema/2.gif" alt="ema2" style="display:inline;border-style:none"></div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Talking/6201581?s=6201615">第12楼</a></li><li><a href="/article/Talking/ajax_voteup/6201615.json" class="a-func-like" id="like_list6201615"><samp class="ico-pos-zaninactive" id="icon_like_list6201615"></samp>赞(3)</a></li><li><a href="/article/Talking/ajax_votedown/6201615.json" id="listCai6201615" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai6201615"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Talking/post/6201615" class="a-post">回复</a></li><li><a href="#" style="color:white;margin:0px 50px;">我开始怀疑，在这个世界上，还有什么是不会过期的。 7/10</a></li></ul></div></div></div><div class="a-nice-comment-item"><a class="a-nice-comment-face" href="/user/query/sheis"><img src="https://bbs.byr.cn/img/face_default_m.jpg"></a><div class="a-nice-comment-cell"><div class="a-nice-comment-id"><a href="/user/query/sheis">sheis</a></div><div class="a-nice-comment-content">xt院真的无语了，直接说返京没变，别被其他的消息影响，我尼玛</div><div><ul class="a-func a-nice-comment-func"><li><a class="a-nice-comment-floor" style="color:#888;" title="点击跳转" href="/article/Talking/6201581?s=6201619">第13楼</a></li><li><a href="/article/Talking/ajax_voteup/6201619.json" class="a-func-like" id="like_list6201619"><samp class="ico-pos-zaninactive" id="icon_like_list6201619"></samp>赞(2)</a></li><li><a href="/article/Talking/ajax_votedown/6201619.json" id="listCai6201619" class="a-func-cai"><samp class="ico-pos-caiinactive" id="icon_list_cai6201619"></samp>踩(0)</a></li><li><samp class="ico-pos-reply"></samp><a href="/article/Talking/post/6201619" class="a-post">回复</a></li></ul></div></div></div></div></div><!--成就解锁：彩蛋2号获得！输入魂斗罗秘籍可解锁彩蛋3号。hint： IE 0=A  1=B--来自bbs.byr.cn---->',
      partition: 'Visualization',
      latest_reply_time: '',
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
    this.articleId = this.$route.params.articleId
    this.$http.get('/bbs/findById', { params: { id: this.articleId } })
      .then(response => {
        const article = response.data
        this.url = article.url
        this.title = article.title
        this.sender = article.sender
        this.send_time = article.send_time
        this.reply_count = article.reply_count
        this.latest_reply_time = article.latest_reply_time
        this.content = article.content
        this.partition = article.partion
        this.comments = article.comments
        // console.log('帖子：')
        // console.log(article)
      })

    // console.log(this.$route.params.pageParams)
  },
  methods: {
    gotoOrigin () {
      window.open(this.url)
    },
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
  #articlePage .reply {
    border-radius: 20px;
    padding-left: 150px;
    line-height: 1.6;
    letter-spacing: 0.069em;
    font-weight: 300;
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
  #articlePage .sender > a:nth-child(1) {
    font-weight: 800;
  }
  #articlePage .sender > a:nth-child(2) {
    font-weight: 800;
  }
  #articlePage .sender > a:nth-child(3) {
    font-weight: 800;
  }
  #articlePage .el-divider {
    margin-bottom: 0px;
    margin-top: 0px;
  }
</style>
