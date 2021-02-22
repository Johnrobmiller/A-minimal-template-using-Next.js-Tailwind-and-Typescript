import Head from 'next/head'

type deleteThisType = 'testing typescript to make sure it is working'
const deleteThisString: deleteThisType = 'testing typescript to make sure it is working'

export default function Home() {
  return (
    <div>
      <h1 className=' bg-blue-300'>Home</h1>
      <p>{deleteThisString}</p>
    </div>
  )
}
