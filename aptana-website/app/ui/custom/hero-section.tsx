export function HeroSection({ data }: { readonly data: any }) {
    console.dir(data, { depth: null })
    return (
        <>
            <div>Hero Section</div>
            <div><div>{JSON.stringify(data)}</div></div>
        </>

    )
}