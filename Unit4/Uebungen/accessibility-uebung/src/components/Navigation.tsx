import {ReactNode, useState} from 'react'
import {Box, Button, Divider, Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import InventoryIcon from '@mui/icons-material/Inventory'
import AddBoxIcon from '@mui/icons-material/AddBox'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import {Page} from '../App'

interface NavigationProps {
    currentPage: Page
    onNavigate: (page: Page) => void
}

export default function Navigation({currentPage, onNavigate}: NavigationProps) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <nav
            style={{
                width: collapsed ? 60 : 220,
                background: '#1a237e',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                padding: '16px 0',
                transition: 'width 0.3s',
                minHeight: '100vh',
                flexShrink: 0,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: 'center',
                    marginBottom: "0.2rem"
                }}
            >
                <Button
                    onClick={() => setCollapsed(!collapsed)} style={{color: '#fff'}}
                    startIcon={<MenuIcon/>}
                    size={"large"}
                    aria-label={"collapse"}
                >
                    {!collapsed && "Lagerverwaltung"}
                </Button>
            </Box>
            <NavDivider/>
            <Stack
                flexGrow={1}
            >
                <NavButton
                    onClick={() => onNavigate('dashboard')}
                    label={"Dashboard"}
                    icon={<DashboardIcon/>}
                    isActive={currentPage === 'dashboard'}
                    isCollapsed={collapsed}
                />
                <NavButton
                    onClick={() => onNavigate('articles')}
                    label={"Artikel"}
                    icon={<InventoryIcon/>}
                    isActive={currentPage === 'articles'}
                    isCollapsed={collapsed}
                />
                <NavButton
                    onClick={() => onNavigate('form')}
                    label={"Neuer Artikel"}
                    icon={<AddBoxIcon/>}
                    isActive={currentPage === 'form'}
                    isCollapsed={collapsed}
                />
            </Stack>

            <NavDivider/>

            <Box>
                <NavButton
                    onClick={() => {
                    }}
                    label={"Notifikationen"}
                    icon={<NotificationsIcon/>}
                    isActive={false}
                    isCollapsed={collapsed}/>
                <NavButton
                    onClick={() => {
                    }}
                    label={"Einstellungen"}
                    icon={<SettingsIcon/>}
                    isActive={false}
                    isCollapsed={collapsed}/>
            </Box>
        </nav>
    )
}

const NavDivider = () => <Divider style={{background: 'rgba(255,255,255,0.2)'}}/>

const NavButton = (
    props: {
        onClick: () => void
        label: string
        icon?: ReactNode
        isActive: boolean
        isCollapsed: boolean
    }) => {

    return (
        <Button
            onClick={props.onClick}
            startIcon={props.icon}
            size={"large"}
            sx={{
                width: "100%",
                color: "white",
                cursor: 'pointer',
                background: props.isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                justifyContent: props.isCollapsed ? "center" : "start"
            }}
            role={"link"}
            aria-current={props.isActive}
        >
            {!props.isCollapsed && props.label}
        </Button>
    )
}