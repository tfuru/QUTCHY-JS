// QUTCHYを利用するためのJS
// 依存 jQuery,konashi.js
//
//  例) konashiと接続後すぐに喋らせる
//  k.ready(function(){
//    var qutchy = new Qutchy();
//    qutchy.speak("ゆっくりしていってね");
//  });
//  k.find();
//
var Qutchy = function(){
	//APIサーバのURL
	this.API_BASE_URL = "http://qutchy-server.appspot.com";

	//Qutchy の I2C アドレス
	this.I2C_QUTCHY_ADDR = 0x2E;

	/** 初期化
	 *
	 */
	this.init = function(){
	    //I2C モードを有効にする
	    k.i2cMode(k.KONASHI_I2C_ENABLE_400K);
	};

	/** 喋らせる
	 *
	 */
	this.speak = function( txt ){
		//ローマ字に変換
		var fnc = function(json){
			//ローマ字取得に成功
			this.aquesTalkWrite(json.roman+'\r');
		};
		var api = this.API_BASE_URL+"/api/furigana";
		$.post(api,{sentence:txt,symbol:true},$.proxy(fnc,this));
	};

	this.aquesTalkWrite = function(txt){
		//k.KONASHI_I2C_DATA_MAX_LENGTH I2Cで一度に送受信できる最大バイト数

		//送信最大バイト数 を超えない場合
		var dst = [];
		var j = 0;
		for(i=0;i<txt.length;i++){
			var c = txt.charCodeAt(i);
			dst.push( c );
			j++;
			if(j >= k.KONASHI_I2C_DATA_MAX_LENGTH){
				//ココで送信
				k.i2cStartCondition();
				k.i2cWrite( dst.length, dst, this.I2C_QUTCHY_ADDR);
				k.i2cStopCondition();
				dst.length = 0;
				j = 0;
			}
		}

		//残りを送信
		k.i2cStartCondition();
		k.i2cWrite( dst.length, dst, this.I2C_QUTCHY_ADDR);
		k.i2cStopCondition();
	};

	//初期化
	this.init();
}

Qutchy.prototype = {

};