<template>
    <div>
      <div>
        <div class="head">标题：{{ title }}</div>
        <div class="main">帖子正文：{{ content }}</div>
      </div>
<!--      <div>标题：{{ title }}</div>-->
<!--      <div>作者：{{ sender }}</div>-->
<!--      <div>发信区：{{ partition }}</div>-->
<!--      <div>发信时间：{{ send_time }}</div>-->
<!--      <div>帖子正文：{{ content }}</div>-->
<!--      <div>回复数：{{ reply_count }}</div>-->
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
      url: 'https://bbs.byr.cn/article/Visualization/463'
    }
  },
  created () {
    // this.articleId = this.$route.params.articleId
    // console.log(this.articleId)
    // this.$http.get('bbs/findById', { params: { id: this.articleId } }).then(response => {
    //   console.log(response.data)
    //   const article = response.data
    //   this.content = article.content
    //   this.partition = article.partion
    //   this.reply_count = article.reply_count
    //   this.send_time = article.send_time
    //   this.sender = article.sender
    //   this.title = article.title
    //   this.url = article.url
    // })
  }
}
</script>

<style lang="less">
</style>
