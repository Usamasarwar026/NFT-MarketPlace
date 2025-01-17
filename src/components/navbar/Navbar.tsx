
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { AiOutlineUser } from "react-icons/ai";
import { IMAGES } from '../../constant/images'


const navigation= [
    { name: 'Marketplace', href: 'marketplace', current: true },
    { name: 'Ranking', href: 'ranking', current: false },
    { name: 'Connect a Wallet', href: 'connectwallet', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {/* <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" /> */}
                            <img src={IMAGES.MENUICON} alt="" aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                        <div className="flex shrink-0 items-center">

                            <Link to={"/"}>
                            <img
                                alt="Your Company"
                                src={IMAGES.LOGO}
                                className="h-8 w-auto"
                            />
                            </Link>
                        </div>
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? ' text-white  hover:bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <Button href='/signup'  title="Sign Up" icon={<AiOutlineUser size={20} />} className='text-white bg-primary rounded-[10px]' />
                            </div> 
                        </div>
                    </div>

                </div>
            </div>

            <DisclosurePanel className="lg:hidden">

                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? ' text-white  hover:bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )
                        }
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    <Button href='/signup' title="Sign Up"  icon={<AiOutlineUser size={20}/>} className='text-white bg-primary rounded-[10px]'/>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}