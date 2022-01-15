import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  //存储蛇移动的方向
  direction: string = "";
  //创建一个属性记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    this.init();
  }

  //初始化 调用就游戏开始
  init() {
    //绑定键盘按下的事件
    document.addEventListener('keydown', this.keyDowmHander.bind(this));
    //移动蛇
    this.run();
  }
  keyDowmHander(event:KeyboardEvent) {
    this.direction = event.key;
    
  }
  //移动身体
  run() {
    /**
     * 根据方向 this.direction 改变蛇的位置
     * 向上 top 减少
     * 向下 top 增加
     * 向左 left 减少
     * 向右 left 增加
     */

    //获取蛇的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
      case "Up":
        Y -= 10;
        break;
      case 'ArrowDown':
      case "Down":
        Y += 10;
        break;
      case 'ArrowLeft':
      case "Left":
        X -= 10;
        break;
      case 'ArrowRight':
      case "Right":
        X += 10;
        break;
    }

    this.checkEat(X, Y);


    //修改蛇的x,y
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      //弹出提示
      alert((e as Error).message + "Game Over");
      //游戏结束
      this.isLive = false;
    }
    

    //设置定时器 让蛇移动
    this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
  }

  //定义一个方法 检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
     //食物位置重置
     this.food.change();
     //增加得分
     this.scorePanel.addScore();
     //增加蛇长
     this.snake.addBody();
   }
  }
}
export default GameControl