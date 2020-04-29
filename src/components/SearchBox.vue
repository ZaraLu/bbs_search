<template>
  <div id="indexSearch">
    <img src="../assets/logo.png">
    <el-form size='mini' :inline='true'>
      <el-form-item label=''>
        <el-input placeholder='在北邮人论坛进行搜索，请输入关键词' size="medium" v-model="keyWord" clearable>
          <el-button slot="append" icon="el-icon-search" @click='search' size="medium"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="lists">
      <div class="list">
        <el-table :data="newListData">
          <el-table-column label="新鲜榜">
            <template slot-scope="scope">
              <el-button type="text" @click="showArticle(newListData[scope.$index].index)"><span class="indexIcon">{{scope.$index + 1}}</span>{{ newListData[scope.$index].title}}</el-button>
<!--              scope从0开始-->
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="list">
        <el-table :data="hotListData">
          <el-table-column label="热搜榜">
            <template slot-scope="scope">
              <el-button type="text" @click="showArticle(hotListData[scope.$index].index)"><span class="indexIcon">{{scope.$index + 1}}</span>{{ hotListData[scope.$index].title}}</el-button>
            </template>
          </el-table-column>
        </el-table>
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
  methods: {
    search () {
      this.$route.push({ name: 'XXX', params: { keyWord: this.keyWord } })
    },
    showArticle (articleId) {
      // this.$router.push({ name: 'XXXXX', params: { articleId: articleId } })
    }
  }
}
</script>

<style lang="less">
  .lists {
    background-color: antiquewhite;
    width: 80%;
    height: 72%;
    margin: 0 auto;
  }
  .list {
    background-color: darksalmon;
    float: left;
    width: 45%;
    height: 90%;
    margin: 2.5%;
  }
  #indexSearch .el-table td, .el-table th.is-leaf{
    padding: 5px;
  }
  #indexSearch .el-button{
    padding: 0px;
  }
  #indexSearch .indexIcon {
    color: white;
    background-color: #67a5e8;
    margin-right: 4px;
    padding: 0px 4px;
  }
  #indexSearch tr:nth-child(10) > td > div > button > span > span{
    padding: 0px 1px;
  }
  #indexSearch {
    text-align: center;
    padding-top: 80px;
    background-color: lightblue;
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
