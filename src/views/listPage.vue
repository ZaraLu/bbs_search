<template xmlns:el-col="http://www.w3.org/1999/html">
    <div id="listPage">
      <div class="head">
        <img class="log" src="../assets/logo1.png" @click="backToIndex">
        <el-form size='mini' :inline='true' @submit.native.prevent>
          <el-form-item class="searchBox">
            <el-input placeholder='在北邮人论坛进行搜索，请输入关键词' @keyup.enter.native="searchDefault" size="medium" v-model="keyWord" clearable>
              <el-button slot="append" icon="el-icon-search" @click='searchDefault' size="medium"></el-button>
            </el-input>
          </el-form-item>
          <div class="clear"></div>
        </el-form>
      </div>
      <div class="main">
        <div class="option-list">
          <el-row>
            <el-col :span="4">
              <el-dropdown trigger="click"> <!--@command="handleCommand"-->
                <span class="el-dropdown-link">
                  排序方式<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><el-button type="text" command="相关性" @click='searchLatestReplyTime'>新鲜度</el-button></el-dropdown-item>
                  <el-dropdown-item><el-button type="text" command="时间" @click='searchTime'>时间</el-button></el-dropdown-item>
                  <el-dropdown-item><el-button type="text" command="回帖数" @click='searchReplyCount'>回复数</el-button></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>

            <el-col :span="20" align="right">
              <el-popover placement="right"
                          width="400"
                          trigger="click">
                <el-date-picker
                  v-model="timeRange"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
                <el-button slot="reference" type="text">时间筛选</el-button>
              </el-popover>
            </el-col>
          </el-row>
        </div>
        <el-divider style="margin-left: 100px" ></el-divider>
        <div class="articleList">
          <div class="box-card" v-for="art in articleListData" :key="art.id">
<!--            <div><el-link @click="showArticle(art.id)" :underline="true">{{ art.title }}</el-link></div>-->
<!--            <div class="content">{{ art.content }}</div>-->
<!--            <el-divider></el-divider>-->
            <el-card shadow="hover">
              <el-row :gutter="20">
                <el-col :span="16">
                  <div><el-link class="title" @click="showArticle(art.id,art.url)" target="_blank"  :underline="true">
<!--                  <div><el-link class="title" href=art.url :underline="true">-->
                    <div v-html="highlights(art.title)"></div>
                  </el-link></div>
                </el-col>
                <el-col :span="8" align="right"><div class="send_time">{{art.send_time}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="24"><div class="content" v-html="highlights(art.content)">
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="6"><div class="sender">作者：{{art.sender}}</div></el-col>
                <el-col :span="8"><div class="partition">版面：{{art.partion}}</div></el-col>
                <el-col :span="6"><div class="reply_count">回帖数：{{art.reply_count}}</div></el-col>
              </el-row>
            </el-card>
          </div>
        </div>
        <div class="hotList">
          <el-card shadow="hover">
            <div slot="header">
              <span>热搜榜</span>
            </div>
            <div v-for="(item, index) in hotListData" :key="index">
              <div>
                <el-link :underline="false" @click="showArticle(hotListData[index].id,hotListData[index].url)">
                  <span class="indexIcon">{{index + 1}}</span>{{ hotListData[index].title}}
                </el-link>
              </div>
              <el-divider v-if="index!=9"></el-divider>
            </div>
          </el-card>
        </div>
      </div>
      <div class="clear"></div>
      <div class="foot">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :hide-on-single-page="true"
          :current-page.sync="currentPage"
          :page-size="PageSize"
          layout="total, prev, pager, next"
          :total=totalArticle>
        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
  name: 'listPage',
  data () {
    return {
      keyWord: '',
      sortOption: 0,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      timeRange: ['', ''],
      startTime: '',
      endTime: '',
      // articleListData: [],
      // hotListData: [],
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
        }],
      hotListData: [
        {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '1',
          title: '张文宏谈五一假期出游'
        }],
      currentPage: 1, // 当前页数
      totalArticle: 100, // 总条数
      PageSize: 10
    }
  },
  created () {
    console.log(this.$route.params)
    const routeParams = this.$route.params

    if ('keyWord' in routeParams) {
      // 来自首页的跳转
      this.keyWord = this.$route.params.keyWord

      this.searchDefault()
    } else if ('pageParams' in routeParams) {
      // 来自详情页的跳转
      const pageParam = this.$route.params.pageParams
      this.keyWord = pageParam.keyWord
      this.sortOption = pageParam.sortOption
      this.timeRange = pageParam.timeRange
      this.startTime = pageParam.startTime
      this.endTime = pageParam.endTime
      this.articleListData = pageParam.articleListData
      // this.hotListData = pageParam.hotListData
      this.currentPage = pageParam.currentPage
      this.totalArticle = pageParam.totalArticle
      this.PageSize = pageParam.PageSize
    }
    this.$http.get('bbs/getTop10Byrs').then(response => {
      this.hotListData = []
      var listData = response.data
      for (let i = 0; i < 10; i++) {
        this.hotListData.push(listData[i].body)
      }
    })
  },
  methods: {
    searchDefault () {
      console.log('--------------searchDefault------------')
      this.sortOption = 0
      this.formatTime()
      const paramsObj = {
        keyword: this.keyWord,
        pageIndex: this.currentPage,
        foretime: this.startTime,
        posttime: this.endTime
      }
      console.log('入参：')
      console.log(paramsObj)

      this.$http.get('/bbs/findByContentAndTitleAndSend_time', {
        params: paramsObj
      }).then(response => {
        console.log('返回：')
        console.log(response)
        const dataObj = response.data
        for (const key in dataObj) {
          this.articleListData = dataObj[key].body.content
          this.totalArticle = dataObj[key].body.totalElements
          break
        }
        this.highlights()
      })
    },
    searchLatestReplyTime () {
      console.log('--------------searchLatestReplyTime------------')
      this.sortOption = 1
      this.formatTime()
      const paramsObj = {
        keywords: this.keyWord,
        pageIndex: this.currentPage,
        pageSize: this.PageSize,
        orderIndex: 1,
        foretime: this.startTime,
        posttime: this.endTime
      }
      console.log('入参：')
      console.log(paramsObj)

      this.$http.get('/bbs/orderByLatestReplyTime', {
        params: paramsObj
      }).then(response => {
        console.log('返回：')
        console.log(response)

        const objData = response.data.data
        // console.log(objData.data)
        this.articleListData = []
        for (let i = 0; i < objData.data.length; i++) {
          // console.log(arrData.data.data[i])
          this.articleListData.push(objData.data[i])
        }
        this.totalArticle = objData.totleElements
        this.highlights()
      })
    },
    searchTime () {
      console.log('--------------searchTime------------')
      this.sortOption = 2
      this.formatTime()
      const paramsObj = {
        keywords: this.keyWord,
        pageindex: this.currentPage,
        pageSize: this.PageSize,
        orderIndex: 1,
        fromDate: this.startTime,
        toDate: this.endTime
      }
      console.log('入参：')
      console.log(paramsObj)

      this.$http.get('/bbs/sortBySendtime', {
        params: paramsObj
      }).then(response => {
        console.log('返回：')
        console.log(response)

        const objData = response.data
        // console.log(objData)
        this.articleListData = []
        for (let i = 0; i < objData.content.length; i++) {
          // console.log(arrData.data.data[i])
          this.articleListData.push(objData.content[i])
        }
        this.totalArticle = objData.totalElements
        this.highlights()
      })
    },
    searchReplyCount () {
      console.log('--------------searchReplyCount------------')
      this.sortOption = 3
      this.formatTime()
      const paramsObj = {
        keywords: this.keyWord,
        pageindex: this.currentPage,
        pageSize: this.PageSize,
        orderIndex: 1,
        foretime: this.startTime,
        posttime: this.endTime
      }
      console.log('入参：')
      console.log(paramsObj)

      this.$http.get('/bbs/orderByReplyCount', {
        params: paramsObj
      }).then(response => {
        console.log('返回：')
        console.log(response)

        const objData = response.data.data
        // console.log(objData.data)
        this.articleListData = []
        for (let i = 0; i < objData.data.length; i++) {
          // console.log(arrData.data.data[i])
          this.articleListData.push(objData.data[i])
        }
        this.totalArticle = objData.totleElements
        this.highlights()
      })
    },

    // 处理时间格式
    formatTime () {
      if (this.timeRange[0].length === 0) {
        this.startTime = ''
        this.endTime = ''
        return
      }
      const start = new Date(this.timeRange[0])
      const end = new Date(this.timeRange[1])
      // console.log(start.getMonth())
      // console.log(end.getMonth())
      const sMonth = start.getMonth() + 1 < 10 ? '0' + (start.getMonth() + 1) : start.getMonth() + 1
      const eMonth = end.getMonth() + 1 < 10 ? '0' + (end.getMonth() + 1) : end.getMonth() + 1
      const sDate = start.getDate() < 10 ? '0' + start.getDate() : start.getDate()
      const eDate = end.getDate() < 10 ? '0' + end.getDate() : end.getDate()

      this.startTime = start.getFullYear() + '-' + sMonth + '-' + sDate
      this.endTime = end.getFullYear() + '-' + eMonth + '-' + eDate
      // console.log(this.startTime)
      // console.log(this.endTime)
    },
    // 高亮关键字
    highlights (val) {
      // console.log('帖子内容：')
      // console.log(val)
      val = val + ''
      const replaceReg = new RegExp(this.keyWord, 'g')
      if (val.indexOf(this.keyWord) !== -1 && this.keyWord !== '') {
        return val.replace(replaceReg, '<span class="highlights-text">' + this.keyWord + '</span>')
      } else {
        return val
      }
    },
    showArticle (articleId, url) {
      console.log('点击' + articleId)
      // window.open(url)
      // window.location.href = url
      this.$http.get('bbs/addSearchNums', { params: { id: articleId } })
        .then(response => {
          console.log('返回：')
          console.log(response)
        })
      this.$router.push(
        {
          name: 'ArticlePage',
          params: {
            articleId: articleId,
            pageParams: {
              keyWord: this.keyWord,
              sortOption: this.sortOption,
              timeRange: this.timeRange,
              startTime: this.startTime,
              endTime: this.endTime,
              articleListData: this.articleListData,
              hotListData: this.hotListData,
              currentPage: this.currentPage, // 当前页数
              totalArticle: this.totalArticle, // 总条数
              PageSize: this.PageSize
            }
          }
        })
    },
    backToIndex () {
      this.$router.push({ path: '/index' })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // 处理当前页变动时候触发的事件
      console.log(`当前页: ${val}`)
      if (this.sortOption === 0) {
        this.searchDefault()
      } else if (this.sortOption === 1) {
        this.searchLatestReplyTime()
      } else if (this.sortOption === 2) {
        this.searchTime()
      } else {
        this.searchReplyCount()
      }
    },
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>

<style lang="less">
  .clear{
    clear: both;
  }
  #listPage {
    /*background-color: lightblue;*/
    height: 100%;
  }
  #listPage .head {
    /*background-color: #F2F2F2;*/
    color: #333;
    height: 100px;
    width: 1260px;
    padding-top: 15px;
    padding-left: 20px;
  }
  #listPage .log {
    float: left;
    height: 70px;
    margin: 10px 5px;
  }
  #listPage .el-form {
      float: left;
      margin: 20px auto;
  }
  #listPage .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 0px;
  }
  #listPage .searchBox .el-form-item__content{
    width: 600px;
  }
  #listPage .searchBox .el-input__inner {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  #listPage .searchBox .el-input-group__append, .el-input-group__prepend {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  #listPage .searchBox .el-input-group{
    width: 100%;
  }
  #listPage .searchBox .el-input--medium .el-input__inner {
    height: 50px;
  }
  #listPage .sortRole {
    margin-left: 20px;
    margin-top: 10px;
  }
  #listPage .el-button [class*=el-icon-]+span {
    margin-left: 0px;
  }
  #listPage .el-range-editor--mini.el-input__inner {
    width: 205px;
  }
  #listPage .timePicker{
    width: 205px;
    display: inline-block;
  }

  #listPage .main {
    /*background-color: #333333;*/
    width: 1260px;
    height: 850px;
  }
  #listPage .option-list {
    width: 600px;
    padding-left: 100px;
    padding-right: 100px;
  }
  #listPage .el-col-4 {
    width:16.66667%;
    margin: 10px auto;
  }
  #listPage .el-dropdown-link {
    font-size: 12px;
  }
  #listPage .el-button--text {
    color: #000;
    padding-left:0;
    padding-right:0
  }
  #listPage .el-popover__reference {
    font-size: 12px;
    font-weight: 300;
  }

  #listPage .main > div:nth-child(2) {
    margin-left: 100px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 100px;
    height: 2px;
    width: 600px;
  }
  #listPage .articleList {
    background-color: #ffffff;
    color: #333;
    width: 600px;
    float: left;
    /*text-align: center;*/
    height: 1400px;
    padding: 10px 100px;
  }
  #listPage .articleList .el-divider {
    background-color: #ffffff;
    position: relative;
  }
  #listPage .articleList .el-link.el-link--default {
    color: #233ba6;
    font-weight: 400;
    font-size: 20px;
    font-family: 黑体;
  }
  #listPage .articleList .content {
    overflow: hidden;
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...,上面三个可以实现单行文本溢出*/
    display: -webkit-box;//对象作为弹性伸缩盒子模型显示
    -webkit-box-orient: vertical;//设置或检索伸缩盒对象的子元素的排列方式
    -webkit-line-clamp: 3;//溢出省略的界限
    padding-top: 5px;
    font-size: 12px;
    color: black;
    line-height: 1.5;
    font-size: 12px;
    letter-spacing: 0.115em;
    font-weight: 300;
  }
  #listPage .articleList .send_time {
    font-size: 12px;
    line-height: 1.7;
    letter-spacing: 0.007em;
    font-weight: 100;
    font-style: normal;
  }
  #listPage .articleList .sender {
    font-size: 12px;
    font-weight: 100;
    line-height: 1.8;
  }
  #listPage .articleList .partition {
    font-size: 12px;
    font-weight: 100;
    line-height: 1.8;
  }
  #listPage .articleList .reply_count {
    font-size: 12px;
    font-weight: 100;
    line-height: 1.8;
  }
  #listPage .articleList .box-card {
    padding-bottom: 10px;
  }
  #listPage .hotList {
    /*background-color: #e2efb1;*/
    color: #333;
    width: 350px;
    text-align: left;
    /*line-height: 200px;*/
    height: 100%;
    float: left;
  }
  #listPage .el-link--inner{
    overflow: hidden;
    display: -webkit-box;//对象作为弹性伸缩盒子模型显示
    -webkit-box-orient: vertical;//设置或检索伸缩盒对象的子元素的排列方式
    -webkit-line-clamp: 1;//溢出省略的界限
  }
  #listPage .el-card__body {
    padding: 12px;
  }
  #listPage .el-divider--horizontal {
    height: 1px;
    margin: 10px 0;
  }
  #listPage .indexIcon {
    color: white;
    background-color: #67a5e8;
    margin-right: 4px;
    padding: 0px 4px;
  }
  #listPage div.el-card__body > div:nth-child(1) > div:nth-child(1) > a > span > span{
    background-color: crimson;
  }
  #listPage div.el-card__body > div:nth-child(2) > div:nth-child(1) > a > span > span{
    background-color: darkorange;
  }
  #listPage div.el-card__body > div:nth-child(3) > div:nth-child(1) > a > span > span{
    background-color: #e8c60f;
  }
  #listPage div:nth-child(10) > div > a > span > span{
    padding: 0px 1px;
  }

  #listPage .foot {
    /*background-color: #d6f3d6;*/
    padding-left: 100px;
    padding-bottom: 40px;
  }

  .highlights-text {
     color: #ff5134;
   }
</style>
