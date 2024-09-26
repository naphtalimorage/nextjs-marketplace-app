import Navbar from "./Navbar";
interface LayoutProps {
    children: React.ReactNode;
}
export default function RootLayout({children}: LayoutProps) {
  return(
    <>
    <Navbar />
    {children}
  </>
  );
  
}
