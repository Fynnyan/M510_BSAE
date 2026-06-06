import {Chip} from "@mui/material";
import {ArtikelStatus} from "../types";


export const StatusChip = (
    {status, label = undefined}: {
        status: ArtikelStatus
        label?: string
    }
) => {

    let color: string
    switch (status) {
        case "aktiv":
            color = "default"
            break
        case "kritisch":
            color = "warning"
            label = !label ? label = "⚠ Kritisch" : label
            break
        case "nicht-verfügbar":
            color = "error"
            label = !label ? label = "✗ Nicht verfügbar" : label
            break
        case "pausiert":
            color = "info"
            break
        default:
            color = "default"
            break
    }
    return (
        <Chip label={label} color={color}/>
    )
}