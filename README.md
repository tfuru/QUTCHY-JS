QUTCHYを利用するためのJS<br>
<dl>
	<dt>依存ライブラリ</dt>
	<dd>jQuery</dd>
	<dd>konashi.js</dd>
</dl>

例) konashiと接続後すぐに喋らせる<br>
<pre>
<!DOCTYPE html>
<html ng-app>
   <head>
   <title>QUTCHY API</title>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
  <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script src="http://konashi.ux-xu.com/kjs/konashi-bridge.min.js"></script>
  <script>
  k.ready(function(){
    var qutchy = new Qutchy();
    qutchy.speak("ゆっくりしていってね");
  });
  $(function(){
  	k.find();
  });
  </script>
</body>
</html>
</pre>