export const Footer = () => {
    const currentLang = localStorage.getItem('LangContextKey')

    return (
        <footer className="p-2 flex justify-center items-center w-full max-laptop:text-sm min-h-14 bg-sky-900 dark:bg-slate-950 text-sky-200 text-center shadow-xl">
            <p>{currentLang === 'us-en' ? '©️ All rights reserved to ' : '©️ Todos os direitos reservados para '}<strong>JeffsHenrique</strong></p>
        </footer>
    )
}