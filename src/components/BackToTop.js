

export const BackToTop = () => {
    return(
        <>
            <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="!fixed bottom-5 right-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
            id="btn-back-to-top">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="h-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                    fill="currentColor"
                    d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                </svg>
            </button>
            <div
            className="container mx-auto mt-4 text-center text-neutral-800 dark:text-white"
            >
                <p className="mb-4">
                    Start scrolling the page and a strong
                    <strong>"Back to top" button </strong> will appear in the
                    <strong>bottom right corner</strong> of the screen.
                </p>
                <p>Click this button and you will be taken to the top of the page.</p>
            </div>
        </>
    )
}