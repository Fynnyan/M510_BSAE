import {Button, ButtonProps} from "@mui/material";


export const PrimaryButton = (
    props: {} & ButtonProps
) => {
    return (
        <Button {...props} variant={"contained"} color={"primary"} />
    )
}