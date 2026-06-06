import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import {useTickets} from '../context/TicketsContext';
import {PageLayout} from "./PageLayout.tsx";
import {Button, Container} from "@mui/material";
import {Ticket} from "../types";

export default function NewTicketPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {currentUser} = useAuth();
    const {addTicket} = useTickets();

    const navState = location.state as { prefill?: { title: string; description: string } };
    const prefill = navState?.prefill;

    const [title, setTitle] = useState(prefill?.title);
    const [description, setDescription] = useState(prefill?.description);
    const [priority, setPriority] = useState('Mittel');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTicket: Ticket = {
            id: String(Date.now()),
            title: title ?? "-",
            description: description ?? "-",
            priority: priority as 'Niedrig' | 'Mittel' | 'Hoch',
            status: 'Offen' as const,
            createdBy: {id: currentUser?.id!!, name: currentUser?.name!!},
            createdAt: new Date().toISOString(),
        };

        addTicket(newTicket);
        navigate('/tickets');
    };

    return (
        <PageLayout>
            <Container>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        backgroundColor: 'white',
                        padding: '28px',
                        borderRadius: '6px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    }}
                >
                    <h3 style={{marginTop: 0, marginBottom: '24px', color: '#222222', fontSize: '18px'}}>
                        Neues Ticket anlegen
                    </h3>

                    <div style={{marginBottom: '16px'}}>
                        <label
                            style={{display: 'block', marginBottom: '6px', fontSize: '14px', color: '#444444'}}
                        >
                            Titel *
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder="Kurze Beschreibung des Problems"
                            style={{
                                width: '100%',
                                padding: '9px',
                                border: '1px solid #cccccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>

                    <div style={{marginBottom: '16px'}}>
                        <label
                            style={{display: 'block', marginBottom: '6px', fontSize: '14px', color: '#444444'}}
                        >
                            Beschreibung
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            placeholder="Detaillierte Beschreibung des Problems..."
                            style={{
                                width: '100%',
                                padding: '9px',
                                border: '1px solid #cccccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                resize: 'vertical',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>

                    <div style={{marginBottom: '28px'}}>
                        <label
                            style={{display: 'block', marginBottom: '6px', fontSize: '14px', color: '#444444'}}
                        >
                            Priorität
                        </label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '9px',
                                border: '1px solid #cccccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <option value="Niedrig">Niedrig</option>
                            <option value="Mittel">Mittel</option>
                            <option value="Hoch">Hoch</option>
                        </select>
                    </div>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <Button type={"submit"} variant={"contained"} color={"primary"}>Erstellen</Button>
                        <Button
                            variant={"outlined"}
                            color={"secondary"}
                            onClick={() => navigate('/tickets')}
                        >Abbrechen</Button>
                    </div>
                </form>
            </Container>
        </PageLayout>
    );
}
