<template>
  <div class="main-container">
    <el-upload
      class="upload-demo"
      drag
      action="https://www.intothedark.top:10013/cd29170202e22724bb6346f4c7be156e"
      :on-success="refresh">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__text">大小尽量不超过500MB</div>
    </el-upload>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="Name"
        label="名称">
        <template slot-scope="scope">
          <el-link :href="findData(scope.row.Name)" type="success" size="small">{{scope.row.Name}}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button  @click="findDataUrl(scope.row.Name)" type="success" size="small">下载</el-button>
          <el-button  @click="deleteData(scope.row.Name)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getData () {
      this.axios({
        method: 'get',
        url: '/'
      }).then((response) => {
        if (response.status === 200) {
          this.tableData = response.data.Entries
        } else {
          this.$message({
            message: response.data.msg,
            type: 'error'
          })
        }
      })
    },
    deleteData (key) {
      this.axios({
        method: 'get',
        url: '/delete?key=' + key
      }).then((response) => {
        location.reload()
      })
    },
    refresh () {
      location.reload()
    },
    findData (id) {
      return 'http://110.42.14.9:10013/read?key=' + id
    },
    findDataUrl (id) {
      location.href = 'http://110.42.14.9:10013/read?key=' + id
    },
    sizeData (size) {
      return (size / 1024 / 1024).toFixed(2) + 'MB'
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>
.main-container {
  all: revert;
  width: 70%;
  left: 0;
  right: 0;
  margin: 1rem auto;
  position: relative;
  height: 85%;
}
.aaa {
  width: 70% ;
}
</style>
