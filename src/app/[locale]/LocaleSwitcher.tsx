import { usePathname } from 'next/navigation';
import Link from 'next/link';

const locales = ['es', 'en'];

export default function LocaleSwitcher() {
  const pathname = usePathname();

  // Remove locale prefix from pathname
  const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '');

  return (
    <div>
      {locales.map((locale, idx) => (
        <span key={locale}>
          <Link href={`/${locale}${pathWithoutLocale}`}>
            {locale.toUpperCase()}
          </Link>
          {idx < locales.length - 1 && ' | '}
        </span>
      ))}
    </div>
  );
}
