import React, { useLayoutEffect } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const submitRegisterForm = async (e) => {
    e.preventDefault();
    try {
        const usernameInput = document.querySelector("#usernameRegisterForm");
        const passwordInput = document.querySelector("#passwordRegisterForm");
        const repeatPasswordInput = document.querySelector(
            "#repeatPasswordRegisterForm"
        );

        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;
        const repeatPasswordValue = repeatPasswordInput.value;

        if (!usernameValue) return console.log("no username");
        if (!passwordValue) return console.log("no password");
        if (!repeatPasswordValue) return console.log("enter password again");

        if (passwordValue !== repeatPasswordValue)
            return console.log("password not matching");

        const user = {
            username: usernameValue,
            password: passwordValue,
            role: "customer",
        };

        const response = await axios.post(
            "http://localhost:8080/auth/register",
            user
        );

        usernameInput.value = "";
        passwordInput.value = "";
        repeatPasswordInput.value = "";
        sessionStorage.setItem("accessToken", response.data.accessToken);
        window.location.pathname = "/menu";
    } catch (error) {
        console.log(error);
    }
};

function RegisterPage() {
    return (
        <main
            className="p-4 bg-fixed text-snow bg-mint min-h-svh font-fira"
            style={{
                backgroundImage: `url('../src/assets/leafbg.svg')`,
            }}
        >
            <header className="flex flex-row justify-between mb-8">
                <img src="../src/assets/logo.svg" alt="YumYum logo" />
            </header>
            <section className="bg-gray-dark rounded p-4 my-auto">
                <h1 className="text-3xl py-8 font-bold "> Register User </h1>
                <form className="flex flex-col gap-4 mb-4">
                    <input
                        className="py-6 px-2 text-coal rounded text-lg"
                        type="text"
                        placeholder="Username"
                        id="usernameRegisterForm"
                    />
                    <input
                        className="py-6 px-2 text-coal rounded text-lg"
                        type="password"
                        placeholder="Password"
                        id="passwordRegisterForm"
                    />
                    <input
                        className="py-6 px-2 text-coal rounded text-lg"
                        type="password"
                        placeholder="Repeat Password"
                        id="repeatPasswordRegisterForm"
                    />
                </form>
                <section className="flex flex-col gap-4">
                    <Button
                        text={"Register"}
                        fill={true}
                        color={"mint-dark"}
                        handleClick={submitRegisterForm}
                    />
                    <Link to={"/login"}>
                        <Button text={"Login Page"} />
                    </Link>
                </section>
            </section>
        </main>
    );
}

export default RegisterPage;
