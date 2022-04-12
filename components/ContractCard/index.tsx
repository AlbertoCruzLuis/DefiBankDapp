import { forwardRef } from "react"
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi"

interface IContractCardProps {
  totalValueLocked: number,
  ref: any,
}

export const ContractCard = forwardRef<HTMLDivElement, IContractCardProps>(({ totalValueLocked }, ref) => {
  return (
    <div ref={ref} className="flex flex-col max-w-md gap-6 p-5 mx-auto tracking-wide bg-black border rounded-md shadow-2xl xs:rotate-0 -rotate-2 border-neutral-600 font-audiowide">
      <div className="flex justify-between">
        <span className="text-white ">CONTRACT</span>
        <span className="text-white ">TVL {totalValueLocked} ETH</span>
      </div>
      <div>
        <label className="block mb-2 text-xs font-bold text-neutral-600">
            Deposit Balance
        </label>
        <div className="grid grid-cols-3 gap-4">
          <input
            className="col-span-1 px-4 py-3 text-white rounded outline-none appearance-none placeholder:text-white bg-neutral-600 focus:bg-neutral-500"
            type="number"
            placeholder="0.0" />
          <button className="flex items-center justify-center col-span-2 gap-2 p-2 px-4 transition-all bg-green-500 rounded-md hover:scale-105">
            <span className="font-semibold">Deposit ETH</span>
            <FiPlusSquare size="1.2rem" />
          </button>
        </div>
      </div>
      <div>
        <label className="block mb-2 text-xs font-bold text-neutral-600">
          Withdraw Balance
        </label>
        <div className="grid grid-cols-3 gap-4">
          <input
            className="col-span-1 px-4 py-3 text-white rounded outline-none appearance-none placeholder:text-white bg-neutral-600 focus:bg-neutral-500"
            type="number"
            placeholder="0.0" />
          <button className="flex items-center justify-center col-span-2 gap-2 p-2 px-4 transition-all bg-green-500 rounded-md hover:scale-105">
            <span className="font-semibold">Withdraw ETH</span>
            <FiMinusSquare size="1.2rem" />
          </button>
        </div>
      </div>
    </div>
  )
})

ContractCard.displayName = "ContractCard"
