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
/**app.wxss**/
.sudoSixBox{
  width: 100%;
  height: 100%;
  position: relative;
  .bg{
    width: 100%;
    height: 100%;
  }
  .container {
    height: 100%;
    padding: 200/7.5vw 10/7.5vw;
    box-sizing: border-box;
    width: 100%;
  }

  .wrap{
    align-items: center;
    position: absolute;
    top: 219/7.5vw;
    left: 35/7.5vw;
  }
  .item{
    width: 68/7.5vw;
    height: 68/7.5vw;
    margin:0 5/7.5vw 2/7.5vw 0;
    z-index: 10;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
  }
  .item img{
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
  .top{
    display: flex;
    flex-direction: row;
    position: absolute;
    top:36/7.5vw;
    width: 100%;
    height: 70/7.5vw;
  }
  .top img{
    position: absolute;
    z-index: 2;
  }
  .back{
    width:69/7.5vw;
    height: 71/7.5vw;
    left: 26/7.5vw;
  }
  .undo,.restart{
    width: 207/7.5vw;
    height:63/7.5vw;
    top: 5/7.5vw;
  }
  .undo{
    left: 116/7.5vw;
  }
  .restart{
    left: 116/7.5vw;
  }
  .top .base{
    width: 420/7.5vw;
    height: 70/7.5vw;
    z-index: 1;
    left:112/7.5vw;
  }
  .logo{
    width: 151/7.5vw;
    height: 45/7.5vw;
    right:38/7.5vw;
    top: 14/7.5vw;
  }
  .btnwrap{
    display: flex;
    flex-direction: row;
    margin-left: 12/7.5vw;
    position: absolute;
    bottom:129/7.5vw;
    width: 105/7.5vw;
    height:105/7.5vw;
  }

  .btnwrap  img.btn{
    width: 105/7.5vw;
    height:105/7.5vw;
    position: absolute;
    top: 0;
  }
  .board{
    position: absolute;
    top: 210/7.5vw;
    width: 507/7.5vw;
    height: auto;
    z-index: 2;
    left: 130/7.5vw;
  }
  .wrap{
    width: 507/7.5vw;
    left:160/7.5vw;
    top:245/7.5vw;
  }
  .btnwrap{
    margin-left: 132/7.5vw;
    bottom: 266/7.5vw;
  }
  .btnwrap .btn:nth-child(1){
    left: 0;
  }
  .btnwrap .btn:nth-child(2){
    left: 75/7.5vw;
  }
  .btnwrap .btn:nth-child(3){
    left: 154/7.5vw;
  }
  .btnwrap .btn:nth-child(4){
    left: 239/7.5vw;
  }
  .btnwrap .btn:nth-child(5){
    left: 310/7.5vw;
  }
  .btnwrap .btn:nth-child(6){
    left: 387/7.5vw;
  }
}
</style>
