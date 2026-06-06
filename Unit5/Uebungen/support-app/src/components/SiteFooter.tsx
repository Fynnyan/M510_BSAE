import {Stack, Typography} from "@mui/material";

export const SiteFooter = () => {


    return (
        <Stack
            component={"footer"}
            direction={"row-reverse"}
            sx={{
                borderTop: "2px solid #e0e0e0",
                backgroundColor: '#eeeeee',
                color: '#666666',
                alignItems: "end",
                padding: "0.5rem",
            }}
        >
            <Typography>Support App v1.0</Typography>
        </Stack>
    )
}