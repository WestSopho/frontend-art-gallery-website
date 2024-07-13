import Header from '@/app/ui/home/Header/header';
import Main from '@/app/ui/home/Main/main';
import Footer from '@/app/ui/home/Footer/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFAF9] sm:bg-FFFFFF">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}