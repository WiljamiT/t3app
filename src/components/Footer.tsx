import React, { useEffect, useState } from "react";
import axios from "axios";

export const Footer = () => {
    const [commits, setCommits] = useState<CommitData[]>([]);

    interface CommitData {
  sha: string;
  commit: {
    message: string;
    
    author: {
      name: string;
      email: string;
      date: string;
      html_url: string;
    },
    committer: {
        name: string;
        date: Date;
    };
  };
  html_url: string;
}



    useEffect(() => {
        axios
          .get<CommitData[]>("https://api.github.com/repos/WiljamiT/t3app/commits")
          .then((response) => {
            setCommits(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return (
        <footer className="relative bg-primary pt-8 pb-6">
        <div className="container mx-auto px-4">
        <div className="text-sm text-primary-content font-semibold">
            
            <ul>
                {commits.slice(0, 1).map((commit) => (
                <li key={commit.sha}>
                    <p>
                        Site updated and built with commit: <a className="commit" href={commit.html_url}>{commit.sha.slice(0, 7)}</a> at: <i className="date">{new Intl.DateTimeFormat("en-GB", {
                            timeZone: "Europe/Helsinki",
                            dateStyle: "medium",
                            timeStyle: "medium",
                        }).format(new Date(commit.commit.committer.date))}</i>
                        {" "} by: <a href={commit.commit.author.html_url} className="name">{commit.commit.committer.name}</a> 
                        
                        </p>
                </li>
                ))}
            </ul>
            </div>
            
            
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-primary-content font-semibold py-1">
                WT | 2023
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}