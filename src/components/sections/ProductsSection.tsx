import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Circle } from "lucide-react"

const products = [
    { title: "Goven", label: "DESIGN TOOLKIT", color: "bg-purple-600" },
    { title: "Landit", label: "WEB DESIGN COLLECTION", color: "bg-green-500" },
    { title: "Subtle Folio", label: "DESIGN TOOLKIT", color: "bg-zinc-500" },
]

export const ProductsSection = () => (
    <section className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Products</h2>
        <h1 className="text-xl font-bold mb-2">Explore My Products</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">
            Discover the digital products that I created as an indie product designer. Let's explore.
        </p>

        <div className="space-y-2">
            {products.map((product, i) => (
                <Card
                    key={i}
                    className="transition-transform hover:-translate-y-1 hover:shadow-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg"
                >
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${product.color}`}>
                                    <Circle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-zinc-800 dark:text-white">{product.title}</h3>
                                </div>
                            </div>

                            <Badge
                                variant="outline"
                                className="text-[10px] px-2 py-0.5 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700"
                            >
                                {product.label}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

            ))}
        </div>
    </section>
)
