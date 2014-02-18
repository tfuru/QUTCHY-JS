おしゃべりオモチャ開発キット QUTCHY を <a href="http://konashi.ux-xu.com/kjs/">konashi.js</a> で利用するためのJavaScriptライブラリ<br>

<dl>
	<dt>CDN</dt>
	<dd>http://qutchy-server.appspot.com/script/qutchy.js</dd>
</dl>

<dl>
	<dt>依存ライブラリ</dt>
	<dd>jQuery</dd>
	<dd>konashi.js</dd>
</dl>

<dl>
	<dt>利用例</dt>
	<dd>konashi と接続後、すぐに喋らせる</dd>
</dl>

<pre>
&lt;!DOCTYPE html&gt;
&lt;html ng-app&gt;
   &lt;head&gt;
   &lt;title&gt;QUTCHY JS&lt;/title&gt;
   &lt;meta charset=&quot;UTF-8&quot;&gt;
   &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;QUTCHY JS サンプル&lt;/div&gt;
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
</pre>

<dl>
	<dt>サイト</dt>
	<dd>
		<a href="http://www.strikingly.com/qutchy">QUTCHY</a>
	</dd>
	<dd>
		<a href="http://www.gadgeban.com/project/no022.php">QUTCHY [ガジェットバンク]</a>
	</dd>
</dl>

<dl>
	<dt>利用API</dt>
	<dd>
		<a href="http://developer.yahoo.co.jp/about">Webサービス by Yahoo! JAPAN</a>
	</dd>
	<dd>
		ユカイ工学 <a href="https://itunes.apple.com/jp/app/konashi.js-javascript-html/id652940096?mt=8">konashi.js</a>
	</dd>
</dl>
