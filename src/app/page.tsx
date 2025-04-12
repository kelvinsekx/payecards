import CollapsibleSection from "@/components/CollapsibleSection";
import { UserTimeInfo } from "@/components/UserTimeInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="md:w-5/7 px-5 md:px-0 mx-auto">
        <header className="my-8 space-y-0">
          <h1 className="text-4xl leading-12 font-black text-[#222] tracking-wide">
            Kelvinsekx&apos;s Portfolio
          </h1>
          <p className="font-medium text-base text-gray-600 tracking-tight">
            My government name is Ukuejubola Kelvin Oritsetimeyin.
          </p>
          <ul className="flex gap-2 tracking-tighter">
            <li>
              <a
                className="underline text-sm"
                href="https://github.com/kelvinsekx"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="underline text-sm"
                href="https://linkedin.com/in/kelvinsekx"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a className="underline text-sm" href="https://x.com/kelvinsekx">
                Twitter
              </a>
            </li>
          </ul>
        </header>
        {/* <nav>
          <ul className="flex gap-4 my-8">
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li>
              <a>Resume</a>
            </li>
          </ul>
        </nav> */}
        <main>
          <p className="text-3xl font-semibold my-4">Hi, Hassan & Charles </p>
          <p>Thank you for the opportunity to serve Payecards.</p>

          <CollapsibleSection header="Who am I?">
            <>
              <p>
                I am Kelvin, but mostly known as Kelvinsekx. I reside in Ibadan,
                Nigeria. And yes, I know you were like hoo! I never heard of
                that place, it must be one very far town in the middle of no
                where in Nigeria. Fun fact is{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Ibadan"
                  className="hover:underline"
                >
                  <span>
                    Ibadan is the largest city in West Africa and one of the
                    neighboring states to the very popular, Lagos
                  </span>
                  <span className="text-black font-semibold"> #</span>
                </a>
                .
              </p>
              <p>
                I know what you must have think next! Hmmmm, there is a huge
                timezone difference. Actually, I understand. It is not bad. Let
                me show you.
              </p>
              <UserTimeInfo />
              <p>
                I am interested in this role because I&apos;ve heard so much
                about this job posting that I had to apply since this sounds
                like a dream job and a once in a lifetime opportunity. Also, I
                look forward to learning and advancing my career around crypto
                and money in general.{" "}
                <b>
                  Money should indeed solve problems and not create extra
                  problems,{" "}
                </b>
                and what better way than to be among the solutions. That being
                said, let&apos;s get to my story and why I think we are are a
                great fit for each other.
              </p>
              <div className="h-52 w-full rounded-2xl relative overflow-hidden">
                <Image
                  src={"/images/IMG_9781.jpg"}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
            </>
          </CollapsibleSection>
          <CollapsibleSection header="My Story">
            <>
              <p>I am a 27 year old living in Ibadan, Nigeria with my mum. </p>
              <p>
                For my title, I am a software engineer & product manager.
                Sometimes it is just difficult to box my specific role to being
                a developer only or product manager only. As I have led senior
                positions both as an engineer and manager. Plus I actively still
                do both.
              </p>
              <p>
                I started my programming journey around 2019 when I was learning
                HTML, CSS and PHP. I would usually meet my old friend Tayo, who
                is now a senior mobile engineer at Kuda - one of the biggest
                Neobanks in Africa. After that I moved on to learning javascript
                and node which helped me fall in love with React at that time.
              </p>
              <p>
                Between 2019 and 2021, I worked majorly as an independent
                developer where I did a couple of freelance work for OlaOla
                Foods, Sharpview Optometric clinic among others before working
                at a friend&apos;s startup as a frontend developer.
              </p>
              <p>
                In 2020, I founded Ibadan Techies Club with the help of my
                mentor, Jason Palmer, where I went on to raise over $10K and
                held dozens of physical meetups between 2022 and 2024. There I
                was able to gather Jason, IJe, Mark and Zakk to raise funds and
                shape the future of Tech in Ibadan.
              </p>

              <div className="h-62 w-full rounded-2xl relative overflow-hidden">
                <Image
                  src={"/images/IMG_9925.jpg"}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <p>
                I have gone on to work with{" "}
                <b className="text-black tracking-tight underline">
                  Wigxel as Frontend Developer
                </b>{" "}
                before bagging an additional title of Quality Assurance,{" "}
                <b className="text-black tracking-tight underline">
                  Sproutly as a Senior Frontend Developer
                </b>
                ,{" "}
                <b className="text-black tracking-tight underline">
                  and presently at Liinae as a Technical Product Manager
                </b>
                .
              </p>
            </>
          </CollapsibleSection>
          <CollapsibleSection header="Why me?">
            <>
              <p>
                I am an hustler, entrepreneral and have a great eye for details.
                In short, I do not stop until it comes out best. I believe
                everything worth doing is worth doing well. I put so much effort
                into my craft, experience and code.
              </p>

              <p>
                I believe code is to help make our lives easier and should be
                humans first.
              </p>
              {/* <Testimony /> */}

              <section>
                <header className="font-semibold">React</header>
                <p>
                  I have over 5 years experience dabbling with React
                  professionally. From the days of Gatsby and pre-overhaul of
                  Next. I have written a lot of react.
                </p>
              </section>
              <section>
                <header className="font-semibold">Vue</header>
                <p>
                  I joined Sproutly in 2024. And my single responsibility was to
                  take their MVP at 40% to 100% completion in 3 months. You know
                  what I did? I did it in 6 weeks. I led a team of another 2 vue
                  engineers shaping and redefinig how they work.
                </p>
              </section>
              <section>
                <header className="font-semibold">
                  Engineering Management
                </header>
                Same 2024, I was given the opportunity to lead a team of 5
                engineers and designers at Liinae. It is my biggest project yet
                and I am proud of it. I was able to lead the team to build a
                product from development to launch, I was tasked to motivate,
                review and establish standards.
              </section>
              <section>
                <header className="font-semibold">Product Management</header>
                <p>
                  At liinae, my role was not limited to managing the engineers.
                  I was tasked to manage budgeted, firing and employing, define
                  the user experience and user research side by side the
                  designers and manage the entire relationships between
                  founders, engineering team and users.
                </p>
              </section>
              <section>
                <header className="font-semibold">Community</header>
                <p>
                  I founded the first formidable community out of Ibadan. Led
                  rounds of raises, 5+ directors and backers all over the globe.
                </p>
              </section>
              <section>
                <header className="font-semibold">Soft skills</header>
                <p>
                  I am an excellent communicator and have a great eye for
                  details.
                </p>
              </section>
            </>
          </CollapsibleSection>
          <div className="w-full h-[0.5px] bg-[#666] my-10"></div>
          <p className="mb-10">
            There is a lot more I would love to talk about, but I hope I already
            convinced you enough to start a conversation. I am looking forward
            to your feedback!
          </p>
        </main>
        {/* <footer>
          <p>
            I did not get the idea from heavens. This portfolio is built on the
            amazing one from{" "}
            <a href="https://robin-malfait-tailwind-job-application.vercel.app/">
              Robin Malfait
            </a>
            . If you are a developer, I heavily preach using mine as a template
            too.
          </p>
        </footer> */}
      </div>
    </div>
  );
}
