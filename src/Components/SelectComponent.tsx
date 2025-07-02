import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectComponent = ({
    label,
    value,
    options,
    onChange
}: {
    label: string;
    value: string;
    options: readonly string[];
    onChange: (value: string) => void;
}) => (
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth size="small">
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={(e) => onChange(e.target.value)}>
                {options.map((option: string) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
);

export default SelectComponent;
