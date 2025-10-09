import React from "react"
import CategoryPage from "@/components/CategoryPage"
import { toolCategories } from "@/lib/tool-data"
export default function PaymentProcessorsPage() {
  const categoryTitle = "The Reward-First Banking Platform for E-Commerce Brands"
  const categoryDescription = (
    <>

      Earn 2%+ unlimited cashback on all card spend, up to 4.05% APY on idle cash in your FDIC-insured Treasury Account (up to $200 million coverage), and enjoy free ACH and wire transfers. Foreign founders are fully supported. Slash users benefit from exceptionally high card approval rates, dedicated account managers, and best-in-class partner perks.

      
    </>
  )
  const tools = toolCategories["Banks"]
  const categorySlug = "banks"

  return (
    <CategoryPage
      categoryTitle={categoryTitle}
      categoryDescription={categoryDescription}
      tools={tools}
      categorySlug={categorySlug}
    />
  )
}
