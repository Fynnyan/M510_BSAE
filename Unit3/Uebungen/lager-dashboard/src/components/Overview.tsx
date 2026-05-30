import {Artikel} from "../types";
import {useMemo} from "react";
import {Grid} from "@mui/material";
import KpiCard from "./KpiCard.tsx";
import KritischeArtikelTabelle from "./KritischeArtikelTabelle.tsx";
import {artikel} from "../data/mockData.ts";
import {Dangerous, Warning} from "@mui/icons-material";

const Overview = (props: { articles: Artikel[] }) => {

    const kpis = useMemo(() => ({
        criticalArticles: props.articles.filter(a => a.status === 'critical').length,
        warningArticles: props.articles.filter(a => a.status === 'warning').length,
    }), [])

    return (
        <>
            <Grid container spacing={3} sx={{mb: 4}}>
                <Grid item xs={12} sm={4}>
                    <KpiCard
                        titel="Kritische Artikel"
                        wert={kpis.criticalArticles}
                        beschreibung="Bestand ≤ Mindestbestand"
                        icon={<Dangerous fontSize="inherit"/>}
                        farbe="error"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KpiCard
                        titel="Artikel mit Tiefem Bestand"
                        wert={kpis.warningArticles}
                        icon={<Warning fontSize="inherit"/>}
                        farbe="warning"
                    />
                </Grid>
            </Grid>
            <KritischeArtikelTabelle artikel={artikel}/>
        </>
    )
}
export default Overview