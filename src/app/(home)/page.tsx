import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-28'>
        <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
        <p className='uwu-hidden text-5xl font-display lg:text-6xl self-center flex font-semibold leading-snug text-primary dark:text-primary-dark'>React</p>
        <p className='text-4xl font-display max-w-lg md:max-w-full py-1 text-center text-secondary dark:text-primary-dark leading-snug self-center'>Библиотека для веб и нативных пользовательских интерфейсов</p>
      </div>
      <div className="flex flex-col justify-center text-center flex-1">
        <h1 className="text-2xl font-bold mb-4">React Documentation</h1>
        <p>
          Вы можете открыть{' '}
          <Link href="/docs" className="font-medium underline">
            /docs
          </Link>{' '}
          и ознакомиться с документацией.
        </p>
      </div>
    </>
  );
}
