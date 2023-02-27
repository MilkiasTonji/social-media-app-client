
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
  } from "@mui/material";
  
  import { Formik } from "formik";


const FormTest = () => {
    return <Box>
       <form>
        <TextField label="First Name" value="Milkias" />
       </form>
    </Box>
}

export default FormTest;