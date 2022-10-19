import Link from 'next/link'
import { Switch, useTheme } from '@nextui-org/react'

// const LogoBox = styled.span`
//   font-weight: bold;
//   font-size: 18px;
//   display: inline-flex;
//   align-items: center;
//   height: 30px;
//   line-height: 20px;
//   padding: 10px;
//   img {
//     transition: 200ms ease;
//   }
//   &:hover img {
//     transform: rotate(20deg);
//   }
// `
const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <div>
        <span className="font-bold inline-flex items-center h-8 leading-5 p-3 ">
          <h3 className="dark:text-purple text-gray-500 hover:text-purple-600 ease-in duration-200">
            Mohammed Sameer
          </h3>
        </span>
      </div>
    </Link>
  )
}

export default Logo
