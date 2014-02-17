QUTCHYを利用するためのJS
依存
jQuery,konashi.js

例) konashiと接続後すぐに喋らせる
  k.ready(function(){
    var qutchy = new Qutchy();
    qutchy.speak("ゆっくりしていってね");
  });
  k.find();
