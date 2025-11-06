import React, { useState } from 'react';
import {
  Container,
  Paper,
  Slider,
  Typography,
  Box,
  Card,
  CardMedia
} from '@mui/material';
import './App.css';

function App() {
  const [selectedYear, setSelectedYear] = useState(2019);

  const handleYearChange = (event, newValue) => {
    setSelectedYear(newValue);
  };

  const marks = [
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' }
  ];

  return (
    <div className="App">
      <Container maxWidth="lg" className="main-container">
        {/* Título */}
        <Typography 
          variant="h3" 
          component="h1" 
          className="main-title"
          gutterBottom
        >
          🗺️ Mapa de calor de inversiones en las comunas
        </Typography>

        {/* Contenedor de la imagen */}
        <Paper elevation={6} className="image-container">
          <Card className="image-card">
            <CardMedia
              component="img"
              image={`/caba${selectedYear}.png`}
              alt={`Mapa de calor ${selectedYear}`}
              className="heat-map-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </Card>
        </Paper>

        {/* Año seleccionado */}
        <Typography 
          variant="h5" 
          className="year-display"
          color="primary"
        >
          Año: {selectedYear}
        </Typography>

        {/* Slider para seleccionar año */}
        <Box className="slider-container">
          <Typography variant="h6" gutterBottom>
            Selecciona el año:
          </Typography>
          <Slider
            value={selectedYear}
            onChange={handleYearChange}
            min={2019}
            max={2024}
            step={1}
            marks={marks}
            valueLabelDisplay="auto"
            className="year-slider"
          />
        </Box>
      </Container>
    </div>
  );
}

export default App;
