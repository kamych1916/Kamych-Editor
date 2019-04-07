	(function () {
	var block = $('.block'),
		
		increaseRad = $('#increase-radius'),
	    reduseRad = $('#reduse-radius'),

	    maxRadius = 60,
	    minRadius = 0,

	    maxWid = 380,
		minWid = 10,

		maxHeig = 300,
		minHeig = 10, 

	    bgColorInput = $('#bg-color'),
	    brColorInput = $('#border-color'),

	    codeResultArea = $('#code-result');

	    increaseWid = $('#increase-width'),
		reduseWid = $('#reduse-width'),

		increaseHeig = $('#increase-height'),
		reduseHeigh = $('#reduse-height'),


		/*Function For Width CUBE*/
		increaseWid.on('click', function(){
			var currentWidth = block.css('width'),
				step_block_width = $('#step-block-width').val(),
				newWidth = (parseInt(currentWidth) + parseInt(step_block_width));

			var check = document.getElementById("step-block-width");
				if(check.value < 0) check.value = 0;

			if(newWidth > maxWid){
				newWidth = maxWid;
				$(this).addClass('disabled');
			}

			
			block.css({
	    		'width' : newWidth
	    	});
			updateResultCube();

		});
		
		reduseWid.on('click', function(){
			var currentWidth = block.css('width'),
				step_block_width = $('#step-block-width').val(),
				newWidth = (parseInt(currentWidth) - parseInt(step_block_width));

			var check = document.getElementById("step-block-width");
				if(check.value < 0) check.value = 0;

			if(newWidth < minWid){
				newWidth = minWid;
				$(this).addClass('disabled');
			}
			
			block.css({
	    		'width' : newWidth
	    	});

			updateResult();
		});

		

		/*Function For Height CUBE*/
		increaseHeig.on('click', function(){
			var currentHeig = block.css('height'),
				step_block_height = $('#step-block-height').val(),
				newHeight = (parseInt(currentHeig) + parseInt(step_block_height));

			var check = document.getElementById("step-block-height");
				if(check.value < 0) check.value = 0;

			if(newHeight > maxHeig){
				newHeight = maxHeig;
				$(this).addClass('disabled');
			}

			block.css({
	    		'height' : newHeight
	    	});

			updateResult();
		});

		reduseHeigh.on('click', function(){
			var currentHeig = block.css('height'),
				step_block_height = $('#step-block-height').val(),
				newHeight = (parseInt(currentHeig) - parseInt(step_block_height));

			var check = document.getElementById("step-block-height");
				if(check.value < 0) check.value = 0;

			if(newHeight < minHeig){
				newHeight = minHeig;
				$(this).addClass('disabled');
			}

			block.css({
	    		'height' : newHeight
	    	});

			updateResult();
		});

	    /*Function For border-radius BLOCK*/
	    increaseRad.on('click', function(){
	    	var currentRadius = block.css('border-radius'),
	    		step_block_br = $('#step-block-br').val(),
	    		newRadius = (parseInt(currentRadius) + parseInt(step_block_br));

	    	var check = document.getElementById("step-block-br");
				if(check.value < 0) check.value = 0;

	    	if(newRadius > maxRadius){
	    		newRadius = maxRadius;
	    		$(this).addClass('disabled');
	    	}

	    	block.css({
	    		'border-radius' : newRadius
	    	});

	    	updateResult();
	    });

	    reduseRad.on('click', function(){
	    	var currentRadius = block.css('border-radius'),
	    		step_block_br = $('#step-block-br').val(),
	    		newRadius = (parseInt(currentRadius) - parseInt(step_block_br));

	    	var check = document.getElementById("step-block-br");
				if(check.value < 0) check.value = 0;

	    	if(newRadius < minRadius){
	    		newRadius = minRadius;
	    		$(this).addClass('disabled');
	    	}
	    	
	    	block.css({
	    		'border-radius' : newRadius
	    	});

	    	updateResult();
	    });

	    /*Function For change bg-color BLOCK*/
	    bgColorInput.on('change', function(){
	    	var newColor = '#' + $(this).val();

	    	block.css({
	    		'background-color' : newColor
	    	});

	    	updateResult();
	    });

	    brColorInput.on('change', function(){
	    	var newColor = '#' + $(this).val();

	    	block.css({
	    		'border-color' : newColor
	    	});

	    	updateResult();
	    });

	    /*Function For result-code BLOCK*/
	    var updateResult = function() {

	    	var borderRad = block.css('border-radius'),
	    		bgcolor = block.css('background-color'),
	    		brcolor = block.css('border-color'),
	    		widthblock = block.css('width'),
	    		heightblock = block.css('height');

	    	codeResultArea.text(
	    			'-moz-border-radius: '  + borderRad + ';\n' + 
	    			'-webkit-border-radius: '  + borderRad + ';\n' + 
	    			'border-radius: '  + borderRad + ';\n' + 
	    			'border-color: ' + brcolor + ';\n' +
	    			'background-color: ' + bgcolor + ';\n' +
	    			'width: ' + widthblock + ';\n' +
	    			'height: ' + heightblock + ';\n'
	    		);
	    }

	   updateResult();

}());
