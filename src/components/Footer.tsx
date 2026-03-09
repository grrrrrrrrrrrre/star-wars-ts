import Button from "../ui_elements/button.tsx";

const Footer = () => {
    return (
        <footer className="clear-both m-0 p-2 bg-gray h-20 grid grid-cols-5 items-center">
            <Button text={'Send me email'} style={'bg-danger p-3 rounded-md px-3 border hover:bg-red-500 hover:text-white text-center col-start-3'}/>
        </footer>
    )
}

export default Footer;