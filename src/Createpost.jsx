import { useContext, useRef } from "react";
import { PostList } from "./store/post-list-store";

const Createpost =() =>{

  const {addPost} = useContext(PostList);
const userIdElement = useRef();
const titleElement = useRef();
const contentElement = useRef();
const tagsElement = useRef();
const reactionElement =useRef();

const handleSubmit =(event) =>{
  event.preventDefault();
  const userId = userIdElement.current.value;
  const title = titleElement.current.value;
  const content = contentElement.current.value;
  const tags = tagsElement.current.value.split(" ");
  const reactions =reactionElement.reactionElement
  addPost(userId,title,content,tags,reactions);

  userIdElement.current.value ="";
  titleElement.current.value="";
  contentElement.current.value="";
  tagsElement.current.value="";
  reactionElement.reactionElement="";

}

    return (
    <form className="createpost" onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="userId" className="form-label">UserId</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter your userId "/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" ref={titleElement} className="form-control" id="title" placeholder="Hey yeah how you are feeling.."/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="content" className="form-label">Content</label>
    <textarea rows="4" type="text" ref={contentElement} className="form-control" id="content" placeholder="Describe your day mate.."/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <textarea type="text" ref={tagsElement} className="form-control" id="tags"/>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <textarea type="text" ref={reactionElement} className="form-control" id="reactions"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}
export default Createpost;