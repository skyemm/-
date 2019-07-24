//入口文件
//import 'jquery/dist/jquery.min.js'


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import mui from "./lib/mui/js/mui.min.js";
import './css/style.scss'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min.js'

// import Map from './map.js'
// import Shape from './shape.js'

// var vm = new Vue({
//     el: "#app",
//     render: c => c(app),
// })

var blocks = [
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
var smallBlocks = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

class Map {
    size = 20;
    margin = 3;
    block = [];
    smallBlock = []
    show() {
            //获取界面盒子map
            var map = document.getElementById("maps");
            //获取界面小盒子
            var smallmap = document.getElementById("smallD");
            //循环建立20X10个小的div盒子
            for (var y = 0; y < 20; y++) {
                this.block.push([]);
                for (var x = 0; x < 10; x++) {
                    var div = document.createElement("div");
                    // div.className='div-small';
                    //设置每个div的样式
                    div.style.cssText =
                        "width: 25px; height: 25px;margin: 2px;background-color: white;position: absolute;";
                    //进行全局定位
                    div.style.top = y * 27 + "px";
                    div.style.left = x * 27 + "px";
                    // div.setAttribute = ("id", y * 10 + x + 1);
                    //将div样式加入block中
                    this.block[y][x] = div;
                    //添加到map中作为子元素
                    map.appendChild(div);
                }
            }
            // console.log(blocks)
            for (var y = 0; y < 4; y++) {
                this.smallBlock.push([]);
                for (var x = 0; x < 4; x++) {
                    var div = document.createElement("div");
                    // div.className='div-small';
                    //设置每个div的样式
                    div.style.cssText =
                        "width: 25px; height: 25px;margin: 3px;background-color: white;position: absolute;";
                    //进行全局定位
                    div.style.top = (y * 28 + 31) + "px";
                    div.style.left = x * 28 + "px";
                    // div.setAttribute = ("id", y * 10 + x + 1);
                    //将div样式加入block中
                    this.smallBlock[y][x] = div;
                    //添加到map中作为子元素
                    smallmap.appendChild(div);
                }
            }
        }
        //渲染界面
    render() {
            //渲染大盒子
            for (var y = 0; y < 20; y++) {
                for (var x = 0; x < 10; x++) {

                    switch (blocks[y][x]) {
                        case 0:
                            // document.getElementById(this.block[y][x]]).style.cssText = "background-color:white;";
                            this.block[y][x].style.cssText =
                                "width: 25px; height: 25px;margin: 4px;background-color: white;position: absolute;";
                            this.block[y][x].style.top = y * 29 + "px";
                            this.block[y][x].style.left = x * 29 + "px";
                            break;
                        case 1:
                            // document.getElementById(this.block[y][x]]).style.cssText = "background-color:blue;";
                            this.block[y][x].style.cssText =
                                "width: 25px; height: 25px;margin: 4px;background-color: blue;position: absolute;";
                            this.block[y][x].style.top = y * 29 + "px";
                            this.block[y][x].style.left = x * 29 + "px";
                            break;
                        case 2:
                            // document.getElementById(this.block[y][x]]).style.cssText = "background-color:black;";
                            this.block[y][x].style.cssText =
                                "width: 25px; height: 25px;margin: 4px;background-color: black;position: absolute;";
                            this.block[y][x].style.top = y * 29 + "px";
                            this.block[y][x].style.left = x * 29 + "px";
                            break;
                    }
                }
            }
            //渲染小盒子
            for (var y = 0; y < 4; y++) {
                for (var x = 0; x < 4; x++) {

                    switch (smallBlocks[y][x]) {
                        case 0:
                            // document.getElementById(this.block[y][x]]).style.cssText = "background-color:white;";
                            this.smallBlock[y][x].style.cssText =
                                "width: 25px; height: 25px;margin: 3px;background-color: white;position: absolute;";
                            this.smallBlock[y][x].style.top = (y * 28 + 31) + "px";
                            this.smallBlock[y][x].style.left = x * 28 + "px";
                            break;
                        case 1:
                            // document.getElementById(this.block[y][x]]).style.cssText = "background-color:blue;";
                            this.smallBlock[y][x].style.cssText =
                                "width: 25px; height: 25px;margin: 3px;background-color: red;position: absolute;";
                            this.smallBlock[y][x].style.top = (y * 28 + 31) + "px";
                            this.smallBlock[y][x].style.left = x * 28 + "px";
                            break;
                    }
                }
            }
        }
        //砖块改变的方法
    change(prev, next) {
        //遍历整个数组为砖块设置颜色
        //主要用于砖块触底时的颜色变化
        for (var y = 0; y < 20; y++) {
            for (var x = 0; x < 10; x++) {
                if (blocks[y][x] == prev) {
                    blocks[y][x] = next;
                }
            }
        }
    }
    changeSmall(prev, next) {
            for (var y = 0; y < 4; y++) {
                for (var x = 0; x < 4; x++) {
                    if (smallBlocks[y][x] == prev) {
                        smallBlocks[y][x] = next;
                    }
                }
            }
        }
        //左移动操作
    left() {
        var flage = true;
        sign: for (var y = 0; y < 20; y++) {
            for (var x = 0; x < 10; x++) {
                if (blocks[y][x] == 1 && x == 0) {
                    //判断砖块是否可移动并且是否到达最左边
                    flage = false;
                    //break sign;
                }
                //判断砖块是否是可以移动并前一个砖块是否为不可移动
                else if (blocks[y][x] == 1 && blocks[y][x - 1] == 2) {
                    flage = false;
                }
            }
        }

        if (flage == true) {
            for (var y = 0; y < 20; y++) {
                for (var x = 0; x < 10; x++) {
                    if (blocks[y][x] == 1 && x != 0) {
                        blocks[y][x - 1] = 1;
                        blocks[y][x] = 0;
                        //console.log(this.blocks[y][x]);
                    }
                }
            }
            //修改原点
            shape.origin[1]--
                //立即刷新界面
                map.render();
        }

    }
    right() {
            var flage = true;
            sign: for (var y = 0; y < 20; y++) {
                for (var x = 9; x >= 0; x--) {
                    if (blocks[y][x] == 1 && x == 9) {
                        flage = false;
                        break sign;
                    } else if (blocks[y][x] == 1 && blocks[y][x + 1] == 2) {
                        flage = false;
                    }
                }
            }

            if (flage == true) {
                for (var y = 0; y < 20; y++) {
                    for (var x = 9; x >= 0; x--) {
                        if (blocks[y][x] == 1 && x != 9) {
                            blocks[y][x + 1] = 1;
                            blocks[y][x] = 0;
                            //console.log(this.blocks[y][x]);
                        }
                    }
                }
                //修改原点
                shape.origin[1]++
                    map.render();
            }

        }
        //下移动操作
    down() {
            var flage = true;
            sign: for (var y = 19; y >= 0; y--) {
                for (var x = 0; x < 10; x++) {

                    if (blocks[y][x] == 1 && y == 19) {
                        //判断砖块是否可移动并且是否到达最下边
                        flage = false;
                        break sign;
                    } else if (blocks[y][x] == 1 && blocks[y + 1][x] == 2) {
                        //判断砖块是否是可以移动并下一个砖块是否为不可移动
                        flage = false;
                    }
                    //判断砖块是否是可以移动并下一个砖块是否为不可移动
                    // switch (k) {
                    //     case 1:
                    //             if(y<=18){
                    //                 if (blocks[y][x] == 1 && blocks[y + 1][x] == 2) {
                    //                     //判断砖块是否是可以移动并下一个砖块是否为不可移动
                    //                     flage = false;
                    //                 }
                    //             }
                    //         break;
                    //     case 2:
                    //             if(y<=17){
                    //                 if (blocks[y][x] == 1 && (blocks[y + 1][x] == 2||blocks[y + 2][x] == 2)) {
                    //                     //判断砖块是否是可以移动并下两个砖块是否为不可移动
                    //                     if(blocks[y + 1][x] == 1 && blocks[y + 2][x] == 2){
                    //                     }else{
                    //                         flage = false;
                    //                     }                                       
                    //                 }
                    //             }
                    //         break;
                    //     case 3:
                    //             if(y<=16){
                    //                 if (blocks[y][x] == 1 && (blocks[y + 1][x] == 2||blocks[y + 2][x] == 2||blocks[y + 3][x] == 2)) {
                    //                     //判断砖块是否是可以移动并下三个砖块是否为不可移动
                    //                     flage = false;
                    //                 }
                    //             }
                    //         break;

                    // }
                }
            }

            if (flage == true) {
                for (var y = 19; y >= 0; y--) {
                    for (var x = 0; x < 10; x++) {
                        if (blocks[y][x] == 1) {
                            blocks[y + 1][x] = 1;
                            blocks[y][x] = 0;
                            //console.log(this.blocks[y][x]);
                        }
                    }
                }
                //修改原点
                shape.origin[0] = shape.origin[0] + 1
                    //立即刷新界面
                map.render();
            }

        }
        //封装检测页面中是否有可一定方块，如果没有则添加一个
    moveT() {
            var flag = true;
            sign: for (var y = 0; y < 20; y++) {
                for (var x = 9; x >= 0; x--) {
                    if (blocks[y][x] == 1) {
                        flag = false
                        break sign;
                    }
                }
            }

            if (flag) {
                shape.addNewShape()
                shape.getNextShape();
            }
        }
        //底部检测
    bottomT() {
        var flag = false
        shape.getShape(shape.type, shape.angle).forEach(pos => {
            //判断方块是否到达底部
            if (pos[0] == 19) {
                flag = true
            } else if (blocks[pos[0] + 1][pos[1]] === 2) {
                //判断方块下方是否为不可移动方块  || blocks[pos[0] + 1][pos[1]] === undefined
                flag = true
            }
        })

        if (flag) {
            this.change(1, 2)
        }
    }

    clearT() {
        blocks.forEach((row, y) => {
            //检测这一行是否为固定方块
            var flag = row.every(block => {
                return block == 2
            })

            if (flag) {
                //删除一行
                blocks.splice(y, 1)
                    //在头部添加一行
                blocks.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                score = score + 100;
                document.getElementById("score").value = score;
            }
        })
    }

}

class Shape {
    type = 0 //一共有7中类型
    angle = 0 //四种方向
    origin = [0, 3] //坐标原点
    nextType = 0
    shape = [
            //定义一字型数据
            [
                [
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0]
                ],
                [
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0]
                ]
            ],
            //定义t字型
            [
                [
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 0, 0]
                ],
                [
                    [0, 0, 1],
                    [0, 1, 1],
                    [0, 0, 1]
                ],
                [
                    [0, 0, 0],
                    [0, 1, 0],
                    [1, 1, 1]
                ],
                [
                    [1, 0, 0],
                    [1, 1, 0],
                    [1, 0, 0]
                ]
            ],
            //定义f型
            [
                [
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 1, 1, 0]
                ],
                [
                    [0, 0, 0],
                    [1, 0, 0],
                    [1, 1, 1]
                ],
                [
                    [1, 1, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ]
            ],
            //定义反f型
            [
                [
                    [1, 1, 1],
                    [1, 0, 0],
                    [0, 0, 0]
                ],
                [
                    [0, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1]
                ],
                [
                    [0, 0, 0],
                    [0, 0, 1],
                    [1, 1, 1]
                ],
                [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 1, 0]
                ]
            ],
            //定义z字型
            [
                [
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 0]
                ],
                [
                    [0, 0, 1],
                    [0, 1, 1],
                    [0, 1, 0]
                ],
                [
                    [0, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1]
                ],
                [
                    [0, 1, 0],
                    [1, 1, 0],
                    [1, 0, 0]
                ]
            ],
            //定义反z字形
            [
                [
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 0, 0]
                ],
                [
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1]
                ],
                [
                    [0, 0, 0],
                    [0, 1, 1],
                    [1, 1, 0]
                ],
                [
                    [1, 0, 0],
                    [1, 1, 0],
                    [0, 1, 0]
                ]
            ],
            //定义田字形
            [
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [1, 1],
                    [1, 1],
                ]
            ]
        ]
        //获取图形形状位置
    getShape(type, angle) {
            //获取形状
            var shap = this.shape[type][angle];
            //存储形状坐标
            var pos = [];
            //坐标重定位到界面
            shap.forEach((row, y) => {
                row.forEach((block, x) => {
                    if (block == 1) {
                        pos.push([this.origin[0] + y, this.origin[1] + x]);
                    }
                });
            });
            return pos;
        }
        //获取图形形状位置
    getNextPos(type, angle) {
        //获取形状
        var shap = this.shape[type][angle];
        //存储形状坐标
        var pos = [];
        //坐标重定位到界面
        shap.forEach((row, y) => {
            row.forEach((block, x) => {
                if (block == 1) {
                    pos.push([1 + y, 0 + x]);
                }
            });
        });
        return pos;
    }

    //获取形状并展示在页面中
    showShape() {
        this.getShape(this.type, this.angle).forEach(pos => {
            blocks[pos[0]][pos[1]] = 1;
        })
    }

    getNextShape() {
        this.nextType = Math.floor(Math.random() * 7)
        map.changeSmall(1, 0);
        this.getNextPos(this.nextType, 0).forEach(pos => {
            smallBlocks[pos[0]][pos[1]] = 1;
        })
    }


    addNewShape() {
        //重新规定原点坐标
        this.origin = [0, 3]

        //重新定义角度
        this.angle = 0;

        //随机生成形状，即随机生成一个0-6之间的随机数
        this.type = this.nextType

        //检测新方块是否与固定方块重合
        var flag = true
        this.getShape(this.type, this.angle).forEach(pos => {
            if (blocks[pos[0]][pos[1]] == 2) {
                flag = false
            }
        })
        if (flag) {
            //显示新形状
            this.showShape()
        } else {
            clearInterval(id)
                // console.log('游戏结束！')
            mui.alert('欢迎使用俄罗斯方块', '游戏结束!', function() {

            });
        }

    }

    //形状的旋转
    rotate() {
        //获取新角度
        var newAngle = (this.angle + 1) % 4;

        // console.log(this.angle);
        // console.log(newAngle);


        //判断新的方块是否会超出边界
        //判断是否会和固定方块重合
        var flag = true
        this.getShape(this.type, newAngle).forEach(el => {
            //判断边界
            if (el[0] > 19) {
                flag = false
            } else if (el[1] < 0 || el[1] > 9) {
                flag = false
            } else if (blocks[el[0]][el[1]] == 2) {
                flag = false
            }

        });
        if (flag) {
            this.angle = newAngle;
            //清除原有的形状
            map.change(1, 0);
            //显示新的形状
            this.showShape()
                //渲染新的效果
            map.render();
        }
    }
}
//实例化与调用
var map = new Map()
var shape = new Shape()

map.show()
map.render()

var id = null;
var score = 0;

function change() {
    map.bottomT();
    map.clearT();
    map.down();
    map.moveT();
    map.render();
}
//设置开始按钮
document.getElementById("begin").addEventListener('click', function() {
        document.getElementById("left").disabled = false
            //禁用向右移动
        document.getElementById("right").disabled = false
            //禁用向下移动
        document.getElementById("down").disabled = false
            //禁用变形
        document.getElementById("up").disabled = false
        id = setInterval(() => {
            change()
        }, getK());

        setDiff()
    })
    //设置暂停
document.getElementById("stop").addEventListener('click', function() {
        clearInterval(id);
        document.getElementById("left").disabled = "disabled"
            //禁用向右移动
        document.getElementById("right").disabled = "disabled"
            //禁用向下移动
        document.getElementById("down").disabled = "disabled"
            //禁用变形
        document.getElementById("up").disabled = "disabled"
    })
    //设置重新开始按钮
document.getElementById("rebegin").addEventListener('click', function() {
        clearInterval(id);
        map.change(1, 0);
        map.change(2, 0);
        map.changeSmall(1, 0)
        score = 0;
        document.getElementById("score").value = score;
        id = setInterval(() => {
            change()
        }, getK());
        setDiff()
    })
    //向左移动
document.getElementById("left").addEventListener('click', map.left)
    //向右移动
document.getElementById("right").addEventListener('click', map.right)
    //向下移动
document.getElementById("down").addEventListener('click', map.down)
    //变形
document.getElementById("up").addEventListener('click', function() {
    shape.rotate()
}, false)

function getK() {
    var k = 0;
    var sel = document.getElementById("sel")
    var index = sel.selectedIndex; // 选中索引

    var value = sel.options[index].value; // 选中文本
    //难度转换  
    switch (value) {
        case 'item-1':
            k = 1000;
            break;
        case 'item-2':
            k = 600;
            break;
        case 'item-3':
            k = 200;
            break;
    }
    return k;

}
//显示当前难度
function setDiff() {
    var sel = document.getElementById("sel")
    var index = sel.selectedIndex; // 选中索引

    var val = sel.options[index].text; // 选中文本 
    document.getElementById("difficult").value = val //显示当前难度
}