import React, { FC } from 'react'

const Catalog: FC<{ params: { slug: string } }> = ({ params }: any) => {



  return (
    <div>
      <div>
        {params.slug}
      </div>
    </div>
  )
}

export default Catalog;