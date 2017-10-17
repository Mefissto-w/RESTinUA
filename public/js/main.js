/*Libs include*/
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


/*Modules include*/
( function() {
    function CreateRequest()
    {
        let request = false;
        if (window.XMLHttpRequest)
        {
            request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        {
            try
            {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (CatchException)
            {
                request = new ActiveXObject("Msxml2.XMLHTTP");
            }
        }
        if (!request)
        {
           console.error("Невозможно создать XMLHttpRequest");
        }
        return request;
    }


    try {
        let request = CreateRequest();
        let url = './img/svgSprite.svg';

        request.open('GET', url, true);
        request.onload = () => {

            if (request.status >= 200 && request.status < 400 ) {
                let node = document.createElement("div");
                node.style.display = "none";
                node.innerHTML = request.responseText;
                document.body.insertBefore(node, document.body.firstChild);

                localStorage.setItem( 'inlineSVGdata',  request.responseText );
            }

        };
        request.send();
    }
    catch( e ){}
}());

// $(document).ready(function () {
//     $('a[href*="#"]')
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function(event) {
//       if (
//         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//         && 
//         location.hostname == this.hostname
//       ) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//           event.preventDefault();
//           $('html, body').animate({
//             scrollTop: target.offset().top
//           }, 1000)
//         }
//       }
//     });

//     let $menu = $('.header__menu-icon');

//     $menu.click(menuShow);    
//     function menuShow() {
//         $('.header__menu-items>div:nth-child(2)').slideToggle( "slow");
//     }
// });