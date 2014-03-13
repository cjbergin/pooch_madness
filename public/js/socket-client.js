var socket = io.connect();
socket.on('message', function (data) {
        $('#messages').html(data); });