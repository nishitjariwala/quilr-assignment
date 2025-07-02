// QueryBuilder.tsx
import React, { useState } from "react";
import { Group } from "./../schema/schemas";
import GroupComponent from "./GroupComponent";
import { Button } from "@mui/material";

const QueryBuilder = () => {
    const [query, setQuery] = useState<Group>({ logic: "AND", conditions: [] });
    const [result, setResult] = useState<string>("")

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold ">Query Builder</h2>
            <GroupComponent group={query} onChange={setQuery} />

            <Button onClick={() => { setResult(JSON.stringify(query)) }} color="primary" variant="contained" >Generate Output Query</Button>
           
            <div>
                <h3 className="text-lg font-semibold mt-6 mb-2">Output Query</h3>
                <pre className="text-sm p-4 rounded-lg border border-black max-h-[300px] overflow-auto">
                    {result}
                </pre>
            </div>
        </div>
    );
};

export default QueryBuilder;