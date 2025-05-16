import Perks from "@/app/ai_caller/components/marketing/perks";
  import { Spotlight } from "@/app/ai_caller/components/global/spotlight";
  import Background from "@/app/ai_caller/components/global/background";
  import  Wrapper from "@/app/ai_caller/components/global/wrapper";
import Hero from "@/app/ai_caller/components/marketing/hero";
import Container from "@/app/ai_caller/components/global/container";
// import CTA from "./components/marketing/cta";
// import { Grid } from "./components/global/Grid";
import MagicBadge from "../ai_caller/components/main/magic-badge"; //
import  AnimationContainer  from "../ai_caller/components/main/animation-container"; //
import { BentoCard, CARDS } from "../ai_caller/components/main/bento-grid"; //
import {BentoGrid} from "@/app/ai_caller/components/main/bento-grid"; 
import MaxWidthWrapper from "@/app/ai_caller/components/main/max-width-wrapper";
import Pricing from "@/components/marketing/pricing";
import Services from "../ai_caller/components/Services"; //
// import { LampDemo } from "../ai_caller/components/lampdemo";
import {LampDemo} from "../ai_caller/components/main/Lampdemo"; //

// Removed duplicate import of Container from postcss

const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
                {/* <Grid /> */}

                <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                        <MagicBadge title="Features" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium  text-foreground mt-6">
                            Manage Links Like a Pro
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Linkify is a powerful link management tool that helps you shorten, track, and organize all your links in one place.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

<Services />
            
<Pricing />

<LampDemo />


                {/* <Container className="py-8 lg:py-20" children={undefined}> */}
                    {/* <Companies /> */}
                {/* </Container> */}
                {/* <Connect /> */}
                {/* <Features /> */}
                <Perks />
                {/* <Pricing /> */}
                {/* <Reviews /> */}
                {/* <CTA /> */}
            </Wrapper>
        </Background>
    )
};

export default HomePage
