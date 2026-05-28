import {Produkt} from "../data/mockData.ts";
import {DataGrid, GridCellParams, GridColDef} from "@mui/x-data-grid";


const columnDefinition: GridColDef[] = [
    {field: "id", headerName: "Id", maxWidth: 16},
    {field: "artikelnummer", headerName: "Artikelnummer", flex: 1},
    {field: "name", headerName: "Name", flex: 1},
    {field: "kategorie", headerName: "Kategorie", flex: 1},
    {
        field: "lagerbestand",
        headerName: "Lagerbestand",
        flex: 1,
        cellClassName: (params: GridCellParams) => {
            const lessThanMinStock = params.row.lagerbestand < params.row.mindestbestand
            return lessThanMinStock ? 'low-stock' : ''
        }
    },
    {field: "mindestbestand", headerName: "Mindestbestand", flex: 1},
    {field: "einheit", headerName: "Einheit", flex: 1},
    {field: "preis", headerName: "Preis", flex: 1},
    {field: "lieferant", headerName: "Lieferant", flex: 1},
    {field: "standort", headerName: "Standort", flex: 1},
]

export const DataTable = (props: { products: Produkt[] }) => {
    return (
        <DataGrid
            rows={props.products}
            columns={columnDefinition}
            initialState={
                {
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                            page: 0
                        }
                    }
                }
            }
            pageSizeOptions={[10, 25, 50]}
            sx={{
                '& .low-stock': {backgroundColor: 'red', color: 'white'},
            }}

        />
    )
}