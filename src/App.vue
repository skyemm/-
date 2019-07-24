<template>
  <div class="els">
    <div class="body">
      <div class="center" id="map"></div>
      <div class="right">
        <select>
          <!-- mui-btn mui-btn-block mui-icon mui-icon-arrowdown mui-right -->
          <option value="item-1">简单</option>
          <option value="item-2">中等</option>
          <option value="item-3">困难</option>
        </select>
      </div>
    </div>

    <div class="tabbar">
      <div class="move">
        <button type="button" class="mui-btn mui-btn-success mui-icon mui-icon-arrowthinup">上</button>
        <button
          type="button"
          class="mui-btn mui-btn-success mui-icon mui-icon-arrowthindown"
          @click="down()"
        >下</button>
        <button
          type="button"
          class="mui-btn mui-btn-success mui-icon mui-icon-arrowthinleft"
          @click="left()"
        >左</button>
        <button
          type="button"
          class="mui-btn mui-btn-success mui-icon mui-icon-arrowthinright"
          @click="right()"
        >右</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 0, 0, 0, 0, 0, 0]
      ],
      size: 30,
      margin: 5,
      block: [],
      type:0,//一共有7中类型
      angle:0,//四种方向
      origin:[0,3],//坐标原点
      shape: [
        //定义一字型数据
        [
          [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
          [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
          [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
          [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]
        ],
        //定义t字型
        [
          [[1, 1, 1], [0, 1, 0], [0, 0, 0]],
          [[0, 0, 1], [0, 1, 1], [0, 0, 1]],
          [[0, 0, 0], [0, 1, 0], [1, 1, 1]],
          [[1, 0, 0], [1, 1, 0], [1, 0, 0]]
        ],
        //定义f型
        [
          [[1, 1, 1], [0, 0, 1], [0, 0, 0]],
          [[0, 0, 1], [0, 0, 1], [0, 1, 1]],
          [[0, 0, 0], [1, 0, 0], [1, 1, 1]],
          [[1, 1, 0], [1, 0, 0], [1, 0, 0]]
        ],
        //定义反f型
        [
          [[1, 1, 1], [1, 0, 0], [0, 0, 0]],
          [[0, 1, 1], [0, 0, 1], [0, 0, 1]],
          [[0, 0, 0], [0, 0, 1], [1, 1, 1]],
          [[1, 0, 0], [1, 0, 0], [1, 1, 0]]
        ],
        //定义z字型
        [
          [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
          [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
          [[0, 0, 0], [1, 1, 0], [0, 1, 1]],
          [[0, 1, 0], [1, 1, 0], [1, 0, 0]]
        ],
        //定义反z字形
        [
          [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
          [[0, 1, 0], [0, 1, 1], [0, 0, 1]],
          [[0, 0, 0], [0, 1, 1], [1, 1, 0]],
          [[1, 0, 0], [1, 1, 0], [0, 1, 0]]
        ],
        //定义田字形
        [
          [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
          [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
          [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
          [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
        ]
      ]
    };
  },

  methods: {
    show() {
      //获取界面盒子map
      var map = document.getElementById("map");
      //循环建立20X10个小的div盒子
      for (var y = 0; y < 20; y++) {
        this.block.push([]);
        for (var x = 0; x < 10; x++) {
          var div = document.createElement("div");
          // div.className='div-small';
          //设置每个div的样式
          div.style.cssText =
            "width: 25px; height: 25px;margin: 5px;background-color: white;position: absolute;";
          //进行全局定位
          div.style.top = y * 30 + "px";
          div.style.left = x * 30 + "px";
          div.setAttribute = ("id", y * 10 + x + 1);
          //将div样式加入block中
          this.block[y][x] = div;
          //添加到map中作为子元素
          map.appendChild(div);
        }
      }
    },
    render() {
      for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 10; x++) {
          // if(this.blocks[y][x]]===1){
          //   this.blocks[y][x]].style.cssText='background-color:blue;'
          // }else if(this.blocks[y][x]]===2){
          //   this.blocks[y][x]].style.cssText='background-color:black;'
          // }
          switch (this.blocks[y][x]) {
            case 0:
              // document.getElementById(this.block[y][x]]).style.cssText = "background-color:white;";
              this.block[y][x].style.cssText =
                "width: 25px; height: 25px;margin: 5px;background-color: white;position: absolute;";
              this.block[y][x].style.top = y * 30 + "px";
              this.block[y][x].style.left = x * 30 + "px";
              break;
            case 1:
              // document.getElementById(this.block[y][x]]).style.cssText = "background-color:blue;";
              this.block[y][x].style.cssText =
                "width: 25px; height: 25px;margin: 5px;background-color: blue;position: absolute;";
              this.block[y][x].style.top = y * 30 + "px";
              this.block[y][x].style.left = x * 30 + "px";
              break;
            case 2:
              // document.getElementById(this.block[y][x]]).style.cssText = "background-color:black;";
              this.block[y][x].style.cssText =
                "width: 25px; height: 25px;margin: 5px;background-color: black;position: absolute;";
              this.block[y][x].style.top = y * 30 + "px";
              this.block[y][x].style.left = x * 30 + "px";
              break;
          }
        }
      }
    },
    //砖块改变的方法
    change(prev, next) {
      //遍历整个数组为砖块设置颜色
      //主要用于砖块触底时的颜色变化
      for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 10; x++) {
          if (this.blocks[y][x] == prev) {
            this.blocks[y][x] = next;
          }
        }
      }
    },
    //左移动操作
    left() {
      var flage = true;
      sign: for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 10; x++) {
          if (this.blocks[y][x] == 1 && x == 0) {
            //判断砖块是否可移动并且是否到达最左边
            flage = false;
            break sign;
          }
          //判断砖块是否是可以移动并前一个砖块是否为不可移动
          else if (this.blocks[y][x] == 1 && this.blocks[y][x - 1] == 2) {
            flage = false;
          }
        }
      }

      if (flage == true) {
        for (var y = 0; y < 20; y++) {
          for (var x = 0; x < 10; x++) {
            if (this.blocks[y][x] == 1 && x != 0) {
              this.blocks[y][x - 1] = 1;
              this.blocks[y][x] = 0;
              //console.log(this.blocks[y][x]);
            }
          }
        }
      }
      //立即刷新界面
      this.render();
    },
    right() {
      var flage = true;
      sign: for (var y = 0; y < 20; y++) {
        for (var x = 9; x >= 0; x--) {
          if (this.blocks[y][x] == 1 && x == 9) {
            flage = false;
            break sign;
          } else if (this.blocks[y][x] == 1 && this.blocks[y][x + 1] == 2) {
            flage = false;
          }
        }
      }

      if (flage == true) {
        for (var y = 0; y < 20; y++) {
          for (var x = 9; x >= 0; x--) {
            if (this.blocks[y][x] == 1 && x != 9) {
              this.blocks[y][x + 1] = 1;
              this.blocks[y][x] = 0;
              //console.log(this.blocks[y][x]);
            }
          }
        }
      }
      this.render();
    },
    //下移动操作
    down() {
      var flage = true;
      sign: for (var y = 19; y >= 0; y--) {
        for (var x = 0; x < 10; x++) {
          //判断砖块是否是可以移动并下一个砖块是否为不可移动
          if (this.blocks[y][x] == 1 && y == 19) {
            //判断砖块是否可移动并且是否到达最下边
            flage = false;
            break sign;
          } else if (this.blocks[y][x] == 1 && this.blocks[y + 1][x] == 2) {
            flage = false;
          }
        }
      }

      if (flage == true) {
        for (var y = 19; y >= 0; y--) {
          for (var x = 0; x < 10; x++) {
            if (this.blocks[y][x] == 1) {
              this.blocks[y + 1][x] = 1;
              this.blocks[y][x] = 0;
              //console.log(this.blocks[y][x]);
            }
          }
        }
      }
      //立即刷新界面
      this.render();
    },

    //获取图形形状
    getShape(type,angle){
      //获取形状
      var shap=this.shape[type][angle];
      //存储形状坐标
      var pos=[];
      //坐标重定位到界面
      shap.forEach((row,y) => {
        row.forEach((block,x) => {
          if(block==1){
            pos.push([this.origin[0]+y,this.origin[1]+x]);
          }
        });
      });
      return pos;
    },
    //获取形状并展示在页面中
    showShape(){
      this.getShape(this.type,this.angle).forEach(pos=>{
        this.blocks[pos[0]][pos[1]]=1;
      })
    },

    addNewShape(){
      //重新规定原点坐标
      this.origin=[0,3]

      //重新定义角度
      this.angle=0;

      //随机生成形状，即随机生成一个0-6之间的随机数
      this.type=Math.floor(Math.random()*7)

      //显示新形状
      this.showShape()
    },
    //形状的旋转
    rotate(){
      //获取新角度
      var newAngle=(this.angle+1)%4;
      this.angle=newAngle;
      //清除原有的形状
      this.change(1,0);
      //显示新的形状
      this.showShape();
      //渲染新的效果
      this.render();
    }
  },
  mounted() {
    this.show();
    this.render();
    setInterval(() => {
      this.render();
    }, 100);
    this.addNewShape();
    
  }
};
</script>


<style lang="scss" scoped>
.els {
  margin: 0;
  padding: 0;
  color: #ddd;
  background: -webkit-radial-gradient(center, circle, #fff 0%, #33e2f2 200%);
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  .body {
    margin: 0;
    padding: 0;
    height: 595px;
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;

    .center {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.3);
      width: 307px;
      height: 607px;
      border: 1px solid rgb(158, 34, 34);
      position: absolute;
    }
    .right {
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      width: 20%;
      // height: 595px;
      position: absolute;
      right: 2px;
    }
  }
  .tabbar {
    margin: 30px 70px;
    .move {
      width: 307px;
      // float:left;
      // margin: 0 auto;
    }
  }
}
// .div-small {
//   width: 25px;
//   height: 25px;
//   margin: 5px;
//   background-color: white;
//   position: absolute;
// }
</style>

