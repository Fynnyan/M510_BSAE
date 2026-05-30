import {Alert, Button, Divider, Typography} from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import WarningIcon from '@mui/icons-material/Warning'
import {articles} from '../data/articles'
import {PageH1, PageH2} from "../components/PageHX.tsx";
import {KPICard} from "../components/KPICard.tsx";
import {BarChart} from "@mui/icons-material";

/*
 * ACCESSIBILITY-PROBLEME in dieser Komponente:
 *
 * 1. Überschriftenhierarchie: Sprung von <h1> direkt zu <h5> – h2, h3, h4 fehlen
 * 2. Niedriger Kontrast: Grauer Text (#bbb, #aaa) auf weißem/hellem Hintergrund
 * 3. Chips kommunizieren Status nur über Farbe – Label ist nur "●" ohne Bedeutung
 * 4. Warnungsbereich: Textfarbe (#ffb74d – helles Orange) auf hellem Hintergrund kaum lesbar
 * 5. Klickbare <div>-Elemente statt <button> für Schnellaktionen
 * 6. Unklarer Button-Text: "Hier klicken" sagt nichts über die Aktion
 */
export default function Dashboard() {
    const totalArticles = articles.length
    const lowStock = articles.filter((a) => a.status === 'low').length
    const emptyStock = articles.filter((a) => a.status === 'empty').length
    const okStock = articles.filter((a) => a.status === 'ok').length

    return (
        <div>
            <PageH1>Dashboard</PageH1>
            <Typography color={"gray"}>Letzte Aktualisierung: 29.05.2025, 14:32 Uhr</Typography>
            <Divider variant={"fullWidth"} sx={{margin: "0.8rem 0"}}/>
            {/* Kennzahlenkarten */}
            <div style={{display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32}}>
                <KPICard title={"Gesamte Artikel"} content={totalArticles}/>
                <KPICard title={"Ausreichend"} variant={"ok"} content={okStock}/>
                <KPICard title={"Knapper Bestand"} variant={"warning"} content={lowStock}/>
                <KPICard title={"Nicht verfügbar"} variant={"critical"} content={emptyStock}/>
            </div>

            <PageH2>Statusübersicht</PageH2>

            <Alert severity={"warning"}>
                {lowStock + emptyStock} Artikel benötigen Aufmerksamkeit
            </Alert>

            <PageH2>Schnellaktionen</PageH2>
            <div style={{display: 'flex', gap: 12, marginTop: 8}}>
                {/* Problem #5: klickbares div statt button */}
                <Button
                    variant={"contained"}
                    onClick={() => alert('Bericht wird erstellt...')}
                    startIcon={<TrendingUpIcon/>}
                >
                    Lagerbericht erstellen
                </Button>

                <Button
                    variant={"contained"}
                    onClick={() => alert('Statistiken werden geladen...')}
                    startIcon={<BarChart/>}
                >
                    Statistik erstellen
                </Button>
            </div>
        </div>
    )
}
