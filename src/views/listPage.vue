<template>
    <div id="listPage">
      <div class="head">
        <img class="log" src="../assets/logo.png">
        <el-form size='mini' :inline='true'>
          <el-form-item class="searchBox">
            <el-input placeholder='在北邮人论坛进行搜索，请输入关键词' size="medium" v-model="keyWord" clearable>
              <el-button slot="append" icon="el-icon-search" @click='searchDefault' size="medium"></el-button>
            </el-input>
          </el-form-item>
          <div class="clear"></div>
          <el-form-item class="sortRole">
            <el-button type="text" icon="el-icon-sort-down" @click='searchDefault'>相关性</el-button>
            <el-button type="text" icon="el-icon-sort-down" @click='searchTime'>时间</el-button>
            <el-button type="text" icon="el-icon-sort-down" @click='searchReplyCount'>回复数</el-button>
          </el-form-item>
          <el-form-item>
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
          </el-form-item>
        </el-form>
      </div>
      <div class="main">
        <div class="articleList">
          <div v-for="art in articleListData" :key="art.id">
            <div><el-link @click="showArticle(art.id)" :underline="true">{{ art.title }}</el-link></div>
            <div class="content">{{ art.content }}</div>
            <el-divider></el-divider>
          </div>
        </div>
        <div class="hotList">
          <el-table :data="hotListData">
            <el-table-column label="热搜榜">
              <template slot-scope="scope">
                <el-button type="text" @click="showArticle(hotListData[scope.$index].id)"><span class="indexIcon">{{scope.$index + 1}}</span><el-link :underline="false">{{ hotListData[scope.$index].title}}</el-link></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="clear"></div>
      <div class="foot">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :hide-on-single-page="true"
          :current-page.sync="currentPage"
          :page-size="10"
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
      articleListData: [
        {
          id: '1',
          title: '张文宏谈五一假期出游',
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
      totalArticle: 100 // 总条数
    }
  },
  created () {
    // console.log(this.$route.params)
    this.keyWord = this.$route.params.keyWord
  },
  methods: {
    searchDefault () {
      // this.formatTime()
      // this.$http.get('bbs/findByTitle', {
      //   params: {
      //     title: this.keyWord,
      //     startTime: this.startTime,
      //     endTime: this.endTime
      //   }
      // }).then(response => {
      //   console.log(response.data.content)
      // })
    },
    searchTime () {
      // this.formatTime()
      // this.$http.get('bbs/findByTitle', {
      //   params: {
      //     title: this.keyWord,
      //     startTime: this.startTime,
      //     endTime: this.endTime
      //   }
      // }).then(response => {
      //   console.log(response.data.content)
      // })
    },
    searchReplyCount () {
      // this.formatTime()
      // this.$http.get('bbs/findByTitle', {
      //   params: {
      //     title: this.keyWord,
      //     startTime: this.startTime,
      //     endTime: this.endTime
      //   }
      // }).then(response => {
      //   console.log(response.data.content)
      // })
    },
    formatTime () {
      const start = new Date(this.timeRange[0])
      const end = new Date(this.timeRange[1])
      this.startTime = start.getFullYear() + '-' + start.getMonth() + '-' + start.getDate()
      this.endTime = end.getFullYear() + '-' + end.getMonth() + '-' + end.getDate()
      console.log(this.startTime)
      console.log(this.endTime)
    },
    showArticle (articleId) {
      console.log(articleId)
      this.$http.get('bbs/findById', { params: { id: articleId } }).then(response => {
        console.log(response)
      })
      // this.$router.push({ name: 'XXXXX', params: { articleId: articleId } })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // 处理当前页变动时候触发的事件
      console.log(`当前页: ${val}`)
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
    background-color: #B3C0D1;
    color: #333;
    height: 150px;
  }
  #listPage .log {
    float: left;
  }
  #listPage .el-form {
    float: left;
  }
  #listPage .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 0px;
  }
  #listPage .searchBox .el-form-item__content{
    width: 500px;
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
    background-color: #333333;
    width: 960px;
    margin: 0px 100px;
    height: auto;
  }
  #listPage .articleList {
    /*background-color: #E9EEF3;*/
    color: #333;
    width: 70%;
    float: left;
    /*text-align: center;*/
    height: 100%;
    /*padding: 0px 10px;*/
  }
  #listPage .articleList .el-divider {
     background-color: #ffffff;
    position: relative;
  }
  #listPage .articleList .el-link.el-link--default {
    /*color: #606266;*/
    font-weight: 800;
    font-size: 18px;
  }
  #listPage .articleList .content {
    overflow: hidden;
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...,上面三个可以实现单行文本溢出*/
    display: -webkit-box;//对象作为弹性伸缩盒子模型显示
    -webkit-box-orient: vertical;//设置或检索伸缩盒对象的子元素的排列方式
    -webkit-line-clamp: 2;//溢出省略的界限
  }
  #listPage .hotList {
    background-color: #D3DCE6;
    color: #333;
    width: 30%;
    text-align: center;
    /*line-height: 200px;*/
    height: 100%;
    float: left;
  }
  #listPage .foot {
    /*background-color: #d6f3d6;*/
    padding-left: 100px;
  }
</style>
