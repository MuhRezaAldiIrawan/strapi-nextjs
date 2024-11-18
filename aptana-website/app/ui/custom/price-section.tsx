
export function PriceSection() {
    return (
        <div className="content-section content-section--l1-2 bg-default-2">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-7 col-md-7 col-xs-9 order-2 order-lg-1">
                        <div className="content-texts content-texts--l1-2" >
                            <h2 className="content__heading">
                                Lebih Hemat <br />
                                Dalam Biaya<br />
                                Promosi
                            </h2>
                            <p className="content__description"> Mengapa setiap layanan yang kami tawarkan selalu memiliki
                                <span className="text-beda"> Fitur Analytic & Measurement ? </span>
                            </p>
                            {/* price content section */}
                            <div className="widgets__single d-flex">
                                <div className="widgets__single__icon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="widgets__single__content">
                                    <h4 className="widgets__single__heading">Terukur dan Tepat Sasaran</h4>
                                    <p className="widgets__single__content">
                                        Hasil kampanye yang detail dan transparan untuk mengukur kesuksesan sebuah promosi
                                    </p>
                                </div>
                            </div>

                            <div className="widgets__single d-flex">
                                <div className="widgets__single__icon">
                                    <i className="fas fa-bullhorn"></i>
                                </div>
                                <div className="widgets__single__content">
                                    <h4 className="widgets__single__heading">Pemilihan Media</h4>
                                    <p className="widgets__single__content">
                                        Pemilihan metode promosi yang tepat dan efisien untuk menjangkau calon konsumen
                                    </p>
                                </div>
                            </div>

                            <div className="widgets__single d-flex">
                                <div className="widgets__single__icon">
                                    <i className="fas fa-coins"></i>
                                </div>
                                <div className="widgets__single__content">
                                    <h4 className="widgets__single__heading">Hemat Biaya</h4>
                                    <p className="widgets__single__content">
                                        Budget promosi lebih efisien dan terukur karena pesan hanya dikirim ke calon konsumen yang tepat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5 offset-lg-1 col-md-7 col-xs-9 order-1 order-lg-2">
                        <div className="content-image-group content-image-group--l1_2">
                            <div className="card card--content-2 bg-white">
                                <div className="card--content-single border-bottom-dotted-3">
                                    <h2 className="card--content-2__currency">78%</h2>
                                    <p className="card--content-2__text">Pertumbuhan aktivitas belanja online pada masyarakat Indonesia</p>
                                </div>
                                <div className="card--content-single">
                                    <h2 className="card--content-2__currency">48%</h2>
                                    <p className="card--content-2__text">Namun belum semua pelaku bisnis telah melakukan marketing digital</p>
                                </div>
                                <div className="card--content-single card--content-single--highlight bg-green-2">
                                    <p className="card--content-2__text">Kami membantu pelaku usaha melakukan promosi digital yang lebih terukur dan efektif sehingga dapat menghemat biaya hingga </p>
                                    <h2 className="card--content-2__currency">40%</h2>
                                </div>
                            </div>
                            <div className="content-image-group__image content-image-group__image-1">
                                <img className="w-100" src="https://aptanaassets.sgp1.digitaloceanspaces.com/website-aptana/assets/images/Beranda/aptana-HP-LDP2.webp" alt="Solusi Jitu Kembangkan Bisnis" />
                            </div>
                            <div className="content-image-group__image content-image-group__image-2">
                                <img className="w-100" src="https://aptanaassets.sgp1.digitaloceanspaces.com/website-aptana/assets/images/Beranda/aptana-HP-LDP1.webp" alt="Solusi Jitu Kembangkan Bisnis" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}