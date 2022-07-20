import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Buyceps.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-top">
        <Image src="/bg.jpg" width="1600" height="600" />
      </div>
      <div className="main-middle">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-pink-400">What we diliver</h1>
                <div className="h-1 w-20 bg-indigo-900 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>

            <div className="flex flex-wrap -m-4">
              <Link href={'/plates'}>
                <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <img className="h-60 rounded w-full object-cover object-center mb-6" src="/5kgplate.jpg" alt="content" />
                    <h2 className="text-lg text-pink-400 font-medium title-font mb-4 ">Plates</h2>
                    <p className="leading-relaxed text-base text-gray-400">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              </Link>

              <Link href={'/benches'}>
                <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <img className="h-60 rounded w-full object-cover object-center mb-6" src="/gymbench.jpg" alt="content" />
                    <h2 className="text-lg text-pink-400 font-medium title-font mb-4 ">Benches</h2>
                    <p className="leading-relaxed text-base text-gray-400">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              </Link>

              <Link href={'/machines'}>
                <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <img className="h-60 rounded w-full object-cover object-center mb-6" src="/latpulldown.jpg" alt="content" />
                    <h2 className="text-lg text-pink-400 font-medium title-font mb-4 ">Machines</h2>
                    <p className="leading-relaxed text-base text-gray-400">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              </Link>

              <Link href={'/dumbells'}>
                <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <img className="h-60 rounded w-full object-cover object-center mb-6" src="/5kgdumbell.jpg" alt="content" />
                    <h2 className="text-lg text-pink-400 font-medium title-font mb-4 ">Dumbells</h2>
                    <p className="leading-relaxed text-base text-gray-400">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}