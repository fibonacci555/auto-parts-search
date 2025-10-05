import { Suspense } from "react"
import CategoryPage from "../../components/CategoryPage"
import { toolCategories } from "../../lib/tool-data"

export default function UGCtoolsPage() {
  const categoryData = toolCategories["Best UGC Tools"]
  
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Loading UGC Tools</h2>
            <p className="text-white/60">Preparing the best tools...</p>
          </div>
        </div>
      }
    >
      <CategoryPage
        categoryTitle="Best UGC Tools"
        categoryDescription="Discover the most advanced UGC creation tools powered by AI. Create photorealistic videos, authentic content, and scale your UGC campaigns with cutting-edge technology."
        tools={categoryData}
        categorySlug="ugc-tools"
        categoryIcon="🎬"
      />
    </Suspense>
  )
}
