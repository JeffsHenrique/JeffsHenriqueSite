import profilePicture from '../assets/fotoperfilatual.png'
import matrixGif from '../assets/matrixbluebackground.gif'

export const PhotoAndSkills = () => {
    return (
        <div className="p-2 w-2/5 flex flex-col justify-evenly gap-3 items-center border-2 overflow-auto border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200">
            <div className='text-xl font-bold text-center'>
                <p>Desenvolvedor Web | JavaScript e Typescript | React | Node</p>
            </div>

            <hr className='w-full border border-slate-700 dark:border-slate-300' />

            <div className='relative text-center'>
                <img alt="Foto perfil Jeffs" src={matrixGif.src} className='size-96 object-cover rounded-md object-[10%_30%] blur-[2px]'/>
                <img alt="Foto perfil Jeffs" src={profilePicture.src} className='size-96 object-cover rounded-md object-[10%_30%] absolute top-0 blur-[0.5px]'/>
            </div>

        </div>
    )
}