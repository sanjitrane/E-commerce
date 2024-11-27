/***Individual Product view */

const Product = (data:any)=>{
  return(
    <div className="w-60 p-3 bg-white rounded-md border-slate-700 shadow-md hover:shadow-lg">
      <img 
      className="size-15 bg-gray-800" 
      src={data.thumbnail} 
      loading="lazy" 
      width='214px'
      height='214px'
      alt={data.title}/>
      <div className="mt-2">
        <p className="text-lg font-bold text-gray-900 line-clamp-1">{data.title}</p>
        <p className="text-sm text-gray-500 text-wrap line-clamp-3">{data.description}</p>
      </div>
    </div>
  )
}

export default Product;