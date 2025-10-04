import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Play, Pause, RotateCcw, CheckCircle, Loader2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ModelTraining = () => {
  const [selectedModel, setSelectedModel] = useState('cnn');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [trainingData, setTrainingData] = useState([]);

  const models = [
    {
      id: 'cnn',
      name: 'Convolutional Neural Network',
      description: 'Best for image-like data and light curve patterns',
      accuracy: '96.5%',
      speed: 'Medium',
      icon: '🧠'
    },
    {
      id: 'nn',
      name: 'Deep Neural Network',
      description: 'Multi-layer perceptron for complex patterns',
      accuracy: '94.2%',
      speed: 'Fast',
      icon: '⚡'
    },
    {
      id: 'rf',
      name: 'Random Forest',
      description: 'Ensemble method with high interpretability',
      accuracy: '92.8%',
      speed: 'Very Fast',
      icon: '🌲'
    },
    {
      id: 'lstm',
      name: 'LSTM Network',
      description: 'Recurrent network for time-series data',
      accuracy: '95.1%',
      speed: 'Slow',
      icon: '🔄'
    }
  ];

  useEffect(() => {
    if (isTraining && currentEpoch < 100) {
      const timer = setTimeout(() => {
        const newEpoch = currentEpoch + 1;
        const newAccuracy = 50 + (newEpoch / 100) * 45 + Math.random() * 3;
        const newLoss = 1 - (newEpoch / 100) * 0.7 + Math.random() * 0.1;
        
        setCurrentEpoch(newEpoch);
        setTrainingProgress(newEpoch);
        setTrainingData(prev => [...prev, { 
          epoch: newEpoch, 
          accuracy: newAccuracy,
          loss: newLoss * 100
        }]);
      }, 100);
      
      return () => clearTimeout(timer);
    } else if (currentEpoch >= 100) {
      setIsTraining(false);
    }
  }, [isTraining, currentEpoch]);

  const startTraining = () => {
    setIsTraining(true);
    if (currentEpoch === 0) {
      setTrainingData([]);
    }
  };

  const pauseTraining = () => {
    setIsTraining(false);
  };

  const resetTraining = () => {
    setIsTraining(false);
    setTrainingProgress(0);
    setCurrentEpoch(0);
    setTrainingData([]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            AI Model Training
          </h1>
          <p className="text-gray-400 text-lg">
            Select and train machine learning models to detect exoplanets
          </p>
        </motion.div>

        {/* Model Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6 text-[var(--nebula-purple)]" />
            Select Algorithm
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {models.map((model) => (
              <motion.div
                key={model.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => !isTraining && setSelectedModel(model.id)}
                className={`glass p-6 rounded-xl cursor-pointer transition-all ${
                  selectedModel === model.id
                    ? 'border-2 border-[var(--nebula-purple)] bg-white/10'
                    : 'border border-white/10'
                } ${isTraining ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="text-3xl mb-3">{model.icon}</div>
                <h3 className="font-bold mb-2">{model.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{model.description}</p>
                
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Accuracy:</span>
                    <span className="text-green-400 font-semibold">{model.accuracy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Speed:</span>
                    <span className="text-blue-400 font-semibold">{model.speed}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Training Controls</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glass p-4 rounded-lg">
              <label className="block text-sm text-gray-400 mb-2">Epochs</label>
              <input
                type="number"
                defaultValue="100"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-[var(--nebula-blue)] focus:outline-none"
                disabled={isTraining}
              />
            </div>
            <div className="glass p-4 rounded-lg">
              <label className="block text-sm text-gray-400 mb-2">Batch Size</label>
              <input
                type="number"
                defaultValue="32"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-[var(--nebula-blue)] focus:outline-none"
                disabled={isTraining}
              />
            </div>
            <div className="glass p-4 rounded-lg">
              <label className="block text-sm text-gray-400 mb-2">Learning Rate</label>
              <input
                type="number"
                step="0.0001"
                defaultValue="0.001"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-[var(--nebula-blue)] focus:outline-none"
                disabled={isTraining}
              />
            </div>
          </div>

          <div className="flex gap-4">
            {!isTraining ? (
              <button
                onClick={startTraining}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--nebula-purple)] to-[var(--nebula-blue)] rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <Play className="w-5 h-5" />
                {currentEpoch > 0 ? 'Resume Training' : 'Start Training'}
              </button>
            ) : (
              <button
                onClick={pauseTraining}
                className="flex items-center gap-2 px-6 py-3 bg-yellow-600 rounded-lg font-semibold hover:bg-yellow-700 transition-all"
              >
                <Pause className="w-5 h-5" />
                Pause Training
              </button>
            )}
            
            <button
              onClick={resetTraining}
              disabled={isTraining}
              className="flex items-center gap-2 px-6 py-3 glass rounded-lg font-semibold hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>
        </motion.div>

        {/* Training Progress */}
        {trainingData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              {currentEpoch >= 100 ? (
                <CheckCircle className="w-6 h-6 text-green-400" />
              ) : (
                <Loader2 className="w-6 h-6 text-[var(--nebula-blue)] animate-spin" />
              )}
              Training Progress
            </h2>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Epoch {currentEpoch} / 100</span>
                <span>{trainingProgress}%</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${trainingProgress}%` }}
                  className="h-full bg-gradient-to-r from-[var(--nebula-purple)] to-[var(--nebula-blue)]"
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Current Accuracy</div>
                <div className="text-3xl font-bold text-green-400">
                  {trainingData[trainingData.length - 1]?.accuracy.toFixed(2)}%
                </div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Current Loss</div>
                <div className="text-3xl font-bold text-orange-400">
                  {trainingData[trainingData.length - 1]?.loss.toFixed(2)}%
                </div>
              </div>
            </div>

            {/* Training Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trainingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="epoch" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 14, 39, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="#06ffa5"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="loss"
                    stroke="#ff6b6b"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModelTraining;
