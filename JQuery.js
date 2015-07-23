var random = false;
var numS = 16;

$(document).ready(function() {
$('body').append('<button id="start">Start</button>');
$('body').append('<button id="reset">Reset</button>');
$('body').append('<button id="random">Random</button>');
$('#reset, #random, #start').css({
    'margin': '10px',
});
$('body').append('<div id="container"></div>');
$('#container').css({
            'width': '960px',
            'height': '960px',
            
            'line-height': '0px',
        });

var createGrid = function(num){
    var size = $('#container').width() / num -2;
    for (var i = 1; i <= num*num; i++) {
        $('<div></div>', {
            'class' : 'row',
            'id'    : '' + i
        }).appendTo($('#container'));
        $('#' + i).css({
            'display': 'inline-block'
        });
    }
    $('.row').css({

        'border': '1px solid black',
        'width': '' + size + 'px',
        'height': '' + size + 'px',
        
    });
 };   
    createGrid(numS); 

     $(this).on('click', '#start', function() {
    	 var x = prompt('width?');
    	 $('.row').remove();
    	 createGrid(x);
    	 $('.row').mouseenter(function() {
    		$(this).css({
                'background-color'   :   'red',
    });

    });
	})

    $(this).on('click', '#reset', function() {
    	 var x = prompt('width?');
    	 $('.row').remove();
    	 createGrid(x);
    	 $('.row').mouseenter(function() {
    		$(this).css({
                'background-color'   :   'red',
    });

    });
	})

    $('#random').click(function() {
  	 var x = prompt('width?');
    	 $('.row').remove();
    	 createGrid(x);
    	 $('.row').mouseenter(function() {
    	 	var r = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    		$(this).css({
                'background-color'   :   '' + r,
    });

    });
    	})

});




