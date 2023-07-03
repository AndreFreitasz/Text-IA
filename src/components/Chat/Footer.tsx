import ChatMessageInput from "./ChatMessageInput";

type Props = {
    disabled: boolean
    onSendMessage: (message: string) => void;
}

const Footer = ({ disabled, onSendMessage }: Props) => {
    return (
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                    disabled={disabled}
                    onSend={onSendMessage}
                />
                <div className="flex flex-row justify-center pt-3 text-xs text-gray-300">
                    <p>Created by</p>
                    <a
                        className="ml-1 border-b hover:opacity-50"
                        href="https://www.linkedin.com/in/andré-freitas-462940200/"
                        target="_blank"
                    >
                        André Freitas
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;