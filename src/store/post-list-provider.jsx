import { createContext, useReducer } from "react";

export const Postlist= createContext({
    postlist:[],
    addpost:()=>{},
    delpost:()=>{},
});
const postListReducer = (currPostList,action)=>{
    return currPostList;
}

const Postlistprovider =({children})=>{
    const [postlist,dispatchpostlist] =useReducer(postListReducer,DEFAULT_LIST);

    function addpost(){

    }
    const delpost =()=>{

    } 
    return (<Postlist.Provider value={{postlist,addpost,delpost}}>
        {children}
    </Postlist.Provider>
)}

const DEFAULT_LIST = [
    {
        id : '01',
        title:'just like that',
        body:'this is just for timepass',
        userid:'user-11',
        reactions:12,
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
]
export default Postlistprovider;