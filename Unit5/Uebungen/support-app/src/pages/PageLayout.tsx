import {PropsWithChildren} from "react";
import {Navigation} from "../components/Navigation.tsx";
import {SiteFooter} from "../components/SiteFooter.tsx";

export const PageLayout = (props: PropsWithChildren) => {
    return (
        <div
            style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa'}}
        >
            <Navigation/>
            <main style={{flex: 1, padding: '1rem 1.5rem'}}>
                {props.children}
            </main>
            <SiteFooter/>
        </div>
    )
}