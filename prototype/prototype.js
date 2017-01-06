// var google = {}
console.log('loading prototype js')

$(window).on("load", function() {
	var url = 'http://m9jewt.axshare.com/book.html'
    $('a.appointment-time').attr('href',url)

    $('.book-online-view-profile-buttons').hide();


    // Disable click to doctor name & photo
    $('.profilePhoto a, .docName a').attr('href','');
    $('.profilePhoto a, .docName a').off('click');
    $('.profilePhoto a, .docName a').on('click', function() { return false; });
    
    ;

	console.log('post-load prototype js executed')
});

$.ajax({
	url: 'prototype/data/insurances-short.html', 
	success: function(data) {
			$('.grouped-select-insurance').replaceWith(data)
			console.log('prototype insurance data loaded');
		}
});

console.log('prototype js load complete')
