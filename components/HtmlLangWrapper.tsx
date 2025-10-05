'use client';

import { useEffect } from 'react';
import { useLocale } from './LocaleProvider';

export default function HtmlLangWrapper() {
    const { locale } = useLocale();

    useEffect(() => {
        // Update the html lang attribute when locale changes
        if (typeof document !== 'undefined') {
            document.documentElement.lang = locale;
        }
    }, [locale]);

    return null;
}

