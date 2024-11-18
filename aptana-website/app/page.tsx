// "use client"
import qs from "qs";
import Header from '@/app/ui/_partials/header';
import GoogleTagManager from "./ui/_partials/googletagmanager";
import Navigation from "./ui/_partials/navbar";
import HomePage  from "./ui/pages/home-page";



export default function Home() {
  return (
    <main>
      <Header />
      <GoogleTagManager />
      <div className="site-wrapper overflow-hidden">
        <Navigation />
        <div className="main-content">
          {/* <h1>test</h1> */}
          <HomePage />
        </div>
      </div>
    </main>
  );
}