// JavaScript

console.log('Hello world!');

const items = document.querySelectorAll('.img-item');
console.log(items);
// .img-item がついたものをずべて取得

console.log(items.length);
// lengthで要素の数を数えられる

// for文
for(let i = 0; i < items.length; i++){
    //要素(画像)の数より小さい時

    const keyframes = {
      opacity: [0, 1],
      translate: ['0 30px', 0],
      // 動きの大きさを指定する
      filter: ['blur(5px)', 'blur(0)'],
      // 上はぼかしをとっている処理
    };
    
    const options = {
      duration: 400,
      // 出てくるスピード
      delay: i * 400,
      // delayがないと全部一緒に出てくる。要素の数字（0〜5）掛ける400だけ遅れて表示される。
      fill: 'forwards',
    };
  
    items[i].animate(keyframes, options);
  }