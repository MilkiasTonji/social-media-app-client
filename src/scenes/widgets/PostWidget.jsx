import { Icon, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const primary = palette.primary.main;
  const main = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });

    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper>
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPictruePath={userPicturePath}
      />
      <Typography color={main} sx={{mt: "1rem"}}>
            {description}
      </Typography>
      {
        picturePath && (
            <img 
                width="100%" 
                height="auto"
                alt="post"
                style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                src={`http://localhost:3001/assets/${picturePath}`}
            />
        )
      }
      <FlexBetween gap="0.25rem">
        <FlexBetween gap="1rem">
            <FlexBetween gap="0.3rem">
                 <IconButton onClick={() => patchLike()}>
                    
                  </IconButton> 
            </FlexBetween>
        </FlexBetween>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default PostWidget;
