
		function getServerDate(){
		  		// 鉴于所有现代浏览器均内建XMLHttpRequest对象，以及worker等，忽略老版本ajax兼容写法，
		  		var xhr = new XMLHttpRequest();
		  		xhr.open("GET","/",false)  //
		  		xhr.send(null);
		  		var time=xhr.getResponseHeader("Date");
		  		var date=new Date(time);
		  		alert(date);
		  	}

		  	getServerDate();