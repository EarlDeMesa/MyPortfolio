import React from "react";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <main className='max-w-4xl mx-auto px-6 py-16'>
      <SectionHeader title='About Me' />

      <section className='text-primaryText text-lg leading-relaxed space-y-6'>
        <p>
          Hi there! I dont really see myself as a coder in the usual sense, but
          I enjoy learning new programming languages and tools. Some parts feel
          familiar while others are compltely new. When I first started, it was
          all just plain HTML, CSS and Javascript, no frameworks or anything
          fancy.
        </p>
        <p>
          Now I’m relearning coding and trying out different frameworks. It’s a
          mix of old and new that keeps things interesting and sometimes a
          little confusing.
        </p>
        <p>
          I don’t plan to follow the typical coding career path. I’m more drawn
          to the technical side of networking and system infrastructure, which
          feels like a better fit for me.
        </p>
        <p>
          When I’m free, I like to hang out in cozy coffee shops, play
          basketball with friends and family, play video games, and dive into my
          hobby of creating story concepts and ideas. I find inspiration in
          little things that catch my attention.
        </p>
        <p>
          I believe in keeping things simple. That’s the way I like to work and
          live.
        </p>
      </section>
    </main>
  );
}
