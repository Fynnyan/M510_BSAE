import {useMemo} from 'react'
import {Box, Paper, Typography} from '@mui/material'
import {Cell, LabelList, Pie, PieChart, ResponsiveContainer, Tooltip,} from 'recharts'
import {Artikel} from '../types'

interface KategorieDiagrammProps {
  artikel: Artikel[]
}

// Farben für die Segmente – eine Farbe pro Kategorie
const FARBEN = ['#1565c0', '#ef6c00', '#2e7d32', '#6a1b9a', '#c62828', '#00838f']

export default function KategorieDiagramm({ artikel }: KategorieDiagrammProps) {
  // Aggregation: Anzahl Artikel pro Kategorie zählen
  const daten = useMemo(() => {
    const zaehler: Record<string, number> = {}

    for (const a of artikel) {
      zaehler[a.category] = (zaehler[a.category] ?? 0) + 1
    }

    // In Array umwandeln und absteigend sortieren
    return Object.entries(zaehler)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
  }, [artikel])

  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Artikel pro Kategorie
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Verteilung der {artikel.length} Artikel auf {daten.length} Kategorien
      </Typography>

      {/*
       * ResponsiveContainer: Diagramm passt sich der Containerbreite an.
       * Wichtig: Immer verwenden, damit das Diagramm responsiv ist.
       */}
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={daten}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {daten.map((_, index) => (
              <Cell key={index} fill={FARBEN[index % FARBEN.length]} />
            ))}
          </Pie>

          <Tooltip formatter={(value, name) => [`${value} Artikel`, name]} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legende: manuell, damit sie kompakt bleibt */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
        {daten.map((d, i) => (
          <Box key={d.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: FARBEN[i % FARBEN.length],
                flexShrink: 0,
              }}
            />
            <Typography variant="caption">{d.name}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}
