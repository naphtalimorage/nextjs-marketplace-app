import ButtonLinks from "./ButtonLinks";

interface LayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({children}: LayoutProps) {
    return(
        <div>
            <ButtonLinks/>
            {children}
        </div>
    )
}