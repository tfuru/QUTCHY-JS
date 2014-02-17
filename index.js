function IndexCtrl($scope){
	//Qutchy
	$scope.qutchy = undefined;

	$scope.sentence = "ゆっくりしていってね！";
	$scope.roman = "";
	$scope.logs = "";

	//Qutchy の I2C アドレス
	$scope.I2C_QUTCHY_ADDR = 0x2E;

	//各種イベントを受け取る
	k.ready(function(){
		//LED２を出力にして点灯
	    k.pinMode(k.LED2, k.OUTPUT);
	    k.digitalWrite(k.LED2, k.HIGH);

	    k.pinMode(k.LED3, k.OUTPUT);

	    //konashi と繋がってから Qutchy オブジェクトを生成する
	    $scope.qutchy = new Qutchy();

		$scope.showlogs("ready");
	});

	//konashiを検索 & 接続
	$scope.clickBtnFind = function($event){
		k.find();
	};

	$scope.clickBtnTalk = function($event){
		if(typeof $scope.qutchy == "undefined") return;

		//押されたら光る
		k.digitalWrite(k.LED3, k.HIGH);

		//喋らせる
		$scope.qutchy.speak($scope.sentence);

		$scope.showlogs("speak");
	};

	$scope.showlogs = function(txt){
		$scope.$apply(function(){
			$scope.logs += txt + "\n";
		});
	};
}

