QUTCHYを利用するためのJS<br>
<dl>
	<dt>依存ライブラリ</dt>
	<dd>jQuery</dd>
	<dd>konashi.js</dd>
</dl>

例) konashiと接続後すぐに喋らせる<br>
<pre>
  k.ready(function(){
    var qutchy = new Qutchy();
    qutchy.speak("ゆっくりしていってね");
  });
  k.find();
</pre>