import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";

const HomePage = () => {
    return (
    <Box>
        <Navbar />
        <UserWidget />
    </Box>
    )
}

export default HomePage;