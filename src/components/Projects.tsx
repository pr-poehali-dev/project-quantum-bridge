import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Мини-студия, ул. Подъёмная",
    category: "Краткосрочная аренда · Москва",
    location: "Доходность 18% · сдана в управление",
    year: "2024",
    image: "https://cdn.poehali.dev/files/0e6de504-53d4-4a5c-8f33-22b5e2898ba5.jpg",
  },
  {
    id: 2,
    title: "Мини-студия, ул. Подъёмная",
    category: "Краткосрочная аренда · Москва",
    location: "Кухня-гостиная · полная меблировка",
    year: "2024",
    image: "https://cdn.poehali.dev/files/08266da8-9dbc-4a0b-918d-d82630396595.jpg",
  },
  {
    id: 3,
    title: "Мини-студия, ул. Подъёмная",
    category: "Краткосрочная аренда · Москва",
    location: "Санузел · под ключ",
    year: "2024",
    image: "https://cdn.poehali.dev/files/b3b1732b-515d-4295-a305-43a234ca9341.jpg",
  },
  {
    id: 4,
    title: "Мини-студия, ул. Подъёмная",
    category: "Краткосрочная аренда · Москва",
    location: "Ремонт и оснащение — под ключ",
    year: "2024",
    image: "https://cdn.poehali.dev/files/7a52e715-83bc-4a58-9e8b-1492f0ef2e3c.jpg",
  },
]

const stats = [
  { value: "352", label: "Объекта в управлении" },
  { value: "8–14%", label: "Долгосрочная аренда" },
  { value: "15–23%", label: "Краткосрочная аренда" },
  { value: "4–25%", label: "Капитализация за 15 лет" },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Реальные результаты</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Объекты в управлении</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Все объекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-t border-b border-border py-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-medium tracking-tight mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}