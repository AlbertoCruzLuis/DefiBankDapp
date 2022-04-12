import { ContractCard } from "components/ContractCard"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRef } from "react"
import { BsArrowUpRight } from "react-icons/bs"

const Home: NextPage = () => {
  const contractCardRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const focusContractCard = () => {
    console.log(contractCardRef.current)
    if (contractCardRef.current) {
      contractCardRef.current.style.transform = "scale(1.05)"
      contractCardRef.current.style.transition = "transform 0.6s ease-in-out"
      contractCardRef.current.style.transition = "border 0.3s ease-in-out"
      contractCardRef.current.style.border = "2px solid #fff"

      setTimeout(() => {
        const borderNeutral600 = "#525252"
        contractCardRef.current.style.transform = "scale(1)"
        contractCardRef.current.style.border = `1px solid ${borderNeutral600}`
      }, 300)
    }
  }

  return (
    <>
      <Head>
        <title>Defi Bank</title>
      </Head>
      <hr className="border-neutral-600/50" />
      <div className="relative grid h-full grid-cols-2 gap-10 p-4 py-32 my-auto border-b xl:px-8 xs:grid-cols-1 border-neutral-600/50">
        <div className="z-10 flex flex-col gap-8">
          <h1 className="flex flex-col gap-4 font-semibold text-7xl sm:text-6xl xs:text-6xl">
            <span className="text-white">Start</span>
            <div>
              <span className="text-white">use</span>
              <span className="text-green-500"> Defi</span>
            </div>
            <div>
              <span className="text-green-500">Bank</span>
              <span className="text-white"> Dapp</span>
            </div>
          </h1>
          <p className="text-gray-300">Explore the crypto world. Save your money in Defi Bank</p>
          <button className="flex items-center gap-2 p-2 px-4 transition-all bg-green-500 rounded-md max-w-max hover:scale-105" onClick={focusContractCard}>
            <span className="font-semibold">{"Let's Get Started"}</span>
            <BsArrowUpRight className="" />
          </button>
        </div>
        <div className="z-10">
          <ContractCard ref={contractCardRef} totalValueLocked={0} />
        </div>
        <div className="absolute bottom-0 w-[100%] h-[25rem]">
          <Image
            src="/images/PerspectiveGrid.svg"
            layout="fill"
            objectFit="cover" />
        </div>
        <div className="absolute right-0 bottom-0 bg-gradient-to-l from-green-600/10 to-neutral-900/10 w-[50%] h-screen">
        </div>
      </div>
    </>
  )
}

export default Home
