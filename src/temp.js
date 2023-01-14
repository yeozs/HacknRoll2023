<script>
var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
var clear = document.getElementById('clear');


clear.addEventListener('click', function() {
  window.location.reload(false);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});
/*
sockets.on('connect', function() {
    console.log("hi")
});
*/

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);

/*
  if (myID == socket.id) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    //window.scrollTo(0, document.body.scrollHeight);
    console.log(myID);
    console.log(socket.id)

  } else {
    var item = document.createElement('p');
    item.textContent = msg;
    messages.appendChild(item);
    //window.scrollTo(0, document.body.scrollHeight);
    console.log(myID);
    console.log(socket.id)
  }
*/

});

</script>