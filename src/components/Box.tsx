import { ReactElement } from 'react'
import '../styles/Box.scss'
import { IBox } from 'interfaces/types'

const Box = (props: IBox):ReactElement => {
  const {title} = props
  return (
    <div className='box-container'>
      <div>{title}</div>
    </div>
  )
}

export default Box
