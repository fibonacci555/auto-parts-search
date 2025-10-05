import { Suspense } from "react"
import CategoryPage from "../../components/CategoryPage"
import { toolCategories } from "../../lib/tool-data"

export default function AdvertisingLibrariesPage() {
  const categoryData = toolCategories["Best Advertising Libraries"]
  
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Loading Advertising Libraries</h2>
            <p className="text-white/60">Preparing the best tools...</p>
          </div>
        </div>
      }
    >
      <CategoryPage
        categoryTitle="Best Advertising Libraries"
        categoryDescription="Explore the most comprehensive advertising libraries with millions of ads, real-time updates, and advanced filtering capabilities to find winning creatives."
        tools={categoryData}
        categorySlug="advertising-libraries"
        categoryIcon="📚"
      />
    </Suspense>
  )
}
