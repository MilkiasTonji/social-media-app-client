import { useTheme } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const PostWidget = ({
    postId, 
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments
}) => {
    const [isComments, setIsComments] = useState(false)    
    const dispatch = useDispatch()
    const token = useSelector((state)=> state.token)
    const loggedInUserId = useSelector((state)=> state.user._id)
    const isLiked = Boolean(likes[loggedInUserId])
    const {palette} = useTheme()
    const primaryLight = palette.primary.light
    const primaryDark  = palette.primary.dark
    const medium = palette.neutral.medium

    

}



export default PostWidget;