import { Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Roome from '../components/Roome.tsx'

const AllRooms = () => {
    return (
        <div>
            <div style={{ margin: "50px 100px 10px" }}>
                <Box sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label="Filter By"
                        >
                            <MenuItem value={"Look For Roommate"}>Look For Roommate</MenuItem>
                            <MenuItem value={"Look For Room"}>Look For Room</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
                <Roome />
                <Roome />
                <Roome />
                <Roome />

            </div>
        </div>




    )
}

export default AllRooms