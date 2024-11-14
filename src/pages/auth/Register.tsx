import { BiArrowFromRight } from 'react-icons/bi'
import { FaCircleQuestion } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Register = () => {
	return (
		<div
			className='w-full h-screen flex justify-center items-center'
			style={{
				backgroundImage:
					'url("https://yastatic.net/s3/passport-auth-customs/customs/_/db6fdac6.jpg")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className='w-[400px] bg-[#131317] rounded-lg p-6'>
				<div className='w-full flex flex-col items-center '>
					<div className='w-full flex items-center justify-between'>
						<button
							className='border-none bg-transparent cursor-pointer'
							onClick={() => navigation('/')}
						>
							<BiArrowFromRight color='white' size={30} />
						</button>
						<div className='flex items-center gap-2'>
							<img
								src='https://kinomore.netlify.app/logo.svg'
								alt='logo'
								className='w-10 h-10'
							/>
							<h3 className='text-white font-semibold'>Kinomore</h3>
						</div>
						<FaCircleQuestion color='white' size={30} />
					</div>
					<h2 className='w-3/5 text-center text-white font-bold text-xl mt-4'>
						register
					</h2>
				</div>
				<form className='w-full flex flex-col mt-4 gap-4'>
					<input
						type='email'
						placeholder='Enter your email'
						className='w-full py-4 px-4 bg-transparent border border-[#2D2D32] rounded-xl text-white font-bold placeholder:text-2xl outline-none'
					/>
					<input
						type='password'
						placeholder='Enter your password'
						className='w-full p-4 bg-transparent border border-[#2D2D32] rounded-xl text-white font-bold placeholder:text-2xl outline-none'
					/>
					<Link to={'/login'} className='text-white text-start'>
						Have an account?
					</Link>
					<button
						className='w-full text-black p-4 text-lg bg-white rounded-xl font-medium'
					>
						Continue
					</button>
				</form>
			</div>
		</div>
	)
}
