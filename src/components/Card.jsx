import React from 'react'

const Card = (props) => {
    let datas = props.data;
    console.log(datas)
  return (
    <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {datas.map((item, id) => (
      <a target='blank'
        key={id}
        className="group relative aspect-3/4 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
      >
        <img
          src={item.download_url}
          
          alt={item.author}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-0 w-full bg-black/30 backdrop-blur-md p-3">
          <p className="text-white text-sm">{item.author}</p>
        </div>
      </a>
    ))}
  </div>
</div>

  )
}

export default Card
