<template>
  <div class="carousel">
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div class="heart">
    <div class="disc1"></div>
    <div class="disc2"></div>
    <div class="square"></div>
  </div>
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

.disc1 {
  width: 10rem;
  height: 10rem;
  border: 1px solid red;
  background-color: red;
  border-radius: 100%;
  margin: 30rem 0 0 30rem;
  float: left;
}

.disc2 {
  width: 10rem;
  height: 10rem;
  border: 1px solid red;
  background-color: red;
  border-radius: 100%;
  margin: 25rem 0 0 0;
  float: left;
  position: relative;
  right: 5rem;
}

.square {
  width: 10rem;
  height: 10rem;
  border: 0.1rem solid red;
  background-color: red;
  margin: 30rem 0 0 0;
  float: left;
  position: relative;
  right: 15rem;
}

.heart {
  transform: rotate(45deg);
}
</style>
