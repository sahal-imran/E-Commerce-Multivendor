import React, { ReactNode } from 'react';
import ClientNavigation from '../components/Client/Navigation/ClientNavigation';
import Footer from '../components/Client/Footer/Footer';

interface Props {
    children?: ReactNode
}

function Layout({ children }: Props) {
    const [UserRole, SetRole] = React.useState<string>("Client")
    return (
        <React.Fragment>
            {
                UserRole === "Client" &&
                <>
                    <ClientNavigation />
                    <main>{children}</main>
                    <Footer />
                </>
            }
        </React.Fragment>
    )
}

export default Layout;