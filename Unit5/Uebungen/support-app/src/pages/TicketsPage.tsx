import {useTickets} from '../context/TicketsContext';
import {PageLayout} from "./PageLayout.tsx";
import {routes} from "../routing.ts";
import {Add} from "@mui/icons-material";
import {LinkButton} from "../components/LinkButton.tsx";
import {Chip} from "@mui/material";

export default function TicketsPage() {
    const {tickets} = useTickets();

    return (
        <PageLayout>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                <h3 style={{margin: 0, color: '#333333'}}>Alle Tickets ({tickets.length})</h3>
                <LinkButton variant={"contained"} to={routes.newTicket.path} startIcon={<Add/>}>Neues Ticket</LinkButton>
            </div>

            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
                <thead>
                <tr style={{backgroundColor: '#f5f5f5', borderBottom: '2px solid #e0e0e0'}}>
                    <th style={{padding: '10px 12px', textAlign: 'left', color: '#666666', fontWeight: 600}}>
                        Titel
                    </th>
                    <th style={{padding: '10px 12px', textAlign: 'left', color: '#666666', fontWeight: 600}}>
                        Status
                    </th>
                    <th style={{padding: '10px 12px', textAlign: 'left', color: '#666666', fontWeight: 600}}>
                        Priorität
                    </th>
                    <th style={{padding: '10px 12px', textAlign: 'left', color: '#666666', fontWeight: 600}}>
                        Erstellt von
                    </th>
                    <th style={{padding: '10px 12px', textAlign: 'left', color: '#666666', fontWeight: 600}}>
                        Datum
                    </th>
                </tr>
                </thead>
                <tbody>
                {tickets.map((ticket, index) => (
                    <tr
                        key={ticket.id}
                        style={{
                            borderBottom: '1px solid #eeeeee',
                            backgroundColor: index % 2 === 0 ? 'white' : '#fafafa',
                        }}
                    >
                        <td style={{padding: '10px 12px', fontWeight: 500}}>{ticket.title}</td>
                        <td style={{padding: '10px 12px'}}>
                            <Chip
                                sx={{minWidth: "10rem"}}
                                label={ticket.status}
                                color={
                                    ticket.status === "Geschlossen" ? "success" :
                                    ticket.status === "In Bearbeitung" ? "secondary" : "primary"
                                }
                            />
                        </td>
                        <td style={{padding: '10px 12px'}}>{ticket.priority}</td>
                        <td style={{padding: '10px 12px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <span>{ticket.createdBy.name}</span>
                            </div>
                        </td>
                        <td style={{padding: '10px 12px', color: '#888888'}}>
                            {new Date(ticket.createdAt).toLocaleDateString('de-CH')}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </PageLayout>
    );
}
