import { Icon } from "@iconify/react"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center py-2 mt-auto font-text">
            <p className="text-lg">Developed by <span className="font-bold">dEagle</span></p>
            <div className="flex justify-center gap-2 text-6xl">
                <a href="https://github.com/dEagleProg" target="_blank"><Icon icon="mdi:github" /></a>
            </div>
        </footer>
    )
}
export default Footer