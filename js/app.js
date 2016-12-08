var data = [
	{
		"id": 1,
		"author": "me",
		"message": "this is a message",
		"date": "07/12/2016"
	},
	{
		"id": 2,
		"author": "me",
		"message": "this is another message, even longer text and tomorrow",
		"date": "08/12/2016"
	}
];

$(document).ready(function(){
	renderComments();

	$(".save-button").on('click', function(e){
		e.preventDefault();
		var message = $(".add-comment .message textarea").val();
		var comment = {
			"id": data[data.length-1].id + 1,
			"author": $(".add-comment .username p").val(),
			"message": $(".add-comment .message textarea").val(),
			"date": $(".add-comment .username date").val()
		}
		data.push(comment);
		renderComments();
	})
});

function renderComments() {
	var listitems = '';
	$(data).each(function(index, item) {
		listitems +='<li><div class="comment comment-list-item"><div class="user-info"><div class="profile-pic"><img src="assets/img/dummy-profile-pic.png" alt=""></div><div class="username">' + item.author + '</div><div class="date">'+ item.date +'</div></div><div class="message"><textarea disabled name="message" class="text">'+ item.message +'</textarea></div></div></li>'
	});
	$('.comments-list').html(listitems);
}
