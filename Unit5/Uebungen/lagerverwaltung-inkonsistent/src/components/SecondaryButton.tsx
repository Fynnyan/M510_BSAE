import {Button, ButtonProps} from "@mui/material";

export const SecondaryButton = (
    props: {} & ButtonProps
) => {
    return (
        <Button {...props} variant={"contained"} color={"secondary"} />
    )
}