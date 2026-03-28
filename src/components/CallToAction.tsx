import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const SEND_LEAD_URL = "https://functions.poehali.dev/c665e8b9-e89b-48f4-a9db-eef38b5f0fff"

export function CallToAction() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
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
        body: JSON.stringify({ name, phone }),
      })
      if (res.ok) {
        setSent(true)
        setName("")
        setPhone("")
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
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Получите расчёт доходности</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Узнайте, сколько принесёт
            <br />
            ваш <HighlightedText>бюджет</HighlightedText>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Рассчитаем доходность под ваш бюджет и покажем реальные объекты — бесплатно, без обязательств, за один звонок.
          </p>

          {sent ? (
            <div className="max-w-md mx-auto bg-primary-foreground/10 border border-primary-foreground/20 px-8 py-8 text-center">
              <p className="text-2xl font-medium mb-2">Заявка отправлена!</p>
              <p className="text-primary-foreground/70">Менеджер AMI GROUP свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
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
              {error && <p className="text-orange-300 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group disabled:opacity-60"
              >
                {loading ? "Отправляем..." : "Получить расчёт"}
                {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              </button>
              <p className="text-primary-foreground/40 text-xs">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
