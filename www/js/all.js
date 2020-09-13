$(function(){
	$('.tab,.event-content').hide();
	$('.tab:first,.event-content:first').show();
	$('.eventbx').click(function(){
		$('.event-content').hide();
		var activeEvent = $(this).attr('href');
		$(activeEvent).show();
		return false
	});
	$('.eventbx').click(function(){
		$('.joinbx').addClass('jump');
		var set = setTimeout(() => {
			$('.joinbx').removeClass('jump');
		},1000)
	});
	$('.block').click(function(){
		$('.tab').hide();
		var activeTab = $(this).attr('href');
		$(activeTab).show();
	});	
	$('.close-form').click(function(){
		$('#login,#reg,#cart,#join').fadeOut();
	});
	$('a').click(function(){
		$('.all-form').fadeOut();
		var activeForm = $(this).attr('href');
		$(activeForm).fadeIn();
	});
	$('.social,.checkout').click(function(){
		alert("目前尚無網路請稍後再試")
	});
	$('.checkout2').click(function(){
		alert("您尚未填寫基本資料");
		$('#login').fadeIn();
	});
	$('.add').click(function(){
		$('.img-center').addClass('fadeIn');
		var set = setTimeout(() => {
			$('.img-center').removeClass('fadeIn');
		},1800)
	});
	$('.heart').click(function(){
		$(this).toggleClass('h-check');
		if($(this).hasClass('h-check')){
			$('body').append('<div class="alert01">加入最愛</div>')
		}
		else{
			$('body').append('<div class="alert01">取消最愛</div>')
		}
	});
	$('.view-switch').change(e => {
		$('.tab').hide();
		$('#tab' + e.target.value).show();
	});
});

var blockContainer = document.querySelector(".block-container");
var blocks = Array.from(document.querySelectorAll(".block"));
var isMouseOn = false;
var leftPositions = blocks.map((block, i) => i * 250);

blockContainer.onmouseover = e => isMouseOn = true;
blockContainer.onmouseout = e => isMouseOn = false;

setInterval(function(){
	leftPositions.forEach((leftPosition,i) => blocks[i].style.left = leftPosition + "px");
	
	if(!isMouseOn){
		leftPositions = leftPositions.map(leftPosition => {
			leftPosition--;
			
			if(leftPosition == -250){
				leftPosition = (blocks.length - 1)*250;
			}
			return leftPosition;
		})
	}
	
},10)