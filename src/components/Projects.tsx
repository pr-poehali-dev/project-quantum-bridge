import { useState, useEffect, useRef } from "react"

const cases = [
  {
    id: 0,
    title: "Лофт с террасой, ЖК LOFT Вольный",
    subtitle: "Флиппинг · Москва · 2021",
    description: "Розовый лофт с антресолью, мраморным полом и собственной террасой. Куплен, полностью переделан и продан за 6 месяцев.",
    steps: [
      { num: "01", title: "Купили за 4 800 000 ₽", desc: "Подобрали объект ниже рынка с огромным потенциалом — высокие потолки, терраса, нестандартная планировка" },
      { num: "02", title: "Вложили 1 100 000 ₽", desc: "Дизайнерский ремонт: лофт-антресоль, мраморный пол, золотые акценты, полная меблировка" },
      { num: "03", title: "Продали за 8 400 000 ₽", desc: "Срок проекта — 6 месяцев. Прибыль 2 500 000 ₽ поделена 50/50 с инвестором" },
    ],
    metrics: [
      { value: "~42%", label: "Годовых на капитал" },
      { value: "1 250 000 ₽", label: "Доля инвестора" },
    ],
    photos: [
      { id: 1, url: "https://cdn.poehali.dev/files/4ff21e1a-aa46-43de-9373-8b4f45d8a1b8.jpg", label: "Гостиная" },
      { id: 2, url: "https://cdn.poehali.dev/files/d725e996-92b0-4a06-9e57-01052741b76f.jpg", label: "Антресоль" },
      { id: 3, url: "https://cdn.poehali.dev/files/8e07846b-14f1-472c-bb5c-497fb492963f.jpg", label: "Интерьер" },
      { id: 4, url: "https://cdn.poehali.dev/files/787baa2d-d4fd-414c-b585-1cb7fde2a9db.jpg", label: "Рабочая зона" },
      { id: 5, url: "https://cdn.poehali.dev/files/6e2c7e77-99e5-4e18-bb16-76541eaacfbf.jpg", label: "Терраса" },
      { id: 6, url: "https://cdn.poehali.dev/files/aa61728c-6e91-4ee0-bb67-c3b3077ba6ac.jpg", label: "Вид сверху" },
    ],
  },
  {
    id: 1,
    title: "Мини-студия, ул. Подъёмная",
    subtitle: "Краткосрочная аренда · Москва · 2024",
    description: "Объект подобран, отремонтирован и введён в управление командой AMI GROUP.",
    steps: [
      { num: "01", title: "Подобрали", desc: "Нашли объект с высоким арендным потенциалом в востребованном районе Москвы" },
      { num: "02", title: "Отремонтировали", desc: "Сделали ремонт и полностью оснастили квартиру под краткосрочную аренду" },
      { num: "03", title: "Сдали", desc: "Разместили на платформах, обеспечили стабильную загрузку и доходность 18% годовых" },
    ],
    metrics: [
      { value: "18%", label: "Доходность годовых" },
      { value: "Краткосрочная", label: "Формат аренды" },
    ],
    photos: [
      { id: 1, url: "https://cdn.poehali.dev/files/0e6de504-53d4-4a5c-8f33-22b5e2898ba5.jpg", label: "Спальная зона" },
      { id: 2, url: "https://cdn.poehali.dev/files/578c8951-b653-46d9-8d51-59c6c41f99d2.jpg", label: "Интерьер" },
      { id: 3, url: "https://cdn.poehali.dev/files/08266da8-9dbc-4a0b-918d-d82630396595.jpg", label: "Кухня" },
      { id: 4, url: "https://cdn.poehali.dev/files/b3b1732b-515d-4295-a305-43a234ca9341.jpg", label: "Санузел" },
      { id: 5, url: "https://cdn.poehali.dev/files/7a52e715-83bc-4a58-9e8b-1492f0ef2e3c.jpg", label: "Кухня-гостиная" },
    ],
  },
  {
    id: 2,
    title: "Лофт, ЖК LOFT Вольный",
    subtitle: "Флиппинг · Москва · 2024",
    description: "Куплен, отремонтирован в стиле лофт с каминoм и антресолью — продан с прибылью. Доход поделён 50/50 с инвестором.",
    steps: [
      { num: "01", title: "Купили", desc: "Подобрали объект и приобрели за 5 600 000 ₽ — ниже рынка, с потенциалом роста" },
      { num: "02", title: "Отремонтировали", desc: "Стильный лофт-ремонт с каминoм, антресолью и мраморным полом за 1 200 000 ₽" },
      { num: "03", title: "Продали", desc: "Продали за 8 900 000 ₽. Чистая прибыль 2 100 000 ₽ поделена 50/50 с инвестором" },
    ],
    metrics: [
      { value: "31%", label: "Доходность на вложения" },
      { value: "50/50", label: "Раздел прибыли" },
    ],
    photos: [
      { id: 1, url: "https://cdn.poehali.dev/files/e2d894a7-dbb5-4d4c-98cf-aea481dabfa4.jpg", label: "Общий вид" },
      { id: 2, url: "https://cdn.poehali.dev/files/baa259a9-1376-472b-9b07-03ccd528bd92.jpg", label: "Вид из окна" },
      { id: 3, url: "https://cdn.poehali.dev/files/ef188c37-24ad-4780-9944-4cd11c213944.jpg", label: "Кухня" },
      { id: 4, url: "https://cdn.poehali.dev/files/be7368a7-6455-48ed-8a38-233d61cc5f86.jpg", label: "Гостиная" },
      { id: 5, url: "https://cdn.poehali.dev/files/29f25f4a-723c-46c2-8efd-fe0ac72997d0.jpg", label: "Зона камина" },
    ],
  },
]

const stats = [
  { value: "352", label: "Объекта в управлении" },
  { value: "8–14%", label: "Долгосрочная аренда" },
  { value: "15–23%", label: "Краткосрочная аренда" },
  { value: "4–25%", label: "Капитализация за 15 лет" },
]

function CaseCard({ c }: { c: typeof cases[0] }) {
  const [activePhoto, setActivePhoto] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Gallery */}
      <div>
        <div className="relative overflow-hidden aspect-[4/3] mb-4">
          <img
            src={c.photos[activePhoto].url}
            alt={c.photos[activePhoto].label}
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
            {c.photos[activePhoto].label}
          </span>
        </div>
        <div className="flex gap-2">
          {c.photos.map((photo, i) => (
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

      {/* Info */}
      <div className="lg:pt-4">
        <p className="text-muted-foreground text-sm mb-1">{c.subtitle}</p>
        <h3 className="text-2xl font-medium mb-4">{c.title}</h3>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">{c.description}</p>

        <div className="space-y-6">
          {c.steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-6 transition-all duration-700 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <span className="text-muted-foreground/40 text-sm font-medium pt-1 w-6 shrink-0">{step.num}</span>
              <div>
                <h4 className="text-base font-medium mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-6">
          {c.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-2xl font-medium">{m.value}</p>
              <p className="text-muted-foreground text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Реальные кейсы</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">Наши объекты</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 border-t border-b border-border py-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-medium tracking-tight mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Cases */}
        <div className="space-y-24">
          {cases.map((c, i) => (
            <div key={c.id}>
              {i > 0 && <div className="border-t border-border mb-24" />}
              <CaseCard c={c} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}