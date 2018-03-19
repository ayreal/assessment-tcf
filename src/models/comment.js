// use IFFE pattern to keep id/store variables out of global scope
const Comment = (() => {
  // initialize store with key of comments that points to empty array
  let store = { comments: [] };
  let id = 0;

  return class Comment {
    // + should initialize with an id, image object (findImage) and commentContent (the actual text of the comment)
    constructor(comment, imageId) {
      this.id = ++id;
      this.comment = comment;
      this.image = this.findImage(imageId);

      // + should save new comment to Comment.all property
      store.comments.push(this);
    }

    findImage(imageId) {
      // + given an `int` for an image id, returns the image object with that id
      const image = Image.all.filter(i => i.id === imageId)[0];
      // + before return - adds current comment to image's comments property
      image.comments.push(this);
      return image;
    }

    commentEl() {
      // + returns a string of html
      // + html has an `li` tag with an `id` field and shows the comment
      return `
      <li id="comment-${this.id}">${this.comment}</li>
    `;
    }

    static get all() {
      // + should return all of the comment objects in an array
      // + a property of the Comment class
      return store.comments;
    }
  };
})();
