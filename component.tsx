/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/UWJuDU1tTam
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Chivo } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import router from "next/router"


export function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MapIcon className="w-6 h-6" />
          <span className="text-xl font-semibold">Mizo Explorer</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Plan Trip
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Accommodations
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Travel Info
          </Link>
          <a href="index.html" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <UserIcon className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          </a>
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-[1fr_300px] gap-6 p-6">
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="h-[600px] w-full relative">
            <div className="h-full w-full" />
            <div className="absolute top-4 left-4 bg-background/80 rounded-lg p-2 flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ZoomInIcon className="w-4 h-4" />
                <span className="sr-only">Zoom in</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ZoomOutIcon className="w-4 h-4" />
                <span className="sr-only">Zoom out</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <CompassIcon className="w-4 h-4" />
                <span className="sr-only">Compass</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <LocateIcon className="w-4 h-4" />
                <span className="sr-only">Current Location</span>
              </Button>
            </div>
          </div>
          <div className="p-4 border-t">
            <h2 className="text-lg font-semibold">Plan Your Trip</h2>
            <form className="grid gap-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="departure">Departure</Label>
                <Input id="departure" placeholder="Enter departure location" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="arrival">Arrival</Label>
                <Input id="arrival" placeholder="Enter arrival location" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="departure-date">Departure Date</Label>
                  <Input id="departure-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="return-date">Return Date</Label>
                  <Input id="return-date" type="date" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="current-location">Current Location</Label>
                <Input id="current-location" placeholder="Use current location" />
              </div>
              <Button size="lg" className="justify-self-end" type="button" onClick={() => router.push('/plan-trip', undefined, { scroll: false })}>
                Plan Trip
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Travel Updates</h2>
          </div>
          <div className="p-4 grid gap-4">
            <div className="flex items-center gap-4">
              <TrafficConeIcon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold">Traffic Delays</div>
                <div className="text-sm text-muted-foreground">Expect delays on Highway 58 due to construction.</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CloudRainWindIcon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold">Weather Alerts</div>
                <div className="text-sm text-muted-foreground">
                  Heavy rain and thunderstorms expected in the region.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CalendarIcon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold">Upcoming Events</div>
                <div className="text-sm text-muted-foreground">Mizo Cultural Festival on June 15th.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 Mizo Explore. All rights reserved Ujjwal Shamra.</div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="https://github.com/ujjwalshxrma" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CloudRainWindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="m9.2 22 3-7" />
      <path d="m9 13-3 7" />
      <path d="m17 13-3 7" />
    </svg>
  )
}


function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function TrafficConeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0" />
      <path d="M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" />
      <path d="M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z" />
      <path d="m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function ZoomInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  )
}


function ZoomOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  )
}
