import  { useReducer, createContext } from "react";
export const PostList = createContext({
    postList:[],
    addPost: ()=>{},
    deletePost: ()=>{},
 });
 const postListReducer =(currPostList,action)=>{
    let newPostList= currPostList;
    if(action.type === "DELETE"){
        newPostList = currPostList.filter(post => post.id !== action.payload.postId);
    
    }
    else if(action.type === "ADD_POST"){
        newPostList=[action.payload,...DEFAULT_POST_LIST]
    }
    return newPostList;
 }
 
 const DEFAULT_POST_LIST = [
    {
        id : '01',
        title:'just like that',
        body:'this is just for timepass',
        userid:'user-11',
        reactions:10,
        tags:['tag1','tag2'],
    },
    {
        id : '02',
        title:'just like that',
        body:'this is just for timepass',
        userid:'user-12',
        reactions:12,
        tags:['tag1','tag2'],
    }

 ];

 const PostListProvider = ({children}) =>{
    const [postList,dispatchPostList] =useReducer(postListReducer,DEFAULT_POST_LIST );

    const addPost =(userId,title,content,tags,reactions)=>{
        dispatchPostList({
            type: "ADD_POST",
            payload:{
                id : Date.now(),
                title:title,
                body:content,
                userid:userId,
                reactions:reactions,
                tags:tags,

            }
        })
    };

    const deletePost =(postId)=>{
        dispatchPostList({
            type: "DELETE",
            payload:{
                postId,
            },
        });
    };

    return  <><PostList.Provider value = {{postList,addPost,deletePost}}>
        {children}
    </PostList.Provider></>

 };
 export default PostListProvider;