<template>
    <game></game>
</template>

<script>
import game from '@/components/game.vue'
export default {
  data () { // 选项 数据
    return {

    }
  },
  components: { // 定义组件
      game
  },
  methods: { // 事件处理方法

  },
  created () { // 生命周期函数

  }
}
</script>

<style lang="less">
.sudoFourBox{
    width: 100%;
    height: 100%;
    .item{
      width:100/7.5vw;
      height: 100/7.5vw;
      display: inline-block;
    }
    .item .lighted{
      width: 104/7.5vw;
      height: 104/7.5vw;
    }
    .wrap{
      width: 507/7.5vw;
      left:160/7.5vw;
      top:256/7.5vw;
    }
    .column3{
      margin-right: 42/7.5vw;
    }
    .mb{
      margin-bottom: 42/7.5vw;
    }
    .board{
      position: absolute;
      top: 210/7.5vw;
      width: 507/7.5vw;
      height: 533/7.5vw;
      z-index: 2;
      left: 130/7.5vw;
    }
    .btnwrap{
      bottom: 268/7.5vw;
      margin-left: 195/7.5vw;
      .btn:nth-child(2){
          left:75/7.5vw;
      }
      .btn:nth-child(3){
          left:154/7.5vw;
      }
      .btn:nth-child(4){
          left:239/7.5vw;
      }
    }
}
</style>
