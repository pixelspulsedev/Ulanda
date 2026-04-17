import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { HeroText, FadeInWhenVisible } from '../components/animations';
import ConsultationCTA from '../components/ConsultationCTA';

const manifestoSections = [
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> women deserve
          more than correction.
        </h1>
        {/* <br /> */}
        They deserve regeneration.
        <br />
        The kind that rebuilds, replenishes, and restores from the inside out.
        <br />
        Because ageing is not a decline,
        <br />
        It is a biological rhythm, a hormonal evolution, a new chapter of
        identity.
        <br />
        And it deserves to be honoured with science, compassion and precision.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> beauty should
          never erase who you are.
        </h1>
        {/* <br /> */}
        Not frozen.
        <br />
        Not filled to disguise.
        <br />
        Not sculpted into someone else’s ideal.
        <br />
        Instead, we choose a different path, one where your natural contours, your expression, your identity
        <br />
        remain beautifully, unmistakably yours.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> in treating
          the cause, not the symptom.
        </h1>
        {/* <br /> */}
        In supporting collagen, not replacing it.
        <br />
        In nurturing the skin barrier, not stripping it.
        <br />
        In balancing hormones, not ignoring them.
        <br />
        In strengthening cellular health, not masking decline.
        <br />
        This is <Link to="/treatments/skin-renewal-regeneration" className="text-primary font-bold hover:underline inline-flex items-center gap-0.5">regenerative aesthetics <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg></Link>,
        <br />
        the future of women’s ageing.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> midlife is a
          woman’s most powerful era.
        </h1>
        {/* <br /> */}
        Not something to “fix,”
        <br />
        but something to elevate.
        <br />
        Perimenopause and menopause are not interruptions,
        <br />
        they are transformations.
        <br />
        We support this transition with science-backed care
        <br />
        that respects biology and restores vitality.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> wellness and
          aesthetics are inseparable.
        </h1>
        {/* <br /> */}
        Skin reflects hormones.
        <br />
        Hormones reflect lifestyle.
        <br />
        Lifestyle shapes longevity.
        <br />
        Everything is connected.
        <br />
        So our model is too.
        <br />
        Refresh. Renew. Restore. Radiate.
        <br />A complete ecosystem honouring every layer of a woman’s biology.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span>{' '}
          personalisation is the highest form of care.
        </h1>
        {/* <br /> */}
        No two women age the same.
        <br />
        No two collagen pathways respond the same.
        <br />
        No hormone profile mirrors another.
        <br />
        So your treatment plan shouldn’t either.
        <br />
        Every ULANDA experience is crafted —
        <br />
        with intention, precision, and deep clinical understanding.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> safety and
          artistry must coexist.
        </h1>
        Not one or the other — both. Our work is medical and aesthetic.
        Scientific and intuitive. Clinical and beautiful. We deliver results
        that feel effortless, honest and refined.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> a woman should
          never feel rushed, dismissed or unseen.
        </h1>
        {/* <br /> */}
        In our care, she feels:
        <br />
        Heard. Held. Supported. Empowered. Restored. This is what true women’s
        healthcare should feel like.
      </>
    ),
  },
  {
    text: (
      <>
        <h1 className="text-xl md:text-2xl font-serif">
          <span className="italic text-primary">We believe</span> confidence is
          not created in a syringe.
        </h1>
        {/* <br /> */}
        It is awakened when a woman recognises herself again,
        <br />
        in the mirror, in her skin, in her energy, in her life. Our role is not
        to change her. It is to bring her back to herself, regenerated,
        rebalanced, radiant.
      </>
    ),
  },
];

export default function Manifesto() {
  return (
    <>
      <Head>
        <title>Our Manifesto | ULANDA Skin Clinic Ware</title>
        <meta
          name="description"
          content="ULANDA Brand Manifesto. Where regeneration becomes a woman's birthright. We believe women deserve more than correction — they deserve regeneration."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/about/manifesto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Manifesto | ULANDA" />
        <meta name="twitter:description" content="Where regeneration becomes a woman's birthright. We believe women deserve more than correction — they deserve regeneration." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 text-base-content">
        {/* Hero */}
        <section className="max-w-6xl px-4 mx-auto py-8 space-y-6">
          {/* <div className="inline-block px-8 py-2 rounded-full border bg-secondary border-primary/30 text-primary text-sm font-bold tracking-wider mb-4 uppercase">
            Brand Manifesto
          </div> */}
          <HeroText>
            <h1 className="text-3xl md:text-4xl font-serif leading-tight">
              ULANDA —{' '}
              <span className="italic text-primary">The Brand Manifesto</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90 max-w-3xl">
              Where regeneration becomes a woman’s birthright.
            </p>
          </HeroText>
        </section>

        {/* Manifesto Body */}
        <section className="pb-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* <p className="text-primary italic font-serif text-xl text-center">Our beliefs</p> */}

            <div className="grid gap-6">
              {manifestoSections.map((section, idx) => (
                <FadeInWhenVisible key={idx}>
                  <article className="">
                    <p className="text-base md:text-lg font-sans font-light leading-relaxed text-base-content/90">
                      {section.text}
                    </p>
                  </article>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <FadeInWhenVisible>
              <p className="text-secondary italic font-serif text-3xl">ULANDA</p>
              <div className="space-y-2 font-light text-xl md:text-2xl font-sans leading-relaxed text-secondary">
                <p>Science-led care for women.</p>
                <p>Backed by research.</p>
                <p>Driven by results.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <HeroText className="text-3xl md:text-4xl font-serif leading-tight">
              Experience our <span className="font-light italic">clinical standard</span>
            </HeroText>
            <FadeInWhenVisible>
              <p className="text-base md:text-lg font-sans font-light text-base-content/90 leading-relaxed">
                Your journey starts with a personalised consultation.
              </p>
              <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white px-8 py-3 h-auto rounded-lg">
                Book Advanced Skin Health Consultation
              </a>
            </FadeInWhenVisible>
          </div>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}
