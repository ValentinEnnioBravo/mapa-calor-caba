import React, { useState } from 'react';
import {
  Container,
  Paper,
  Slider,
  Typography,
  Box,
  Card,
  CardMedia,
  Fade,
  Grow
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
    <div className="app-wrapper">
      <Container maxWidth="lg" className="main-container">
        <Fade in={true} timeout={1000}>
          <Box className="header-section">
            <Typography 
              variant="h3" 
              component="h1" 
              className="main-title"
              gutterBottom
            >
              Índice de Pulso Urbano
            </Typography>
            <p className='description'>
              El Índice Urbano (IPU) analiza la relación entre inversión inmobiliaria y 
              volatilidad de precios en las comunas de la Ciudad de Buenos Aires. Permite 
              identificar asimetrías territoriales y el desplazamiento del capital, 
              aportando una visión integral sobre la dinámica y distribución de la 
              inversión en el mercado urbano porteño.
            </p>
          </Box>
        </Fade>

        <Grow in={true} timeout={1500}>
          <Paper elevation={0} className="content-card">
            <Box className="image-section">
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
                <Box className="year-overlay">
                  <Typography variant="h4" className="year-display">
                    {selectedYear}
                  </Typography>
                </Box>
              </Card>
            </Box>

            <Box className="controls-section">
              <Typography variant="h6" className="controls-title">
                Selecciona el año
              </Typography>
              <Box className="slider-wrapper">
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
            </Box>
          </Paper>
        </Grow>
      </Container>
    </div>
  );
}

export default App;