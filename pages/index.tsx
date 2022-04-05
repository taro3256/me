import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>me</title>
        <meta name="description" content="事業をまとめたページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <h1 className='title'>
          <a href="https://nextjs.org">ME.</a>
        </h1>

        <div className='grid'>
          <a href="/shacre" className='card'>
            <h2>SHA:CRE &rarr;</h2>
            <p>コーヒーとボードゲームが楽しめるカフェ。</p>
          </a>

          <a href="https://nextjs.org/learn" className='card'>
            <h2>HOGE &rarr;</h2>
            <p>AAAAAA</p>
          </a>

          <a href="#" className='card'>
            <h2>HUGA &rarr;</h2>
            <p>BBBBBBB</p>
          </a>

          <a href="#" className='card'>
            <h2>PIYO &rarr;</h2>
            <p>CCCCCC</p>
          </a>
        </div>
      </main>
      <style jsx>{`
        .container {
          padding: 0 2rem;
        }
        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }
        .code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 90%;
        }
        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 400px;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}
      </style>
    </div>
  )
}

export default Home
