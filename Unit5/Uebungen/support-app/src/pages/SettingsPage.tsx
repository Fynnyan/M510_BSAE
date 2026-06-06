import {useState} from 'react';
import {useAuth} from '../context/AuthContext';
import {PageLayout} from "./PageLayout.tsx";
import {Alert, Box, Button, Card, CardActions, CardContent, Divider, Stack, Typography} from "@mui/material";

export default function SettingsPage() {
    const {currentUser} = useAuth();

    const [notifications, setNotifications] = useState(true);
    const [theme, setTheme] = useState('hell');
    const [language, setLanguage] = useState('de');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <PageLayout>
            <Typography component={"h2"} variant={"h5"} sx={{marginBottom: "1rem"}}>Benutzereinstellungen</Typography>
            <Box sx={{maxWidth: "50%"}}>
                {saved && <Alert variant={"standard"}>Einstellungen wurden gespeichert.</Alert>}
                <Card>
                    <CardContent>
                        <Stack spacing={1}>
                            <Typography><strong>{currentUser?.name}</strong></Typography>
                            <Typography>{currentUser?.email}</Typography>
                            <Typography>Rolle: <strong>{currentUser?.role === 'admin' ? 'Administrator' : 'Benutzer'}</strong></Typography>
                        </Stack>
                        <Divider flexItem sx={{margin: "1rem 0"}}/>
                        <Stack spacing={2}>
                        <div>
                            <label style={{display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer'}}>
                                <input
                                    type="checkbox"
                                    checked={notifications}
                                    onChange={(e) => setNotifications(e.target.checked)}
                                    style={{width: '16px', height: '16px'}}
                                />
                                <Typography>E-Mail-Benachrichtigungen aktivieren</Typography>
                            </label>
                        </div>
                        <div>
                            <label
                                style={{display: 'block', marginBottom: '6px', fontSize: '14px', color: '#444444'}}
                            >
                                Erscheinungsbild
                            </label>
                            <select
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid #a5d6a7',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                }}
                            >
                                <option value="hell">Hell</option>
                                <option value="dunkel">Dunkel</option>
                                <option value="system">Systemstandard</option>
                            </select>
                        </div>
                        <div>
                            <label
                                style={{display: 'block', marginBottom: '6px', fontSize: '14px', color: '#444444'}}
                            >
                                Sprache
                            </label>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid #a5d6a7',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                }}
                            >
                                <option value="de">Deutsch</option>
                                <option value="en">Englisch</option>
                                <option value="fr">Französisch</option>
                            </select>
                        </div>
                        </Stack>
                    </CardContent>
                    <CardActions
                        sx={{alignItems: "end"}}
                    >
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={handleSave}
                        >
                            Speichern
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </PageLayout>
    );
}
