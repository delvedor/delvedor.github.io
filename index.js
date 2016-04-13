$(document).ready(function() {
  $('#fullpage').fullpage({
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ['#2196F3', '#fafafa', '#0097A7', '#fafafa', '#607D8B', '#fafafa'],
    anchors: ['front', 'brief', 'work', 'devel', 'study', 'social'],

    afterLoad: function(anchorLink, index) {
      if (anchorLink === 'social') {
        $('.socialEle:nth-child(1)').fadeTo(1000, 1);
        $('.socialEle:nth-child(2)').delay(500).fadeTo(1000, 1);
        $('.socialEle:nth-child(3)').delay(100).fadeTo(1000, 1);
        $('.socialEle:nth-child(4)').delay(900).fadeTo(1000, 1);
        $('.socialEle:nth-child(5)').delay(300).fadeTo(1000, 1);
        $('.socialEle:nth-child(6)').delay(700).fadeTo(1000, 1);
      }
    }
  });
  $('.firstPage img').fadeTo(1200, 1);
});
