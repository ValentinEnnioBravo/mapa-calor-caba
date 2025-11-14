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
            <p className='main-description'>
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

        <Fade in={true} timeout={1000}>
          <Box className="header-section">
            <Typography 
              variant="h3" 
              component="h3" 
              className="description-title"
              gutterBottom
            >
              Contexto económico y social
            </Typography>
            <p className='description-content'>
              La lectura del IPU no puede realizarse de forma aislada, ya que el indicador sintetiza dinámicas urbanas y de inversión que están fuertemente condicionadas por el contexto macroeconómico y político nacional. Cada año del período 2019–2024 estuvo marcado por acontecimientos que alteraron el comportamiento de la economía, la inflación, el crédito y las expectativas de los agentes, por lo que la interpretación de las correlaciones debe realizarse considerando esas particularidades.
            </p>
            <br></br>
            <ul className='description'>
              <li><strong>2019:</strong> Crisis cambiaria, inflación elevada, caída del crédito hipotecario y baja confianza en la economía.</li>
              <li><strong>2020:</strong> Pandemia de COVID-19, restricciones, parálisis de obras y caída de la movilidad urbana.</li>
              <li><strong>2021:</strong> Reapertura y reactivación parcial de la economía; rebote técnico tras el confinamiento.</li>
              <li><strong>2022:</strong> Aceleración inflacionaria, tensiones cambiarias, aumento de costos de construcción.</li>
              <li><strong>2023:</strong> Derogación de la Ley de Alquileres y transición política; expectativa de cambios regulatorios.</li>
              <li><strong>2024:</strong> Desaceleración de la inflación y estabilización macro; recomposición de expectativas.</li>
            </ul>
          </Box>
        </Fade>
        <Fade in={true} timeout={1000}>
          <Box className="header-section">
            <Typography 
              variant="h3" 
              component="h3" 
              className="description-title"
              gutterBottom
            >
              Barrios por Comuna
            </Typography>
            <div className='image-comuna-container'>
              <Card className="image-card">
                <CardMedia
                  component="img"
                  image={`/comunas.png`}
                  alt={`Comunas de CABA`}
                  className="heat-map-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </Card>
            </div>
            <p className='description-content'>
              A continuación, se encuentra la lista de barrios de CABA agrupados por comunas.
            </p>
            <br></br>
            <ul className='description'>
              <li><strong>Comuna 1:</strong> Retiro, San Nicolás, Monserrat, San Telmo, Constitución y Puerto Madero.</li>
              <li><strong>Comuna 2:</strong> Recoleta.</li>
              <li><strong>Comuna 3:</strong> Balvanera y San Cristóbal.</li>
              <li><strong>Comuna 4:</strong> Barracas, La Boca, Pompeya y Parque Patricios.</li>
              <li><strong>Comuna 5:</strong> Almagro y Boedo.</li>
              <li><strong>Comuna 6:</strong> Caballito.</li>
              <li><strong>Comuna 7:</strong> Flores y Parque Chacabuco.</li>
              <li><strong>Comuna 8:</strong> Villa Lugano, Villa Riachuelo y Villa Soldati.</li>
              <li><strong>Comuna 9:</strong> Liniers, Mataderos, Parque Avellaneda.</li>
              <li><strong>Comuna 10:</strong> Floresta, Monte Castro, Vélez Sarsfield, Versalles, Villa Luro y Villa Real.</li>
              <li><strong>Comuna 11:</strong> Villa del Parque, Villa Devoto, Villa General Mitre y Villa Santa Rita.</li>
              <li><strong>Comuna 12:</strong> Coghlan, Saavedra, Villa Pueyrredón y Villa Urquiza.</li>
              <li><strong>Comuna 13:</strong> Belgrano, Colegiales y Núñez.</li>
              <li><strong>Comuna 14:</strong> Palermo.</li>
              <li><strong>Comuna 15:</strong> Agronomía, Chacarita, Paternal, Villa Crespo y Villa Ortúzar.</li>
            </ul>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}

export default App;