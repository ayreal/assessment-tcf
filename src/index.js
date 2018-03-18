// Initialize

$(function() {
  // on document ready
  // create an instance of each Controller
  // the init function will mount all the functions you want to call
  imagesController = new ImagesController();
  imagesController.init();
  commentsController = new CommentsController();
  commentsController.init();
});
