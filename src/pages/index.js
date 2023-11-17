import React from 'react';
import Head from 'next/head';
import '../styles/style.css'; // Assuming style.css is in a styles directory at the root

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dialect - Language Translation Platform</title>
      </Head>
      <header>
        <h1>Revolutionize Language Learning with Dialect</h1>
        <p>Connect, Translate, and Empower Underserved Languages</p>
      </header>

      <section id="about">
        <h2>About Dialect</h2>
        <p>Dialect is a groundbreaking platform designed to bridge the gap between underrepresented languages and major linguistic communities...</p>
      </section>

      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>Join a global network of language contributors. Choose a language pair, contribute translations, and earn rewards...</p>
      </section>

      <section id="benefits-users">
        <h2>Benefits for Users</h2>
        <p>As a Dialect user, you're not just a translator; you're a language pioneer...</p>
      </section>

      <section id="benefits-businesses">
        <h2>Benefits for Businesses</h2>
        <p>Businesses can sponsor specific language pairs, creating unique opportunities for targeted translations...</p>
      </section>

      <section id="community">
        <h2>Community and Reputation System</h2>
        <p>Dialect isn't just a platform; it's a community. Earn badges, climb the leaderboard, and build your reputation as a top contributor...</p>
      </section>

      <footer>
        <button>Join the Dialect Community</button>
        <p>Start your linguistic journey today and help shape the future of language translation.</p>
      </footer>
    </div>
  )
}