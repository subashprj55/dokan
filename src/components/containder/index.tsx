import { IContainerProps } from './types'

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="2xl:flex justify-center">
      <div className="px-[2%] md:px-[5%] max-w-[1440px;]">{children}</div>
    </div>
  )
}

export default Container
