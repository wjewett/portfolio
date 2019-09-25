// This fetch call is simply to wake up my heroku app which is linked to on this page
// so that once you click on the link the app will be a wake
fetch('http://wjewett.herokuapp.com/wakeup', { method: 'GET', mode: 'no-cors' }).then(function(res) {}).then((data) => {}).catch((nores) => {
	Console.log(nores, 'Found nothing');
});

fetch('http://cube-battle-timer.herokuapp.com', { method: 'GET', mode: 'no-cors' }).then(function(res) {}).then((data) => {}).catch((nores) => {
	Console.log(nores, 'Found nothing');
});
