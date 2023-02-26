import { Box, Button, FormControl, Grid, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../App.css"

const imageAvatar = [
    {
        img: "https://symbols.vn/wp-content/uploads/2021/11/Tong-hop-nhung-buc-Avatar-Free-Fire-chat.jpg"
    },
    {
        img: "https://demoda.vn/wp-content/uploads/2022/12/anh-avatar-ff-miguel-deo-vong-co.jpg"
    },
    {
        img: "https://symbols.vn/wp-content/uploads/2021/12/Mau-logo-Free-Fire-dep.jpg"
    },
    {
        img: "https://thpthoaminh.edu.vn/wp-content/uploads/2022/12/1671216891_42_222-Hinh-Anh-Avatar-FF-Dep-Chat-Ngat-AI-CUNG.jpg"
    },
    {
        img: "https://thao68.com/wp-content/uploads/2022/03/logo-gaming-free-fire-4.jpg"
    },
    {
        img: "https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670579080_457_222-Hinh-Anh-Avatar-FF-Dep-Chat-Ngat-AI-CUNG.jpg"
    }
]

const PageEdit = ({ handleClick }) => {
    const [name, setName] = useState("phong phan")
    const [age, setAge] = useState("23")
    const [about, setAbout] = useState("xin chao toi la phong ")
    const [image, setImage] = useState("https://demoda.vn/wp-content/uploads/2022/09/avatar-facebook-doc-ngau.jpg")
    const [color, setColor] = useState("#19d395")

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClick()
    }
    return (
        <Box className="page-edit">
            <Button className='save-button' type="submit" onClick={handleClick} >SAVE</Button>
            <Box className="form-edit">
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: '100%', display: 'flex',
                        flexDirection: 'column', gap: '32px',
                    }}
                >
                    <TextField
                        label="Display Name"
                        variant="standard"
                        color="warning"
                        focused
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Age"
                        variant="standard"
                        color="warning"
                        focused
                        onChange={(e) => setAge(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="About"
                        color="secondary"
                        focused
                        onChange={(e) => setAbout(e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                    />
                </Box>
                <Box className="profile-pictrue" my={3} width="100%">
                    <Typography variant='h5' color="#fff">Profile pictrue</Typography>
                    <Grid container spacing={2} className="list-avatar">
                        {
                            imageAvatar.map((item, index) => {
                                return (
                                    <Grid item xs={6} key={index} className="avatar-item">
                                        <img
                                            src={item.img}
                                            alt="avatar"
                                            className="image-item"
                                            onClick={(e) => setImage(e.target.src)}
                                        />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
                <FormControl sx={{ paddingY: "30px" }}>
                    <OutlinedInput
                        placeholder="Please enter text"
                        type="color"
                        onChange={(e) => setColor(e.target.value)}
                    />
                </FormControl>
            </Box>
        </Box>
    )
}

export default PageEdit
