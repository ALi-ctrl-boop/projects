export const Profile = () => {
	return (
		<div className='w-full flex flex-col items-center'>
			<div className='w-[1440px] mt-6 flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<img
						src='https://thumbs.dfs.ivi.ru/storage37/contents/1/6/a20db263fdd78934e37305f302c62a.png/50x50/?q=85'
						alt='profile'
						className='w-24 h-24 rounded-2xl'
					/>
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
