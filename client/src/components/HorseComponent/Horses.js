import React from "react";
import {useState, useEffect} from "react"
import io from "socket.io-client";
import Horse from "./Horse";

const Horses = () => {
    const ENDPOINT = "http://127.0.0.1:3002";
    const [horses, setHorses]= useState(null);
    useEffect(() => {
        const socket = io(ENDPOINT);

        socket.on("connect", () => {
            socket.emit("start");

            socket.on("ticker", (data) => {
                setHorses(data);
            });
        });

        socket.on("disconnect", () => {
            alert('Error')
        });
    }, []);
    return (
        <div>
            {horses && horses.map((horse, i)=> (<Horse
                key={`${horse.name}-${horse.distance}`}
                name={horse.name}
                index={i}
                distance={horse.distance}
            />))}
        </div>
    );
};

export default Horses;
