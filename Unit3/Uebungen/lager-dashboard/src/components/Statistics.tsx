import {Grid, Stack} from "@mui/material";
import {Artikel} from "../types";
import KategorieDiagramm from "./KategorieDiagramm.tsx";
import KpiCard from "./KpiCard.tsx";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import {useMemo} from "react";

const Statistics = (props: { articles: Artikel[] }) => {

    const kpis = useMemo(() => ({
        gesamtArtikel:   props.articles.length,
        anzahlKategorien: new Set(props.articles.map(a => a.category)).size,
    }), [])

    return (
        <>
            <Grid container spacing={3} sx={{mb: 4}}>
                <Grid item xs={12} sm={4}>
                    <Stack gap={1}>
                        <KpiCard
                            titel="Artikel gesamt"
                            wert={kpis.gesamtArtikel}
                            beschreibung="Alle erfassten Lagerartikel"
                            icon={<InventoryIcon fontSize="inherit" />}
                            farbe="primary"
                        />
                        <KpiCard
                            titel="Kategorien"
                            wert={kpis.anzahlKategorien}
                            beschreibung="Verschiedene Artikelgruppen"
                            icon={<CategoryIcon fontSize="inherit" />}
                            farbe="success"
                        />
                    </Stack>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <KategorieDiagramm artikel={props.articles}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Statistics