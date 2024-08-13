import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const submitLoginForm = async (e, setErrorMessage) => {
    e.preventDefault();
    try {
        const usernameInput = document.querySelector("#usernameLoginForm");
        const passwordInput = document.querySelector("#passwordLoginForm");

        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        if (!usernameValue && !passwordValue)
            return setErrorMessage("no username and password");
        if (!usernameValue) return setErrorMessage("no username");
        if (!passwordValue) return setErrorMessage("no password");

        const user = {
            username: usernameValue,
            password: passwordValue,
        };

        const response = await axios.post(
            "http://localhost:8080/auth/login",
            user
        );

        usernameInput.value = "";
        passwordInput.value = "";
        sessionStorage.setItem("accessToken", response.data.accessToken);

        console.log(response.data.role);
        if (response.data.role === "customer")
            window.location.pathname = "/menu";
        else window.location.pathname = "/orders";
    } catch (error) {
        setErrorMessage(error.response.data.message);
    }
};

function LoginPage() {
    const [errorMessage, setErrorMessage] = useState("");
    return (
        <main
            className="p-4 bg-fixed text-snow bg-mint min-h-svh font-fira"
            style={{
                backgroundImage: `url('../src/assets/leafbg.svg')`,
            }}
        >
            <header className="flex flex-row justify-between mb-8">
                <img src="../src/assets/logo.svg" alt="YumYum Logo" />
            </header>
            <section className="bg-gray-dark rounded p-4 min-h-[572px] flex flex-col justify-between">
                <h1 className="text-3xl pt-8 pb-4 font-bold "> Login </h1>
                <h2 className="text-lg text-alert pb-4 min-h-11">
                    {errorMessage}
                </h2>
                <form className="flex flex-col gap-4 mb-auto">
                    <input
                        className="py-6 px-2 text-coal rounded text-lg"
                        type="text"
                        placeholder="Username"
                        id="usernameLoginForm"
                    />
                    <input
                        className="py-6 px-2 text-coal rounded text-lg"
                        type="password"
                        placeholder="Password"
                        id="passwordLoginForm"
                    />
                </form>
                <section className="flex flex-col gap-4">
                    <Button
                        text={"Login"}
                        fill={true}
                        color={"mint-dark"}
                        handleClick={(e) => submitLoginForm(e, setErrorMessage)}
                    />
                    <Link to={"/Register"}>
                        <Button text={"Register Page"} />
                    </Link>
                </section>
            </section>
        </main>
    );
}

export default LoginPage;
