var data = [
	{
		"id": 1,
		"author": "gleixnerp",
		"message": "this is a message",
		"date": "07/12/2016"
	},
	{
		"id": 2,
		"author": "gleixnerp",
		"message": "this is another message, even longer text and tomorrow",
		"date": "08/12/2016"
	}
];

$(document).ready(function(){
	renderComments();
	var date = new Date();
	$(".add-comment .date").text( moment().format('MM/D/YYYY'));

	$(".save-button").on('click', function(e){
		e.preventDefault();
		var message = $(".add-comment .message textarea").val();
		if(message){
			var comment = {
				"id": data[data.length-1].id + 1,
				"author": $(".add-comment .username").text(),
				"message": $(".add-comment .message textarea").val(),
				"date": $(".add-comment .date").text()
			}
			data.push(comment);
			renderComments();
			$(".add-comment .message textarea").val('');
		} else {
			alert("Please enter a message");
		}
	});

	$(".cancel-button").on("click", function(e) {
		e.preventDefault();
		$(".add-comment .message textarea").val('');
	});



});

function renderComments() {
	var listitems = '';
	$(data).each(function(index, item) {
		listitems +='<li><div class="comment comment-list-item"><div class="user-info"><div class="profile-pic"><img src="assets/img/dummy-profile-pic.png" alt=""></div><div class="username">' + item.author + '</div><div class="date">'+ item.date +'</div></div><div class="message"><textarea disabled name="message" class="text">'+ item.message +'</textarea></div></div></li>'
	});
	$('.comments-list').html(listitems);
}
