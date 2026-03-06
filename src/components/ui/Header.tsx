/**
 * Header Component
 * Feature: 008-i18n-support / US1
 *
 * Application header with language switcher
 */

'use client';

import { LanguageSwitcher } from './LanguageSwitcher';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
/**
 * Header Component
 *
 * Renders application header with language switcher
 */
export function Header() {
  const { t } = useLanguage();
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="text-lg font-semibold text-gray-900">ウソホントゲーム</div>
        <nav className="space-x-4">
            <Link href="/">{t('navigation.participantsTop')}</Link>
            <Link href="/games">{t('navigation.gameManagement')}</Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
