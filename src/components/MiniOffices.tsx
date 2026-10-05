import Icon from "@/components/ui/icon"

const offices = [
  {
    id: "n-8-1",
    name: "The N 8/1",
    address: "Напрудный пер., д. 8, стр. 1",
    image: "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/b41b72dc-63dc-44fd-ae13-d969cd999b3d.PNG",
    gallery: [
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/89641634-f8ff-47e0-a9ca-9bd70bbf56f4.PNG",
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/607984db-42e5-4ef8-b6f6-204661260447.PNG",
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/c0a2f60d-56e6-4677-a61a-65a64b1c6062.PNG",
    ],
    href: "https://6629556.ru/",
    facts: [
      { label: "Площади", value: "от 11,9 до 22,7 м²" },
      { label: "Стоимость", value: "от 390 000 ₽/м²" },
      { label: "Минимальный бюджет", value: "от 4,64 млн ₽" },
    ],
    tags: ["Первый этаж", "Дизайнерский ремонт"],
  },
  {
    id: "m-247",
    name: "M 24/7",
    address: "ул. Мясницкая, 24/7",
    image: "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/dfbfd954-0200-415a-954e-f752b01b10df.png",
    gallery: [
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/48b531e2-cc38-4cc3-b4e3-56ec1cef9b42.png",
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/ffddcf1a-0db0-422d-8403-1b45517720c3.png",
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/78c35587-514a-42b6-bde1-9c0ee3ba31b9.png",
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/9a86ceae-4f51-4b89-8e6c-b85cf17ae599.png",
      "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/c5d1fa4a-2c0e-46a9-b0af-e28533e16e9a.png",
    ],
    href: "https://m-247.ru/",
  },
  {
    id: "av-11",
    name: "AV 11",
    address: "Автозаводская, 11",
    image: "https://cdn.poehali.dev/projects/9ef5bfa7-758f-46fd-a1ac-3d14201f1976/bucket/3cc51e8d-b8a1-4c5a-a44a-a451aff786a8.png",
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
                {"gallery" in o && o.gallery && (
                  <div className={`grid gap-2 -mt-3 mb-5 ${o.gallery.length > 3 ? "grid-cols-5" : "grid-cols-3"}`}>
                    {o.gallery.map((url) => (
                      <img key={url} src={url} alt={o.name} className="w-full aspect-square object-cover" />
                    ))}
                  </div>
                )}
                <h3 className="text-xl font-medium mb-1">{o.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{o.address}</p>
                {"facts" in o && o.facts && (
                  <div className="mb-4 border-t border-border">
                    {o.facts.map((f) => (
                      <div key={f.label} className="flex justify-between gap-4 py-2 border-b border-border text-sm">
                        <span className="text-muted-foreground">{f.label}</span>
                        <span className="font-medium text-right">{f.value}</span>
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {o.tags.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-secondary text-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
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