'use client'

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       
        <div className="pt-20">{children}</div>
      </body>
    </html>
  )
}
