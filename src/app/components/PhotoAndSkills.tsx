import profilePicture from '../assets/fotoperfilatual.png'
import matrixGif from '../assets/matrixbluebackground.gif'

export const PhotoAndSkills = () => {
    const currentLang = localStorage.getItem('LangContextKey')

    return (
        <div className="p-2 w-2/5 max-laptop:w-full flex flex-col-reverse max-laptop:flex-col justify-evenly gap-3 items-center border-2 overflow-auto border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200">

            <div className='hidden max-laptop:flex text-xl font-bold text-center'>
                <p>{currentLang === 'us-en' ? `Hello! Welcome to my website!` : 'Olá! Sejam bem-vindos ao meu site!'}</p>
            </div>

            <hr className='hidden max-laptop:flex w-full border border-slate-700 dark:border-slate-300' />

            <div className='relative text-center'>
                <img alt="Foto perfil Jeffs" src={matrixGif.src} className='size-96 max-laptop:size-72 object-cover rounded-md object-[10%_30%] blur-[2px]'/>
                <img alt="Foto perfil Jeffs" src={profilePicture.src} className='size-96 max-laptop:size-72 object-cover rounded-md object-[10%_30%] absolute top-0 blur-[0.5px]'/>
            </div>

            <hr className='w-full border border-slate-700 dark:border-slate-300' />

            <div className='flex text-xl font-bold text-center'>
                <p>{currentLang === 'us-en' ? `Web Developer | JavaScript and Typescript | React | Node` : 'Desenvolvedor Web | JavaScript e Typescript | React | Node'}</p>
            </div>

        </div>
    )
}