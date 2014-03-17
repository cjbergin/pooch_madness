
var socket = io.connect();
var counter = 0;
	$(document).ready(function() {
		$('button').click(function() {
			++counter;
			socket.emit('addcount', counter);
		}); // end click handler
		socket.on('sendcount', function (data) {
  			$('button').html('like me</br>' + data);
  		}); // end sendcount listener
  	}); // end ready listener
