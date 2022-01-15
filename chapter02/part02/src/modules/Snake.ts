class Snake {
  //蛇头 蛇身
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    
  }

  //获取蛇头坐标
  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  //设置蛇头坐标
  set X(value: number) {
    if (this.X === value) return;
    //X的合法范围
    if (value < 0 || value > 290) {
      //蛇撞墙了
      throw new Error("蛇撞墙了")
    }
// 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      //如果发生了掉头 让蛇反方向继续移动
      if (value > this.X) {
        value = this.X - 10; 
      } else {
        value = this.X + 10;
      }
    }

    this.moveBody();
    this.head.style.left = value + "px";
    this.checkHeadBody();
  }

  set Y(value: number) {
    if (this.Y === value) return;

    //Y的合法范围
    if (value < 0 || value > 290) {
      //蛇撞墙了
      throw new Error("蛇撞墙了")
    }
  // 修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
          value = this.Y - 10;
      }else{
          value = this.Y + 10;
      }
    }

    this.moveBody();
    this.head.style.top = value + "px";
    this.checkHeadBody();
  }

  //蛇长增长
  addBody() {
    //向element中添加一个div
    this.element.insertAdjacentHTML('beforeend', "<div></div>")
  }

  //蛇移动身体
  moveBody() {
    /*
        *   将后边的身体设置为前边身体的位置
        *       举例子：
        *           第4节 = 第3节的位置
        *           第3节 = 第2节的位置
        *           第2节 = 蛇头的位置
        * */
        // 遍历获取所有的身体
    for (let i = this.bodies.length - 1;i > 0;i--) {
      //获取当前身体
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      //把值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }
  }

  // 检查蛇头是否撞到身体的方法
  checkHeadBody(){
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for(let i=1; i<this.bodies.length; i++){
        let bd = this.bodies[i] as HTMLElement;
        if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
            // 进入判断说明蛇头撞到了身体，游戏结束
            throw new Error('撞到自己了！');
        }
    }
}
}
export default Snake