import type { Metadata } from 'next'
import PageTitleAnimation from './components/PageTitleAnimation'
import RootBackground from './components/RootBackground'

export const metadata: Metadata = {
  title: 'Ida Bagus Putu Putra Manuaba',
  description: 'I’m Ida Bagus Putu Putra Manuaba, Full Stack Web & Internet of Things Developer based in Semarang, Indonesia.',
  openGraph: {
    images: '/media/poster.jpg',
    title: 'Ida Bagus Putu Putra Manuaba',
    description: 'I’m Ida Bagus Putu Putra Manuaba, Full Stack Web & Internet of Things Developer based in Semarang, Indonesia.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootBackground />
      <PageTitleAnimation />
      <main className="relative z-10 flex-1 bg-white/60 p-3 dark:bg-black/75 md:px-5 md:pb-10 lg:px-10">{children}</main>
    </>
  )
}
