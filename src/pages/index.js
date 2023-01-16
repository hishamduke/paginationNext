import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useQueryClient, useQuery } from "react-query";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { queryClient } from "./_app";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

function UserBox({ name, age }) {
  return (
    <>
      <div className="userBox">
        <p>name : {name}</p>
        <p>{age} years old</p>
      </div>
    </>
  );
}
export default function Todos() {
  // Access the client

  // Queries
  const [index, setIndex] = useState(0);
  async function getDATA() {
    const data = console.log(data.profiles);
    return data.profiles;
  }

  const { isLoading, error, data } = useQuery([`allData${index}`], () =>
    fetch(`/api/${index}`).then((res) => res.json())
  );

  if (data)
    return (
      <>
        <div className="heading">Users</div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {data.map((user, ind) => (
            <>
              <UserBox {...user} />
            </>
          ))}
        </div>
        {data.length == 0 && <>No data</>}
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {index != 0 && (
            <button
              onClick={() => {
                setIndex((prev) => prev - 1);
              }}
            >
              prevous
            </button>
          )}

          {data.length != 0 && (
            <button
              onClick={() => {
                setIndex((prev) => prev + 1);
                queryClient.invalidateQueries(["allData"]);
              }}
            >
              next
            </button>
          )}
        </div>
      </>
    );
}
