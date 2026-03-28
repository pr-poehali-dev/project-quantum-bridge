import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Доход выше банковских вкладов",
    description:
      "Доходность 8–12% годовых против 5–7% по вкладам. Ваши деньги работают в реальном активе, который растёт в цене.",
  },
  {
    title: "Ликвидные объекты",
    description:
      "Подбираем только те квартиры, которые легко сдать и при необходимости продать. Локация, планировка, потенциал — всё просчитано.",
  },
  {
    title: "Минимум вашего участия",
    description:
      "Мы берём на себя всё: поиск арендаторов, коммуникации, оплаты, мелкий ремонт. Вы получаете отчёт и деньги на счёт.",
  },
  {
    title: "Полный контроль",
    description: "Прозрачная отчётность, фиксированный договор и личный менеджер. Вы всегда знаете, что происходит с вашим объектом.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Почему выбирают нас</p>
            <h2 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Инвестиции с
              <br />
              <HighlightedText>результатом</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="/images/exterior.png"
                alt="Архитектурный эскиз рабочего пространства"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-6">
              Мы не просто сдаём квартиры — мы строим систему пассивного дохода под каждого клиента. Полный цикл: от подбора объекта до ежемесячных выплат.
            </p>
            <div className="mb-10">
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-4">Работаем в 4 странах</p>
              <div className="flex gap-4 flex-wrap">
                {[
                  { flag: "🇷🇺", city: "Москва", country: "Россия" },
                  { flag: "🇹🇷", city: "Анталия", country: "Турция" },
                  { flag: "🇦🇪", city: "Дубай", country: "ОАЭ" },
                  { flag: "🇸🇦", city: "Эр-Рияд", country: "Саудовская Аравия" },
                ].map((item) => (
                  <div key={item.city} className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl bg-white shadow-sm" style={{ borderColor: "#26A896" }}>
                      {item.flag}
                    </div>
                    <span className="text-xs font-medium text-foreground">{item.city}</span>
                    <span className="text-[10px] text-muted-foreground">{item.country}</span>
                  </div>
                ))}
              </div>
            </div>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}