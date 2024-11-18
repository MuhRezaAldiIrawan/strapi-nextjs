import Link from 'next/link';
import { useState } from 'react';


export default function NavLinks() {

    return (
        <ul className="site-menu-main">
            <li className="nav-item">
                <Link href="/" className="nav-link-item">Beranda</Link>
            </li>
            <li className="nav-item">
                <Link href="/" className="nav-link-item">Layanan</Link>
            </li>
            <li className="nav-item">
                <Link href="/" className="nav-link-item">Portofolio</Link>
            </li>
            <li className="nav-item">
                <Link href="/" className="nav-link-item">Blog</Link>
            </li>
            <li className="nav-item">
                <Link href="/" className="nav-link-item">Tentang Kami</Link>
            </li>   
        </ul>
    );
}
