import Image from 'next/image';

export function HeroSection() {
    return (
        <div className="welcome-area welcome-area--l1 position-relative bg-default">
            <div className="container">
                <div className="row">

                    {/* Welcome Content Hero Section */}
                    <div className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1">
                        <div className="welcome-content welcome-content--l1">
                            <h1 className="welcome-content__title">
                                Solusi Jitu Kembangkan<br />
                                <span className="text-highlight highlight-text d-inline-block .text-primary">Bisnis</span>
                            </h1>
                            <p className="welcome-content__descriptions mb-5">
                                Aptana menyediakan layanan promosi berbasis mobile dengan hasil yang lebih efektif dan terukur
                            </p>
                            <a href="https://wa.me/+628113549900?text=Hai%20saya%20mau%20konsultasi%20tentang%20bisnis%20saya" className="btn btn--lg-2 btn-electric-violet-2 shadow--electric-violet-4 rounded-50 p-3" > <i className="fab fa-whatsapp me-2"></i>Hubungi Kami Sekarang</a>
                        </div>
                    </div>

                    {/* Welcome Imgae Hero Section */}
                    <div className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static">
                        <div className="welcome-image-group-wrapper">
                            <div className="welcome-image welcome-image--group-01">
                                <Image src="https://aptanaassets.sgp1.cdn.digitaloceanspaces.com/website-aptana/assets/images/Beranda/header-2024.webp" width={1080} height={1080} layout='intrinsic' alt="Solusi Jitu Kembangkan Bisnis" loading="lazy" className="welcome-image__single welcome-image--group-01__main mb-2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}