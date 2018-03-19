class CommentsController {
  constructor() {
    this.$addCommentForm = $(".add-comment");
  }

  init() {
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // target the collection of form inputs on the DOM
    // use spread operator to coerce HTMLcollection into an array
    const commentForms = [...document.getElementsByClassName("add-comment")];

    // + iterates through each comment form and adds an eventlistener to trigger a function on form submit
    commentForms.forEach(form => {
      form.addEventListener("submit", e => {
        // prevent form from refreshing on submit
        e.preventDefault();

        // + function should grab the imageId + comment and create a new Comment with those arguments
        const imageId = parseInt(form.dataset.id);
        const commentText = form.querySelector("input").value;

        // check to make sure the input is not blank before creating Comment
        if (commentText.trim().length > 0) {
          const comment = new Comment(commentText, imageId);
          // + execute the render function on that found image object to append the new comment
          this.render(comment);
        }

        // clear the contents of the input field
        form.querySelector("input").value = "";
      });
    });
  }

  render(commentObject) {
    const imageId = commentObject.image.id;
    // + selects the appropriate `ul` for this comment to be added to
    const list = document.getElementById(`comments-${imageId}`);
    // + appends the new comment element to this `ul`
    list.insertAdjacentHTML("beforeend", commentObject.commentEl());
  }
}
