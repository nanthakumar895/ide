"use strict";

export const IS_PUTER = puter.env === "app";

export function usePuter() {
    return IS_PUTER || puter.auth.isSignedIn();
}

async function uiSignIn() {
    document.getElementById("procode-sign-in-btn").classList.add("procode-hidden");
    const signOutBtn = document.getElementById("procode-sign-out-btn");
    signOutBtn.classList.remove("procode-hidden");
    signOutBtn.querySelector("#procode-puter-username").innerText = (await puter.auth.getUser()).username;

    const modelSelect = document.getElementById("procode-chat-model-select");
    modelSelect.closest(".ui.selection.dropdown").classList.remove("disabled");

    const userInput = document.getElementById("procode-chat-user-input");
    userInput.disabled = false;
    userInput.placeholder = `Message ${modelSelect.value}`;

    document.getElementById("procode-chat-send-button").disabled = false;
    document.getElementById("procode-inline-suggestions").disabled = false;
}

function uiSignOut() {
    document.getElementById("procode-sign-in-btn").classList.remove("procode-hidden");
    const signOutBtn = document.getElementById("procode-sign-out-btn");
    signOutBtn.classList.add("procode-hidden");
    signOutBtn.querySelector("#procode-puter-username").innerText = "Sign out";

    const modelSelect = document.getElementById("procode-chat-model-select");
    modelSelect.closest(".ui.selection.dropdown").classList.add("disabled");

    const userInput = document.getElementById("procode-chat-user-input");
    userInput.disabled = true;
    userInput.placeholder = `Sign in to chat with ${modelSelect.value}`;

    document.getElementById("procode-chat-send-button").disabled = true;
    document.getElementById("procode-inline-suggestions").disabled = true;
}

function updateSignInUI() {
    if (puter.auth.isSignedIn()) {
        uiSignIn();
    } else {
        uiSignOut();
    }
}

async function signIn() {
    await puter.auth.signIn();
    updateSignInUI();
}

function signOut() {
    puter.auth.signOut();
    updateSignInUI();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("procode-sign-in-btn").addEventListener("click", signIn);
    document.getElementById("procode-sign-out-btn").addEventListener("click", signOut);
    updateSignInUI();
});
