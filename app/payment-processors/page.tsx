import React from "react"
import CategoryPage from "@/components/CategoryPage"
import { toolCategories } from "@/lib/tool-data"
import GradientText from "@/components/GradientText/GradientText"
export default function PaymentProcessorsPage() {
  const categoryTitle = "Scalable Payment Processors"
  const categoryDescription = (
    <>
      Use the same payment processors
      {" "}
      <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text drop-shadow-[0_0_12px_rgba(106,228,255,0.6)]">
        Amazon
      </span>
      {" "}and{" "}
      <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text drop-shadow-[0_0_12px_rgba(106,228,255,0.6)]">
        DHL
      </span>
      {" "}use to get the highest approval rates possible. Same day onboarding, low fees and no reserves to help you scale in Q4.
      MIDs receive a 25% reduction from standard fees and will be expedited.
    </>
  )
  const tools = toolCategories["Payment Processors"]
  const categorySlug = "payment-processors"

  return (

    <><CategoryPage
      categoryTitle={categoryTitle}
      categoryDescription={categoryDescription}
      tools={tools}
      categorySlug={categorySlug} /></>
  )
}
