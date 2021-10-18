// import { get } from "react-hook-form";


async function request() {
    try {
        // const response = await fetch(`https://run.mocky.io/v3/d0e9eeb8-9371-471c-80f3-cf517b2232b4`)
        const response = await fetch('https://run.mocky.io/v3/286e9498-a855-4ddb-b8bb-3c1b80d8b3ac')

        const data = await response.json();
        return data
    } catch (error) {
        console.error(error.message)
    }
}

export async function getData() {
    try {
        const data = await request();
        return data
    } catch (error) {
        console.log(error);
    }
}
