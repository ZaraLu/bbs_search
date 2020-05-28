<template>
  <div id="articlePage">
    <el-container>
      <el-header height="100px">
        <div class="head">
          <el-button type="primary" icon="el-icon-arrow-left" @click="backToListPage">返回</el-button>
<!--          <img class="log" src="../assets/logo1.png">-->
<!--          <el-form size='mini' :inline='true'>-->
<!--            <el-form-item class="searchBox">-->
<!--              <el-input placeholder='在北邮人论坛进行搜索，请输入关键词' size="medium" v-model="keyWord" clearable>-->
<!--                <el-button slot="append" icon="el-icon-search" @click='searchDefault' size="medium"></el-button>-->
<!--              </el-input>-->
<!--            </el-form-item>-->
<!--            <div class="clear"></div>-->
<!--          </el-form>-->
        </div>
      </el-header>
      <el-main>
        <el-card class="box-card" shadow="hover">
          <el-row :gutter="20">
            <el-col :span="16"><div class="title">{{title}}</div></el-col>
            <el-col :span="8"><div class="send_time">{{send_time}}</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div class="content">{{content}}</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="6"><div class="sender">作者：{{sender}}</div></el-col>
            <el-col :span="6"><div class="partition">版面：{{partition}}</div></el-col>
            <el-col :span="6"><div class="reply_count">回帖数：{{reply_count}}</div></el-col>
          </el-row>
        </el-card>
        <div v-for="art in articleListData" :key="art.id">
          <el-card class="box-card" shadow="hover">
            <el-row :gutter="20">
              <el-col :span="16"><div class="title">{{art.title}}</div></el-col>
              <el-col :span="8"><div class="send_time">{{art.send_time}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="24"><div class="content">{{art.content}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6"><div class="sender">作者：{{art.sender}}</div></el-col>
              <el-col :span="6"><div class="partition">版面：{{art.partition}}</div></el-col>
              <el-col :span="6"><div class="reply_count">回帖数：{{art.reply_count}}</div></el-col>
            </el-row>
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
      content: '发信人: buptvis (大数据可视化), 信区: Visualization 标 题: 【可视化案例】Life in the camps 集中营里的生活 发信站: 北邮人论坛 (Mon Oct 21 21:52:29 2019), 站内 Life in the camps 集中营里的生活 孟加拉国罗辛亚难民区泥泞的山坡上挤满了临时搭建的棚屋，附近的厕所污染了水井，容易迅速传播疾病。卫生专家表示，罗辛亚难民区过度拥挤，卫生条件差，医疗服务有限，是“灾难的根源”。此项目是对居民临时避难所生活的近距离的观察和发现。从地理位置宏观的角度分析居民健康与生活设施分布的联系。 数据来源：[未开放]Inter Sector Coordination Group (ISCG) 部门间协调小组；REACH Initiative；OpenStreetMap；World Health Organization世界卫生组织；UNHCR;难民署；Reuters路透社 数据维度: 孟加拉国地图(卫星图像) Kutupalong扩建点的防护卫星图，避难所的区域信息 厕所分布坐标(数据由联合国移民机构 IOM 收集和分析) 临时厕所的坐标，距离厕所太远和太近的收容所区域信息 露天排便区的坐标 水泵的坐标 霍乱产生的疾病类型所占人数百分比 欧乱时期每日死亡人数以及死因 维度映射: 作品主要在平面上用坐标映射成点，直观反映设施的分布情况； 简单的面积比例图和柱形图清晰反映死亡比例和人数，用不同的颜色对疾病进行分类。 设计点: 网页+滚动动效的形式来讲故事，一段段图文结合达到阅读故事的效果，动效增加互动感； 桌面调研、实地调研、专家建议、结合可视化图形传递事实，充分体现作品的完整性和故事的真实性。 -- ※ 来源:·北邮人论坛 http://bbs.byr.cn ·[FROM: 10.128.195.*]',
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
    font-size: 17px;
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
    height: 200px;
    overflow-y: scroll;
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
</style>
