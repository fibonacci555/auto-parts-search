import { Suspense } from "react"
import CategoryPage from "../../components/CategoryPage"
import { toolCategories } from "../../lib/tool-data"

export default function AgencyAdAccountsPage() {
  const categoryData = toolCategories["Best Agency Ad Accounts"]
  
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Loading Agency Ad Accounts</h2>
            <p className="text-white/60">Preparing the best tools...</p>
          </div>
        </div>
      }
    >
      <CategoryPage
        categoryTitle="Best Agency Ad Accounts"
        categoryDescription="Discover the top-ranked agency ad accounts with proven track records and exclusive discounts. These agencies have helped thousands of businesses scale their advertising campaigns."
        tools={categoryData}
        categorySlug="agency-ad-accounts"
        categoryIcon="🏆"
      />
    </Suspense>
  )
}
