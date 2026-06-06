import {Card, CardContent, Typography, useTheme} from "@mui/material";

export const MetricCard = (
    {label, value, variant = "default"}: { label: string, value: string | number, variant?: "default" | "warning" | "critical" | "success" }
) => {

    const theme = useTheme()

    let cardColor = undefined

    switch (variant) {
        case "success":
            cardColor = theme.palette.success.main;
            break
        case "warning":
            cardColor = theme.palette.warning.main;
            break
        case "critical":
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
                <Typography variant={"h4"} component={"p"}>{value}</Typography>
            </CardContent>
        </Card>
    )
}