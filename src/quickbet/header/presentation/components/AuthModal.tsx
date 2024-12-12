import { DefatultButton } from '@/common/utils/UtilsTsx'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Tab,
  Tabs
} from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface AuthModalProps {
  isOpen: boolean
  onOpenChange: () => void
  handleSubmitLogIn: (e: React.FormEvent<HTMLFormElement>) => void
  handleSubmitSignUp: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function AuthModal({ isOpen, onOpenChange, handleSubmitLogIn, handleSubmitSignUp }: AuthModalProps) {

  return (
    <Modal
      aria-label="Auth Modal"
      backdrop="transparent"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='top'
    >
      <ModalContent className=" bg-transparent backdrop-blur-xl border border-primary-light md:max-w-[700px]">
        {() => (
          <>
            <ModalBody className="text-white">
              <div className='flex md:gap-10 gap-4'>
                <div className='flex px-10 flex-col items-center justify-center'>
                  <Tabs aria-label="Options" fullWidth
                    classNames={{
                      tabList: "bg-primary-dark rounded-l-lg p-0",
                      cursor: "w-full bg-yellow-variant",
                      tabContent: "group-data-[selected=true]:text-[#ffffff]",
                    }}
                  >
                    <Tab key="signup" title="Sign Up">
                      <div className='mt-20'>
                        <form className='dark flex flex-col gap-2' onSubmit={handleSubmitSignUp}>
                          <Input name='email' label="Email" type="email" errorMessage="Please enter a valid email" />
                          <Input name='password' label="Password" type="password" />
                          <DefatultButton type='submit' text='Sign Up' className=' w-full py-2 px-3 md:px-10' />
                        </form>
                      </div>
                    </Tab>
                    <Tab key="login" title="Log in">
                      <div className='mt-20'>
                        <form className='dark flex flex-col gap-2' onSubmit={handleSubmitLogIn}>
                          <Input name='email' label="Email" type="email" errorMessage="Please enter a valid email" />
                          <Input name='password' label="Password" type="password" />
                          <DefatultButton type='submit' text='Log In' className=' w-full py-2 px-3 md:px-10' />
                        </form>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
                <div className=' bg-primary-dark rounded-r-lg p-2 flex flex-col justify-center items-center'>
                  <h2 className='text-center text-base md:text-xl font-bold mb-2'>Welcome to Quickbet Movies!</h2>
                  <p className='text-center text-xs md:text-sm mb-4'>
                    Ready to unlock a universe of cinematic delights? Sign up now!
                  </p>
                  <Image
                    src="/assets/sing.png"
                    alt="Auth Modal"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
