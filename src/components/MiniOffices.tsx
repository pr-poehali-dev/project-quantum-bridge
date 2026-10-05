import Icon from "@/components/ui/icon"

const offices = [
  {
    id: "n-8-1",
    name: "The N 8/1",
    address: "Напрудный пер., д. 8, стр. 1",
    image: "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/files/c18824e2-cb70-49fe-80e9-20d8fb591294.jpg",
    href: "",
  },
  {
    id: "m-247",
    name: "M 24/7",
    address: "ул. Мясницкая, 24/7",
    image: "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/dfbfd954-0200-415a-954e-f752b01b10df.png",
    href: "https://m-247.ru/",
  },
  {
    id: "av-11",
    name: "AV 11",
    address: "Автозаводская, 11",
    image: "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/53051124-97e3-4f9a-bf03-7c6e448cf56c.png",
    href: "https://av-11.ru/",
  },
]

export function MiniOffices() {
  return (
    <section id="mini-offices" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Мини-офисы</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight mb-4">
            3 проекта в формате мини-офисов
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Готовые к работе офисные пространства в центре Москвы — с дизайнерским ремонтом, переговорными и зоной отдыха.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((o) => {
            const content = (
              <>
                <div className="relative overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={o.image}
                    alt={o.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{o.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{o.address}</p>
                {o.href && (
                  <span className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 group-hover:border-foreground transition-colors">
                    Перейти на сайт объекта
                    <Icon name="ArrowUpRight" size={16} />
                  </span>
                )}
              </>
            )

            return o.href ? (
              <a key={o.id} href={o.href} target="_blank" rel="noopener noreferrer" className="group block">
                {content}
              </a>
            ) : (
              <div key={o.id} className="group block">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
