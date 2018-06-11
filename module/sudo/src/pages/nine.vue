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
.sudoNineBox{
    width: 100%;
    height: 100%;
    .wrap{
      position: absolute;
      top: 219/7.5vw;
      left: 35/7.5vw;
    }
    .board{
      width: 736/7.5vw;
      left: 7/7.5vw;
      position: absolute;
      top: 185/7.5vw;
    }
    .item{
      width: 68/7.5vw;
      height: 68/7.5vw;
      margin:0 5/7.5vw 2/7.5vw 0;
      z-index: 10;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
    }
    .item image{
      width: 100%;
      height: 100%;
    }
    .item .lighted{
      position: absolute;
      width: 72/7.5vw;
      height: 72/7.5vw;
      top: -3/7.5vw;
      left: -1/7.5vw;
      z-index: 11;
    }
    .item.active{
      position: relative;
    }

    .column3{
      margin-right: 23/7.5vw;
    }
    .column6{
      margin-right: 23/7.5vw;
    }
    .mb{
      margin-bottom: 26/7.5vw;
    }
    .numimg{
      position: relative;
      z-index: 10;
    }
    .btnwrap{
        margin-left: 12/7.5vw;
        position: absolute;
        bottom:129/7.5vw;
        width: 105/7.5vw;
        height:105/7.5vw;
        .btn:nth-child(2){
            left: 75/7.5vw;
        }
        .btn:nth-child(3){
            left: 154/7.5vw;
        }
        .btn:nth-child(4){
            left: 239/7.5vw;
        }
        .btn:nth-child(5){
            left: 310/7.5vw;
        }
        .btn:nth-child(6){
            left: 387/7.5vw;
        }
        .btn:nth-child(7){
            left: 463/7.5vw;
        }
        .btn:nth-child(8){
            left: 540/7.5vw;
        }
        .btn:nth-child(9){
            left: 620/7.5vw;
        }
    }
}
</style>
