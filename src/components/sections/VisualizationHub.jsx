import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Globe2, TrendingUp, Orbit } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const VisualizationHub = () => {
  const [selectedView, setSelectedView] = useState('lightcurve');
  const [selectedPlanet, setSelectedPlanet] = useState('kepler-452b');

  // Sample light curve data
  const lightCurveData = Array.from({ length: 100 }, (_, i) => ({
    time: i,
    flux: 1 + (Math.random() - 0.5) * 0.02 - (i > 45 && i < 55 ? 0.05 : 0)
  }));

  // Sample comparative data
  const comparativeData = [
    { name: 'Mercury', radius: 0.38, mass: 0.055, distance: 0.39 },
    { name: 'Venus', radius: 0.95, mass: 0.815, distance: 0.72 },
    { name: 'Earth', radius: 1, mass: 1, distance: 1 },
    { name: 'Mars', radius: 0.53, mass: 0.107, distance: 1.52 },
    { name: 'Jupiter', radius: 11.2, mass: 318, distance: 5.2 },
    { name: 'Kepler-452b', radius: 1.6, mass: 5, distance: 1.05, color: '#06ffa5' }
  ];

  const exoplanetProfiles = [
    {
      id: 'kepler-452b',
      name: 'Kepler-452b',
      radius: '1.6 Earth',
      mass: '5 Earth masses',
      distance: '1,400 light-years',
      period: '384.8 days',
      starType: 'G2V (Sun-like)',
      habitable: true,
      discovered: '2015'
    },
    {
      id: 'proxima-b',
      name: 'Proxima Centauri b',
      radius: '1.07 Earth',
      mass: '1.27 Earth masses',
      distance: '4.24 light-years',
      period: '11.2 days',
      starType: 'M5.5V (Red Dwarf)',
      habitable: true,
      discovered: '2016'
    },
    {
      id: 'trappist-1e',
      name: 'TRAPPIST-1e',
      radius: '0.92 Earth',
      mass: '0.62 Earth masses',
      distance: '40 light-years',
      period: '6.1 days',
      starType: 'M8V (Ultra-cool Dwarf)',
      habitable: true,
      discovered: '2017'
    }
  ];

  const selectedPlanetData = exoplanetProfiles.find(p => p.id === selectedPlanet);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Visualization Hub
          </h1>
          <p className="text-gray-400 text-lg">
            Interactive charts and 3D visualizations of exoplanet data
          </p>
        </motion.div>

        {/* View Selector */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'lightcurve', label: 'Light Curves', icon: Activity },
            { id: 'orbital', label: '3D Orbits', icon: Orbit },
            { id: 'comparative', label: 'Comparisons', icon: TrendingUp },
            { id: 'profiles', label: 'Planet Profiles', icon: Globe2 }
          ].map((view) => {
            const Icon = view.icon;
            return (
              <button
                key={view.id}
                onClick={() => setSelectedView(view.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedView === view.id
                    ? 'bg-gradient-to-r from-[var(--nebula-purple)] to-[var(--nebula-blue)] text-white'
                    : 'glass hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                {view.label}
              </button>
            );
          })}
        </div>

        {/* Light Curve View */}
        {selectedView === 'lightcurve' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Light Curve Analysis</h2>
            <p className="text-gray-400 mb-6">
              Brightness variations over time showing transit event (dip indicates exoplanet crossing)
            </p>
            
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lightCurveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    dataKey="time"
                    stroke="#888"
                    label={{ value: 'Time (hours)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis
                    stroke="#888"
                    domain={[0.94, 1.02]}
                    label={{ value: 'Normalized Flux', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 14, 39, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="flux"
                    stroke="#4cc9f0"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Transit Depth</div>
                <div className="text-2xl font-bold text-[var(--planet-teal)]">5.2%</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Transit Duration</div>
                <div className="text-2xl font-bold text-[var(--nebula-blue)]">9.8 hours</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Signal-to-Noise</div>
                <div className="text-2xl font-bold text-[var(--star-gold)]">24.6</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3D Orbital View */}
        {selectedView === 'orbital' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">3D Orbital Visualization</h2>
            <p className="text-gray-400 mb-6">
              Interactive 3D model of exoplanet orbital system
            </p>
            
            <div className="relative h-96 glass rounded-xl overflow-hidden flex items-center justify-center">
              {/* Simulated 3D visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Star */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-32 h-32 rounded-full bg-gradient-radial from-yellow-400 to-orange-600 shadow-2xl shadow-yellow-500/50"
                />
                
                {/* Orbit paths */}
                {[1, 1.5, 2].map((scale, i) => (
                  <div
                    key={i}
                    className="absolute border border-white/20 rounded-full"
                    style={{
                      width: `${scale * 200}px`,
                      height: `${scale * 200}px`
                    }}
                  />
                ))}
                
                {/* Planet */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 shadow-lg shadow-blue-500/50" />
                </motion.div>
              </div>
              
              <div className="absolute bottom-4 right-4 glass p-3 rounded-lg text-sm">
                <div className="text-gray-400 mb-1">Orbital Period</div>
                <div className="font-bold text-[var(--nebula-blue)]">384.8 days</div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-4 gap-4">
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400 mb-1">Semi-major Axis</div>
                <div className="text-lg font-bold">1.05 AU</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400 mb-1">Eccentricity</div>
                <div className="text-lg font-bold">0.08</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400 mb-1">Inclination</div>
                <div className="text-lg font-bold">87.5°</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400 mb-1">Orbital Velocity</div>
                <div className="text-lg font-bold">29.8 km/s</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Comparative View */}
        {selectedView === 'comparative' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Exoplanet Comparison</h2>
            <p className="text-gray-400 mb-6">
              Compare detected exoplanets with solar system planets
            </p>
            
            <div className="h-96 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    dataKey="radius"
                    stroke="#888"
                    label={{ value: 'Radius (Earth = 1)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis
                    dataKey="mass"
                    stroke="#888"
                    label={{ value: 'Mass (Earth = 1)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 14, 39, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                    cursor={{ strokeDasharray: '3 3' }}
                  />
                  <Scatter
                    data={comparativeData}
                    fill="#4cc9f0"
                  >
                    {comparativeData.map((entry, index) => (
                      <motion.circle
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        fill={entry.color || '#4cc9f0'}
                        r={8}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-6 gap-3">
              {comparativeData.map((planet, index) => (
                <div
                  key={index}
                  className={`glass p-3 rounded-lg text-center ${
                    planet.color ? 'border-2 border-[var(--planet-teal)]' : ''
                  }`}
                >
                  <div className="font-semibold mb-1 text-sm">{planet.name}</div>
                  <div className="text-xs text-gray-400">{planet.radius.toFixed(1)}R⊕</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Planet Profiles */}
        {selectedView === 'profiles' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {exoplanetProfiles.map((planet) => (
                <button
                  key={planet.id}
                  onClick={() => setSelectedPlanet(planet.id)}
                  className={`glass p-4 rounded-xl text-left transition-all ${
                    selectedPlanet === planet.id
                      ? 'border-2 border-[var(--nebula-blue)] bg-white/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="text-lg font-bold mb-1">{planet.name}</div>
                  <div className="text-sm text-gray-400">{planet.distance}</div>
                </button>
              ))}
            </div>

            {selectedPlanetData && (
              <motion.div
                key={selectedPlanet}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 gradient-text">
                      {selectedPlanetData.name}
                    </h2>
                    {selectedPlanetData.habitable && (
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        Potentially Habitable
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Discovered</div>
                    <div className="text-xl font-bold">{selectedPlanetData.discovered}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="glass p-6 rounded-xl">
                    <div className="text-sm text-gray-400 mb-2">Radius</div>
                    <div className="text-2xl font-bold text-[var(--planet-teal)]">
                      {selectedPlanetData.radius}
                    </div>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <div className="text-sm text-gray-400 mb-2">Mass</div>
                    <div className="text-2xl font-bold text-[var(--nebula-blue)]">
                      {selectedPlanetData.mass}
                    </div>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <div className="text-sm text-gray-400 mb-2">Distance</div>
                    <div className="text-2xl font-bold text-[var(--star-gold)]">
                      {selectedPlanetData.distance}
                    </div>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <div className="text-sm text-gray-400 mb-2">Orbital Period</div>
                    <div className="text-xl font-bold">{selectedPlanetData.period}</div>
                  </div>
                  <div className="glass p-6 rounded-xl md:col-span-2">
                    <div className="text-sm text-gray-400 mb-2">Host Star Type</div>
                    <div className="text-xl font-bold">{selectedPlanetData.starType}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VisualizationHub;
