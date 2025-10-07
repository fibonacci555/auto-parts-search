import React from 'react'
import CategoryPage from '@/components/CategoryPage'
import { toolCategories } from '@/lib/tool-data'
import { Grid3X3 } from 'lucide-react'

export default function AdvertisingLibrariesPage() {
  const categoryTitle = "Best Advertising Libraries"
  const categoryDescription = "Discover the top advertising libraries and spy tools to analyze winning ad creatives, track competitor campaigns, and find inspiration for your next breakthrough campaign."
  const tools = toolCategories["Best Spy Tools"]
  const categorySlug = "advertising-libraries"
  

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