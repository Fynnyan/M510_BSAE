import {Link as RouterLink} from "react-router-dom";
import {Button, ButtonProps} from "@mui/material";

export const LinkButton = (
    props: { to: string } & ButtonProps
) => {

    return <Button component={RouterLink} {...props} />
}