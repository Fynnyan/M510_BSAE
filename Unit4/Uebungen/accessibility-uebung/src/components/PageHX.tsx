import {Typography} from "@mui/material";
import {TypographyProps} from "@mui/material/Typography/Typography";

export const PageH1 = (
    props: TypographyProps
) =>
    <Typography
        {...props}
        variant={"h1"}
        fontSize={"3rem"}
    >{props.children}</Typography>

export const PageH2 = (
    props: TypographyProps
) =>
    <Typography
        {...props}
        variant={"h2"}
        fontSize={"2rem"}
    >{props.children}</Typography>