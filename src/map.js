class Map {
    size = 30;
    margin = 5;
    block = [];
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
    }
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
        }
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
        }
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
    }
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
        }
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
    }

}