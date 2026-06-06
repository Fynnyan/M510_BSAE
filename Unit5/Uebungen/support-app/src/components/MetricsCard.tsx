import {Card, CardContent, Typography, useTheme} from "@mui/material";

export const MetricsCard = (
    {label, value, variant = "default"}: {
        label: string,
        value: string | number,
        variant?: "default" | "info"| "success" | "warning" | "error"
    }
) => {

    const theme = useTheme()

    let cardColor = undefined

    switch (variant) {
        case "info":
            cardColor = theme.palette.info.main
            break
        case "success":
            cardColor = theme.palette.success.main;
            break
        case "warning":
            cardColor = theme.palette.warning.main;
            break
        case "error":
            cardColor = theme.palette.error.main;
            break
        case "default":
            break
    }

    return (
        <Card sx={{
            background: cardColor,
            color: cardColor ? "white" : undefined,
            minWidth: "10rem"
        }}>
            <CardContent sx={{textAlign: "center"}}>
                <Typography variant={"subtitle1"}>{label}</Typography>
                <Typography variant={"h3"} component={"p"}>{value}</Typography>
            </CardContent>
        </Card>
    )
}