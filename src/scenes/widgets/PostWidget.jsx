import { useDispatch, useSelector } from "react-redux";



const PostsWidget = ({userId, isProfile = false})=> {
    const dispatch = useDispatch()
    const posts = useSelector((state)=> state.posts)
    const token = useSelector((state)=> state.token)
    
}


export default PostsWidget;