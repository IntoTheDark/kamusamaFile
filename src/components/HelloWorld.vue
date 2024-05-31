<template>
  <div class="main-container">
    <el-upload
      class="upload-demo"
      drag
      action="http://kamusama.icu:10013/upload">
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
        prop="Key"
        label="名称">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button  @click="deleteData(scope.row.Key)" type="danger" size="small">删除</el-button>
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
          this.tableData = response.data.Contents.sort(function compare (a, b) {
            if (a.LastModified < b.LastModified) { return 1 } else if (a.LastModified > b.LastModified) { return -1 } else { return 0 }
          })
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
        url: '/delete?id=' + key
      }).then((response) => {
        location.reload()
      })
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
</style>
