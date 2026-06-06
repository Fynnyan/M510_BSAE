import {Card, CardContent, Typography, useTheme} from "@mui/material";
import {Error, Warning} from "@mui/icons-material";

type KPICardVariant = "default" | "ok" | "warning" | "critical"

export const KPICard = (
    props: {
        title: string,
        content: string | number
        variant?: KPICardVariant
    }
) => {

    const theme = useTheme()

    let cardColor = undefined
    let icon = undefined
    switch (props.variant) {
        case "default": break
        case "ok": cardColor = theme.palette.success.main; break
        case "warning": cardColor = theme.palette.warning.main; icon = <Warning/>; break
        case "critical": cardColor = theme.palette.error.main; icon = <Error/>; break
        default: break
    }

    return (
        <Card style={{minWidth: "10rem"}}>
            <CardContent
                sx={{
                    padding: `${cardColor ? "0.6rem": "1rem"} 1rem 1rem 1rem`,
                    textAlign: "center",
                    color: cardColor,
                    borderTop: cardColor ? `solid 0.4rem ${cardColor}` : undefined
                }}
            >
                <Typography
                    fontSize={"2rem"}
                    fontWeight={"bold"}
                >
                    {props.content}
                    {icon}
                </Typography>
                <Typography
                    fontSize={"1rem"}
                    fontWeight={"bold"}
                >
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    )
}