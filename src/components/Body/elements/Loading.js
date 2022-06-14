import img from '../../../Img/pokeball2.png'
export function Loading() {
  return <div className=' w-40 h-40 '>
  <img src={img} alt="loading" className='animate-spin' />
    <p>
    </p>
  </div>;
}
