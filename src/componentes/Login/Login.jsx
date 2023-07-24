import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Login() {

    const [data, setData] = useState({
        name:'',
        surname:'',
        email:'',
        document:'',
    });
    
    const handleChangeData=(e)=>{
        let prop = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [prop] : value
        })
        // console.log(data);
    }

    useEffect(() => {
        console.log(data);
      }, [data]);
    
    const handleSubmit = () => {
        console.log("nuevo usuario: "+ {data})
    }
    return (
        <Container maxWidth>
            <Box component='form'
                onSubmit={() => handleSubmit()}
                sx={{ display: "flex", flexDirection: "column", m: 'auto', pt: 5, width: '20rem', textAlign: 'center', gap: 2 }}
                noValidate
                autoComplete="off">
                <Typography variant="h4" margin='1rem'>Register</Typography>
                {/* <Divider/> */}
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChangeData}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Surname"
                    name='surname'
                    onChange={handleChangeData}
                    value={data.surname}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    name='email'
                    onChange={handleChangeData}
                    value={data.email}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Document"
                    name="document"
                    onChange={handleChangeData}
                    value={data.document}
                />

                <Button onClick={handleSubmit}>Register</Button>
            </Box>
        </Container>
    )
}