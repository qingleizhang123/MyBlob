<template>
  <div class="carousel">
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imagelist: []
    }
  }
}
</script>

<style scope>
.el-carousel__container {
  height: 30rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 1.8rem;
  opacity: 0.75;
  line-height: 30rem;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
