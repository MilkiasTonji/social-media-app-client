import { useTheme } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";


const AdvertWidget = () => {

    const {palette} = useTheme()

    const dark = palette.neutral.dark
    const main = palette.neutral.main
    const medium = palette.neutral.medium


    return (
        <WidgetWrapper>
            
        </WidgetWrapper>
    )
}


export default AdvertWidget;