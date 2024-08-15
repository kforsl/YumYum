import React from "react";
import Button from "./Button";

function NotFound() {
    return (
        <main
            className={`bg-coal min-h-svh text-white font-fira flex flex-col justify-center`}
        >
            <header className="mx-auto mb-8">
                <img
                    src="../src/assets/logo.svg"
                    alt="YumYum logo"
                    className="size-40"
                />
            </header>
            <section>
                <h1 className="text-6xl text-center font-medium pb-4 ">
                    OOPS!
                </h1>
                <h2 className="text-8xl text-center font-medium pb-2 text-alert">
                    404
                </h2>
                <h3 className="text-2xl text-center font-medium pb-4 ">
                    Page Not Found
                </h3>
            </section>
        </main>
    );
}

export default NotFound;
