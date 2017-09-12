// $ = jQuery
// $(document).ready(function(){}); = $(function(){});
//$(document).ready(function(){

  // Basic Selectors
  // '*' entire document
  // 'p' all paragraphs
  // 'body' parent and child (body tag)
  // '#id' highlight just the id
  //$('p').css('border', '4px solid red');

  // Basic Animations
  // hide fade (seconds)
  // delay (wait period)
  // show (shows the hidden)
  // slideup/down (move the objects)
  // animate (put anything about the object and the how long you want it to do it (ie {bottom/left/right/top/height/width and time (seconds)}))

  // Index Filters
  //$('p:first').css('border', '4px solid red'); // first paragraph
  //$('p:last').css('border', '4px solid red'); // last paragraph
  //$('p:gt(2)').css('border', '4px solid red'); // gt = greater than (2 = index)
  //$('p:lt(2)').css('border', '4px solid red'); // lt = less than (2 = index)
  //$('p:e(2)').css('border', '4px solid red'); // e = equal (2 = index)

  // Relationship filters (dom elements)
  //$('h2:has(span)').css('border', '4px solid red'); // has (child)
  //$('.box:parent').css('border', '4px solid red'); // has(only if the have children)
  //$('.box:emtpy').css('border', '4px solid red'); // has no child

  // Attribute filters
  //$('p[name^="sho"]').css('border', '4px solid red'); // ^ find that contains name with "sho" in it
  //$('p[href$=".co.uk"]').css('border', '4px solid red'); // $ finds links that end with .co.uk

  // Attribute method
  //alert($('p:first').attr('class')); // asks what the first class is of the first paragraph
  //alert($('p:first').attr('class', 'not-lead')); // sets the class of the first paragraph to 'not-lead'

  // Image swap
  //$('img').attr('src', 'img2.jpg'); //swap images
  //$('img').delay(500).fadeout(500, function(){ // adds a fadeout /fadein when switching images
  //  $(this).attr('src', 'img2.jpg').fadeIn(500);
  //});

  // Class Methods
  //alert($('p:last').hasClass('lead')); // checks to see if it has a class of lead
  //alert($('p').toggleClass('blue').removeClass('lead')); // change state of the paragraph

  // Content Methods
  //$('p:first').text('hey you guuuuuuuyyyyssss!'); //changes the text of the first paragraph
  //alert($('p:first').text()); // pull the text out of the paragraph
  //$('p:first').text('hehe tere <em>buddy</em>'); //shows the html tags in it unless you replace .text with .html
  //alert($('input').val()); //ask the input for the value / also know as getting /retrieve the value
  //$('input').val('yo dude'); // sets the value of the input to 'yo dude'
  //leaving the() blank after .text or .val will retrieve the text/value, having a string or words in the ('sdfsfse') with set the text/value

    // Dom Traversal
    //$('h2').parents('section').sibling('header').css('border', '4px solid red'); //siblings () / children / parents

    // Event Binding (hover, keystrokes, etc..)
    /*$('h2').bind('click', function(){
      //code
      $(this).toggleClass('blue');
    }); */


//});

/*
function slideSwitch() {

    var $active = $('#hobbySlideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#hobbySlideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#hobbySlideshow IMG:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 3000 );
});
*/
