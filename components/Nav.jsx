"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { darkTheme, lightTheme } from "@/utils/theme";
import { useTheme } from 'styled-components'

const Nav = ({ toggleTheme }) => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const theme = useTheme()

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3 relative'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className={theme.tag === 'light' ? `logo_text text-black`:'logo_text text-white'}>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className={theme.tag === 'light' ? 'black_btn border-black bg-black text-white transition-all hover:bg-white hover:text-black ': 'black_btn border-white bg-white text-black transition-all hover:bg-black hover:text-white '}>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className={theme.tag === 'light' ? 'outline_btn border-black bg-transparent text-black hover:bg-black hover:text-white': 'outline_btn border-white text-white hover:bg-white hover:text-black' }>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className={theme.tag === 'light' ? 'black_btn border-black bg-black text-white transition-all hover:bg-white hover:text-black ': 'black_btn border-white bg-white text-black transition-all hover:bg-black hover:text-white '}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full border border-solid border-white'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
      <div className="absolute bottom-[-125%] right-0 py-2 w-10 bg-primary-orange rounded-lg flex justify-evenly items-center flex-col">
        {
          theme.tag === 'light' ?

            <Image
              src='/assets/theme/dark.svg'
              alt='logo'
              width={30}
              height={30}
              className='object-contain cursor-pointer'
              onClick={() => toggleTheme(darkTheme)}
            /> :
            <Image
              src='/assets/theme/light.svg'
              alt='logo'
              width={30}
              height={30}
              className='object-contain cursor-pointer'
              onClick={() => toggleTheme(lightTheme)}
            />

        }
      </div>
    </nav>
  );
};

export default Nav;
