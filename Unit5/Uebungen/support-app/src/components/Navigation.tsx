import {useLocation, useNavigate,} from "react-router-dom";
import {Button, Divider, Stack, Typography} from "@mui/material";
import {useAuth} from "../context/AuthContext.tsx";
import {routes} from "../routing.ts";
import {LinkButton} from "./LinkButton.tsx";

export const Navigation = () => {

    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const isCurrentPage = (path: string): boolean => location.pathname === path;

    const currentRoute = Object.values(routes).find(route => isCurrentPage(route.path))

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Stack direction={"row"}
               component={"nav"}
               sx={{
                   borderBottom: "2px solid #e0e0e0",
                   padding: "1rem",
               }}
        >
            <Stack direction={"row"} sx={{flex: 1, alignItems: "center"}} spacing={1}>
                <Typography component={"h1"} sx={{fontSize: "2rem"}}>📋 Support App</Typography>
                {currentRoute && <Typography variant={"subtitle1"} sx={{fontSize: "1rem", color: '#888888'}}>{currentRoute.name}</Typography>}
            </Stack>
            <Stack direction={"row"} sx={{alignItems: "center"}} spacing={1}>
                {currentUser && <Typography>Hallo, {currentUser?.name}</Typography>}
                {currentUser && <Divider orientation="vertical" variant={"middle"} flexItem />}
                <LinkButton to={routes.dashboard.path}>{routes.dashboard.name}</LinkButton>
                <LinkButton to={routes.tickets.path}>{routes.tickets.name}</LinkButton>
                <LinkButton to={routes.settings.path}>{routes.settings.name}</LinkButton>
                <Button variant={"contained"} onClick={handleLogout}>Abmelden</Button>
            </Stack>
        </Stack>
    )
}

