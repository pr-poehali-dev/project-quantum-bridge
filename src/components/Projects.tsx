import { useState, useEffect, useRef } from "react"

const casePhotos = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/files/0e6de504-53d4-4a5c-8f33-22b5e2898ba5.jpg",
    label: "Спальная зона",
  },
  {
    id: 2,
    url: "https://cdn.poehali.dev/files/578c8951-b653-46d9-8d51-59c6c41f99d2.jpg",
    label: "Интерьер",
  },
  {
    id: 3,
    url: "https://cdn.poehali.dev/files/08266da8-9dbc-4a0b-918d-d82630396595.jpg",
    label: "Кухня",
  },
  {
    id: 4,
    url: "https://cdn.poehali.dev/files/b3b1732b-515d-4295-a305-43a234ca9341.jpg",
    label: "Санузел",
  },
  {
    id: 5,
    url: "https://cdn.poehali.dev/files/7a52e715-83bc-4a58-9e8b-1492f0ef2e3c.jpg",
    label: "Кухня-гостиная",
  },
]

const steps = [
  { num: "01", title: "Подобрали", desc: "Нашли объект с высоким арендным потенциалом в востребованном районе Москвы" },
  { num: "02", title: "Отремонтировали", desc: "Сделали ремонт и полностью оснастили квартиру под краткосрочную аренду" },
  { num: "03", title: "Сдали", desc: "Разместили на платформах, обеспечили стабильную загрузку и доходность 18% годовых" },
]

const stats = [
  { value: "352", label: "Объекта в управлении" },
  { value: "8–14%", label: "Долгосрочная аренда" },
  { value: "15–23%", label: "Краткосрочная аренда" },
  { value: "4–25%", label: "Капитализация за 15 лет" },
]

export function Projects() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Реальный кейс</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Мини-студия, ул. Подъёмная — Москва
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-t border-b border-border py-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-medium tracking-tight mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Case: gallery + steps */}
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Gallery */}
          <div>
            <div className="relative overflow-hidden aspect-[4/3] mb-4">
              <img
                src={casePhotos[activePhoto].url}
                alt={casePhotos[activePhoto].label}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div
                className="absolute inset-0 bg-primary origin-top"
                style={{
                  transform: revealed ? "scaleY(0)" : "scaleY(1)",
                  transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)",
                }}
              />
              <span className="absolute bottom-4 left-4 text-xs text-white/80 tracking-widest uppercase bg-black/30 px-3 py-1">
                {casePhotos[activePhoto].label}
              </span>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {casePhotos.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={() => setActivePhoto(i)}
                  className={`flex-1 aspect-square overflow-hidden border-2 transition-all duration-200 ${
                    activePhoto === i ? "border-foreground" : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img src={photo.url} alt={photo.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="lg:pt-4">
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Объект подобран, отремонтирован и введён в управление командой AMI GROUP. 
              Краткосрочная аренда, Москва, 2024 год.
            </p>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`flex gap-6 transition-all duration-700 ${
                    revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 150 + 300}ms` }}
                >
                  <span className="text-muted-foreground/40 text-sm font-medium pt-1 w-6 shrink-0">{step.num}</span>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-medium">18%</p>
                <p className="text-muted-foreground text-sm">Доходность годовых</p>
              </div>
              <div>
                <p className="text-2xl font-medium">Краткосрочная</p>
                <p className="text-muted-foreground text-sm">Формат аренды</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
