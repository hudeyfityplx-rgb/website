import type { Metadata } from 'next'
import UrbanShawarma from '@/components/urban-shawarma'

export const metadata: Metadata = {
  title: 'Urban Shawarma — Shawarma, Pizza & Burgers in Mississauga',
  description: '100% halal fast food done right — shawarma, pizza, burgers and snacks made to order in Mississauga.',
}

export default function Page() {
  return <UrbanShawarma />
}

