import HeroImageBackground from "./hero-image-background";
import HeroSection from "./hero-section";

export default function Header(){
    return (
        <header>
            <HeroImageBackground>
                <HeroSection />
            </HeroImageBackground>
        </header>
    );
}