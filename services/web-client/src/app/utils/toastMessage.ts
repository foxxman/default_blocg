import { toast } from "react-toastify";

interface IToastProps {
    text: string | undefined | null;
}

export const toastError = (props: IToastProps) => {
    const {text} = props;
    toast.error(text || 'Oops...something wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};