import {useAuth} from '../context/AuthContext';
import {useTickets} from '../context/TicketsContext';
import {MetricsCard} from "../components/MetricsCard.tsx";
import {routes} from "../routing.ts";
import {LinkButton} from "../components/LinkButton.tsx";
import {Add} from "@mui/icons-material";
import {PageLayout} from "./PageLayout.tsx";
import {Typography} from "@mui/material";

export default function DashboardPage() {
    const {currentUser} = useAuth();
    const {tickets} = useTickets();

    const offeneTickets = tickets.filter((t) => t.status === 'Offen').length;
    const inBearbeitung = tickets.filter((t) => t.status === 'In Bearbeitung').length;
    const geschlossene = tickets.filter((t) => t.status === 'Geschlossen').length;
    const eigeneTickets = tickets.filter((t) => t.createdBy.id === currentUser?.id).length;

    return (
        <PageLayout>
            <Typography component={"h2"} variant={"h5"} sx={{marginBottom: "1rem"}}>Übersicht</Typography>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '32px'}}>
                {/* Karte 1 – orange Akzent */}
                <MetricsCard label={"Geschlossene"} value={geschlossene} variant={"success"}/>
                <MetricsCard label={"Offene Tickets"} value={offeneTickets} variant={"warning"}/>
                <MetricsCard label={"In Bearbeitung"} value={inBearbeitung} variant={"default"}/>
                <MetricsCard label={"Meine Tickets"} value={eigeneTickets} variant={"info"}/>
            </div>
            <div style={{display: 'flex', gap: '12px'}}>
                <LinkButton variant={"contained"} to={routes.tickets.path}>Alle Tickets</LinkButton>
                <LinkButton variant={"contained"} to={routes.newTicket.path} startIcon={<Add/>}>Neues Ticket</LinkButton>
            </div>
        </PageLayout>
    );
}
