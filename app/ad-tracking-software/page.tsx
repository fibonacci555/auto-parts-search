import { Suspense } from "react"
import CategoryPage from "../../components/CategoryPage"
import { toolCategories } from "../../lib/tool-data"

export default function AdTrackingSoftwarePage() {
  const categoryData = toolCategories["Best Ad Tracking Software"]
  
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Loading Ad Tracking Software</h2>
            <p className="text-white/60">Preparing the best tools...</p>
          </div>
        </div>
      }
    >
      <CategoryPage
        categoryTitle="Best Ad Tracking Software"
        categoryDescription="Get pixel-perfect attribution and real-time analytics with the most advanced ad tracking solutions. Track your campaigns with precision and optimize for better results."
        tools={categoryData}
        categorySlug="ad-tracking-software"
        categoryIcon="📊"
      />
    </Suspense>
  )
}
