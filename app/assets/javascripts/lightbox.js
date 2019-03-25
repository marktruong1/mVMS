$(document).ready(function() {

	$("a.lightbox," +
      "a.lightbox_preview," +
	  "a[href$='.png']," +
	  "a[href$='.PNG']," +
	  "a[href$='.jpg']," +
	  "a[href$='.JPG']," +
	  "a[href$='.jpeg']," +
	  "a[href$='.JPEG']," +
	  "a[href$='.gif']," +
	  "a[href$='.GIF']," +
	  "div.journal div.thumbnails a," +
	  "div.wiki a.thumbnail," +
	  "div.attachments a.swf," +
	  ".avatar a").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none',
			openSpeed		: 300,
			closeSpeed		: 150
		});

    $("a.pdf").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none',
			openSpeed		: 300,
			closeSpeed		: 150,
			width			: '90%',
			height			: '90%',
			autoSize		: true,
			iframe : {
				preload: false
			}
		});
});
