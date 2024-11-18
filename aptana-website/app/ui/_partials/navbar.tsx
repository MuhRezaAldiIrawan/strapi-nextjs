import NavLinks from "../components/navbarlink";

export default async function Navigation() {
    return (
        <div className="navigation-wrapper">
            <div className="popup" style={{ display: 'none' }}>
                <div className="home-popup__background">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="home-popup_close_area" style={{ position: 'relative', zIndex: 10 }}>
                                <div className="Aptana-popup__close-btn">
                                    <i className="fas fa-times-circle" style={{ color: '#ff3d3d' }}></i>
                                </div>
                            </div>
                            <div className="flex-row align-items-center iklan-popup"></div>
                            <div className="form-floating" id="popup-response" style={{ display: 'none' }}>
                                <form className="response-popup">
                                    <input type="hidden" name="popup_id" id="popup_id" />
                                    <input type="hidden" name="popup_title" id="popup_title" />
                                    <input type="hidden" name="popup_link" id="popup_link" />
                                    <input type="hidden" name="popup_list" id="popup_list" />
                                    <input className="form-control" type="email" placeholder="Masukkan Email Anda" id="popup-email" name="popup_email" required />
                                    <button className="btn-center btn-primary rounded-10 btn-sm text-white mt-2 btn-progress">
                                        <div id="popup_btn">Download Di Sini</div>
                                    </button>
                                </form>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id="loading">
                <div className="preloader">
                    <img src="https://aptanaassets.sgp1.digitaloceanspaces.com/website-aptana/assets/images/Header-Footer/aptana_preload.gif" alt="Loading Aptana" />
                </div>
            </div> */}

            <a href="https://api.whatsapp.com/send?phone=628113549900&text=Halo%20saya%20ingin%20konsultasi%20bisnis" className="float" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-comments my-float"></i> Konsultasi Di Sini
            </a>

            <header className="site-header site-header--menu-right dynamic-sticky-bg site-header--absolute site-header--sticky bg-white">
                <div className="container-xl pt-3 px-3 ">
                    <nav className="navbar site-navbar">
                        <div className="brand-logo">
                            <a href="https://aptana.co.id">
                                <img src="https://aptanaassets.sgp1.digitaloceanspaces.com/website-aptana/assets/images/Header-Footer/aptana_logo_light.webp" alt="Aptana" width="100%" className="light-version-logo" style={{ maxHeight: '4rem' }} />
                                <img src="https://aptanaassets.sgp1.digitaloceanspaces.com/website-aptana/assets/images/Header-Footer/aptana_logo_dark.webp" alt="Aptana" width="100%" className="dark-version-logo" style={{ maxHeight: '4rem' }} />
                            </a>
                        </div>
                        <div className="menu-block-wrapper ms-4">
                            <div className="menu-overlay"></div>
                            <nav className="menu-block" id="append-menu-header">

                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa fa-angle-left"></i>
                                    </div>
                                    <div className="current-menu-title"></div>
                                    <div className="mobile-menu-close">&times;</div>
                                </div>

                                <NavLinks />
                            </nav>
                        </div>
                        <div className="header-btns ms-auto ms-lg-0 d-none d-sm-flex align-items-center">
                            <a
                                className="btn btn-electric-violet-2 shadow--electric-violet-4 rounded-50 ms-lg-2 ms-auto text-white d-none d-sm-flex"
                                href="https://api.whatsapp.com/send?phone=628113549900&text=Halo!%20Saya%20ingin%20menanyakan%20tentang%20layanan%20Aptana"
                            >
                                <i className="fab fa-whatsapp me-2"></i>
                                Konsultasi
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

