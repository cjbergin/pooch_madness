
var socket = io.connect();
	$(document).ready(function() {
		var counter = 0; 
  		$( ".likeme" ).each(function() {
  			$(this).attr('id', counter);
  			counter += 1; });
  			
		$('.likeme').click(function() {
		var id = $(this).attr('id');
		socket.emit('addcount', id);
		}); // end click handler
		socket.on('sendcount', function (data) {
			id = '#' + data.dog;
  			$(id).html(data.donations);
  		}); // end sendcount listener
  	}); // end ready listener




