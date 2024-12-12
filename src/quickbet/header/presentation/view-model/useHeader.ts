'use client'

import { auth } from '@/firebase/config'
import useAppStore from '@/stores/useAppStore'
import { useDisclosure } from '@nextui-org/react'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

export default function useHeader() {
  const { onOpen, onOpenChange, isOpen } = useDisclosure()
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth)
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const logIn = useAppStore((state) => state.logIn)
  const logOut = useAppStore((state) => state.logOut)
  const loggedUser = useAppStore((state) => state.loggedUser)

  const handleSubmitSignUp: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    if (!email || !password) return
    try {
      const res = await createUserWithEmailAndPassword(email, password)
      if (res) {
        logIn(res.user)
        onOpenChange()
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  const handleSubmitLogIn: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    if (!email || !password) return
    try {
      const res = await signInWithEmailAndPassword(email, password)
      if (res) {
        logIn(res.user)
        onOpenChange()
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
  return {
    handleSubmitLogIn,
    handleSubmitSignUp,
    onOpen,
    onOpenChange,
    logOut,
    loggedUser,
    isOpen
  }
}
