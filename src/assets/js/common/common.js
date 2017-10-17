(function(){
	var langBtn  = document.querySelector('.ua > button'),
			langList = document.getElementsByClassName('lang__hidden')[0],
			searchBtn = document.getElementsByClassName('button-search')[0],
			searchWrap = document.getElementsByClassName('search-wrap')[0],
			searchInner = document.getElementsByClassName('search-inner')[0];

	langBtn.addEventListener('click', toggle);
	searchBtn.addEventListener('click', toggleSearchWrap);
	searchInner.addEventListener('click', toggleSearchWrap);

	function toggle() {
  langList.style.display = (langList.style.display == 'none') ? 'block' : 'none';
}
	function toggleSearchWrap() {
  searchWrap.style.display = (searchWrap.style.display == 'none') ? 'block' : 'none';
}


}());