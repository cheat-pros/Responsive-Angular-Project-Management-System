	$('body').on('click',"#sidebarCollapse", function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass('active');
	});