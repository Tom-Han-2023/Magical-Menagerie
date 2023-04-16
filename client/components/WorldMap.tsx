import { useState } from 'react'
import WorldMapper from './Explore/WorldMapper'
import { CustomArea } from 'react-img-mapper/dist/types'
import { useNavigate } from 'react-router-dom'

type LocationKey = {
  [key: string]: string
}

const locationKey: LocationKey = {
  'Sandy Cove': 'sandy-cove',
  'Everdew Woods': 'everdew-forest',
  'Umbral Marshes': 'umbral-marshes',
  Bellston: 'bellston',
  'Echoing Caves': 'echoing-caves',
  'Port Wunder': 'port-wunder',
  'The Fair Mistral': 'the-fair-mistral',
  'Freefolk Foothills': 'freefolk-foothills',
  'Lavender Oasis': 'lavender-oasis',
  'Isle of Crimson': 'isle-of-crimson',
  'Boreal Peaks': 'boreal-peaks',
}

function WorldMap() {
  const [hoveredLocation, setHoveredLocation] = useState('Select an area!')

  function onLocationHover(area: CustomArea) {
    if (area.id) {
      setHoveredLocation(area.id)
    }
  }

  function onLocationStopHover() {
    setHoveredLocation('Select an area!')
  }

  const navigate = useNavigate()
  const routeChange = (area: CustomArea) => {
    if (area.id) {
      const path = locationKey[area.id]
      navigate(`/${path}`)
    }
  }

  return (
    <div className="world-display">
      <div className="location-desc">
        <h1>{hoveredLocation}</h1>
      </div>
      <div className="world-map">
        <WorldMapper
          onLocHover={onLocationHover}
          onLocLeave={onLocationStopHover}
          onLocClick={routeChange}
        />
      </div>
    </div>
  )
}

export default WorldMap

/* <!-- Image Map Generated by http://www.image-map.net/ -->
<img src="map.jpg" usemap="#image-map">

<map name="image-map">
    <area target="" alt="Sandy Cove" title="Sandy Cove" href="/sandy-cove" coords="752,619,94" shape="circle">
    <area target="" alt="Everdew Woods" title="Everdew Woods" href="/everdew-woods" coords="711,880,461,1036" shape="rect">
    <area target="" alt="Umbral Marshes" title="Umbral Marshes" href="/umbral-marshes" coords="907,915,120" shape="circle">
    <area target="" alt="Bellston" title="Bellston" href="/bellston" coords="441,652,83" shape="circle">
    <area target="" alt="Echoing Caves" title="Echoing Caves" href="/echoing-caves" coords="498,783,48" shape="circle">
    <area target="" alt="Port Wunder" title="Port Wunder" href="/port-wunder" coords="929,716,69" shape="circle">
    <area target="" alt="The Fair Mistral" title="The Fair Mistral" href="/the-fair-mistral" coords="971,563,75" shape="circle">
    <area target="" alt="Freefolk Foothills" title="Freefolk Foothills" href="/freefolk-foothills" coords="688,1178,119" shape="circle">
    <area target="" alt="Lavender Oasis" title="Lavender Oasis" href="/lavender-oasis" coords="1153,1190,87" shape="circle">
    <area target="" alt="Isle of Crimson" title="Isle of Crimson" href="/isle-of-crimson" coords="1405,584,194" shape="circle">
    <area target="" alt="Boreal Peaks" title="Boreal Peaks" href="/boreal-peaks" coords="484,306,893,461" shape="rect">
</map> */
