import './globals.css';
import Navigation from '@/components/organisms/Navigation/Component';
import Footer from '@/components/organisms/Footer/Component';
import '../fontawesome';
import DefaultMetatags from '@/components/molecules/DefaultMetatags/Component';
import Favicons from '@/components/molecules/Favicons/Component';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <DefaultMetatags />
      <Favicons />
      <body className="font-roboto m-0 bg-primary text-white overflow-x-hidden relative">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
