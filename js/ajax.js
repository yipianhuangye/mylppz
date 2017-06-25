//封装get
function ajaxGET(url,callback,data){
	if(arguments.length == 3){
		url += "?"+data ;
	}

	var ajax = new XMLHttpRequest();

	ajax.open("GET",url);

	ajax.send(null);

	ajax.onreadystatechange = function(){

		if(ajax.readyState == 4 && ajax.status == 200){

			callback(ajax.responseText)
		}
	}

}



//post封装

function ajaxPOST(url,callback,data){
	if(arguments.length == 2){

		data = null ;
	}

	var ajax = new XMLHttpRequest();

	ajax.open("POST",url);

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

	ajax.send(data);

	ajax.onreadystatechange = function(){

		if(ajax.readyState == 4 && ajax.status == 200){

			callback(ajax.responseText)
		}
	}

}