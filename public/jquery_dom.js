function appendContent(url) {
var storiesElement = $('.stories');
storiesElement.contents().remove();
storiesElement.append("<div><iframe src=" + url + " width='100%' height='290' frameborder='0' scrolling='no'></iframe></div>" );

}


