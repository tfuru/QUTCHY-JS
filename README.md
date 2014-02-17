QUTCHYを利用するためのJS<br>
<dl>
	<dt>依存ライブラリ</dt>
	<dd>jQuery</dd>
	<dd>konashi.js</dd>
</dl>

例) konashiと接続後すぐに喋らせる<br>
<pre>
QUTCHYを利用するためのJS&lt;br&gt;
&lt;dl&gt;
    &lt;dt&gt;依存ライブラリ&lt;/dt&gt;
    &lt;dd&gt;jQuery&lt;/dd&gt;
    &lt;dd&gt;konashi.js&lt;/dd&gt;
&lt;/dl&gt;

例) konashiと接続後すぐに喋らせる&lt;br&gt;
&lt;pre&gt;
&lt;!DOCTYPE html&gt;
&lt;html ng-app&gt;
   &lt;head&gt;
   &lt;title&gt;QUTCHY JS&lt;/title&gt;
   &lt;meta charset=&quot;UTF-8&quot;&gt;
   &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;QUTCHY JS サンプル&lt;/h1&gt;
  &lt;script src=&quot;http://code.jquery.com/jquery-1.10.1.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;http://code.jquery.com/jquery-migrate-1.2.1.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;http://konashi.ux-xu.com/kjs/konashi-bridge.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;http://qutchy-server.appspot.com/script/qutchy.js&quot;&gt;&lt;/script&gt;
  &lt;script&gt;
  k.ready(function(){
    var qutchy = new Qutchy();
    qutchy.speak(&quot;ゆっくりしていってね&quot;);
  });
  $(function(){
      k.find();
  });
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;/pre&gt;
</pre>