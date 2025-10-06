import React from 'react'
import CategoryPage from '@/components/CategoryPage'
import { toolCategories } from '@/lib/tool-data'
import { BarChart3 } from 'lucide-react'

export default function AdTrackingSoftwarePage() {
  const categoryTitle = "Best Ad Tracking Software"
  const categoryDescription = "Track your ad performance with precision using the best attribution and analytics tools. Get pixel-perfect tracking, real-time insights, and detailed campaign analytics."
  const tools = toolCategories["Best Ad Tracking Software"]
  const categorySlug = "ad-tracking-software"
  

  return (
    <CategoryPage
      categoryTitle={categoryTitle}
      categoryDescription={categoryDescription}
      tools={tools}
      categorySlug={categorySlug}
      categoryIcon={undefined}
    />
  )
}