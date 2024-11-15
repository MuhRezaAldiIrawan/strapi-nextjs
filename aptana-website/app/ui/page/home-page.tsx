import { HeroSection } from "../custom/hero-section";

export function HomePage({ data }: { readonly data: any }) {
    console.dir(data, { depth: null });
    return (
        <>
            <div>Home Page</div>
            <HeroSection data={data} />
        </>
    );
}
