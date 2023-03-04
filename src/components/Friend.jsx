
import { Box, useTheme } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFriends } from 'state'
import FlexBetween from './FlexBetween'
import UserImage from './UserImage'

const Friend = ({friendId, name, subtitle, userPictruePath}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {_id} = useSelector((state)=> state.user)
    const token = useSelector((state)=> state.token)
    const friends = useSelector((state)=> state.user.friends)
    const {palette} = useTheme()
    const primaryLight = palette.primary.light
    const primaryDark  = palette.primary.dark
    const medium = palette.neutral.medium

    const isFriend = friends.find((friend)=> friend._id === friendId)

    const patchFriend = async ()=> {
        const response = await fetch(`http://localhost:3001/users/${_id}/${friendId}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        const data = await response.json();
        dispatch(setFriends({friends: data}))
    }


  return (
    <FlexBetween>
        <FlexBetween gap="1rem">
            <UserImage image={userPictruePath} size="55px" />
            <Box
                onClick={()=> {
                    navigate(`/profile/${friendId}`)
                    navigate(0)
                }}
            >

            </Box>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Friend