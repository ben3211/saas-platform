import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
   <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex-col items-center justify-center text-center'>
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-grey-200 bg-white px-7 py-2 shadow-md background-blur transtion-all hover:border-grey-300 hover:bg-white/50'>
      </div>
   </MaxWidthWrapper>
  )
}
