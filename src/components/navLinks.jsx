import React from 'react'
import { Link } from 'react-router-dom';
import { links } from './MyLinks';
const NavLinks = () => {
  return <>
  {
    links.map((link,index)=>{
        return (
          <div key={index}>
            <div className="px-3 text-left md:cursor-pointer group">
              <h1 className="py-7">{link.name}</h1>
              {link.submenu && (
                <div> 
                  <div className='absolute top-20 hidden group-hover:block hover:md:block'>
                    <div className='py-3'>
                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                    </div>
                    <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                        {link.sublinks.map((mysublinks)=>(
                            <div>
                                <h1 className='text-lg font-semibold'>{mysublinks.Head}</h1>
                                {mysublinks.sublink.map((slink)=>(
                                    <li className='text-sm text-gray-600 my-2.5'><Link to={slink.link} className='hover:text-blue-500'>{slink.name}</Link></li>
                                ))}
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

        {/* //   {Mobile menus} */}
        {/* <div>
            {link.sublinks.map((slinks)=>(
                <div>
                    <div>
                        <h1 className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slinks.Head}</h1>
                    <div>
                        {slinks.sublink.map((slink)=>(
                            <li className='py-3 pl-10'>
                                <Link to={slink.link}>{slink.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                    </div>
                </div>
            ))}
        </div> */}
          </div>
        );
    })
  }
  </>
}

export default NavLinks;
