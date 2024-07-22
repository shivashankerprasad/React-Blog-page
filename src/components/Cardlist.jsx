import { useContext } from "react";
import Card from "./Card";
import { PostList } from "../store/post-list-store";
const Cardlist =()=>{ 
    const {postList}= useContext(PostList);
    return (
    <> {postList.map((children)=> (<Card key={children.id} children = {children}/>))}
            
    </>
    );
};
export default Cardlist;