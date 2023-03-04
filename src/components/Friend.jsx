
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material'
import { IconButton, Typography, useTheme, Box } from '@mui/material'
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
    const user = useSelector((state) => state.user)
    const {palette} = useTheme()
    const primaryLight = palette.primary.light
    const primaryDark  = palette.primary.dark
    const medium = palette.neutral.medium
    const main = palette.primary.main

    const isFriend = friends.find((friend)=> friend._id === friendId)

    console.log(isFriend, friendId)
    console.log(friends, user)

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
                <Typography
                color={main}
                variant="h5"
                fontWeight="500"
                sx={{
                    "&:hover": {
                        color: palette.primary.light,
                        cursor: 'pointer'
                    }
                }}
                >
                    {name}
                </Typography>
                <Typography color={medium} fontSize="0.75rem">
                    {subtitle}
                </Typography>
            </Box>
        </FlexBetween>
        <IconButton
        onClick={()=> patchFriend()}
        sx={{backgroundColor: primaryLight, p: "0.6rem"}}
        >
         {
            isFriend ? (
                <PersonRemoveOutlined sx={{color: {primaryDark}}} />
            ): (
                <PersonAddOutlined sx={{color: {primaryDark}}} />
            )
         }
        </IconButton>
    </FlexBetween>
  )
}

export default Friend