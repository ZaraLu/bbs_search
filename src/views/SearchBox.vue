<template>
  <div id="indexSearch">
    <img src="../assets/logo1.png">
    <el-form size='mini' :inline='true' @submit.native.prevent>
      <el-form-item label=''>
        <el-input @focus="focus" @blur="blur" @keyup.enter.native="search" placeholder='搜索北邮人论坛，请输入关键词' size="medium" v-model="keyWord" clearable>
          <el-button slot="append" icon="el-icon-search" native-type="submit" @click='search' size="medium"></el-button>
        </el-input>
        <el-card
          @mouseenter="enterSearchBoxHanlder"
          v-if="isSearch"
          class="box-card"
          id="search-box"
          style="position:relative;z-index:15"
        >
          <dl v-if="isHistorySearch">
            <dt class="search-title" v-show="history">历史搜索</dt>
            <dt class="remove-history" v-show="history" @click="removeAllHistory">
              <i class="el-icon-delete"></i>清空历史记录
            </dt>
            <el-tag
              @click="searchHandler(search)"
              @close="closeHandler(search)"
              v-for="search in historySearchList"
              :key="search.id"
              closable
              :type="search.type"
              style="margin-right:5px; margin-bottom:5px;"
            >{{search.name}}</el-tag>
          </dl>
          <dl v-if="isSearchList">
            <dd v-for="search in searchList" :key="search.id">{{search}}</dd>
          </dl>
        </el-card>
      </el-form-item>
    </el-form>
    <div class="lists">
      <div class="list">
        <el-card shadow="hover">
          <div slot="header">
            <span>热度榜</span>
          </div>
          <div v-for="(item, index) in newListData" :key="index">
            <div>
              <el-link :underline="false" @click="showArticle(newListData[index].id, newListData[index].url)">
                <span class="indexIcon">{{index + 1}}</span>{{ newListData[index].title}}
              </el-link>
            </div>
            <el-divider v-if="index!=9"></el-divider>
          </div>
        </el-card>
      </div>
      <div class="list">
        <el-card shadow="hover">
          <div slot="header">
            <span>热搜榜</span>
          </div>
          <div v-for="(item, index) in hotListData" :key="index">
            <div>
              <el-link :underline="false" @click="showArticle(hotListData[index].id, newListData[index].url)">
                <span class="indexIcon">{{index + 1}}</span>{{ hotListData[index].title}}
              </el-link>
            </div>
            <el-divider v-if="index!=9"></el-divider>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import RandomUtil from '../utils/randomUtil'
import Store from '../utils/store'
export default {
  name: 'SearchBox',
  data () {
    return {
      keyWord: '',
      historySearchList: [],
      searchList: ['暂无数据'],
      isFocus: false,
      history: false,
      types: ['', 'success', 'info', 'warning', 'danger'],
      newListData: [
        {
          id: '1',
          title: '张文宏谈五一假期出游'
        }, {
          id: '2',
          title: '张文宏谈五一假期出游'
        }, {
          id: '3',
          title: '张文宏谈五一假期出游'
        }, {
          id: '4',
          title: '张文宏谈五一假期出游'
        }, {
          id: '5',
          title: '张文宏谈五一假期出游'
        }, {
          id: '6',
          title: '张文宏谈五一假期出游'
        }, {
          id: '7',
          title: '张文宏谈五一假期出游'
        }, {
          id: '8',
          title: '张文宏谈五一假期出游'
        }, {
          id: '9',
          title: '张文宏谈五一假期出游'
        }, {
          id: '10',
          title: '张文宏谈五一假期出游'
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
        }]
    }
  },
  created () {
    // 访问热搜榜接口，取前10条
    this.$http.get('bbs/getTop10Byrs').then(response => {
      this.hotListData = []
      // console.log(response)
      var listData = response.data
      for (let i = 0; i < 10; i++) {
        this.hotListData.push(listData[i].body)
      }
      console.log(this.hotListData)
    })
    // 访问热度榜接口，取前10条
    this.$http.get('bbs/getHotTopics').then(response => {
      this.newListData = []
      var listData = response.data.data
      for (let i = 0; i < 10; i++) {
        this.newListData.push(listData[i])
      }
    })
  },
  methods: {
    focus () {
      this.isFocus = true
      this.historySearchList =
        Store.loadHistory() == null ? [] : Store.loadHistory()
      this.history = this.historySearchList.length !== 0
    },
    blur () {
      var self = this
      this.searchBoxTimeout = setTimeout(function () {
        self.isFocus = false
      }, 300)
    },
    enterSearchBoxHanlder () {
      clearTimeout(this.searchBoxTimeout)
    },
    searchHandler (search) {
      this.keyWord = search.name
      this.search()
    },
    closeHandler (search) {
      this.historySearchList.splice(this.historySearchList.indexOf(search), 1)
      Store.saveHistory(this.historySearchList)
      clearTimeout(this.searchBoxTimeout)
      if (this.historySearchList.length === 0) {
        this.history = false
      }
    },
    removeAllHistory () {
      Store.removeAllHistory()
    },
    search () {
      const n = RandomUtil.getRandomNumber(0, 5)
      const exist =
        this.historySearchList.filter(value => {
          return value.name === this.keyWord
        }).length !== 0
      if (!exist) {
        this.historySearchList.push({ name: this.keyWord, type: this.types[n] })
        Store.saveHistory(this.historySearchList)
      }
      this.history = this.historySearchList.length !== 0

      console.log(this.keyWord)
      this.$router.push({ name: 'listPage', params: { keyWord: this.keyWord } })
    },

    showArticle (articleId, url) {
      console.log('点击' + articleId)
      // this.$http.get('bbs/findById', { params: { id: articleId } }).then(response => {
      //   console.log(response)
      // })
      this.$http.get('bbs/addSearchNums', { params: { id: articleId } })
      // window.open(url)
      this.$router.push({ name: 'ArticlePage', params: { articleId: articleId } })
    }
  },
  computed: {
    isHistorySearch () {
      return this.isFocus && !this.keyWord
    },
    isSearchList () {
      return this.isFocus && this.keyWord
    },
    isSearch () {
      return this.isFocus
    }
  }
}
</script>

<style lang="less">
  #indexSearch .lists {
    /*background-color: antiquewhite;*/
    width: 80%;
    height: 72%;
    margin: 0 auto;
  }
  #indexSearch .list {
    /*background-color: darksalmon;*/
    float: left;
    width: 45%;
    height: 90%;
    margin: 2.5%;
    text-align: left;
  }
  #indexSearch .el-link--inner{
    overflow: hidden;
    display: -webkit-box;//对象作为弹性伸缩盒子模型显示
    -webkit-box-orient: vertical;//设置或检索伸缩盒对象的子元素的排列方式
    -webkit-line-clamp: 1;//溢出省略的界限
  }
  #indexSearch .el-card__body {
    padding: 12px;
  }
  #indexSearch .el-divider--horizontal {
    height: 1px;
    margin: 10px 0;
  }
  #indexSearch .indexIcon {
    color: white;
    background-color: #67a5e8;
    margin-right: 4px;
    padding: 0px 4px;
  }
  #indexSearch div.el-card__body > div:nth-child(1) > div:nth-child(1) > a > span > span{
    background-color: crimson;
  }
  #indexSearch div.el-card__body > div:nth-child(2) > div:nth-child(1) > a > span > span{
    background-color: darkorange;
  }
  #indexSearch div.el-card__body > div:nth-child(3) > div:nth-child(1) > a > span > span{
    background-color: #e8c60f;
  }
  #indexSearch div:nth-child(10) > div > a > span > span{
    padding: 0px 1px;
  }
  #indexSearch {
    text-align: center;
    padding-top: 40px;
    /*background-color: lightblue;*/
    height: 100%;
  }
  #indexSearch .el-form-item {
    width: 100%;
  }
  #indexSearch .el-form-item__content{
    width: 50%;
  }
  #indexSearch .el-input__inner {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  #indexSearch .el-input-group__append, .el-input-group__prepend {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  #indexSearch .el-input-group{
    width: 100%;
  }
  #indexSearch .el-input--medium .el-input__inner {
    height: 50px;
  }
  .remove-history {
    color: #bdbaba;
    font-size: 15px;
    float: right;
    margin-top: -22px;
  }
  .search-title {
    color: #bdbaba;
    font-size: 15px;
    margin-bottom: 5px;
    float: left;
  }
</style>
