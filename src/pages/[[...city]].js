import { Main } from "next/document";
import WeatherCard from "../app/components/WeatherCard";
import "../app/globals.css";

export async function getStaticProps({params}) {
    const city = (params && params.city) || "Boston";
    const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`    
        );
    const weatherData = await res.json();

    return {
        props: {
            weatherData,
        },
    };
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export default function Home({weatherData}) {
    console.log(weatherData);

    return (
        <main>
            <h1> Weather App</h1>
            <WeatherCard cityName = "weatherData.name" />
        
            
        </main>
    );
}
