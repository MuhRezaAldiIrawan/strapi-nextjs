import Image from "next/image"
export function ReasonSection() {
    return(
        <div className="service-area service-area--l1 bg-default">
            <div className="service-shape service-shape--l1">
                <Image src="https://aptanaassets.sgp1.digitaloceanspaces.com/website-aptana/assets/images/Beranda/aptana-HP-3AU1.webp" className="w-100"  width={159} height={146}  alt="Solusi Jitu Kembangkan Bisnis" />
            </div>
            <div className="container">
                <div className="row align-items-end justify-content-center">
                    <div className="col-lg-7 col-md-12 col-xs-10">
                        <div className="section-title text-center text-md-start">
                            <h2 className="section-title__heading"> 3 Alasan Utama Mitra Memilih Kami</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-xs-10">
                        <div className="section-title text-center text-md-start">
                            <p className="section-title__description"> Aptana telah membantu ratusan mitra bisnis beradaptasi dengan perkembangan teknologi </p>
                        </div>
                    </div>
                </div>
                <div className="service-items">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-lg-4 col-xs-6 col-10">
                            <div className="widget widget--service text-center text-md-start">
                                <img src="https://aptanaassets.sgp1.cdn.digitaloceanspaces.com/website-aptana/assets/images/Beranda/section%203%20alasan%20-%20solusi%20lengkap.webp" width="70%" alt="Solusi Lengkap" />
                                <div className="widget__body">
                                    <h5 className="widget__heading">Solusi Lengkap</h5>
                                    <p className="widget__description">
                                    Beragam pilihan promosi digital hingga platform pengolahan pesan singkat agar tetap terhubung dengan pelanggan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-6 col-10">
                            <div className="widget widget--service text-center text-md-start">
                                <img src="https://aptanaassets.sgp1.cdn.digitaloceanspaces.com/website-aptana/assets/images/Beranda/section%203%20alasan%20-%20terukur.webp" width="70%" alt="Terukur dan Transparan" />
                                <div className="widget__body">
                                    <h5 className="widget__heading">Terukur dan Transparan</h5>
                                    <p className="widget__description"> Seluruh layanan kami memiliki laporan detail sehingga mitra dapat mengambil keputusan berbasis data </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-6 col-10">
                            <div className="widget widget--service text-center text-md-start">
                                <img src="https://aptanaassets.sgp1.cdn.digitaloceanspaces.com/website-aptana/assets/images/Beranda/section%203%20alasan%20-%20berpengalaman.webp" width="70%" alt="Berpengalaman" />
                                <div className="widget__body">
                                    <h5 className="widget__heading">Berpengalaman</h5>
                                    <p className="widget__description"> Pengalaman dan pelayanan extra adalah modal utama kami membangun hubungan yang produktif dengan seluruh mitra </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}