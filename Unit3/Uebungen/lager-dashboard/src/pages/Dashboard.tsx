import {useState} from 'react'
import {Box, Container, Divider, Tab, Tabs, Typography} from '@mui/material'
import {artikel} from '../data/mockData'
import Statistics from "../components/Statistics.tsx";
import Overview from "../components/Overview.tsx";

type DashboardTabs  = "overview" | "critical" | "statistics"

export default function Dashboard() {

  const [selectedTab, setSelectedTab] = useState<DashboardTabs>("overview")

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>

      {/* ── Seitenheader ─────────────────────────────────────────────────── */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary">
          Lager-Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
          Übersicht aller Artikel · {new Date().toLocaleDateString('de-CH', { dateStyle: 'long' })}
        </Typography>
      </Box>

        <Tabs
            value={selectedTab}
            onChange={(_, newValue: DashboardTabs) => {
                setSelectedTab(newValue)
            }}
        >
          <Tab label={"Übersicht"} value={"overview"}/>
          <Tab label={"Statistiken"} value={"statistics"}/>
      </Tabs>
      <Divider sx={{ mb: 4 }} />
      { selectedTab === 'overview' && <Overview articles={artikel}/> }
      { selectedTab === 'statistics' && <Statistics articles={artikel}/> }
    </Container>
  )
}
