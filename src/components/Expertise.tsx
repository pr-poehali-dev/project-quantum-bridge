import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Подбор и покупка",
    description:
      "Анализируем рынок, отбираем ликвидные объекты с доходностью от 8% и сопровождаем сделку под ключ. Фиксированная стоимость услуги — 300 000 ₽.",
    icon: "Search",
    tag: "от 300 000 ₽",
  },
  {
    title: "Ремонт и оснащение",
    description:
      "Делаем ремонт и полностью меблируем квартиру под аренду по бюджетным ценам — чтобы объект был максимально привлекателен для арендаторов.",
    icon: "Hammer",
    tag: "20% от бюджета",
  },
  {
    title: "Долгосрочная аренда",
    description:
      "Находим надёжных арендаторов, заключаем договор, контролируем оплаты и решаем все бытовые вопросы. Вы просто получаете деньги на счёт.",
    icon: "KeyRound",
    tag: "10% от дохода",
  },
  {
    title: "Краткосрочная аренда",
    description:
      "Размещаем объект на всех популярных платформах, управляем заездами, уборкой и рейтингом. Доходность 15–23% — значительно выше долгосрочной аренды.",
    icon: "CalendarDays",
    tag: "30% от дохода",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Три этапа</HighlightedText> на пути
            <br />
            к пассивному доходу
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Берёмся за полный цикл или за отдельные этапы — в зависимости от вашей ситуации. Гибкий подход, прозрачные условия.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon name={area.icon} className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-medium">{area.title}</h3>
                  <span className="text-sm text-orange-500 font-medium whitespace-nowrap">{area.tag}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}