import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Form from './Form'
import FormTest from "./FormTest";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const navigate = useNavigate()

//   const isAuth = Boolean(useSelector((state)=> state.token));
//   console.log(isAuth)

// useEffect(()=> {
//   if(isAuth){
//     navigate('/home')
//   }

// }, []) 
//eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
        >
          Sociopedia
        </Typography>
      </Box>
      <Box
       width={isNonMobileScreens ? "50%": "93%"}
       p="2rem"
       m="2rem auto"
       borderRadius="1.5rem"
       backgroundColor={theme.palette.background.alt}
      >
        <Typography
         fontWeight="500" variant="h5" sx={{ mb: "1.5rem"}}
        >
            Welcome to Socipedia, the Social Media for Socipedia
        </Typography>
        
        <Form />

      </Box>
    </Box>
  );
};

export default LoginPage;
