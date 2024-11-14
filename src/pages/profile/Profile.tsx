import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button/Button'
import { app } from '../../config/auth'

type IUsers = {
	email: string | null
}

export const Profile = () => {
	const [users, setUsers] = useState<IUsers | null>(null)
	const navigation = useNavigate()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(getAuth(app), user => {
			if (user) {
				setUsers({ email: user.email ?? '' })
			} else {
				setUsers(null)
				console.log('User  is signed out')
				navigation('/login')
			}
		})

		return () => unsubscribe()
	}, [navigation])

	const handleLogOut = () => {
		getAuth(app).signOut()
		setUsers(null)
		navigation('/login')
	}

	return (
		<div className='w-full flex flex-col items-center'>
			<div className='w-[1440px] mt-6 flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<img
						src='https://thumbs.dfs.ivi.ru/storage37/contents/1/6/a20db263fdd78934e37305f302c62a.png/50x50/?q=85'
						alt='profile'
						className='w-24 h-24 rounded-2xl'
					/>
					{users ? (
						<h2 className='text-white text-3xl font-bold'>{users?.email}</h2>
					) : (
						<h2 className='text-white text-xl font-bold'>
							Please sign in to see your information.
						</h2>
					)}
						<h2 className='text-white text-3xl font-bold'>Дима</h2>
				</div>
				<div>
					<Button variant='primary' onClick={handleLogOut}>
						LogOut
					</Button>
				</div>
			</div>
		</div>
	)
}
