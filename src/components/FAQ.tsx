import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько денег нужно для старта?",
    answer:
      "Для входа в инвестиционную недвижимость в Москве рекомендуем от 10 млн ₽. Это позволяет приобрести ликвидную 1-комнатную квартиру в хорошей локации с реальной доходностью 8–12% годовых. Мы подбираем объект под ваш бюджет и цели.",
  },
  {
    question: "Какие гарантии вы даёте?",
    answer:
      "Мы работаем по официальному договору на управление. Фиксируем прогнозируемую доходность, прописываем условия расторжения и порядок отчётности. Вы остаётесь полноправным собственником и контролируете ситуацию на каждом этапе.",
  },
  {
    question: "Можно ли работать удалённо, не находясь в Москве?",
    answer:
      "Да, большинство наших клиентов живут в других городах и странах. Сделку можно провести дистанционно через нотариуса или доверенность. Всё управление мы берём на себя — вы получаете ежемесячные отчёты и выплаты на карту.",
  },
  {
    question: "У меня уже есть квартира. Вы можете взять её в управление?",
    answer:
      "Конечно. Если у вас есть квартира в Москве, которую вы хотите сдавать — мы оценим её потенциал, при необходимости сделаем подготовку к аренде и возьмём на себя всё управление. Оставьте заявку, и мы проведём бесплатный расчёт доходности.",
  },
  {
    question: "Чем краткосрочная аренда отличается от долгосрочной?",
    answer:
      "Краткосрочная аренда (посуточно) даёт доходность на 30–50% выше, но требует активного управления: заселение, уборка, рейтинг. Долгосрочная — стабильный доход с минимальными хлопотами. Мы помогаем выбрать формат под ваши цели и особенности объекта.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку на сайте — мы свяжемся в течение часа. На первом звонке обсудим ваш бюджет, цели и предпочтения. После этого подготовим индивидуальный расчёт доходности и план действий — бесплатно и без обязательств.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-2xl md:text-4xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-5xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}