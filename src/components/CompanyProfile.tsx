import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Logo from '@/components/Logo'

import heroBackground from '@/assets/images/modern-tokyo-street-background.webp'
import gallery0 from '@/assets/images/gallery-0.webp'
import gallery1 from '@/assets/images/gallery-1.webp'
import gallery2 from '@/assets/images/gallery-2.webp'
import gallery3 from '@/assets/images/gallery-3.webp'
import gallery4 from '@/assets/images/gallery-4.webp'
import gallery5 from '@/assets/images/gallery-5.webp'
import gallery6 from '@/assets/images/gallery-6.webp'
import gallery7 from '@/assets/images/gallery-7.webp'

const galleryImages = [gallery0, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7]

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)

type Props = {
  currentLang: string
  onLanguageChange: (lng: string) => void
  theme: 'light' | 'dark'
  onThemeChange: (theme: 'light' | 'dark') => void
}

export default function CompanyProfile({ currentLang, onLanguageChange, theme, onThemeChange }: Props) {
  const { t } = useTranslation()
  const [loadedGalleryImages, setLoadedGalleryImages] = useState<Set<number>>(new Set())

  const handleGalleryImageLoad = (index: number) => {
    setLoadedGalleryImages((prev) => new Set(prev).add(index))
  }

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-6xl mx-auto items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#" className="flex items-center">
            <Logo height={36} className="max-h-9 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-foreground">
              {t('nav.about')}
            </a>
            <a href="#vision-mission" className="transition-colors hover:text-foreground">
              {t('nav.visionMission')}
            </a>
            <a href="#values" className="transition-colors hover:text-foreground">
              {t('nav.values')}
            </a>
            <a href="#services" className="transition-colors hover:text-foreground">
              {t('nav.services')}
            </a>
            <a href="#gallery" className="transition-colors hover:text-foreground">
              {t('nav.gallery')}
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              {t('nav.contact')}
            </a>
          </nav>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
              title={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
            <span className="opacity-50 hidden sm:inline">|</span>
            <div className="flex items-center gap-1">
            <Button
              variant={currentLang === 'en' ? 'secondary' : 'ghost'}
              size="sm"
              className="h-8 px-2"
              onClick={() => onLanguageChange('en')}
              aria-label="English"
            >
              EN
            </Button>
            <span className="opacity-50">|</span>
            <Button
              variant={currentLang === 'id' ? 'secondary' : 'ghost'}
              size="sm"
              className="h-8 px-2"
              onClick={() => onLanguageChange('id')}
              aria-label="Indonesia"
            >
              ID
            </Button>
            <span className="opacity-50">|</span>
            <Button
              variant={currentLang === 'ja' ? 'secondary' : 'ghost'}
              size="sm"
              className="h-8 px-2"
              onClick={() => onLanguageChange('ja')}
              aria-label="日本語"
            >
              JA
            </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 pb-24"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-background/80 dark:bg-background/85" aria-hidden />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground drop-shadow-sm sm:text-4xl md:text-5xl">
              {t('hero.tagline')}
            </h1>
            <p className="mt-4 text-lg text-foreground/90 leading-relaxed drop-shadow-sm">
              {t('hero.subtitle')}
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#contact">{t('hero.cta')}</a>
            </Button>
          </div>
        </section>

        <section
          id="about"
          className="container max-w-6xl mx-auto py-16 px-4 sm:px-6"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
            {t('about.title')}
          </h2>
          <p className="font-semibold text-primary mb-4 max-w-[60ch]">
            {t('about.businessField')}
          </p>
          <p className="text-muted-foreground max-w-[60ch] mb-4">
            {t('about.paragraph1')}
          </p>
          <p className="text-muted-foreground max-w-[60ch]">
            {t('about.paragraph2')}
          </p>
        </section>

        <section
          id="vision-mission"
          className="border-t bg-muted/30 py-16"
        >
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
              {t('visionMission.title')}
            </h2>
            <div className="grid gap-10 md:grid-cols-1 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg uppercase tracking-wide">
                    {t('visionMission.vision')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('visionMission.visionText')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg uppercase tracking-wide">
                    {t('visionMission.mission')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li>{t('visionMission.mission1')}</li>
                    <li>{t('visionMission.mission2')}</li>
                    <li>{t('visionMission.mission3')}</li>
                    <li>{t('visionMission.mission4')}</li>
                    <li>{t('visionMission.mission5')}</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="values"
          className="border-t border-b bg-muted/30 py-16"
        >
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
              {t('values.title')}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/50 transition-colors hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-base text-primary">
                    {t('values.integrity.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription>
                    {t('values.integrity.desc')}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border/50 transition-colors hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-base text-primary">
                    {t('values.excellence.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription>
                    {t('values.excellence.desc')}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border/50 transition-colors hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-base text-primary">
                    {t('values.innovation.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription>
                    {t('values.innovation.desc')}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border/50 transition-colors hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-base text-primary">
                    {t('values.partnership.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription>
                    {t('values.partnership.desc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="container max-w-6xl mx-auto py-16 px-4 sm:px-6"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
            {t('services.title')}
          </h2>
          <div className="space-y-6">
            <div className="border-b border-border py-6 first:pt-0 last:border-0">
              <h3 className="text-lg font-semibold mb-1">
                {t('services.item1.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('services.item1.desc')}
              </p>
            </div>
            <div className="border-b border-border py-6 first:pt-0 last:border-0">
              <h3 className="text-lg font-semibold mb-1">
                {t('services.item2.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('services.item2.desc')}
              </p>
            </div>
            <div className="border-b border-border py-6 first:pt-0 last:border-0">
              <h3 className="text-lg font-semibold mb-1">
                {t('services.item3.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('services.item3.desc')}
              </p>
            </div>
            <div className="border-b border-border py-6 first:pt-0 last:border-0">
              <h3 className="text-lg font-semibold mb-1">
                {t('services.item4.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('services.item4.desc')}
              </p>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="border-t bg-muted/30 py-16"
        >
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
              {t('gallery.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-lg border border-border bg-card shadow-sm"
                >
                  {!loadedGalleryImages.has(i) && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-muted"
                      aria-hidden
                    >
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    </div>
                  )}
                  <img
                    src={src}
                    alt=""
                    className={`aspect-[4/3] w-full object-cover transition-all duration-300 hover:scale-105 ${
                      loadedGalleryImages.has(i) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleGalleryImageLoad(i)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t bg-muted/30 py-16"
        >
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
              {t('contact.title')}
            </h2>
            <p className="text-muted-foreground mb-2">
              {t('contact.subtitle')}
            </p>
            <p className="font-medium text-foreground mb-6">
              PT. Kaizen Dharma Indonesia
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t('contact.email')}
                </span>
                <a
                  href="mailto:kaizendharmaindonesia@gmail.com"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  kaizendharmaindonesia@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t('contact.phone')}
                </span>
                <a
                  href="tel:+6289529322604"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  +62895-2932-2604
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t('contact.address')}
                </span>
                <span className="font-medium text-foreground max-w-xs">
                  Jl. Raya Wonotunggal No 1, Ds. Wonotunggal, Kec. Wonotunggal, Kab. Batang, Jawa Tengah
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
          <Logo height={28} className="max-h-7 w-auto" />
          <div className="flex flex-col items-end gap-1 text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t('footer.companyName')}. {t('footer.rights')}
            </p>
            <p className="text-xs text-muted-foreground/80">
              Hero image:{' '}
              <a
                href="https://www.freepik.com/free-photo/modern-tokyo-street-background_25969142.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Designed by Freepik
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
