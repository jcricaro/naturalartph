$(document).ready(function() {
	mainwidth();	
	resizeStuff();
	navigation();
	$("#navigation").lavaLamp({
		fx: "backout",
		speed: 700,
		click: function(event, menuItem) {
			return false;
		}
	});
	$('#scrollbar1').tinyscrollbar({});

});

$(window).resize(function() {
	mainwidth();
	resizeStuff();
	navigation();
});

function navigation() {
	if($(window).width() < 960) {
		var docwidth = 960;
	}
	else {
		var docwidth = $(window).width();	
	}
	var margin  = ((docwidth - 960) /2);
	
	$('#navhome').click(function() {
		if($('#main').is(':animated')) {
			return false;
		}	
		$('#main').animate({
			'left': 0
		},'slow','bounceinout');
	});
	$('#navabout').click(function() {
		if($('#main').is(':animated')) {
			return false;
		}	
		$('#main').animate({
			'left': -(960 + margin)
		},'slow','bounceinout');
	});
	$('#navcontact').click(function() {
		if($('#main').is(':animated')) {
			return false;
		}	
		$('#main').animate({
			'left': -(960 + margin)*2
		},'slow','bounceinout');
	});
	$('#navcalendar').click(function() {
		if($('#main').is(':animated')) {
			return false;
		}	
		$('#main').animate({
			'left': -(960+ margin) * 3
		},'slow','bounceinout');
	});
	$('#navnews').click(function() {
		if($('#main').is(':animated')) {
			return false;
		}	
		$('#main').animate({
			'left': -(960+ margin) * 4
		},'slow','bounceinout');
	});
	$('#navpress').click(function() {
		if($('#main').is(':animated')) {
			return false;
		}	
		$('#main').animate({
			'left': -(960+ margin) * 5
		},'slow','bounceinout');
	});
	$('#navblog').click(function() {
		if($('#main').is(':animated')) {
			return false;
		}	
		$('#main').animate({
			'left': -(960+ margin) * 6
		},'slow','bounceinout');
	});
}

function mainwidth() {
	if($(window).width() < 960) {
		var docwidth = 960;
	}
	else {
		var docwidth = $(window).width();	
	}
	var margin  = ((docwidth - 960) /2);
	$('#main').css({
		'width': 960 * 8 + margin * 16,
		'marginLeft': margin
	});
	$('.panel').css({
		'marginRight': margin
	});
	$('#bignav').css({
		'marginRight': margin
	});

}

function resizeStuff() {
	if($(window).width() < 960) {
		var docwidth = 960;
	}
	else {
		var docwidth = $(window).width();	
	}
	var docheight = $(document).height();
	
	$('#footcontainer').css({
		width : docwidth
	});
	$('#bodycontainer').css({
		width : docwidth
	});
	
	$('#footer').css({
		height: docheight - $('#bodycontainer').height() - $('#headercontainer').height() - 35
	});
	
	$('#footer img').css({
		top: ((docheight - $('#bodycontainer').height() - $('#headercontainer').height() - 35)/2) -13
	});
}



