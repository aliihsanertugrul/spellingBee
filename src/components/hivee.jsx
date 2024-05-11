import React from 'react'

const Hivee = () => {
  return (
    <div className='hive'>
        <div className='hive-cell center'>
            <button className='cell-letter'>a</button>
        </div>
        <div className='hive-cell outer -translate-x-3/4 -translate-y-2/4'>
            <button className='cell-letter'>b</button>
        </div>
        <div className='hive-cell outer -translate-x-3/4 -translate-y-2/4'>
            <button className='cell-letter'>c</button>
        </div>
    </div>
  )
}

export default Hivee