(function(){
	var langbtn  = document.querySelector('.ua > button'),
			langlist = document.getElementsByClassName('lang__hidden');
	console.log(langlist);

	langbtn.addEventListener('click', showLang);

	function showLang(e){
		langlist[0].classList.add("visible");
	}

}());