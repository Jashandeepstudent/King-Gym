import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: "The King's UNISEX GYM & SPA | R.S. Pura's #1 Fitness Center",
  description:
    "Train like royalty at The King's UNISEX GYM & SPA in R.S. Pura. World-class equipment, expert coaching, diet planning, and a premium spa experience. Fully wheelchair accessible.",
  keywords: [
    "gym R.S. Pura",
    "The King's Gym",
    "fitness center Jammu",
    "unisex gym spa",
    "personal training R.S. Pura",
  ],
  openGraph: {
    title: "The King's UNISEX GYM & SPA",
    description:
      "Train Like Royalty in R.S. Pura. World-class equipment, expert coaching, and a premium spa experience.",
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-body bg-onyx text-offwhite antialiased">
        {children}
      </body>
    </html>
  )
}
