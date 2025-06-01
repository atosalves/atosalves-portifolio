interface ErrorMessageProps {
    message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
    return <span className="flex justify-center w-full font-bold text-red-500">{message}</span>;
}
