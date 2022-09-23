import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RoomeCard from '../components/RoomCard.tsx';

const AllRooms = () => {
    const navigate = useNavigate()
    const [rooms, setRooms] = React.useState([])
    const [search, setSearch] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const config = {
            headers: {
                authorization: localStorage.getItem('token'),
            },
        };
        axios
            .get('http://localhost:5000/api/rooms', config)
            .then((res) => {
                console.log(res.data);
                setRooms(res.data);
                console.log(rooms)
                console.log(res.data);

                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [isLoading]);
    return (
        <div>
            <div style={{ margin: "50px 100px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ width: 200 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        name="search"
                        label="Search By City*"
                        type="text"
                        id="search"
                        autoComplete="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Box>
                <Button variant="contained" onClick={() => navigate('/add/room')}>Add room</Button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
                {
                    isLoading === false ?
                        rooms.filter(room => room.location.toUpperCase().includes(search.toUpperCase().trim())).map((room, i) =>
                            <RoomeCard key={i} room={room} />
                            // <h1>hvjjhchch</h1>
                        ) :
                        <h1>Loading...</h1>
                }

            </div>
        </div>




    )
}

export default AllRooms