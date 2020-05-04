<template>
  <div id="indexSearch">
    <img src="../assets/logo1.png">
    <el-form size='mini' :inline='true'>
      <el-form-item label=''>
        <el-input placeholder='搜索北邮人论坛，请输入关键词' size="medium" v-model="keyWord" clearable>
          <el-button slot="append" icon="el-icon-search" @click='search' size="medium"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="lists">
      <div class="list">
        <el-card shadow="hover">
          <div slot="header">
            <span>新鲜榜</span>
          </div>
          <div v-for="(item, index) in newListData" :key="index">
            <div>
              <el-link :underline="false" @click="showArticle(newListData[index].id)">
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
              <el-link :underline="false" @click="showArticle(hotListData[index].id)">
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
export default {
  name: 'SearchBox',
  data () {
    return {
      keyWord: '',
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
    // 访问新鲜榜、热搜榜接口，暂时用findAll代替，取前20条
    this.$http.get('bbs/findAll').then(response => {
      this.newListData = []
      this.hotListData = []
      var listData = response.data.content
      // console.log(listData)
      for (let i = 0; i < 10; i++) {
        this.newListData.push(listData[i])
        this.hotListData.push(listData[i + 10])
      }
    })
  },
  methods: {
    search () {
      // console.log(this.keyWord)
      this.$router.push({ name: 'listPage', params: { keyWord: this.keyWord } })
    },
    showArticle (articleId) {
      // console.log(articleId)
      // this.$http.get('bbs/findById', { params: { id: articleId } }).then(response => {
      //   console.log(response)
      // })
      this.$router.push({ name: 'ArticlePage', params: { articleId: articleId } })
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
    padding-top: 80px;
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
</style>
