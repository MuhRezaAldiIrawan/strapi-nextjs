import { HeroSection } from "../custom/hero-section";
import { ReasonSection } from "../custom/reason-section";
import { PriceSection } from "../custom/price-section";
import { PartnersSection } from "../custom/partners-section";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <ReasonSection />
            <PriceSection />
            <PartnersSection />
        </div>

    );
}

