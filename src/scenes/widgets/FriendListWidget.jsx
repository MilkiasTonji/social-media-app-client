import { useTheme } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setFriends } from "state"

const { default: WidgetWrapper } = require("components/WidgetWrapper")




const FriendListWidget = ({userId}) => {

    const dispatch = useDispatch()
    const token = useSelector((state)=> state.token)
    const friends = useSelector((state)=> state.user.friends)
    const {palette} = useTheme()
    
    const getFriends = async ()=> {
        const response = await fetch(`http://localhost:3001/users/${userId}/friends`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = await response.json();
        dispatch(setFriends({friends: data}))
    }
    
    return (
        <WidgetWrapper>
            
        </WidgetWrapper>
    )
}



export default FriendListWidget;



