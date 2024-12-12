'use client'

import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import useHeader from "./view-model/useHeader"
import AuthModal from "./components/AuthModal"

export default function Header() {
  const { ...props } = useHeader()
  return (
    <>
      <header className="text-white h-[63px]">
        <div className=" fixed bg-black z-50 w-full">
          <div className="flex justify-between items-center p-3 max-w-[1000px] mx-auto">
            <div className="flex items-center gap-10">
              <Image src={"/assets/logo.svg"} alt="logo" width={150} height={150} style={{ objectFit: 'cover' }} />
              <h2 className="hidden sm:block">Popular</h2>
              <h2 className="hidden sm:block">Favorites</h2>
            </div>
            {props.loggedUser ? (
              <button onClick={props.logOut} className="flex items-center gap-5">
                Log Out
                <FontAwesomeIcon icon={faCircleUser} size="xl" color="#f0b90b"/>
              </button>
            ) : (
              <button className="cursor-pointer" onClick={props.onOpen}>
                <FontAwesomeIcon icon={faCircleUser} size="xl" />
              </button>
            )}
          </div>
        </div>
      </header>
      <AuthModal {...props} />
    </>
  )
}
