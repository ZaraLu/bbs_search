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
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      keyWord: ''
    }
  },
  methods: {
    search () {}
  }
}
</script>

<style lang="less">
  #indexSearch {
    text-align: center;
    padding-top: 80px;
    background-color: lightblue;
    height: 100%;
    /*width: 100%;*/
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
