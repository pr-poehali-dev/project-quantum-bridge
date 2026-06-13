import { useState } from "react"
import { ArrowRight, Building2, Wrench, TrendingUp, Users } from "lucide-react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const SEND_LEAD_URL = "https://functions.poehali.dev/c665e8b9-e89b-48f4-a9db-eef38b5f0fff"

const steps = [
  {
    icon: "Building2",
    title: "Покупаем здание целиком",
    text: "Приобретаем коммерческую недвижимость оптом — это даёт нам лучшую цену на входе и контроль над всем объектом.",
  },
  {
    icon: "Wrench",
    title: "Делаем ремонт",
    text: "Преобразуем пространство в современные мини-офисы с готовой инфраструктурой, интернетом и переговорными.",
  },
  {
    icon: "Users",
    title: "Продаём лотами",
    text: "Каждый офис продаётся отдельным инвестором. Мы сразу формируем арендный поток — вы получаете доход с первого дня.",
  },
  {
    icon: "TrendingUp",
    title: "Постоянный арендный поток",
    text: "Управляем всеми офисами, находим арендаторов и обеспечиваем стабильную доходность для каждого владельца.",
  },
]

export function OfficesBlog() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, amount, source: "offices" }),
      })
      if (res.ok) {
        setSent(true)
        setName("")
        setPhone("")
        setAmount("")
      } else {
        setError("Ошибка отправки. Попробуйте ещё раз.")
      }
    } catch {
      setError("Нет связи. Проверьте интернет.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Стратегия 2025–2028</p>
          <h2 className="text-2xl md:text-4xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-5xl">
            Мини-офисы —<br />
            <HighlightedText>стратегия нового времени</HighlightedText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8">
            Пока все инвестируют в квартиры, мы освоили нишу, которая приносит больше. Коммерческая недвижимость в формате мини-офисов — один из самых доходных инструментов на рынке сегодня.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.torgi-ru.ru/articles/trendy-kommercheskoy-nedvizhimosti-chto-budet-vostrebovano-v-2025-2030-godakh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <Icon name="ExternalLink" size={14} />
              Тренды офисной недвижимости 2025–2030
            </a>
            <a
              href="https://sber.pro/publication/barometr-kommercheskoi-nedvizhimosti-rinok-bez-universalnih-reshenii/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <Icon name="ExternalLink" size={14} />
              СберПро: доходность коммерческой недвижимости
            </a>
            <a
              href="https://aktivo.ru/blog/investicii-v-kommercheskuyu-nedvizhimost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <Icon name="ExternalLink" size={14} />
              Инвестиции в коммерческую недвижимость — AKTIVO
            </a>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* Left — description */}
          <div>
            <div className="aspect-[4/3] bg-muted mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Мини-офисы"
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="border-l-2 border-foreground pl-6">
              <p className="text-xl font-medium leading-relaxed mb-4">
                «Не только квартиры. Мини-офисы — это новая точка роста для умного инвестора.»
              </p>
              <cite className="text-muted-foreground text-sm not-italic">— AMI GROUP, стратегия 2025–2028</cite>
            </blockquote>
          </div>

          {/* Right — steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center mt-0.5">
                  <Icon name={step.icon} size={18} />
                </div>
                <div>
                  <p className="font-medium mb-1">{step.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div className="bg-foreground text-primary-foreground px-8 py-14 md:py-20 max-w-4xl mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-6">Инвестируй вместе с нами</p>
            <h3 className="text-xl md:text-3xl font-medium leading-tight mb-4">
              От <HighlightedText>25% годовых</HighlightedText> на мини-офисах
            </h3>
            <p className="text-primary-foreground/70 text-base mb-10">
              Оставь заявку — рассчитаем доходность под твой бюджет и покажем доступные лоты.
            </p>

            {sent ? (
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 px-8 py-8">
                <p className="text-xl font-medium mb-2">Заявка отправлена!</p>
                <p className="text-primary-foreground/70">Менеджер AMI GROUP свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон / WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Сумма инвестирования, ₽"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors"
                />
                {error && <p className="text-orange-300 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group disabled:opacity-60 mt-2"
                >
                  {loading ? "Отправляем..." : "Хочу инвестировать"}
                  {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                </button>
                <p className="text-primary-foreground/40 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}