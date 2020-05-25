<template>
  <div class="">
    <div class="top">
      <!-- 筛选 -->
      <div class="screen">
        <div style="width:30%">筛选：</div>
        <el-input type="search" v-model="search" style="width:70%" placeholder="请输入关键字"></el-input>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="tables"
        style="width: 100%"
        max-height=500>
        <!-- 地址 -->
        <el-table-column label="时间">
          <template slot-scope="scope">
            <span class="col-cont" v-html="showDate(scope.row.date)" ></span>
          </template>
        </el-table-column>
        <!-- 用户名 -->
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <span class="col-cont" v-html="showDate(scope.row.name)" ></span>
          </template>
        </el-table-column>
        <!-- 地址 -->
        <el-table-column label="地址">
          <template slot-scope="scope">
            <span class="col-cont" v-html="showDate(scope.row.address)" ></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ArticlePage',
  data () {
    return {
      search: '',
      tableData: [{
        date: '2016-05-02',
        name: '张三',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '李四',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王五',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '赵六',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {},
  computed: {
    // 实时监听表格
    tables: function () {
      // const search = this.search
      // if (search) {
      //   return this.tableData.filter(dataNews => {
      //     return Object.keys(dataNews).some(key => {
      //       return String(dataNews[key]).toLowerCase().indexOf(search) > -1
      //     })
      //   })
      // }
      console.log('监听表格')
      return this.tableData
    }
  },
  mounted () {},
  methods: {
    // 筛选变色
    showDate (val) {
      console.log('变色' + val)
      val = val + ''
      if (val.indexOf(this.search) !== -1 && this.search !== '') {
        return val.replace(this.search, '<font color="#409EFF">' + this.search + '</font>')
      } else {
        return val
      }
    }
  }
}
</script>
