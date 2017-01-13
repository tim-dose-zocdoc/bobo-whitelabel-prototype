// var google = {}
console.log('loading prototype js')

$('.timesViewport').on('change', function() {
    console.log('.timesViewport changed');
});

$(window).on("load", function() {
    console.log('page loaded');

    // Change href of all times grid links to Axure prototype
	var url = 'http://m9jewt.axshare.com/book.html'
    $('a.appointment-time').attr('href',url)


    // Hide booking and profile buttons for each doctor.
    $('.book-online-view-profile-buttons').hide();


    // Disable click to doctor name & photo
    $('.profilePhoto a, .docName a').attr('href','');
    $('.profilePhoto a, .docName a').off('click');
    $('.profilePhoto a, .docName a').on('click', function() { return false; });

    // Replace map with image
    console.log('prototype replacing map with image')
    $mapImage = $('<img class="prototype-map" src="prototype/images/map.png">').css({'margin-top':'37px',})
    $('.js-map-over-container').replaceWith($mapImage);

    // Set the initial text of the specialty drop down
    $('#ui-gs-specialty a.ui-gs-toggle').text('Cardiologist (Heart Doctor)')

	console.log('post-load prototype js executed')
});


// Simplified insurance picker
$.ajax({
	url: 'prototype/data/insurances-short.html', 
	success: function(data) {
			$('.grouped-select-insurance').replaceWith(data)
			console.log('prototype insurance data loaded');
		}
});

console.log('prototype js load complete')
