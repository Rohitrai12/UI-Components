import React from 'react';
import Link from 'next/link';

const DirectoryPage = () => {
    return <>
        <ul>
            <li>
                <Link href="/zoom-image-hover-effect">
                    <a>
                        Zoom Image Hover Effect
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/custom-radio">
                    <a>
                        Custom Radios
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/css-flex-box-responsive">
                    <a>
                        Flex Box Responsive
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/social-buttons">
                    <a>
                        Social Buttons
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/input-search">
                    <a>
                        Search Input
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/input-example">
                    <a>
                        Input Example
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/theme-switcher">
                    <a>
                        Theme Switcher
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/custom-slider-range">
                    <a>
                        Custom Slider Range
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/profile-card">
                    <a>
                        Profile Card
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/menu-items-hover">
                    <a>
                        Menu Items Hover 
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/card-scroll-snap">
                    <a>
                        Card Scroll Snap
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/custom-radio">
                    <a>
                        Custom Radio
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/custom-loader-v1">
                    <a>
                        Pure CSS Loader (v1)
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/custom-loader">
                    <a>
                        Pure CSS Loader
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/3d-gallery">
                    <a>
                        3D Gallery
                    </a>
                </Link>
            </li>
        </ul>
    </>
}

export default DirectoryPage;