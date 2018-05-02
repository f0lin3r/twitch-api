$(document).ready(function(){
	$('#all').click(function(event) {
		$('.on').show();
		$('.off').show();
		});

	$('#online').click(function(event) {
		$('.off').hide();
		$('.on').show();
		});

	$('#offline').click(function(event) {
			$('.on').hide();
			$('.off').show();
			});



	var streams=["iddqd","emongg","xqcow","boxbox","noway4u_sir","jovirone","imaqtpie","lvpes","vivilatvia","turntheslayer","tomatosmuchachos","silvername","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
	for (let i=0;i<streams.length;i++){
		$.ajax({
			url: 'https://wind-bow.gomix.me/twitch-api/streams/'+streams[i]+'?callback=?',
			contentType: 'application/json',
			type: 'GET',
			dataType: 'jsonp',
			success: function(data){
				// console.log(i);
				// console.log(data);
				$('#streamers').html();
				if (data.stream === null){
					$('#streamers').prepend('<tr class="off"><td class="t1">offline</td><td></td><td class="t3"><a href="https://www.twitch.tv/'+streams[i]+'" target="_blank">'+streams[i]+'</a></td><td></td><td></td><td></td><td></td></tr>');
				} else {
					$('#streamers').prepend('<tr class="on"><td class="t1">online</td><td class="t2"><img width="50px" src="'+data.stream.channel.logo+'""></td><td class="t3"><a href="https://www.twitch.tv/'+streams[i]+'" target="_blank">'+data.stream.channel["display_name"]+'</a></td><td class="t4">'+data.stream.game+'</td><td class="t5">'+data.stream.channel.language+'</td><td class="t6">'+data.stream.viewers+'</td><td class="t7">'+data.stream.channel["status"]+'</td><tr>');
				}
				}
			});
	}
console.log('hello');
	});
