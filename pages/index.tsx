import React from 'react';
import Link from 'next/link';

const DirectoryPage = () => {
    return <>
        <ul>
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
                <Link href="/custom-loader">
                    <a>
                        Pure CSS Loader
                    </a>
                </Link>
            </li>
        </ul>
    </>
}

export default DirectoryPage;