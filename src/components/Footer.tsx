function AmiLogoTeal({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" stroke="#26A896" strokeWidth="2" fill="none" />
      <circle cx="40" cy="40" r="32" stroke="#26A896" strokeWidth="0.8" fill="none" opacity="0.5" />
      <text x="40" y="36" textAnchor="middle" fill="#26A896" fontSize="16" fontWeight="700" fontFamily="Rubik, sans-serif" letterSpacing="1">AMI</text>
      <text x="40" y="50" textAnchor="middle" fill="#26A896" fontSize="8" fontWeight="400" fontFamily="Montserrat, sans-serif" letterSpacing="3">GROUP</text>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center gap-3 mb-4">
              <AmiLogoTeal size={44} />
              <span className="text-xl font-semibold tracking-widest uppercase" style={{ color: "#26A896" }}>AMI GROUP</span>
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