const portraitImage = 'https://www.figma.com/api/mcp/asset/2c9a0527-2386-45f7-8076-89d541e9088b'

const atWorkStats = [
  '14 YEARS WORKING IN-HOUSE',
  '08 YEARS LEADING GLOBAL TEAMS',
  '05 SUCCESSFUL MAJOR REBRANDS',
  '01 COMPANY FROM STARTUP TO IPO',
]

const beyondWorkStats = [
  ['TIBLO', 'MAKER'],
  ['JORNADA MIMA', 'INVESTOR'],
  ['LOOM', 'INVESTOR'],
  ['ADP LIST', 'MENTOR'],
]

function App() {
  return (
    <main className="min-h-screen bg-[#FFF9F2] text-[#383631]">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 sm:py-8 lg:px-[56px] lg:py-[37px]">
        <span className="text-base font-extrabold uppercase leading-none tracking-[0] sm:text-lg lg:text-[22px]">
          lemgruber
        </span>
      </header>

      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-8 pt-3 sm:gap-10 sm:px-8 sm:pb-10 sm:pt-4 lg:gap-[75px] lg:px-[30px] lg:pb-[30px] lg:pt-[60px]">
        <h1 className="max-w-[18ch] text-[42px] font-normal leading-[1] tracking-[0] sm:max-w-[20ch] sm:text-[56px] lg:max-w-none lg:text-[69px]">
          Strategic brand and content leader scaling B2B companies, from startup to IPO.
        </h1>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-start md:gap-x-8 md:gap-y-10 lg:grid-cols-[1fr_480px_1fr] lg:gap-10">
          <article className="flex h-full flex-col justify-between md:order-1">
            <div className="space-y-5 text-[22px] font-normal leading-[1.3] tracking-[0] sm:space-y-6 sm:text-[24px] lg:space-y-[30px] lg:text-[22px]">
              <h2 className="text-[22px] uppercase leading-[1] tracking-[0]">AT WORK</h2>
              <p className="font-normal leading-[1.3] tracking-[0]">
                I&apos;m an in-house brand leader, with focus on bringing together
                creative, strategy and content at B2B SaaS companies, from startup to IPO.
              </p>
            </div>
            <ul className="mt-8 sm:mt-10 lg:mt-12">
              {atWorkStats.map((item) => (
                <li
                  key={item}
                  className="border-t border-[#B8B3AC] py-[8px] text-[15px] uppercase leading-[1] tracking-[0] sm:text-[17px] lg:py-[7px] lg:text-[17px]"
                >
                  {item}
                </li>
              ))}
              <li className="border-t border-[#B8B3AC]" />
            </ul>
          </article>

          <div className="mx-auto w-full max-w-[560px] md:order-3 md:col-span-2 md:max-w-none lg:order-2 lg:col-span-1 lg:max-w-[480px]">
            <img
              src={portraitImage}
              alt="Portrait of lemgruber"
              className="h-[460px] w-full object-cover object-center sm:h-[620px] md:h-[700px] lg:h-[708px]"
            />
          </div>

          <article className="flex h-full flex-col justify-between md:order-2 lg:order-3">
            <div className="space-y-5 text-[22px] font-normal leading-[1.3] tracking-[0] sm:space-y-6 sm:text-[24px] lg:space-y-[30px] lg:text-[22px]">
              <h2 className="text-[22px] uppercase leading-[1] tracking-[0]">BEYOND WORK</h2>
              <p className="font-normal leading-[1.3] tracking-[0]">
                I&apos;m a dad, mentor, immigrant, collector of magazines, enthusiastic home
                fermenter and always working on a side project.
              </p>
            </div>
            <ul className="mt-8 sm:mt-10 lg:mt-12">
              {beyondWorkStats.map(([name, role]) => (
                <li
                  key={name}
                  className="flex items-center justify-between border-t border-[#B8B3AC] py-[8px] uppercase lg:py-[7px]"
                >
                  <span className="text-[15px] leading-[1] tracking-[0] sm:text-[17px] lg:text-[17px]">{name}</span>
                  <span className="text-[11px] leading-[1] tracking-[0] sm:text-[12px] lg:text-[12px]">{role}</span>
                </li>
              ))}
              <li className="border-t border-[#B8B3AC]" />
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
