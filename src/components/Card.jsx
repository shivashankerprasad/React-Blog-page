import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Card({children}){
    const {deletePost}= useContext(PostList);
    return <div className="card">
    <div className="card-body">
    <h5 className="card-title">{children.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
    onClick={ () => deletePost(children.id)}>
    <MdDeleteOutline />
  </span>
    </h5>
    <p className="card-text">{children.body}</p>
    <p>{children.tags.map((tag)=> (<span className="badge text-bg-primary tag" key={tag}>{tag}</span>))}</p>
    </div>
    <div className="alert alert-success reaction" role="alert">
    This post has been reacted by {children.reactions} people !
    </div>
    </div>
} 
export default Card;