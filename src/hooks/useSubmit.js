import { useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// this will mock an api call
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */

const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response] = useState(null);


    const submit = async (data) => {

        const dataObj = JSON.parse(data);

        const toastOptions = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        };
        const notifySuccess = () =>toast.success(`Thanks for your submission ${dataObj.firstName},
         we will  get back to you shortly!`, toastOptions);

        const notifyError = () => toast.error("Something went wrong, please try again later!", toastOptions)

        setLoading(true);
        try {
            await wait(500);
            const random = Math.random();
            if (random < 0.5) {
                throw new Error("Something went wrong");
            }
            console.log(data)
           notifySuccess();
        } catch (error) {
           notifyError();
        } finally {
            setLoading(false); // when done, this can go back to false since its not loading anymore
        }
    };

    return { isLoading, response, submit };
};

export default useSubmit;
