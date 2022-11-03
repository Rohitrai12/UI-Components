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
        </ul>
    </>
}

export default DirectoryPage;