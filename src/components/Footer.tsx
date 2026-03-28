export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-semibold tracking-tight">AMI GROUP</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-4">
              Подбираем, покупаем, ремонтируем и сдаём доходную недвижимость. Вы получаете стабильный доход без участия.
            </p>
            <p className="text-muted-foreground text-sm">
              🇷🇺 Москва · 🇹🇷 Анталия · 🇦🇪 Дубай · 🇸🇦 Эр-Рияд
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Объекты
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Получить расчёт
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:anna@6629556.ru" className="hover:text-foreground transition-colors">
                  anna@6629556.ru
                </a>
              </li>
              <li>
                <a href="tel:+79255148361" className="hover:text-foreground transition-colors">
                  +7 (925) 514-83-61
                </a>
              </li>
              <li>
                <a href="https://t.me/invest_anna" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  @invest_anna
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 AMI GROUP. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
